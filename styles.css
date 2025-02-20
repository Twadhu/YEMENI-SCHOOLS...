function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
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

    // حفظ البيانات في localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // إرسال البريد الإلكتروني
    emailjs.send('service_stduown', 'template_27rvt66', {
        to_email: userData.email,
        full_name: userData.fullName,
        school: userData.school,
        activation_link: "https://your-platform.com/activate"
    }).then(() => {
        window.location.href = "confirmation.html"; // توجيه إلى صفحة التأكيد
    }).catch(() => {
        document.getElementById('signupMessage').textContent = "حدث خطأ أثناء الإرسال!";
    });
});

function showUnderConstruction() {
    alert("جارٍ العمل على بناء هذه الصفحة!");
}

function searchSchools() {
    const input = document.getElementById('searchSchool').value.toLowerCase();
    const schoolsList = document.getElementById('schoolsList').getElementsByTagName('li');
    for (let i = 0; i < schoolsList.length; i++) {
        const schoolName = schoolsList[i].textContent.toLowerCase();
        if (schoolName.includes(input)) {
            schoolsList[i].style.display = "block";
        } else {
            schoolsList[i].style.display = "none";
        }
    }
}
