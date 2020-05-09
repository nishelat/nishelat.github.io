$.fn.animateRotate = function(startAngle, endAngle, duration, easing) {
	var args = $.speed(duration, easing);
	var step = args.step;
	return this.each(function(i, e) {
		args.step = function(now) {
			$.style(e, 'transform', 'rotate(' + now + 'deg)');
			if(step) return step.apply(e, arguments);
		};
		$({deg: startAngle}).animate({deg: endAngle}, args);
	});
};

const duration = 500;
const easing = "swing";

setTimeout(() => {
	$("#N1").fadeTo("slow", 1);
	$("#N1-LINK2").animateRotate(180, 140, duration, easing);
	$("#N1-LINK3").animateRotate(-180, -140, duration, easing);
}, 0 * duration);

setTimeout(() => {
	$("#I2").fadeTo("slow", 1);
}, 0.5 * duration);

setTimeout(() => {
	$("#S3").fadeTo("slow", 1);
	$("#S3-LINK1").animateRotate(90, 60, duration, easing);
	$("#S3-LINK2").animateRotate(180, -120, duration, easing);
	$("#S3-LINK3").animateRotate(180, 130, duration, easing);
}, 1 * duration);

setTimeout(() => {
	$("#H4").fadeTo("slow", 1);
	$("#H4-LINK2").animateRotate(0, 0, duration, easing);
	$("#H4-LINK3").animateRotate(0, 90, duration, easing);
	$("#H4-LINK4").animateRotate(-180, -90, duration, easing);
	$("#H4-LINK5").animateRotate(0, 90, duration, easing);
}, 1.5 * duration);

setTimeout(() => {
	$("#I5").fadeTo("slow", 1);
}, 2 * duration);

setTimeout(() => {
	$("#R6").fadeTo("slow", 1);
	$("#R6-LINK2").animateRotate(180, 125, duration, easing);
	$("#R6-LINK3").animateRotate(0, 110, duration, easing);
	$("#R6-LINK4").animateRotate(-180, -110, duration, easing);
}, 2.5 * duration);