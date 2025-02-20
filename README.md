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
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to bottom, #f0f0f0, #ffffff);
    color: #333;
    margin: 0;
    padding: 0;
    text-align: center;
}

header {
    background: linear-gradient(to right, #28a745, #218838);
    color: white;
    padding: 20px;
}

header h1 {
    font-size: 2.5em;
    margin: 0;
}

header p {
    font-size: 1.2em;
    margin: 5px 0;
}

.logo {
    width: 100px;
    margin-top: 10px;
}

nav {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}

nav button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1em;
}

nav button:hover {
    background-color: #0056b3;
}

.menu {
    display: none;
    background-color: rgba(40, 167, 69, 0.9);
    padding: 10px;
    position: absolute;
    top: 100px;
    width: 100%;
    z-index: 1000;
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
    padding: 20px;
}

footer {
    background-color: #007bff;
    color: white;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
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
    max-width: 500px;
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
            <h1>مرحبًا بكم في منصة مدارس الجمهورية اليمنية</h1>
            <p class="quran-text">بسم الله الرحمن الرحيم</p>
            <p class="quran-text">وقل رب زدني علما</p>
            <img src="images/logo.png" alt="شعار الجمهورية اليمنية" class="logo">
        </div>
        <nav>
            <button onclick="toggleMenu()">الرئيسية</button>
            <button onclick="showSection('login')">تسجيل الدخول</button>
            <button onclick="showSection('signup')">إنشاء حساب</button>
            <button>المنح الدراسية</button>
        </nav>
    </header>

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
            <input type="text" placeholder="ابحث عن مدرسة...">
            <ul id="schoolsList">
                <li><a href="#" onclick="showUnderConstruction()">مدرسة النور بالثوباني</a></li>
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
                </select>
                <select id="grade" required>
                    <option value="1">الصف الأول</option>
                    <option value="2">الصف الثاني</option>
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
    <script>emailjs.init('YOUR_EMAILJS_USER_ID');</script>
</body>
</html>
// إظهار/إخفاء القوائم
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// إظهار الأقسام
function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// معالجة تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // تحقق من البيانات (يمكن استبدالها باتصال بالخادم)
    if (email === "test@example.com" && password === "12345678") {
        document.getElementById('loginMessage').textContent = "تم تسجيل الدخول بنجاح!";
        window.location.href = "student-dashboard.html"; // توجيه إلى لوحة الطالب
    } else {
        document.getElementById('loginMessage').textContent = "اسم المستخدم أو كلمة المرور خاطئة.";
    }
});

// معالجة إنشاء الحساب
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('signupMessage').textContent = "كلمة المرور غير متطابقة.";
        return;
    }

    // جمع بيانات المستخدم
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

    // إرسال البريد الإلكتروني باستخدام EmailJS
    emailjs.send('service_stduown', 'template_27rvt66', {
        to_email: userData.email,
        full_name: userData.fullName,
        school: userData.school,
        activation_link: "https://your-platform.com/activate"
    }).then(() => {
        document.getElementById('signupMessage').textContent = "تم إرسال رابط التفعيل إلى بريدك الإلكتروني!";
    }).catch(() => {
        document.getElementById('signupMessage').textContent = "حدث خطأ أثناء الإرسال!";
    });
});

// صفحة قيد الإنشاء
function showUnderConstruction() {
    alert("جارٍ العمل على بناء هذه الصفحة!");
}
