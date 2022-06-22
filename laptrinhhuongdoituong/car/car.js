class Car{
    constructor(src,top,left,width,height) {
        this.src = src;
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
    }
    getCarElement(){
        return '<img width="'+ this.width + '"' +
            ' height="'+ this.height + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
    move = function(){
    }
}
class Img{
    constructor(src){
        this.src = src;
    }
}