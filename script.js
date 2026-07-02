// ============================
// PAGE LOAD ANIMATION
// ============================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

document.querySelector(".container").style.transform="translateY(0px)";

});

document.body.style.opacity="0";


// ============================
// CONTAINER FADE
// ============================

const container=document.querySelector(".container");

container.style.transition=".8s";

container.style.transform="translateY(40px)";


// ============================
// BUTTON RIPPLE
// ============================

const buttons=document.querySelectorAll(".links a");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const x=e.offsetX;

const y=e.offsetY;

ripple.style.left=x+"px";

ripple.style.top=y+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


// ============================
// PARALLAX
// ============================

const bow=document.querySelector(".bow");
const flower=document.querySelector(".flower");
const planet=document.querySelector(".planet");
const candy=document.querySelector(".candy");

document.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/40;
let y=(window.innerHeight/2-e.pageY)/40;

bow.style.transform=`translate(${x}px,${y}px)`;

flower.style.transform=`translate(${x/1.5}px,${y/1.5}px)`;

planet.style.transform=`translate(${-x}px,${-y}px)`;

candy.style.transform=
`translate(${x/2}px,${y/2}px)
rotate(${x*2}deg)`;

});


// ============================
// TITLE GLOW
// ============================

const title=document.querySelector("h1");

let glow=0;

setInterval(()=>{

glow++;

title.style.textShadow=`

0 0 ${20+Math.sin(glow/4)*8}px rgba(255,90,180,.55),

0 0 ${45+Math.sin(glow/5)*12}px rgba(155,80,255,.55)

`;

},30);


// ============================
// FLOAT RANDOM
// ============================

const stars=document.querySelectorAll(".star");

stars.forEach(star=>{

setInterval(()=>{

let xx=Math.random()*8-4;

let yy=Math.random()*8-4;

star.style.transform=`translate(${xx}px,${yy}px)`;

},700);

});


// ============================
// BUTTON MAGNET
// ============================

buttons.forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const moveX=(x-rect.width/2)/12;

const moveY=(y-rect.height/2)/12;

btn.style.transform=`
translate(${moveX}px,${moveY}px)
scale(1.04)
`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translate(0,0) scale(1)";

});

});


// ============================
// CURSOR EFFECT
// ============================

document.querySelectorAll("a").forEach(a=>{

a.style.cursor="pointer";

});


// ============================
// SCROLL ANIMATION
// ============================

window.addEventListener("scroll",()=>{

const value=window.scrollY;

document.body.style.backgroundPositionY=value*0.3+"px";

});


// ============================
// SPARKLE LOOP
// ============================

const mini=document.querySelector(".mini");

const sparkle=["✨ 💫 ✨","🌸 ✨ 🌸","💖 ✨ 💖","⭐ 🌸 ⭐"];

let i=0;

setInterval(()=>{

i++;

mini.innerHTML=sparkle[i%sparkle.length];

},1200);