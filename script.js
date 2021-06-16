let vh = window.innerHeight * 0.01;
let vw = window.innerWidth * 0.01;
let index= 0;
let body = document.getElementById("myCanvas");

document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty("--vw", `${vw}px`);

function format() {
    var args = Array.prototype.slice.call(arguments, 1);
    return arguments[0].replace(/\{(\d+)\}/g, function (match, index) {
        return args[index];
    });
}

let table = document.getElementById("text_5");
let tds = document.getElementsByTagName("td");

function getRandomColor(index) {
    let r = 100 * Math.sin(index * 0.001);
    let color= format("hsl({0},100%,40%)", r);

    return color;
}

function changeColor(){
    body.style.backgroundColor= getRandomColor(index);
    index+= 1;
  }

if (100 * vw >= 1024) {
    table.addEventListener("mouseenter", function () {
        for (let index = 0; index < tds.length; index++) {
            tds[index].style.border = "1px solid white";
            console.log("tds has changed");
        };
    });

    table.addEventListener("mouseleave", function () {
        for (let index = 0; index < tds.length; index++) {
            tds[index].style.border = "";
            console.log("tds has changed");
        };
    });

    let heads = document.getElementsByClassName("head_box");
    let content_box = document.getElementsByClassName("content_box");
    // let heading= document.getElementsByClassName("marquee");
    let width_content = document.getElementsByClassName("content_box")[0].clientWidth;
    let active = document.getElementById("active");

    window.addEventListener("load", function () {
        for (let index = 0; index < heads.length; index++) {
            let element = heads[index];
            element.style.display = "inline";
            let window_width = document.documentElement.clientWidth;
            let window_height = document.documentElement.clientHeight;
            let width = element.clientWidth;
            let height = element.clientHeight;
            element.style.position = "absolute";
            let random_num_y = Math.floor(Math.random() * (window_height - height)) + 1;
            let random_num_x = Math.floor(Math.random() * (window_width - width - width_content)) + width_content;
            let left_margin= 20*index;
            
            element.style.top ="calc(10% - 3px)";
            element.style.left = format("{0}%", left_margin);
            // console.log(random_num_y.toString()+"px");
            // console.log(random_num_x.toString()+"px");
        }
    })


    document.addEventListener("click", function () {
        for (let index = 0; index < heads.length; index++) {
            let element = heads[index];
            let window_width = document.documentElement.clientWidth;
            let window_height = document.documentElement.clientHeight;
            let width = element.clientWidth;
            let height = element.clientHeight;
            element.style.position = "absolute";
            let random_num_y = Math.floor(Math.random() * (window_height - height)) + 1;
            let random_num_x = Math.floor(Math.random() * (window_width - width - width_content)) + width_content;
            console.log(width_content);
            element.style.top = random_num_y.toString() + "px";
            element.style.left = random_num_x.toString() + "px";
            console.log(index + " " + random_num_y.toString() + "px");
            console.log(index + " " + random_num_x.toString() + "px");
        }
    })
    let grid_line= document.getElementsByClassName("grid_line");
    let content_boxs= document.getElementsByClassName("content_box");
    
    let click_head = function () {
        let id = this.id;
        let active_head = this.innerHTML;
        active.innerHTML = active_head;
        active.style.display="block";
        console.log(id);
        // console.log(id);
        let only_num = id.substring(5, 6);
        // console.log(only_num);
        for (let index = 0; index < content_box.length; index++) {
            let element = content_box[index];
            let content_id = element.id;
            content_id = content_id.substring(4, 5);
            if (only_num == content_id) {
                element.style.display = "grid";
                element.getElementsByClassName("text_box")[0].scrollTop = 0;
                element.getElementsByClassName("text_box")[0].style= "border: 3px solid white";
            } else {
                element.style.display = "none";
            }
        }
        for (let index = 0; index < grid_line.length; index++) {
            let element = grid_line[index];
            element.style.display="none";
        }
    }

    let click_content= function(){
        for (let index = 0; index < content_boxs.length; index++) {
            let element = content_boxs[index];
            element.style.display="none";
        }
        this.style.display="block";
        let id= this.id;
        let only_num = id.substring(4, 5);
        console.log("얘 아이디는", only_num);
        for (let index = 0; index < heads.length; index++) {
            let element = heads[index];
            let content_id = element.id;
            content_id = content_id.substring(5, 6);
            console.log(content_id);
            if (only_num == content_id) {
                let active_head = element.innerHTML;
                active.innerHTML = active_head;
                active.style.display="block";
            } else {
                // element.style.display = "none";
            }
        }
        for (let index = 0; index < grid_line.length; index++) {
            let element = grid_line[index];
            element.style.display="none";
        }
    }



    for (let index = 0; index < heads.length; index++) {
        let element = heads[index];
        element.onclick = click_head;
        let content = content_boxs[index];
        content.onclick = click_content;
    }
} else {
    setInterval(changeColor,1);
}