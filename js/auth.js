// Авторизация и модальные окна
document.addEventListener('DOMContentLoaded', function() {
    // Элементы модальных окон
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const openLoginBtn = document.getElementById('openLoginBtn');
    const closeLogin = document.getElementById('closeLoginModal');
    const closeRegister = document.getElementById('closeRegisterModal');
    const goToRegister = document.getElementById('goToRegister');
    const goToLogin = document.getElementById('goToLogin');
    const fakeLoginBtn = document.getElementById('fakeLoginBtn');
    const fakeRegisterBtn = document.getElementById('fakeRegisterBtn');

    // Открыть модалку входа
    if (openLoginBtn) {
        openLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.add('active-modal');
        });
    }

    // Закрытие модалок
    if (closeLogin) {
        closeLogin.addEventListener('click', () => {
            loginModal.classList.remove('active-modal');
        });
    }

    if (closeRegister) {
        closeRegister.addEventListener('click', () => {
            registerModal.classList.remove('active-modal');
        });
    }

    // Переключение между модалками
    if (goToRegister) {
        goToRegister.addEventListener('click', () => {
            loginModal.classList.remove('active-modal');
            registerModal.classList.add('active-modal');
        });
    }

    if (goToLogin) {
        goToLogin.addEventListener('click', () => {
            registerModal.classList.remove('active-modal');
            loginModal.classList.add('active-modal');
        });
    }

    // Закрытие по клику вне модалки
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('active-modal');
        }
        if (e.target === registerModal) {
            registerModal.classList.remove('active-modal');
        }
    });

    // Имитация входа
    if (fakeLoginBtn) {
        fakeLoginBtn.addEventListener('click', () => {
            alert('Вы успешно вошли в систему!');
            loginModal.classList.remove('active-modal');
            // Перенаправление в личный кабинет
            window.location.href = 'profile.html';
        });
    }

    // Имитация регистрации
    if (fakeRegisterBtn) {
        fakeRegisterBtn.addEventListener('click', () => {
            alert('Регистрация прошла успешно! Теперь вы можете войти.');
            registerModal.classList.remove('active-modal');
            loginModal.classList.add('active-modal');
        });
    }

    // Активный пункт меню
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});