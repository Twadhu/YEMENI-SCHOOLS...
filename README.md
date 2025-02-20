# منصة مدارس الجمهورية اليمنية

منصة تعليمية لخدمة الطلاب والمعلمين في اليمن.

## المميزات
- تسجيل الدخول وإنشاء حساب.
- البحث عن المدارس المشاركة.
- إرسال رسائل تأكيد عبر البريد الإلكتروني.

## كيفية التشغيل
1. انسخ الملفات إلى مجلد محلي.
2. افتح `index.html` في متصفحك.

## التوثيق
- تم استخدام HTML, CSS, JavaScript.
- تم دمج EmailJS لإرسال البريد الإلكتروني.body {
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>منصة مدارس الجمهورية اليمنية</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="header-content">
            <p class="quran-text">بسم الله الرحمن الرحيم</p>
            <p class="quran-text">وقل رب زدني علما</p>
        </div>
    </header>

    <nav>
        <button onclick="toggleMenu()">الرئيسية</button>
        <button onclick="showSection('login')">تسجيل الدخول</button>
        <button onclick="showSection('signup')">إنشاء حساب</button>
        <button>المنح الدراسية</button>
    </nav>

    <div id="menu" class="menu">
        <ul>
            <li><a href="#services">الخدمات التي توفرها المنصة</a></li>
            <li><a href="#schools">المدارس المشاركة في النظام</a></li>
        </ul>
    </div>

    <main>
        <!-- قسم الخدمات -->
        <section id="services">
            <h2>أهلاً وسهلاً بكم</h2>
            <p>هذه المنصة تم تطويرها لخدمة الطلاب والمعلمين وإدارة المدارس...</p>
        </section>

        <!-- قسم المدارس -->
        <section id="schools">
            <h2>المدارس المشاركة</h2>
            <input type="text" id="searchSchool" placeholder="ابحث عن مدرسة..." oninput="searchSchools()">
            <ul id="schoolsList">
                <li><a href="#" onclick="showUnderConstruction()">مدرسة النور بالثوباني</a></li>
                <li><a href="#" onclick="showUnderConstruction()">مدرسة الأمل</a></li>
                <li><a href="#" onclick="showUnderConstruction()">مدرسة المستقبل</a></li>
                <li><a href="#" onclick="showUnderConstruction()">مدرسة النهضة</a></li>
            </ul>
        </section>

        <!-- تسجيل الدخول -->
        <section id="login" class="hidden">
            <h2>تسجيل الدخول</h2>
            <form id="loginForm">
                <input type="email" id="loginEmail" placeholder="البريد الإلكتروني" required>
                <input type="password" id="loginPassword" placeholder="كلمة المرور" required>
                <button type="submit">تسجيل الدخول</button>
            </form>
            <p id="loginMessage"></p>
        </section>

        <!-- إنشاء حساب -->
        <section id="signup" class="hidden">
            <h2>إنشاء حساب</h2>
            <form id="signupForm">
                <input type="text" id="fullName" placeholder="الاسم الرباعي" required>
                <input type="text" id="nickname" placeholder="اللقب" required>
                <select id="gender" required>
                    <option value="male">ذكر</option>
                    <option value="female">أنثى</option>
                </select>
                <select id="role" required>
                    <option value="student">طالب</option>
                    <option value="teacher">مدرس</option>
                    <option value="admin">إدارة مدرسة</option>
                </select>
                <input type="email" id="email" placeholder="البريد الإلكتروني" required>
                <input type="password" id="password" placeholder="كلمة المرور (أكثر من 8 أحرف)" required>
                <input type="password" id="confirmPassword" placeholder="تأكيد كلمة المرور" required>
                <select id="school" required>
                    <option value="مدرسة النور بالثوباني">مدرسة النور بالثوباني</option>
                    <option value="مدرسة الأمل">مدرسة الأمل</option>
                    <option value="مدرسة المستقبل">مدرسة المستقبل</option>
                    <option value="مدرسة النهضة">مدرسة النهضة</option>
                </select>
                <select id="grade" required>
                    <option value="1">الصف الأول</option>
                    <option value="2">الصف الثاني</option>
                    <option value="3">الصف الثالث</option>
                    <option value="4">الصف الرابع</option>
                    <option value="5">الصف الخامس</option>
                    <option value="6">الصف السادس</option>
                    <option value="7">الصف السابع</option>
                    <option value="8">الصف الثامن</option>
                    <option value="9">الصف التاسع</option>
                    <option value="10">الصف الأول الثانوي</option>
                    <option value="11">الصف الثاني الثانوي</option>
                    <option value="12">الصف الثالث الثانوي</option>
                </select>
                <input type="tel" id="phone" placeholder="رقم الهاتف" required>
                <button type="submit">حفظ</button>
            </form>
            <p id="signupMessage"></p>
        </section>
    </main>

    <footer>
        <p>تم إنشاء الصفحة بواسطة عبدالله عباس، جميع الحقوق محفوظة</p>
        <p>للتواصل عبر الواتساب: +967771004061</p>
    </footer>

    <script src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script>
        emailjs.init('QM4EgDHKawTHU-5dp'); // استخدم المفتاح العام الخاص بك
    </script>
</body>
</html>
body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to bottom, #f0f0f0, #ffffff);
    color: #333;
    margin: 0;
    padding: 0;
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

header {
    background: linear-gradient(to right, #28a745, #218838);
    color: white;
    padding: 20px;
    text-align: center;
}

header h1 {
    font-size: 2em;
    margin: 0;
}

.quran-text {
    font-family: 'Kufi', Arial, sans-serif;
    font-size: 1.2em;
    margin: 5px 0;
}

nav {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
}

nav button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1em;
    border-radius: 5px;
}

nav button:hover {
    background-color: #0056b3;
}

.menu {
    display: none;
    background-color: rgba(40, 167, 69, 0.9);
    padding: 10px;
    position: fixed;
    top: 0;
    right: 0;
    width: 200px;
    height: 100%;
    z-index: 1000;
    transition: transform 0.3s ease;
    transform: translateX(100%);
}

.menu.active {
    transform: translateX(0);
}

.menu ul {
    list-style: none;
    padding: 0;
}

.menu ul li {
    margin: 10px 0;
}

.menu ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.2em;
}

main {
    flex: 1;
    padding: 20px;
    margin-top: 20px;
}

footer {
    background-color: #007bff;
    color: white;
    padding: 10px;
    text-align: center;
}

.hidden {
    display: none;
}

#login, #signup {
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
}

#loginForm, #signupForm {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#loginForm input, #signupForm input, #signupForm select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
}

#loginForm button, #signupForm button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 1.1em;
    border-radius: 5px;
}

#loginForm button:hover, #signupForm button:hover {
    background-color: #218838;
}

#loginMessage, #signupMessage {
    margin-top: 10px;
    color: red;
    font-size: 0.9em;
}

#schoolsList li {
    display: block;
    margin: 10px 0;
}
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
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تم إرسال الطلب</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="header-content">
            <p class="quran-text">بسم الله الرحمن الرحيم</p>
            <p class="quran-text">وقل رب زدني علما</p>
        </div>
    </header>

    <main>
        <section>
            <h2>تم إرسال طلبك بنجاح!</h2>
            <p>سيتم مراجعة طلبك من قبل إدارة المدرسة.</p>
            <button onclick="window.location.href='index.html'">العودة إلى تسجيل الدخول</button>
        </section>
    </main>

    <footer>
        <p>تم إنشاء الصفحة بواسطة عبدالله عباس، جميع الحقوق محفوظة</p>
        <p>للتواصل عبر الواتساب: +967771004061</p>
    </footer>
</body>
</html>
