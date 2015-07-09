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
  makeDancer.prototype.step.apply(this, arguments);
  this.setPosition(this.top++, this.left);
};

var makeUnicornDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.top = top;
  this.left = left;
  this.face = 'http://www.wallmonkeys.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/ca-301-v04-unicorn_1.png';
  this.$node.append('<img src="' + this.face + '" height = "50%" width = "50%">');

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

