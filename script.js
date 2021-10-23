let elem;
const DomElement = function(selector, height, width, bg, fontSize, pos){
    this.selector = selector;
    this.height = height; 
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.pos = pos;
};
DomElement.prototype.create = function(){
    if (this.selector.startsWith('.'))  elem = document.createElement('div');  
    if (this.selector.startsWith('#'))  elem = document.createElement('p');
    elem.style.cssText =`   height: ${this.height}px;
                            width: ${this.width}px;
                            background-color: ${this.bg};
                            font-size: ${this.fontSize};
                            position: ${this.pos};
                        `;
};


const newElem = new DomElement('.elem', 100, 500, 'red', 20, 'absolute');
newElem.create();
document.addEventListener('DOMContentLoaded', () => document.body.append(elem));

document.body.addEventListener("keydown", function (event) {
    if (event.code != "ArrowRight" && event.code != "ArrowLeft" &&
        event.code != "ArrowUp" && event.code != "ArrowDown") return;

    let rectElem = elem.getBoundingClientRect();
    let x = rectElem.x + pageXOffset,
        y = rectElem.y + pageYOffset;

    if (event.code == "ArrowRight") x += 10 ;
    if (event.code == "ArrowLeft")  x -= 10 ;
    if (event.code == "ArrowUp")    y -= 10 ;
    if (event.code == "ArrowDown")  y += 10 ;
    
    elem.style.position = "absolute";
    elem.style.left = x + "px";
    elem.style.top = y + "px";
});