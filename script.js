/* ═══════════════════════════════════════════════
   RITM — Shared Script for All Pages
   ═══════════════════════════════════════════════ */

const PAGE_MAP = {
    home: 'index.html',
    portfolio: 'port.html',
    sites: 'sam.html',
    services: 'ser.html',
    contact: 'con.html'
};

window.navigateTo = function(pageId) {
    const url = PAGE_MAP[pageId];
    if (url) window.location.href = url;
};

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
const isFinePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const TRANSLATIONS = {
    fa: {
        'nav-home': 'خانه', 'nav-portfolio': 'پورتفولیو', 'nav-sites': 'نمونه سایت ها', 'nav-services': 'خدمات', 'nav-contact': 'تماس', 'nav-cta': 'شروع پروژه',
        'hero-badge': 'آژانس خلاقیت دیجیتال', 'hero-title-prefix': 'ریتم –', 'hero-title-typing': 'تدوین خلاقانه',
        'hero-desc': 'ما مرزهای بین هنر دیجیتال و مهندسی نرم‌افزار را می‌شکنیم. با ریتم، داستان برند شما با بالاترین استانداردهای بصری و تکنیکال روایت می‌شود.',
        'hero-btn-start': 'شروع پروژه', 'hero-btn-portfolio': 'مشاهده پورتفولیو',
        'app-badge': 'نسخه اندروید — V2',
        'app-title': 'دانلود اپلیکیشن ریتم',
        'app-desc': 'اپلیکیشن رسمی ریتم رو روی گوشیت نصب کن و به تمام نمونه کارها، خدمات و راه‌های ارتباطی دسترسی سریع داشته باش.',
        'app-feat-1': 'اندروید', 'app-feat-2': 'سبک و سریع', 'app-feat-3': 'رایگان',
        'app-btn': 'دانلود اپلیکیشن',
        'services-title': 'خدمات تخصصی', 'services-sub': 'ترکیب هنر، حرکت و کد برای خلق تجربه‌های بی‌نظیر.',
        'service-video-title': 'تدوین و پست‌پروداکشن', 'service-video-desc': 'ویرایش حرفه‌ای ویدیو با پریمیر پرو، اصلاح رنگ با استانداردهای سینمایی.',
        'service-web-title': 'توسعه وب', 'service-web-desc': 'ساخت کدهای سایت‌های پیشرفته با عملکرد بالا و طراحی واکنش‌گرا.',
        'service-mobile-title': 'اپلیکیشن موبایل', 'service-mobile-desc': 'ساخت اپلیکیشن‌های موبایل پایه با تمرکز بر کارایی و تجربه کاربری.',
        'cta-title': 'آماده خلق یک اثر ماندگار هستید؟',
        'cta-desc': 'تیم متخصص ما آماده است تا ایده‌های شما را به واقعیت تبدیل کند. همین حالا برای مشاوره رایگان با ما تماس بگیرید.',
        'cta-btn': 'درخواست مشاوره رایگان',
        'portfolio-title': 'نمونه کارها',
        'portfolio-desc': 'مجموعه‌ای از پروژه‌های برگزیده ما در زمینه‌های تدوین ویدیو، توسعه وب و اپلیکیشن موبایل.',
        'portfolio-empty': 'هیچ پروژه‌ای با این فیلتر یافت نشد.',
        'filter-all': 'همه پروژه‌ها', 'filter-video': 'تدوین ویدیو', 'filter-web': 'توسعه وب', 'filter-mobile': 'اپلیکیشن موبایل',
        'p1-title': 'معرفی محصول', 'p1-desc': 'تدوین و مونتاژ تیزر با پریمیر پرو، شامل اصلاح رنگ و صداگذاری.',
        'p2-title': 'سایت شرکتی مدرن', 'p2-desc': 'طراحی و کدنویسی وب‌سایت شرکتی با انیمیشن‌های روان و بهینه‌سازی سئو.',
        'p3-title': 'اپلیکیشن مدیریت وظایف', 'p3-desc': 'اپلیکیشن موبایل ساده برای مدیریت وظایف روزانه با قابلیت ثبت و پیگیری.',
        'p4-title': 'تیزر تبلیغاتی', 'p4-desc': 'تدوین تیزر تبلیغاتی با ریتم‌سازی دقیق و افکت‌های بصری جذاب.',
        'p5-title': 'وب‌سایت رزومه', 'p5-desc': 'طراحی و پیاده‌سازی وب‌سایت شخصی با تمرکز بر سادگی و سرعت بارگذاری.',
        'p6-title': 'اپلیکیشن یادداشت‌برداری', 'p6-desc': 'اپلیکیشن موبایل سبک برای یادداشت‌برداری سریع با ذخیره‌سازی محلی.',
        'p7-title': 'ساخت ویدیو با AI', 'p7-desc': 'ساخت ویدیوهای خلاقانه با استفاده از هوش مصنوعی و تکنیک‌های نسل جدید.',
        'portfolio-cta': 'درخواست پروژه مشابه',
        'sites-title': 'دیدن نمونه سایت ها',
        'sites-desc': 'مجموعه‌ای کامل از وب‌سایت‌هایی که طراحی و پیاده‌سازی کرده‌ایم را می‌توانید در لینک زیر مشاهده کنید.',
        'sites-card-title': 'گالری کامل وب‌سایت ها',
        'sites-card-desc': 'روی دکمه زیر کلیک کنید تا تمام نمونه کارهای وب ما را در یک صفحه جداگانه ببینید.',
        'sites-btn': 'مشاهده نمونه سایت ها',
        'services-page-title': 'خدمات ما', 'services-page-desc': 'ما با ترکیب هنر دیجیتال و مهندسی نرم‌افزار، راه‌حل‌های خلاقانه و کاربردی برای برند شما ارائه می‌دهیم.',
        'sv1-1': 'تدوین فیلم، تیزر و مستند', 'sv1-2': 'اصلاح رنگ حرفه‌ای (Color Grading)', 'sv1-3': 'میکس و مسترینگ صدا',
        'sv2-1': 'وب‌سایت‌های شرکتی و شخصی', 'sv2-2': 'طراحی واکنش‌گرا (Responsive)', 'sv2-3': 'بهینه‌سازی سرعت و سئو',
        'sv3-1': 'اپلیکیشن‌های مدیریتی و یادداشت', 'sv3-2': 'رابط کاربری ساده و روان', 'sv3-3': 'ذخیره‌سازی محلی و آفلاین',
        'faq-title': 'سوالات متداول',
        'faq-q1': 'هزینه پروژه‌ها چگونه محاسبه می‌شود؟', 'faq-a1': 'هزینه بر اساس پیچیدگی، زمان تحویل و حجم کار تعیین می‌شود. برای دریافت برآورد دقیق، فرم تماس را پر کنید.',
        'faq-q2': 'چه مدت زمانی برای تحویل پروژه نیاز است؟', 'faq-a2': 'بسته به نوع پروژه متفاوت است. معمولاً تدوین ویدیو ۳ تا ۷ روز کاری، وب‌سایت ۱ تا ۲ هفته و اپلیکیشن ۲ تا ۴ هفته زمان می‌برد.',
        'faq-q3': 'آیا امکان اصلاح بعد از تحویل وجود دارد؟', 'faq-a3': 'بله، هر پروژه شامل دو مرحله اصلاحات رایگان است تا نتیجه نهایی مطابق انتظار شما باشد.',
        'faq-q4': 'آیا برای پروژه‌های بزرگ قرارداد رسمی منعقد می‌شود؟', 'faq-a4': 'بله، برای پروژه‌های بزرگ‌تر، قرارداد رسمی با جزئیات کامل تنظیم می‌شود تا حقوق هر دو طرف محفوظ باشد.',
        'services-cta': 'دریافت مشاوره رایگان',
        'contact-title': 'آغاز همکاری', 'contact-desc': 'ایده‌های خود را با ما در میان بگذارید تا با بالاترین کیفیت و در کمترین زمان آنها را به واقعیت تبدیل کنیم.',
        'contact-info-title': 'اطلاعات تماس', 'contact-email-label': 'ایمیل ارتباطی', 'contact-phone-label': 'تلفن تماس',
        'contact-address-label': 'آدرس', 'contact-address': 'تهران، ایران',
        'form-success': 'درخواست شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.',
        'form-error': 'خطا در ارسال فرم. لطفاً دوباره تلاش کنید.',
        'form-validation': 'لطفاً فیلدهای ضروری را به درستی پر کنید.',
        'form-name-label': 'نام و نام خانوادگی', 'form-name-error': 'لطفاً نام را وارد کنید',
        'form-contact-label': 'ایمیل یا شماره تماس', 'form-contact-error': 'لطفاً ایمیل یا شماره معتبر وارد کنید',
        'form-project-label': 'نوع پروژه', 'form-project-video': 'تدوین ویدیو', 'form-project-web': 'توسعه وب',
        'form-project-mobile': 'اپلیکیشن موبایل', 'form-project-other': 'سایر موارد',
        'form-budget-label': 'بودجه تقریبی (اختیاری)', 'form-budget-placeholder': 'انتخاب کنید...',
        'form-budget-1': 'کمتر از ۱۰ میلیون تومان', 'form-budget-2': '۱۰ تا ۵۰ میلیون تومان', 'form-budget-3': 'بیشتر از ۵۰ میلیون تومان',
        'form-budget-custom': 'مبلغ دلخواه...', 'form-budget-custom-placeholder': 'مبلغ دلخواه خود را وارد کنید (مثلاً ۲۵ میلیون تومان)',
        'form-message-label': 'توضیحات پروژه', 'form-message-error': 'لطفاً توضیحات پروژه را وارد کنید',
        'form-submit': 'ارسال درخواست',
        'form-sending': 'در حال ارسال...',
        'form-submit-error': 'خطا در ارسال فرم. لطفاً دوباره تلاش کنید.',
        'form-connection-error': 'خطا در اتصال. لطفاً دوباره تلاش کنید.',
        'modal-request': 'درخواست پروژه مشابه',
        'footer-copy': '© ۲۰۲۵ ریتم. تمامی حقوق محفوظ است.',
        'skip-link': 'پرش به محتوای اصلی',
        'a11y-back-to-top': 'بازگشت به بالا',
        'a11y-close': 'بستن',
        'a11y-cancel': 'لغو',
        'a11y-theme': 'تغییر حالت تاریک/روشن',
        'a11y-lang': 'تغییر زبان / Change language',
        'a11y-mobile-nav': 'ناوبری موبایل',
        'a11y-prev': 'پروژه قبلی',
        'a11y-next': 'پروژه بعدی',
        'video-loading-title': 'در حال آماده‌سازی ویدیو...',
        'video-loading-sub': 'لطفاً چند لحظه صبر کنید',
        'video-error-title': 'ویدیو در دسترس نیست',
        'video-retry': 'تلاش دوباره'
    },
    en: {
        'nav-home': 'Home', 'nav-portfolio': 'Portfolio', 'nav-sites': 'Site Samples', 'nav-services': 'Services', 'nav-contact': 'Contact', 'nav-cta': 'Start Project',
        'hero-badge': 'Digital Creative Agency', 'hero-title-prefix': 'RITM –', 'hero-title-typing': 'Creative Editing',
        'hero-desc': 'We bridge the gap between digital art and software engineering. With RITM, your brand story is told with the highest visual and technical standards.',
        'hero-btn-start': 'Start Project', 'hero-btn-portfolio': 'View Portfolio',
        'app-badge': 'Android Version — V2',
        'app-title': 'Download RITM App',
        'app-desc': 'Install the official RITM app on your phone for quick access to all portfolios, services, and contact options.',
        'app-feat-1': 'Android', 'app-feat-2': 'Light & Fast', 'app-feat-3': 'Free',
        'app-btn': 'Download App',
        'services-title': 'Expert Services', 'services-sub': 'Combining art, motion, and code to craft unique experiences.',
        'service-video-title': 'Video Editing & Post-Production', 'service-video-desc': 'Professional video editing with Premiere Pro, color grading to cinematic standards.',
        'service-web-title': 'Web Development', 'service-web-desc': 'Building advanced, high-performance websites with responsive design.',
        'service-mobile-title': 'Mobile App (Basic)', 'service-mobile-desc': 'Developing simple, functional mobile apps focused on efficiency and user experience.',
        'cta-title': 'Ready to create a lasting work?',
        'cta-desc': 'Our expert team is ready to turn your ideas into reality. Contact us for a free consultation today.',
        'cta-btn': 'Request Free Consultation',
        'portfolio-title': 'Our Work',
        'portfolio-desc': 'A selection of our featured projects in video editing, web development, and mobile apps.',
        'portfolio-empty': 'No projects found with this filter.',
        'filter-all': 'All Projects', 'filter-video': 'Video Editing', 'filter-web': 'Web Development', 'filter-mobile': 'Mobile App',
        'p1-title': 'Product Introduction', 'p1-desc': 'Editing and assembling a teaser with Premiere Pro, including color grading and sound design.',
        'p2-title': 'Modern Corporate Website', 'p2-desc': 'Design and coding of a corporate website with smooth animations and SEO optimization.',
        'p3-title': 'Task Management App', 'p3-desc': 'A simple mobile app for daily task management with tracking and logging features.',
        'p4-title': 'Promotional Teaser', 'p4-desc': 'Editing a Promotional Teaser with precise rhythm and stunning visual effects.',
        'p5-title': 'Resume Website', 'p5-desc': 'Design and implementation of a personal website focused on simplicity and loading speed.',
        'p6-title': 'Note-Taking App', 'p6-desc': 'A lightweight mobile app for quick note-taking with local storage.',
        'p7-title': 'AI Video Creation', 'p7-desc': 'Creating creative videos using artificial intelligence and next-generation techniques.',
        'portfolio-cta': 'Request Similar Project',
        'sites-title': 'View Site Samples',
        'sites-desc': 'You can see the complete collection of websites we have designed and implemented at the link below.',
        'sites-card-title': 'Complete Website Gallery',
        'sites-card-desc': 'Click the button below to view all our web projects on a separate page.',
        'sites-btn': 'View Site Samples',
        'services-page-title': 'Our Services', 'services-page-desc': 'We deliver creative and practical solutions for your brand by combining digital art and software engineering.',
        'sv1-1': 'Film, teaser, and documentary editing', 'sv1-2': 'Professional color grading', 'sv1-3': 'Audio mixing and mastering',
        'sv2-1': 'Corporate & personal websites', 'sv2-2': 'Responsive design', 'sv2-3': 'Speed and SEO optimization',
        'sv3-1': 'Management and note-taking apps', 'sv3-2': 'Simple and intuitive UI', 'sv3-3': 'Local and offline storage',
        'faq-title': 'Frequently Asked Questions',
        'faq-q1': 'How are project costs calculated?', 'faq-a1': 'Costs are determined based on complexity, delivery time, and workload. Fill out the contact form for a detailed estimate.',
        'faq-q2': 'How long does a project take?', 'faq-a2': 'It depends on the project. Video editing takes 3-7 business days, websites 1-2 weeks, and mobile apps 2-4 weeks.',
        'faq-q3': 'Is it possible to make revisions after delivery?', 'faq-a3': 'Yes, each project includes two rounds of free revisions to ensure the final result meets your expectations.',
        'faq-q4': 'Is a formal contract signed for large projects?', 'faq-a4': 'Yes, for larger projects we prepare a formal contract with full details to protect both parties.',
        'services-cta': 'Get Free Consultation',
        'contact-title': 'Start Collaboration', 'contact-desc': 'Share your ideas with us and we will bring them to life with the highest quality in the shortest time.',
        'contact-info-title': 'Contact Information', 'contact-email-label': 'Email', 'contact-phone-label': 'Phone',
        'contact-address-label': 'Address', 'contact-address': 'Tehran, Iran',
        'form-success': 'Your request has been sent successfully. We will contact you soon.',
        'form-error': 'Error submitting form. Please try again.',
        'form-validation': 'Please fill required fields correctly.',
        'form-name-label': 'Full Name', 'form-name-error': 'Please enter your name',
        'form-contact-label': 'Email or Phone', 'form-contact-error': 'Please enter a valid email or phone number',
        'form-project-label': 'Project Type', 'form-project-video': 'Video Editing', 'form-project-web': 'Web Development',
        'form-project-mobile': 'Mobile App', 'form-project-other': 'Other',
        'form-budget-label': 'Estimated Budget (optional)', 'form-budget-placeholder': 'Select...',
        'form-budget-1': 'Less than $200', 'form-budget-2': '$200 – $1,000', 'form-budget-3': 'More than $1,000',
        'form-budget-custom': 'Custom amount...', 'form-budget-custom-placeholder': 'Enter your custom amount (e.g. $500)',
        'form-message-label': 'Project Description', 'form-message-error': 'Please enter project details',
        'form-submit': 'Send Request',
        'form-sending': 'Sending...',
        'form-submit-error': 'Error submitting form. Please try again.',
        'form-connection-error': 'Connection error. Please try again.',
        'modal-request': 'Request Similar Project',
        'footer-copy': '© 2025 RITM. All rights reserved.',
        'skip-link': 'Skip to main content',
        'a11y-back-to-top': 'Back to top',
        'a11y-close': 'Close',
        'a11y-cancel': 'Cancel',
        'a11y-theme': 'Toggle dark/light mode',
        'a11y-lang': 'Change language / تغییر زبان',
        'a11y-mobile-nav': 'Mobile navigation',
        'a11y-prev': 'Previous project',
        'a11y-next': 'Next project',
        'video-loading-title': 'Preparing video...',
        'video-loading-sub': 'Please wait a moment',
        'video-error-title': 'Video unavailable',
        'video-retry': 'Try again'
    }
};

let currentLang = 'fa';
function t(key) { return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS.fa[key] || key; }

if (document.readyState !== 'loading') initApp();
else document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    hidePreloader();
    initNavigation();
    initRevealAnimations();
    initTiltEffect();
    initTypingEffect();
    initFilters();
    initSearch();
    initPortfolioStack();
    initVideoHover();
    initForm();
    initSmoothScroll();
    initParallax();
    initBackToTop();
    initScrollProgress();
    initModal();
    initFAQ();
    initParticles();
    initThemeToggle();
    initLanguageToggle();
    initFooterYear();
}

function hidePreloader() {
    const p = document.getElementById('preloader');
    if (p) setTimeout(() => p.classList.add('hidden'), 400);
}

function initFooterYear() {
    const el = document.getElementById('footer-copy');
    if (!el) return;
    const year = new Date().getFullYear();
    el.textContent = currentLang === 'fa'
        ? `© ${year.toString().replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])} ریتم. تمامی حقوق محفوظ است.`
        : `© ${year} RITM. All rights reserved.`;
}

function initNavigation() {
    const currentPage = window.CURRENT_PAGE || document.body.dataset.page || 'home';

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active', 'text-primary', 'font-bold');
        link.classList.add('text-on-surface/70');
        if (link.dataset.page === currentPage) {
            link.classList.add('active', 'text-primary', 'font-bold');
            link.classList.remove('text-on-surface/70');
        }
    });
    document.querySelectorAll('#mobile-nav .nav-link').forEach(link => {
        link.classList.remove('text-primary');
        link.classList.add('text-on-surface-variant');
        const icon = link.querySelector('.material-symbols-outlined');
        if (icon) icon.style.fontVariationSettings = "'FILL' 0";
        if (link.dataset.page === currentPage) {
            link.classList.add('text-primary');
            link.classList.remove('text-on-surface-variant');
            if (icon) icon.style.fontVariationSettings = "'FILL' 1";
        }
    });
}

let revealObserver;
function initRevealAnimations() {
    if (revealObserver) revealObserver.disconnect();
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    els.forEach(el => {
        el.classList.remove('visible');
        revealObserver.observe(el);
    });
}

function initTiltEffect() {
    if (!isFinePointer()) return;
    if (prefersReducedMotion()) return;
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mouseenter', () => { card.style.willChange = 'transform'; });
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            const cx = rect.width / 2, cy = rect.height / 2;
            const rx = (y - cy) / cy * -8;
            const ry = (x - cx) / cx * 8;
            card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px) scale(1.015)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
            card.style.willChange = 'auto';
        });
    });
}

function initTypingEffect() {
    const el = document.getElementById('typing-text');
    if (!el) return;
    const phrases = {
        fa: ['تدوین خلاقانه', 'توسعه وب', 'اپلیکیشن موبایل', 'ساخت کدهای سایت'],
        en: ['Creative Editing', 'Web Development', 'Mobile Apps', 'Code Crafting']
    };
    let phraseIndex = 0, charIndex = 0, isDeleting = false, isWaiting = false, timeout = null;

    if (prefersReducedMotion()) {
        el.textContent = (phrases[currentLang] || phrases.fa)[0];
        window.restartTyping = function(lang) {
            if (lang) currentLang = lang;
            el.textContent = (phrases[currentLang] || phrases.fa)[0];
        };
        return;
    }

    function type() {
        const list = phrases[currentLang] || phrases.fa;
        const phrase = list[phraseIndex % list.length];
        if (isWaiting) {
            timeout = setTimeout(() => { isWaiting = false; isDeleting = true; type(); }, 2000);
            return;
        }
        if (!isDeleting) {
            el.textContent = phrase.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === phrase.length) { isWaiting = true; timeout = setTimeout(type, 2000); return; }
            timeout = setTimeout(type, 80);
        } else {
            el.textContent = phrase.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) { isDeleting = false; phraseIndex = (phraseIndex + 1) % list.length; }
            timeout = setTimeout(type, 40);
        }
    }
    window.restartTyping = function(lang) {
        if (timeout) clearTimeout(timeout);
        if (lang) currentLang = lang;
        phraseIndex = 0; charIndex = 0; isDeleting = false; isWaiting = false;
        type();
    };
    type();
}

let portfolioState = { allCards: [], visibleCards: [], currentIndex: 0 };

function initPortfolioStack() {
    const stack = document.getElementById('portfolio-stack');
    if (!stack) return;
    portfolioState.allCards = Array.from(stack.querySelectorAll('.portfolio-card'));
    portfolioState.visibleCards = [...portfolioState.allCards];

    document.getElementById('stack-prev').addEventListener('click', () => goTo(portfolioState.currentIndex - 1));
    document.getElementById('stack-next').addEventListener('click', () => goTo(portfolioState.currentIndex + 1));

    document.addEventListener('keydown', (e) => {
        const section = document.getElementById('page-portfolio');
        if (!section) return;
        if (e.target.matches('input, textarea, select')) return;
        if (document.body.classList.contains('no-scroll')) return;
        if (e.key === 'ArrowLeft') goTo(portfolioState.currentIndex + 1);
        if (e.key === 'ArrowRight') goTo(portfolioState.currentIndex - 1);
    });

    let touchStartX = 0, touchStartY = 0, touchMoved = false;
    stack.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchMoved = false;
    }, { passive: true });
    stack.addEventListener('touchmove', () => { touchMoved = true; }, { passive: true });
    stack.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) < 50 || Math.abs(dy) > Math.abs(dx)) return;
        if (dx < 0) goTo(portfolioState.currentIndex + 1);
        else goTo(portfolioState.currentIndex - 1);
    }, { passive: true });

    renderStack();
}

function goTo(newIndex) {
    const total = portfolioState.visibleCards.length;
    if (total === 0) return;
    newIndex = Math.max(0, Math.min(total - 1, newIndex));
    if (newIndex === portfolioState.currentIndex) return;
    portfolioState.currentIndex = newIndex;
    renderStack();
}

function renderStack() {
    const { visibleCards, currentIndex } = portfolioState;
    const total = visibleCards.length;

    portfolioState.allCards.forEach(card => {
        if (!visibleCards.includes(card)) {
            card.style.display = 'none';
            card.dataset.pos = 'hidden-up';
            return;
        }
        card.style.display = 'flex';
    });

    visibleCards.forEach((card, i) => {
        const offset = i - currentIndex;
        let pos;
        if (offset === 0) pos = '0';
        else if (offset === 1) pos = '1';
        else if (offset === 2) pos = '2';
        else if (offset === 3) pos = '3';
        else if (offset === -1) pos = '-1';
        else if (offset < -1) pos = 'hidden-down';
        else pos = 'hidden-up';
        card.dataset.pos = pos;
    });

    const cur = document.getElementById('stack-current');
    const tot = document.getElementById('stack-total');
    const prev = document.getElementById('stack-prev');
    const next = document.getElementById('stack-next');
    if (cur) cur.textContent = total === 0 ? 0 : currentIndex + 1;
    if (tot) tot.textContent = total;
    if (prev) prev.disabled = currentIndex <= 0;
    if (next) next.disabled = currentIndex >= total - 1;

    const empty = document.getElementById('portfolio-empty');
    const controls = document.getElementById('portfolio-controls');
    if (empty) empty.classList.toggle('show', total === 0);
    if (controls) controls.style.visibility = total === 0 ? 'hidden' : 'visible';
}

function initFilters() {
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            applyPortfolioFilters();
        });
    });
}
function initSearch() {
    const s = document.getElementById('portfolio-search');
    if (s) s.addEventListener('input', applyPortfolioFilters);
}
function applyPortfolioFilters() {
    const activeFilter = document.querySelector('.filter-chip.active')?.dataset.filter || 'all';
    const searchTerm = (document.getElementById('portfolio-search')?.value || '').toLowerCase().trim();

    portfolioState.visibleCards = portfolioState.allCards.filter(card => {
        const category = card.dataset.category;
        const titleKey = card.dataset.titleKey;
        const descKey = card.dataset.descKey;
        const title = titleKey ? t(titleKey).toLowerCase() : '';
        const desc = descKey ? t(descKey).toLowerCase() : '';
        const matchFilter = (activeFilter === 'all' || category === activeFilter);
        const matchSearch = (!searchTerm || title.includes(searchTerm) || desc.includes(searchTerm));
        return matchFilter && matchSearch;
    });

    portfolioState.currentIndex = 0;
    renderStack();
}

function initVideoHover() {
    if (!isFinePointer()) return;
    if (prefersReducedMotion()) return;
    document.querySelectorAll('.portfolio-card .portfolio-video').forEach(video => {
        const card = video.closest('.portfolio-card');
        if (!card) return;
        card.addEventListener('mouseenter', () => {
            if (card.dataset.pos !== '0') return;
            const p = video.play();
            if (p && p.catch) p.catch(() => {});
        });
        card.addEventListener('mouseleave', () => {
            video.pause();
            try { video.currentTime = 0; } catch (e) {}
        });
    });
}

function initForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    const successEl = document.getElementById('form-success');
    const errorEl = document.getElementById('form-error');
    const errorTextEl = document.getElementById('form-error-text');
    const submitBtn = document.getElementById('submit-btn');

    const nameInput = document.getElementById('name');
    const contactInput = document.getElementById('contact');
    const messageInput = document.getElementById('message');
    const budgetSelect = document.getElementById('budget');
    const customBudgetWrapper = document.getElementById('custom-budget-wrapper');
    const customBudgetInput = document.getElementById('custom-budget');
    const customBudgetCancel = document.getElementById('custom-budget-cancel');

    function showCustomBudget() {
        customBudgetWrapper.classList.add('show');
        budgetSelect.removeAttribute('name');
        customBudgetInput.setAttribute('name', 'budget');
        setTimeout(() => customBudgetInput.focus(), 300);
    }
    function hideCustomBudget() {
        customBudgetWrapper.classList.remove('show');
        customBudgetInput.removeAttribute('name');
        budgetSelect.setAttribute('name', 'budget');
        budgetSelect.value = '';
        customBudgetInput.value = '';
    }

    budgetSelect.addEventListener('change', () => {
        if (budgetSelect.value === '__custom__') showCustomBudget();
        else hideCustomBudget();
    });
    customBudgetCancel.addEventListener('click', hideCustomBudget);

    nameInput.addEventListener('blur', () => validateField(nameInput, nameInput.value.trim().length >= 2));
    contactInput.addEventListener('blur', () => validateField(contactInput, isValidContact(contactInput.value.trim())));
    messageInput.addEventListener('blur', () => validateField(messageInput, messageInput.value.trim().length >= 10));

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const isNameValid = nameInput.value.trim().length >= 2;
        const isContactValid = isValidContact(contactInput.value.trim());
        const isMessageValid = messageInput.value.trim().length >= 10;
        validateField(nameInput, isNameValid);
        validateField(contactInput, isContactValid);
        validateField(messageInput, isMessageValid);

        if (!isNameValid || !isContactValid || !isMessageValid) {
            if (errorTextEl) errorTextEl.textContent = t('form-validation');
            errorEl.classList.add('show');
            return;
        }

        if (customBudgetWrapper.classList.contains('show')) {
            const v = customBudgetInput.value.trim();
            if (v) customBudgetInput.setAttribute('name', 'budget');
            else customBudgetInput.removeAttribute('name');
        }

        successEl.classList.remove('show');
        errorEl.classList.remove('show');
        submitBtn.disabled = true;
        const submitLabel = submitBtn.querySelector('span[data-i18n="form-submit"]');
        if (submitLabel) submitLabel.textContent = t('form-sending');

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                successEl.classList.add('show');
                errorEl.classList.remove('show');
                form.reset();
                hideCustomBudget();
                submitBtn.classList.add('shake');
                setTimeout(() => submitBtn.classList.remove('shake'), 500);
            } else {
                if (errorTextEl) errorTextEl.textContent = t('form-submit-error');
                errorEl.classList.add('show');
                submitBtn.classList.add('shake');
                setTimeout(() => submitBtn.classList.remove('shake'), 500);
            }
        } catch (error) {
            if (errorTextEl) errorTextEl.textContent = t('form-connection-error');
            errorEl.classList.add('show');
            submitBtn.classList.add('shake');
            setTimeout(() => submitBtn.classList.remove('shake'), 500);
        } finally {
            submitBtn.disabled = false;
            if (submitLabel) submitLabel.textContent = t('form-submit');
        }
    });
}
function validateField(input, isValid) {
    const msg = input.parentElement.querySelector('.validation-message');
    if (isValid) {
        input.classList.remove('input-invalid');
        input.classList.add('input-valid');
        if (msg) msg.classList.add('hidden');
    } else {
        input.classList.remove('input-valid');
        input.classList.add('input-invalid');
        if (msg) msg.classList.remove('hidden');
    }
}
function isValidContact(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+98|0)?9\d{9}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
    });
}
function initParallax() {
    if (prefersReducedMotion() || isMobile()) return;
    const hero = document.querySelector('#page-home .min-h-\\[80vh\\]');
    if (!hero) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const y = window.scrollY;
            if (y < window.innerHeight) {
                hero.style.transform = `translateY(${y * 0.2}px)`;
                hero.style.opacity = 1 - (y / window.innerHeight) * 0.6;
            }
            ticking = false;
        });
    }, { passive: true });
}

function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    });
}
function initScrollProgress() {
    const bar = document.getElementById('scroll-progress-bar');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = ((window.scrollY / h) * 100) + '%';
    }, { passive: true });
}

function initModal() {
    const modalOverlay = document.getElementById('project-modal');
    if (!modalOverlay) return;
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');
    const modalContent = modalOverlay.querySelector('.modal-content');
    let activeVideo = null;
    let focusTrapCleanup = null;
    let previousFocus = null;

    document.querySelectorAll('#portfolio-stack .portfolio-card').forEach(card => {
        card.addEventListener('click', () => {
            if (card.dataset.pos !== '0') return;

            const type = card.dataset.type || 'image';
            const media = card.dataset.media || '';
            const poster = card.dataset.poster || '';
            const titleKey = card.dataset.titleKey;
            const descKey = card.dataset.descKey;
            const title = t(titleKey);
            const desc = t(descKey);

            let mediaHtml = '';
            if (type === 'video') {
                mediaHtml = `
                    <div class="video-stage">
                        <video src="${media}" ${poster ? `poster="${poster}"` : ''} controls autoplay muted playsinline preload="metadata" class="modal-video"></video>
                        <div class="video-fallback" role="status" aria-live="polite">
                            <div class="vf-aurora"></div>
                            <div class="vf-grid-bg"></div>
                            <div class="vf-scanline"></div>
                            <div class="vf-center">
                                <div class="vf-orb">
                                    <span class="vf-orb-ring"></span>
                                    <span class="vf-orb-ring vf-orb-ring-2"></span>
                                    <span class="vf-orb-ring vf-orb-ring-3"></span>
                                    <span class="material-symbols-outlined vf-orb-icon">movie</span>
                                </div>
                                <h4 class="vf-title" data-vf-title>${t('video-loading-title')}</h4>
                                <p class="vf-sub" data-vf-sub>${t('video-loading-sub')}</p>
                                <div class="vf-progress"><div class="vf-progress-bar"></div></div>
                                <button class="vf-retry" type="button" data-vf-retry>
                                    <span class="material-symbols-outlined">refresh</span>
                                    <span>${t('video-retry')}</span>
                                </button>
                            </div>
                        </div>
                    </div>`;
            } else {
                mediaHtml = `<img src="${media}" alt="${title}" class="w-full rounded-lg mb-4" onerror="this.style.display='none'">`;
            }

            modalBody.innerHTML = `
                <h3 id="modal-title" class="text-2xl font-bold mb-4">${title}</h3>
                ${mediaHtml}
                <p class="text-on-surface-variant mb-6">${desc}</p>
                <div class="flex gap-3 justify-end">
                    <button class="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold" id="modal-cta">
                        ${t('modal-request')}
                    </button>
                </div>
            `;

            document.querySelectorAll('.portfolio-video').forEach(v => {
                v.pause();
                try { v.currentTime = 0; } catch (e) {}
            });

            previousFocus = document.activeElement;
            modalOverlay.classList.add('active');
            document.body.classList.add('no-scroll');

            focusTrapCleanup = trapFocus(modalContent);

            activeVideo = modalBody.querySelector('video');
            if (activeVideo) {
                setupModalVideo(activeVideo, modalBody.querySelector('.video-fallback'));
            }

            const cta = document.getElementById('modal-cta');
            if (cta) {
                cta.addEventListener('click', () => {
                    closeModal();
                    setTimeout(() => {
                        navigateTo('contact');
                        try {
                            sessionStorage.setItem('ritm-prefill-project-type', card.dataset.category || '');
                        } catch (e) {}
                    }, 100);
                });
            }
        });
    });

    function setupModalVideo(video, fallback) {
        if (!fallback) return;
        const retryBtn = fallback.querySelector('[data-vf-retry]');
        const titleEl = fallback.querySelector('[data-vf-title]');

        let showTimer = setTimeout(() => { fallback.classList.add('show'); }, 350);
        let errorTimer = setTimeout(() => { if (video.readyState < 2) showErrorState(); }, 8000);

        function hideFallback() {
            clearTimeout(showTimer);
            clearTimeout(errorTimer);
            fallback.classList.remove('show', 'error');
        }
        function showErrorState() {
            clearTimeout(showTimer);
            clearTimeout(errorTimer);
            if (titleEl) titleEl.textContent = t('video-error-title');
            fallback.classList.add('show', 'error');
        }

        video.addEventListener('loadeddata', hideFallback);
        video.addEventListener('canplay', hideFallback);
        video.addEventListener('playing', hideFallback);
        video.addEventListener('error', showErrorState);

        if (retryBtn) {
            retryBtn.addEventListener('click', () => {
                fallback.classList.remove('error');
                if (titleEl) titleEl.textContent = t('video-loading-title');
                fallback.classList.remove('show');
                clearTimeout(errorTimer);
                errorTimer = setTimeout(() => { if (video.readyState < 2) showErrorState(); }, 8000);
                try { video.load(); } catch (e) {}
                const p = video.play();
                if (p && p.catch) p.catch(() => {});
            });
        }

        const p = video.play();
        if (p && p.catch) p.catch(() => {});
    }

    function trapFocus(container) {
        const sel = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
        const focusables = Array.from(container.querySelectorAll(sel)).filter(el => el.offsetParent !== null);
        if (!focusables.length) return () => {};
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        function handler(e) {
            if (e.key !== 'Tab') return;
            if (focusables.length === 1) { e.preventDefault(); first.focus(); return; }
            if (e.shiftKey) {
                if (document.activeElement === first) { e.preventDefault(); last.focus(); }
            } else {
                if (document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        }
        container.addEventListener('keydown', handler);
        setTimeout(() => { try { first.focus(); } catch (e) {} }, 50);
        return () => container.removeEventListener('keydown', handler);
    }

    function closeModal() {
        if (activeVideo) {
            activeVideo.pause();
            activeVideo.removeAttribute('src');
            try { activeVideo.load(); } catch (e) {}
            activeVideo = null;
        }
        if (focusTrapCleanup) { focusTrapCleanup(); focusTrapCleanup = null; }
        modalOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
        setTimeout(() => { modalBody.innerHTML = ''; }, 300);
        if (previousFocus && typeof previousFocus.focus === 'function') {
            try { previousFocus.focus(); } catch (e) {}
        }
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
    });
}

function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    if (prefersReducedMotion()) return;
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        const dpr = window.devicePixelRatio || 1;
        const w = canvas.offsetWidth;
        const h = canvas.offsetHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    class P {
        constructor() {
            this.x = Math.random() * canvas.offsetWidth;
            this.y = Math.random() * canvas.offsetHeight;
            this.size = Math.random() * 2 + 1;
            this.sx = (Math.random() - 0.5) * 0.3;
            this.sy = (Math.random() - 0.5) * 0.3;
            this.o = Math.random() * 0.5 + 0.2;
        }
        update() {
            const w = canvas.offsetWidth, h = canvas.offsetHeight;
            this.x += this.sx; this.y += this.sy;
            if (this.x < 0 || this.x > w) this.sx *= -1;
            if (this.y < 0 || this.y > h) this.sy *= -1;
        }
        draw() {
            const isDark = document.documentElement.classList.contains('dark');
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = isDark ? `rgba(208, 188, 255, ${this.o})` : `rgba(109, 59, 215, ${this.o * 0.65})`;
            ctx.fill();
        }
    }
    particles = Array.from({ length: window.innerWidth < 768 ? 25 : 50 }, () => new P());

    function animate() {
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
        resize();
        particles = Array.from({ length: window.innerWidth < 768 ? 25 : 50 }, () => new P());
    });
}

function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    const html = document.documentElement;
    const icon = toggle.querySelector('.material-symbols-outlined');

    const saved = localStorage.getItem('ritm-theme');
    if (saved === 'light') {
        html.classList.remove('dark');
        icon.textContent = 'light_mode';
    } else if (saved === 'dark') {
        html.classList.add('dark');
        icon.textContent = 'dark_mode';
    } else {
        icon.textContent = html.classList.contains('dark') ? 'dark_mode' : 'light_mode';
    }

    function doToggle() {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        icon.textContent = isDark ? 'dark_mode' : 'light_mode';
        localStorage.setItem('ritm-theme', isDark ? 'dark' : 'light');
    }
    toggle.addEventListener('click', doToggle);
    toggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); doToggle(); }
    });
}

function initLanguageToggle() {
    const toggle = document.getElementById('lang-toggle');
    const label = document.getElementById('lang-label');
    if (!toggle) return;
    const html = document.documentElement;

    const saved = localStorage.getItem('ritm-lang');
    currentLang = saved === 'en' ? 'en' : 'fa';
    applyLanguage(currentLang);

    toggle.addEventListener('click', () => {
        currentLang = currentLang === 'fa' ? 'en' : 'fa';
        applyLanguage(currentLang);
        localStorage.setItem('ritm-lang', currentLang);
    });

    function applyLanguage(lang) {
        html.lang = lang;
        html.dir = lang === 'fa' ? 'rtl' : 'ltr';
        if (label) label.textContent = lang === 'fa' ? 'English' : 'فارسی';

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            const tr = t(key);
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.placeholder && !el.hasAttribute('data-i18n-placeholder')) el.placeholder = tr;
            } else if (el.tagName === 'OPTION') {
                el.textContent = tr;
            } else {
                if (el.id === 'typing-text') return;
                el.textContent = tr;
            }
        });

        document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
            el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel));
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = t(el.dataset.i18nPlaceholder);
        });

        const searchInput = document.getElementById('portfolio-search');
        if (searchInput) searchInput.placeholder = lang === 'fa' ? 'جستجو...' : 'Search...';
        const nameInput = document.getElementById('name');
        if (nameInput) nameInput.placeholder = lang === 'fa' ? 'مثال: علی رضایی' : 'e.g. John Doe';
        const contactInput = document.getElementById('contact');
        if (contactInput) contactInput.placeholder = lang === 'fa' ? '0912... یا email@example.com' : '0912... or email@example.com';
        const messageInput = document.getElementById('message');
        if (messageInput) messageInput.placeholder = lang === 'fa' ? 'لطفاً جزئیات پروژه خود را اینجا بنویسید...' : 'Please write your project details here...';

        if (window.restartTyping) window.restartTyping(lang);
        if (typeof applyPortfolioFilters === 'function') applyPortfolioFilters();
        if (typeof initFooterYear === 'function') initFooterYear();
    }
}