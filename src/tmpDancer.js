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
  this.top = top;
  this.left = left;
};

makeMoverDancer.prototype = Object.create(makeDancer.prototype);
makeMoverDancer.prototype.constructor = makeMoverDancer;
makeMoverDancer.prototype.step = function(){
  makeDancer.prototype.step.apply(this, arguments);
  this.setPosition(this.top++, this.left);
};