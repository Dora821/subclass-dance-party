var makeBountyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, ...arguments);
  // this.$node = $('<span class="BountyDancer"></span>');
  // this.$node = $('<img class="BountyDancer Dancer" src="lib/bountyDancer.jpg"/>');
  this.$node.prepend('<img src="lib/bountyDancer.jpg"/>').addClass("BountyDancer rotate");
  // this.$node.addClass("rotate");
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
makeBountyDancer.prototype = Object.create(makeDancer.prototype);
makeBountyDancer.prototype.constructor = makeBountyDancer;
makeBountyDancer.prototype.oldStep = makeDancer.prototype.step;
makeBountyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle('bounce');
};
