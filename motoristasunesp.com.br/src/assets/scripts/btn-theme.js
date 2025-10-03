const btn = document.createElement("button");
btn.innerText = "🌙";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.padding = "10px";
btn.style.borderRadius = "50%";
btn.style.border = "none";
btn.style.cursor = "pointer";
btn.style.fontSize = "20px";
btn.style.zIndex = "50";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  btn.innerText = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
});