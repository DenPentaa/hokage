// // Падающая сакура
setInterval(() => {
  const s = document.createElement('div');
  s.className = 'sakura';
  s.style.left = Math.random() * window.innerWidth + 'px';
  s.style.animationDuration = (3 + Math.random()*3) + 's';
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 6000);
}, 300);

// Имитация Steam Login
document.getElementById('login-btn')?.addEventListener('click', function() {
  const username = prompt("Введите ник Steam:");
  if(username) {
    sessionStorage.setItem("hokageUser", username);
    window.location.href = "profile.html";
  }
});

// Профиль и режимы
const user = sessionStorage.getItem("hokageUser");
if(user) {
  const usernameEl = document.getElementById('username');
  if(usernameEl) usernameEl.innerText = "Привет, " + user;
}

function logout() {
  sessionStorage.removeItem("hokageUser");
  location.href = "index.html";
}

// Выбор режима
function selectMode(mode) {
  const statsEl = document.getElementById('stats');
  if(statsEl) statsEl.innerText = `Вы выбрали режим: ${mode}\nМатчи: 10, Победы: 7, Процент побед: 70%`;
}

// Скинченджер
function changeSkin(el) {
  alert("Вы выбрали скин: " + el.innerText);
}
