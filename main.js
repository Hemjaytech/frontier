const hideFormBtn = document.querySelector('.hideFormBtn');
const login = document.getElementById('login')

hideFormBtn.addEventListener('click', () => {
    if (login.style.display == 'none') {
        login.style.display = 'block';
        hideFormBtn.textContent = 'Hide Login'
    } else {
        hideFormBtn.textContent = 'Show Login'
        login.style.display = 'none'
    }
    
});


