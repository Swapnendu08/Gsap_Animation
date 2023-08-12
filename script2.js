
const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline
.from("nav", { y: '-100%', ease: 'bounce' })
.from('.welcome', { duration: 1, opacity: 0},"<1")
.from(".human", { y: '-100%',x:"200%", ease: 'power1.inOut' },"<.1")
.from('.para', { opacity: 0, stagger: 1 },"<1")
let button1=document.getElementById("button1");
let button2=document.getElementById("button2");
let button3=document.getElementById("button3");
button1.addEventListener("click",()=>{
    // timeline.timeScale(3);
    // timeline.reverse();
    console.log(timeline.progress());
    progress=timeline.progress();
        timeline.timeScale(3);
    timeline.reverse();
})
button2.addEventListener("click",()=>{
    timeline.timeScale(3)
    timeline.pause()
    console.log(timeline.progress());
})
button3.addEventListener("click",()=>{
    timeline.timeScale(3);
    timeline.play();
    console.log(timeline.progress());
});