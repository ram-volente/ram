document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  message.textContent = '';
  message.className = 'message';

  if (!username || !password) {
    message.textContent = 'Please enter both username and password.';
    message.classList.add('error');
    return;
  }

  // Basic example validation. Replace with real authentication logic.
  if (username === 'admin' && password === 'password') {
    message.textContent = 'Login successful! Redirecting...';
    message.classList.add('success');
    setTimeout(() => {
      window.location.href = 'welcome.html';
    }, 1000);
  } else {
    message.textContent = 'Invalid username or password.';
    message.classList.add('error');
  }
});
