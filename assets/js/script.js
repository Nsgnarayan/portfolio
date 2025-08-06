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

document.querySelector("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  Email.send({
    SecureToken: "YOUR_SMTPJS_TOKEN", // Replace with your token
    To: 'yourgmail@gmail.com',        // Replace with your Gmail
    From: document.getElementById("email").value,
    Subject: "New Contact Form Message",
    Body: "Name: " + document.getElementById("name").value +
          "<br>Email: " + document.getElementById("email").value +
          "<br>Message: " + document.getElementById("message").value
  }).then(
    message => alert(message)
  );
});
document.querySelector(".date").textContent = new Date().getFullYear();
});
