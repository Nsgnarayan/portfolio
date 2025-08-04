addEventListener("DOMContentLoaded", (e) => {
  document.addEventListener("mousemove", (e) => {
  const star = document.createElement("div");
  star.classList.add("star");
  document.body.appendChild(star);

  star.style.left = e.clientX + "px";
  star.style.top = e.clientY + "px";

  const size = Math.random() * 4 + 4;
  star.style.width = size + "px";
  star.style.height = size + "px";

  const colors = ["white", "#aaddff", "#fff3b0"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  star.style.background = `radial-gradient(circle, ${color} 40%, transparent 70%)`;
  star.style.filter = `drop-shadow(0 0 ${size*1.5}px ${color})`;

  setTimeout(() => {
    star.remove();
  }, 800);
});
});
