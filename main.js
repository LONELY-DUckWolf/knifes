const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginToggleBtn = document.querySelector('.login-toggle-btn');
const registerToggleBtn = document.querySelector('.register-toggle-btn');
const panelsContainer = document.querySelector('.panels-container');

loginToggleBtn.addEventListener('click', () => {
    panelsContainer.classList.remove('active');
});

registerToggleBtn.addEventListener('click', () => {
    panelsContainer.classList.add('active');
});
