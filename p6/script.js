// PARTICLES
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

let particles = [];
for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.5,
    dx: Math.random() * 0.4,
    dy: Math.random() * 0.4
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.fill();
    p.x += p.dx; p.y += p.dy;
    if(p.x>canvas.width) p.x=0;
    if(p.y>canvas.height) p.y=0;
  });
  requestAnimationFrame(animate);
}
animate();

// CURSOR
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

//changing the word
const words = ["cloud", "testing", "web development"]

// TYPING
const text =
 "A passionate problem solver with interest in cloud, testing, and web development.";

let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(i++);
    setTimeout(type, 50);
  }
}
if(document.getElementById("typing-text")) type();
