describe('bountyDancer', function() {

  var bountyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bountyDancer = new makeBountyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bountyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(bountyDancer.$node, 'toggle');
    bountyDancer.step();
    expect(bountyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bountyDancer, 'step');
      expect(bountyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bountyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bountyDancer.step.callCount).to.be.equal(2);
    });
  });
});
