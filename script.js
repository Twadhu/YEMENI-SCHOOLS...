function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email === "test@example.com" && password === "12345678") {
        document.getElementById('loginMessage').textContent = "تم تسجيل الدخول بنجاح!";
    } else {
        document.getElementById('loginMessage').textContent = "اسم المستخدم أو كلمة المرور خاطئة.";
    }
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('signupMessage').textContent = "كلمة المرور غير متطابقة.";
        return;
    }

    const userData = {
        fullName: document.getElementById('fullName').value,
        nickname: document.getElementById('nickname').value,
        gender: document.getElementById('gender').value,
        role: document.getElementById('role').value,
        email: email,
        password: password,
        school: document.getElementById('school').value,
        grade: document.getElementById('grade').value,
        phone: document.getElementById('phone').value,
    };

    console.log(userData); // يمكن استبدال هذا بإرسال البيانات إلى الخادم
    document.getElementById('signupMessage').textContent = "تم إنشاء الحساب بنجاح!";
});
