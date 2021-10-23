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
