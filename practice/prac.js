var t1 = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();
t1.from("blockquote",.5,{x:200, opacity: 0});

const scene = new ScrollMagic.Scene({
    triggerElement: ".sticky",
    trigerHook: "onLeave",
    duration: "100%"
}).setPin(".sticky")
.setTween(t1)
.addTo(controller);
function updatePercentage(){
    t1.progress();
    console.log(t1.progress());
}