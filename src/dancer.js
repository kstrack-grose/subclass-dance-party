var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.linedUp = false;

  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(this.top, this.left);
};

makeDancer.prototype.step = function() {
  var that = this;
  setTimeout(function(){
    if (!that.linedUp) {
      that.step();//.bind(this);
    }
  }, that.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  this.top = top;
  this.left = left;
  var styleSettings = {
    //position: 'static',
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};
