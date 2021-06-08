let vh = window.innerHeight * 0.01;
let vw = window.innerWidth * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty("--vw", `${vw}px`);

if (vw >= 1024) {
    let table = document.getElementById("text_5");
    let tds = document.getElementsByTagName("td");

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
            element.style.top = random_num_y.toString() + "px";
            element.style.left = random_num_x.toString() + "px";
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

    let click_head = function () {
        let id = this.id;
        let active_head = this.innerHTML;
        active.innerHTML = active_head;
        console.log(active_head);
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
            } else {
                element.style.display = "none";
            }
        }
    }


    for (let index = 0; index < heads.length; index++) {
        let element = heads[index];
        element.onclick = click_head;
    }
}
