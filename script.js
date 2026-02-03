// Падающая сакура
setInterval(() => {
  const s = document.createElement('div');
  s.className = 'sakura';
  s.style.left = Math.random() * window.innerWidth + 'px';
  s.style.animationDuration = (3 + Math.random()*3) + 's';
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 6000);
}, 300);

// Кнопка логина (имитация Steam)
document.getElementById('login-btn').onclick = function() {
  const username = prompt("Введите ник Steam:");
  if(username) {
    sessionStorage.setItem("hokageUser", username);
    window.location.href = "profile.html";
  }
};
