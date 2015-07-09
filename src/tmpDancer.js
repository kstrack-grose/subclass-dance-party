/*// temporary stupid dancer
var makeStupidDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.face = 'http://www.wallmonkeys.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/ca-301-v04-unicorn_1.png';
};

makeStupidDancer.prototype = Object.create(makeDancer.prototype);
makeStupidDancer.prototype.constructor = makeStupidDancer;
makeStupidDancer.prototype.step = function(){
  makeDancer.prototype.step.apply(this, arguments);
  //jquery here (what it will do for its step)
  this.setPosition(top+10, 10);
};



$(document).ready(function(){
  $('.addDancerButton').click(function(){

    var unicornDancer = new makeStupidDancer(1, 1, 1000);
    var imgElement = '<img src="' + unicornDancer.face + '" width = "50%" height = "50%">';
    unicornDancer.$node.append(imgElement);
    //debugger;
    // instantiate a new blinky dancer
    $('.dancefloor').append(unicornDancer.$node);




  })
});*/

var makeMoverDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);

};

makeMoverDancer.prototype = Object.create(makeDancer.prototype);
makeMoverDancer.prototype.constructor = makeMoverDancer;
makeMoverDancer.prototype.step = function(){
  //debugger;
  makeDancer.prototype.step.apply(this, arguments);
  this.top+=20;
  this.setPosition(this.top, this.left);
};

var makeUnicornDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  //this.top = top;
  //this.left = left;
  this.faces = [  {face:    'lib/assets/img/unicorn.png',
                   height: 180,
                   width: 150},
                   {face: 'lib/assets/img/derpyUnicorn.png',
                    height: 200,
                    width: 140},
                   {face: 'lib/assets/img/flyingUnicorn.png',
                    height: 143,
                    width: 190}
                  ];
  this.idx = Math.floor(Math.random()*this.faces.length);
  this.face = this.faces[this.idx]["face"];
  this.height = this.faces[this.idx]["height"];
  this.width = this.faces[this.idx]["width"];
  //'http://www.wallmonkeys.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d
  // 27136e95/c/a/ca-301-v04-unicorn_1.png';

  this.$node.append('<img src="' + this.face + '" height = "' + this.height + 'px" width = "' + this.width + 'px">');
  //debugger;
};

makeUnicornDancer.prototype = Object.create(makeDancer.prototype);
makeUnicornDancer.prototype.constructor = makeUnicornDancer;
makeUnicornDancer.prototype.step = function(){
  makeDancer.prototype.step.apply(this, arguments);
  //jquery to make it jump
  // the code below does make it jump but also makes them appear on a single horizontal plane
  this.$node.animate({top: this.top - 100 + "px", border: 0}, 200);
  this.$node.animate({top: this.top + 100 + "px", border: 0}, 200);
};
makeUnicornDancer.prototype.interact = function() {
  //this.$node.toggleClass('flipped', 800);
  //debugger;
  this.$node.children("img:first").animate({height: 2*this.height+"px", width: 2*this.width+"px"}, 200);
  this.$node.children("img:first").animate({height: this.height+"px", width: this.width+"px"}, 200);
};

