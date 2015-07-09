var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.linedUp = false;
  this.lastPosition = {top: top, left: left};
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  var that = this;
  this.checkDistances();

  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  
  /*setTimeout(function(){
    if (!that.linedUp) {
      that.step();//.bind(this);
    }
  }, that.timeBetweenSteps);*/
};

makeDancer.prototype.setPosition = function(top, left) {
  this.top = top;
  this.left = left;
  this.lastPosition = {top: top, left: left};
  this.linedUp = false;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.checkDistances = function() {
    /*
For example, by iterating across the array window.dancers and using the Pythagorean Theorem 
to calculate your distance from each other dancer, you can have a dancer find its n closest 
neighbors and do something based on their positions.
  */
  // event listener??
  //for each dancer
  for (var i = 0; i < window.dancers.length; i++) {
    var dancerOne = window.dancers[i];
    for (var j = 0; j < window.dancers.length; j++) {
      var dancerTwo = window.dancers[j];
      //for every other dancer
      if (i !== j) {
        var horizontalDistance = dancerOne.left - dancerTwo.left;
        var verticalDistance = dancerOne.top - dancerTwo.top;
        if (Math.sqrt(horizontalDistance^2 + verticalDistance^2) < 20) {
          dancerOne.interact();
          dancerTwo.interact();
        }
      }
    }
  }
};

makeDancer.prototype.interact = function() {
};

makeDancer.prototype.lineUp = function() {
  this.setPosition(0, this.left);

  // if (!this.linedUp) {
  //   this.lastPosition = {top: this.top, left: this.left};
  //   this.setPosition(100, this.left);
  // } else {
  //   this.setPosition(this.lastPosition["top"], this.left);
  //   this.step();
  // }
  
  // this.linedUp = !this.linedUp;
}







