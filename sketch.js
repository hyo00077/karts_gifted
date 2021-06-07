

// 캔버스 관련 변수
let container = document.getElementById("myCanvas");
let cont_width;
let cont_height;
cont_width = parseInt(window.getComputedStyle(document.getElementById("myCanvas")).width);
cont_height = parseInt(window.getComputedStyle(document.getElementById("myCanvas")).height);

if (cont_width>=1024) {
  function windowResized() {
    loop();
    cont_width = parseInt(window.getComputedStyle(document.getElementById("myCanvas")).width);
    cont_height = parseInt(window.getComputedStyle(document.getElementById("myCanvas")).height);
    height = cont_height;
    width = cont_width;
    resizeCanvas(width, height);
  }
  
  /////////////////
  
  // 마우스 커서 확산 관련 변수
  let num_radius = 8;
  let radius = [];
  let copy_radius = [];
  let step = degreeToRad(360 / num_radius);
  let arrow_end_Value = 40;
  let easing = 0.05;
  let x = 1;
  let y = 1;
  let end_x = 1;
  let end_y = 1;
  let speed = 100;
  
  for (let index = 0; index < num_radius; index++) {
    let element = radius[index];
    element = 200;
    radius.push(element);
    copy_radius.push(element);
  }
  //////////////////////////////////
  
  // 클릭된 디브 가지고 오기
  
  
  // 선색상
  
  let stroke_color = "rgb(255,255,255)";
  let back_color = "rgb(0,0,0)";
  
  // 이미지 관련 변수
  let img_src = [];
  let img_list = [];
  let img_idx = 0;
  let img_idx_list = [];
  let mouse_coord = [];
  for (let index = 0; index < 45; index++) {
    img_src.push("./source/background/" + index + ".jpg");
  }
  
  function preload() {
    for (let i = 0; i < img_src.length; i++) {
      img_list.push(loadImage(img_src[i]));
    }
  }
  
  function setup() {
    background(back_color);
    cont_width = parseInt(window.getComputedStyle(document.getElementById("myCanvas")).width);
    cont_height = parseInt(window.getComputedStyle(document.getElementById("myCanvas")).height);
    height = cont_height;
    width = cont_width;
    console.log(height, width);
    cnv = createCanvas(width, height);
    cnv.id("canvas"); //myCanvas로 바꾸기 여차하면
    cnv.parent(container);
    angleMode(RADIANS);
  }
  
  function draw() {
    let r = 100 * sin(frameCount * 0.001);
    let g = 100 * sin(frameCount * 0.005);
    let b = 100 * sin(frameCount * 0.01);
    colorMode(HSB, 100);
    background(r, 100, 80);
  
    if (cont_width > 1023) {
      if (mouseIsPressed) {
        for (let index = 0; index < radius.length; index++) {
          radius[index] += speed;
        }
  
      } else {
        for (let index = 0; index < radius.length; index++) {
          if (radius[index] > copy_radius[index]) {
            radius[index] -= speed;
          }
        }
      }
  
  
      for (let index = 0; index < img_idx_list.length; index++) {
        imageMode(CENTER);
        rectMode(CENTER);
        image(img_list[img_idx_list[index]], mouse_coord[index][0], mouse_coord[index][1], img_list[img_idx_list[index]].width / 4, img_list[img_idx_list[index]].height / 4);
        noFill();
        strokeWeight(3);
        stroke(stroke_color);
        rect(mouse_coord[index][0], mouse_coord[index][1], img_list[img_idx_list[index]].width / 4, img_list[img_idx_list[index]].height / 4);
      }
      arrow();
    }
  
  }
  
  
  
  function degreeToRad(degree) {
    return degree * Math.PI / 180;
  }
  
  function arrow() {
    let center_x = mouseX;
    let center_y = mouseY;
    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;
    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;
  
    let target_end_x = x;
    let end_dx = target_end_x - end_x;
    end_x += end_dx * easing;
    let target_end_y = y;
    let end_dy = target_end_y - end_y;
    end_y += end_dy * easing;
  
    for (let index = 0; index < radius.length; index++) {
      // push();
      // translate(targetX, targetY);
      strokeWeight(3);
      stroke(stroke_color);
      let r = radius[index];
      push();
      translate(targetX, targetY);
      let v1 = createVector(x - mouseX, y - mouseY);
      let v2 = createVector(Math.cos(step * index) * r + end_x - targetX, Math.sin(step * index) * r + end_y - targetY);
      line(v1.x, v1.y, v2.x, v2.y);
      rotate(v2.heading());
      translate(v2.mag(), 0);
      let arrow_end = createVector(0, 0);
      let arrow_end_end_1 = createVector(Math.cos(degreeToRad(140)) * arrow_end_Value, Math.sin(degreeToRad(140)) * arrow_end_Value);
      let arrow_end_end_2 = createVector(Math.cos(degreeToRad(220)) * arrow_end_Value, Math.sin(degreeToRad(220)) * arrow_end_Value);
      line(arrow_end.x, arrow_end.y, arrow_end_end_1.x, arrow_end_end_1.y);
      line(arrow_end.x, arrow_end.y, arrow_end_end_2.x, arrow_end_end_2.y);
      pop();
    }
  }
  
  function mouseClicked() {
    img_idx += 1;
    if (img_idx == img_list.length) {
      img_idx = 0;
    }
    mouse_coord.push([mouseX, mouseY])
    // if (img_idx==img_list.length) {
    //   img_idx=0;
    // }
    img_idx_list.push(img_idx);
    if (img_idx_list.length == 9) {
      img_idx_list.shift();
    }
  
    if (mouse_coord.length == 9) {
      mouse_coord.shift();
    }
  
  
  
  
    // if (mouse_coord.length == img_list.length){
    //   mouse_coord=[]
    // }
  
  }
}else{
  let stroke_color = "rgb(255,255,255)";
  let back_color = "rgb(0,0,0)";
  
  function setup() {
    background(back_color);
    cont_width = parseInt(window.getComputedStyle(document.getElementById("myCanvas")).width);
    cont_height = parseInt(window.getComputedStyle(document.getElementById("myCanvas")).height);
    height = cont_height;
    width = cont_width;
    console.log(height, width);
    cnv = createCanvas(width, height);
    cnv.id("canvas"); //myCanvas로 바꾸기 여차하면
    cnv.parent(container);
  }
  function draw() {
    let r = 100 * sin(frameCount * 0.001);
    let g = 100 * sin(frameCount * 0.005);
    let b = 100 * sin(frameCount * 0.01);
    colorMode(HSB, 100);
    background(r, 100, 80);
  }
}

