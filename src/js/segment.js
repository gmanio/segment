/**
 * @Class gSegment
 * @Author park
 * @version 0.0.1
 */
var gSegment = function () {
    this.$init.apply(this, arguments);
}

gSegment.prototype = {
    aCord: [[15, 3], [6, 0], [11, 5], [15, 4], [6, 6], [13, 6], [13, 7], [7, 0], [15, 7], [15, 6]],
    $init: function (sID, nDisPositionX, nDisPositionY) {
        this.nDisPosX = nDisPositionX;
        this.nDisPosY = nDisPositionY;
        this.canvas = document.getElementById(sID);
        this.ctx = this.canvas.getContext('2d');
        this.setSVG('img/7segment.svg');
    },
    setSVG: function (sImageName) {
        this.sprite = new Image();
        this.sprite.src = sImageName;
    },
    clear: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    drawNumber: function (x, y) {
        this.ctx.drawImage(this.sprite, x * 60, y * 100, 60, 100, this.nDisPosX, this.nDisPosY, 60, 100);
    }
}


var seg1 = new gSegment('gCanvas', 0, 0);
var seg2 = new gSegment('gCanvas', 60, 0);
var seg3 = new gSegment('gCanvas', 140, 0);
var seg4 = new gSegment('gCanvas', 200, 0);
var seg5 = new gSegment('gCanvas', 280, 0);
var seg6 = new gSegment('gCanvas', 340, 0);

var aSegment = [seg1, seg2, seg3, seg4, seg5, seg6];

function displayAll(n) {
    var i = n;
    for (var el in aSegment) {
        aSegment[el].draw(i);
    }
}

window.onload = function(){

    var addIndex = 0;
    setInterval(function(){
        aSegment.forEach(function(currSegment, index){
            currSegment.drawNumber(currSegment.aCord[index+addIndex][0],currSegment.aCord[index+addIndex][1])
        })
        addIndex++;
        if(addIndex>4){
            addIndex = 0;
        }
    },50)
}

/* http://commons.wikimedia.org/wiki/File:7-segment.svg */
var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

htDigitCoordinate = {
    n1: [6, 0],
    n2: [11, 5],
    n3: [15, 4],
    n4: [6, 6],
    n5: [13, 6],
    n6: [13, 7],
    n7: [7, 0],
    n8: [15, 7],
    n9: [15, 6],
    n0: [15, 3]
}
