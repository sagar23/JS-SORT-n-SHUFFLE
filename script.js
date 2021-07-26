
const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];

color = ["#2F454E", "#2B8EAD",
    "#333333", "#6F98A8",
    "#333333", "#BFBFBF",
    "#EFEFEF", "#2F454E",
    "#72C3DC"];

originalColor = color.slice(0);

let boxContainer = document.getElementById("boxcontainer");

generateBox = function () {
    let oW = window.outerWidth;

    for (let i = 0; i < range.length; i++) {
        boxContainer.innerHTML += ("<div id='box' class='box-box'>" + "<span class='letter'>" + range[i] + "</span>" + "</div>");
    }

    let boxEl = document.getElementsByClassName("box-box");

    if (oW > 500) {
        for (let i = 0; i < boxEl.length; i++) {
            var el = boxEl[i];
            el.style.backgroundColor = color[i];
        }
    } else {
        for (let i = 0; i < boxEl.length; i++) {
            var el = boxEl[i];
            el.style.backgroundColor = "#EFEFEF";
            el.style.borderLeft =  "10px solid";
            el.style.borderLeftColor = color[i];
        }
    }
}


sort = function () {
    range.sort((a, b) => a - b);
    color = originalColor.slice(0);
    boxContainer.innerHTML = "";
    generateBox();
}


randomize = function () {
    for (let i = range.length - 1; i > 0; i--) {
        randomIdx = Math.floor(Math.random() * (i));
        let temp = range[i];
        range[i] = range[randomIdx];
        range[randomIdx] = temp;
    }
    for (let i = color.length - 1; i > 0; i--) {
        randomIdx = Math.floor(Math.random() * (i));
        let temp = color[i];
        color[i] = color[randomIdx];
        color[randomIdx] = temp;
    }
    boxContainer.innerHTML = "";
    generateBox();
}

resize = function () {
    boxContainer.innerHTML = "";
    generateBox();
}


generateBox();