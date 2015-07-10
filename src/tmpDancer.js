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
                   width: 150,
                   left: true},
                   {face: 'lib/assets/img/derpyUnicorn.png',
                    height: 200,
                    width: 140,
                    left: true},
                   {face: 'lib/assets/img/flyingUnicorn.png',
                    height: 143,
                    width: 190,
                    left: false}
                  ];
  this.idx = Math.floor(Math.random()*this.faces.length);
  this.face = this.faces[this.idx]["face"];
  this.height = this.faces[this.idx]["height"];
  this.width = this.faces[this.idx]["width"];
  this.goLeft = this.faces[this.idx]["left"];

  this.$node.append('<img class = "sparkley last" src="' + this.face + '" height = "' + this.height + 'px" width = "' + this.width + 'px">');
};

makeUnicornDancer.prototype = Object.create(makeDancer.prototype);
makeUnicornDancer.prototype.constructor = makeUnicornDancer;
makeUnicornDancer.prototype.step = function(){
  
  //jquery to make it jump
  // the code below does make it jump but also makes them appear on a single horizontal plane
  if (!this.linedUp){
    makeDancer.prototype.step.apply(this, arguments);

    if (this.goLeft) {
      this.left -= 100;
      this.$node.animate({top: this.top - 50 + "px", left: this.left - 100 + "px", border: 0}, 200);
      this.$node.animate({top: this.top + 50 + "px", left: this.left - 100 + "px", border: 0}, 200);
    } else {
      this.left += 100;
      this.$node.animate({top: this.top - 50 + "px", left: this.left + 100 + "px", border: 0}, 200);
      this.$node.animate({top: this.top + 50 + "px", left: this.left + 100 + "px", border: 0}, 200);
    }

    if (this.left <= 0 && this.goLeft) {
      //debugger;
      this.goLeft = false;
      this.$node.toggleClass("flipped");
    } else if (this.left >= $("body").width() && !this.goLeft) {
      //debugger;
      this.goLeft = true;
      this.$node.toggleClass("flipped");
    }  

  }
};

makeUnicornDancer.prototype.interact = function() {
  //this.$node.toggleClass('flipped', 800);
  //debugger;
  if (!this.linedUp){
    this.$node.children("img:first").animate({height: 2*this.height+"px", width: 2*this.width+"px"}, 200);
    this.$node.children("img:first").animate({height: this.height+"px", width: this.width+"px"}, 200);
  }
};