document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('.theme-toggle');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preferredTheme;
  try { preferredTheme = localStorage.getItem('portfolio-theme'); } catch {}
  const themeCopy = {
    en: { light: 'Light', dark: 'Dark', label: 'Dark mode', toLight: 'Switch to light mode', toDark: 'Switch to dark mode' },
    fr: { light: 'Clair', dark: 'Sombre', label: 'Mode sombre', toLight: 'Passer en mode clair', toDark: 'Passer en mode sombre' },
    ar: { light: 'فاتح', dark: 'داكن', label: 'الوضع الداكن', toLight: 'التبديل إلى الوضع الفاتح', toDark: 'التبديل إلى الوضع الداكن' }
  };
  const applyTheme = theme => {
    const dark = theme === 'dark';
    document.documentElement.dataset.theme = theme;
    const copy = themeCopy[document.documentElement.lang] || themeCopy.en;
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(dark));
      themeToggle.setAttribute('aria-label', copy.label);
      themeToggle.title = dark ? copy.toLight : copy.toDark;
      themeToggle.querySelector('.theme-icon').textContent = dark ? '☾' : '☀';
      themeToggle.querySelector('.theme-label').textContent = copy[theme];
    }
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = dark ? '#080b12' : '#f7f9fd';
  };
  applyTheme(document.documentElement.dataset.theme || (systemTheme.matches ? 'dark' : 'light'));
  themeToggle?.addEventListener('click', () => {
    preferredTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(preferredTheme);
    try { localStorage.setItem('portfolio-theme', preferredTheme); } catch {}
  });
  systemTheme.addEventListener('change', event => {
    if (preferredTheme !== 'light' && preferredTheme !== 'dark') applyTheme(event.matches ? 'dark' : 'light');
  });

  // Snapshot text nodes once so translation preserves markup and original copy.
  const arabicText = {"Skip to content": "انتقل إلى المحتوى", "MOHAMED LAARIBI": "محمد لعريبي", "Building": "أبني", "intelligent": "أنظمة ذكية", "systems for the": "تخدم", "real world": "العالم الواقعي", "BASED IN LAAYOUNE, MOROCCO": "مقيم في العيون، المغرب", "INTELLIGENT SYSTEMS ENGINEERING · 2027": "هندسة الأنظمة الذكية · ٢٠٢٧", "AI · DATA · WEB": "ذكاء · بيانات · ويب", "27°09' N": "٢٧°٠٩′ شمالاً", "13°12' W": "١٣°١٢′ غرباً", "Machine Learning": "التعلّم الآلي", "Natural Language Processing": "معالجة اللغات الطبيعية", "Data Engineering": "هندسة البيانات", "Full-Stack Development": "تطوير التطبيقات المتكاملة", "01 / A LITTLE ABOUT ME": "٠١ / نبذة عني", "Curious by nature.": "فضولي بطبعي.", "Engineer by practice.": "مهندس بالممارسة.", "I’m a Master’s student in": "أنا طالب ماجستير في", "Intelligent Systems Engineering": "هندسة الأنظمة الذكية", "at Ibn Tofail University. I enjoy turning complex ideas into practical software, from training language models to building resilient web applications and containerized services.": "بجامعة ابن طفيل. أستمتع بتحويل الأفكار المعقدة إلى برمجيات عملية، من تدريب النماذج اللغوية إلى بناء تطبيقات ويب موثوقة وخدمات تعمل داخل حاويات.", "My experience spans machine learning, NLP, Docker microservices, CI/CD, and full-stack development. I’m currently seeking a PFE internship or an entry-level opportunity where I can help build useful, thoughtful technology.": "تشمل خبرتي التعلّم الآلي، ومعالجة اللغات الطبيعية، والخدمات المصغرة باستخدام دوكر، والتكامل والتسليم المستمرين، وتطوير التطبيقات المتكاملة. أبحث حالياً عن تدريب لمشروع نهاية الدراسة أو فرصة مهنية للمبتدئين أساهم من خلالها في بناء حلول تقنية مفيدة ومدروسة.", "CURRENTLY STUDYING": "أدرس حالياً", "Ibn Tofail University · Expected 2027": "جامعة ابن طفيل · التخرج المتوقع سنة ٢٠٢٧", "AREAS I WORK IN": "مجالات عملي", "AI / ML · NLP · Data · Web": "الذكاء الاصطناعي · التعلّم الآلي · اللغات الطبيعية · البيانات · الويب", "From research to production-minded builds": "من البحث إلى بناء حلول قابلة للتشغيل", "LANGUAGES": "اللغات", "Arabic · English · French": "العربية · الإنجليزية · الفرنسية", "Native · C1 (TOEIC 960/990) · Intermediate": "اللغة الأم · مستوى متقدم C1 (TOEIC: ٩٦٠/٩٩٠) · مستوى متوسط", "02 / SELECTED PROJECTS": "٠٢ / مشاريع مختارة", "Things I've": "مشاريع", "built.": "أنجزتها.", "ACADEMIC & PERSONAL WORK": "أعمال أكاديمية وشخصية", "MASTER'S PROJECT": "مشروع ماجستير", "REST · MICROSERVICES": "واجهات REST · خدمات مصغرة", "UniversiBot": "المساعد الجامعي الذكي", "An intelligent university chatbot": "مساعد محادثة ذكي للجامعة", "Designed a containerized chatbot architecture using Docker microservices communicating through REST APIs. Set up a CI/CD pipeline to automate build, test, and deployment workflows.": "صممت بنية لمساعد محادثة تعمل داخل حاويات دوكر، وتتواصل خدماتها المصغرة عبر واجهات REST. وأعددت مساراً للتكامل والتسليم المستمرين لأتمتة البناء والاختبار والنشر.", "Docker": "دوكر", "Microservices": "الخدمات المصغرة", "REST APIs": "واجهات REST البرمجية", "CI/CD": "التكامل والتسليم المستمران", "GitHub ↗": "غيت هاب ↗", "SEQ2SEQ · LSTM": "تسلسل إلى تسلسل · ذاكرة طويلة قصيرة المدى", "French Spell Checker": "المدقق الإملائي الفرنسي", "Neural correction for French text": "تصحيح النصوص الفرنسية بالشبكات العصبية", "Trained a Seq2Seq LSTM autoencoder on the Lexique383 lexicon and compared supervised correction with language-model-based strategies.": "دربت مُرمّزاً تلقائياً من نوع تسلسل إلى تسلسل باستخدام شبكات الذاكرة الطويلة قصيرة المدى على معجم Lexique383، وقارنت التصحيح الخاضع للإشراف بأساليب تعتمد على النماذج اللغوية.", "Python": "بايثون", "NLP": "معالجة اللغات الطبيعية", "Seq2Seq": "تسلسل إلى تسلسل", "LSTM": "ذاكرة طويلة قصيرة المدى", "TEAM OF 2": "فريق من شخصين", "MACHINE LEARNING": "التعلّم الآلي", "Player Value Prediction": "توقّع القيمة السوقية للاعبين", "Forecasting football player market value": "تقدير القيمة السوقية للاعبي كرة القدم", "Built a machine learning model to estimate the market value of professional football players as part of a two-person Master's project.": "طورت نموذج تعلّم آلي لتقدير القيمة السوقية للاعبي كرة القدم المحترفين ضمن مشروع ماجستير أنجزه فريق من شخصين.", "Data": "البيانات", "PERSONAL PROJECT": "مشروع شخصي", "129 GITHUB COMMITS": "١٢٩ إيداعاً برمجياً على غيت هاب", "Soubai-Shop": "متجر السوباعي", "A complete e-commerce experience": "تجربة متكاملة للتجارة الإلكترونية", "Built an online shop with product and category pages, shopping cart, checkout flow, and an admin area.": "أنشأت متجراً إلكترونياً يضم صفحات للمنتجات والتصنيفات، وسلة تسوق، ومساراً لإتمام الطلب، ولوحة للإدارة.", "JavaScript": "جافاسكريبت", "HTML": "لغة HTML", "CSS": "تنسيقات CSS", "LATEST FROM GITHUB": "أحدث أعمالي على غيت هاب", "Recent public repositories": "أحدث المستودعات العامة", "View all repositories ↗": "عرض جميع المستودعات ↗", "Loading recent repositories…": "جارٍ تحميل أحدث المستودعات…", "03 / WHERE I'VE BEEN": "٠٣ / مسيرتي المهنية", "Experience &": "الخبرة", "practice.": "والممارسة.", "PROFESSIONAL EXPERIENCE": "الخبرة المهنية", "MAY — JUN 2025": "مايو — يونيو ٢٠٢٥", "Web Developer Intern": "متدرب في تطوير الويب", "· Atlas Sahara": "· أطلس الصحراء", "Contributed to developing and optimizing a web application managing hundreds of gas stations across the Sahara region, from Guelmim to Lagouira, using ASP.NET and Blazor.": "ساهمت في تطوير وتحسين تطبيق ويب لإدارة مئات محطات الوقود في منطقة الصحراء، من كلميم إلى الكويرة، باستخدام ASP.NET وبلازور.", "Blazor": "بلازور", "Web Applications": "تطبيقات الويب", "MAY — JUN 2023": "مايو — يونيو ٢٠٢٣", "Digital Archivist": "مسؤول الأرشفة الرقمية", "· Provincial Directorate of Education": "· المديرية الإقليمية للتعليم", "Digitally and physically archived thousands of documents. Updated the archiving software using C# and a UI framework.": "أرشفت آلاف الوثائق رقمياً وورقياً، وحدّثت برنامج الأرشفة باستخدام لغة C# وإطار عمل لواجهات المستخدم.", "Digital Archiving": "الأرشفة الرقمية", "JUL 2022 — JAN 2023": "يوليو ٢٠٢٢ — يناير ٢٠٢٣", "Web Developer & Designer": "مطور ويب ومصمم", "· DEGILUX": "· ديجيلوكس", "Created logos, posters, and commercial materials for local projects, and contributed to websites and apps supporting regional initiatives.": "صممت شعارات وملصقات ومواد تجارية لمشاريع محلية، وساهمت في مواقع وتطبيقات تدعم مبادرات جهوية.", "Web Development": "تطوير الويب", "Photoshop": "فوتوشوب", "Illustrator": "إليستريتور", "04 / LEARNING JOURNEY": "٠٤ / مسيرتي التعليمية", "Education, skills": "التعليم والمهارات", "& more.": "والمزيد.", "Education": "التعليم", "2025 — 2027": "٢٠٢٥ — ٢٠٢٧", "Master's Degree · Intelligent Systems Engineering (AICS/ISI)": "ماجستير · هندسة الأنظمة الذكية (AICS/ISI)", "Ibn Tofail University, Faculty of Science · Kenitra": "جامعة ابن طفيل، كلية العلوم · القنيطرة", "2023 — 2024": "٢٠٢٣ — ٢٠٢٤", "Bachelor of Fundamental Studies · Mathematics & Computer Science": "إجازة في الدراسات الأساسية · الرياضيات وعلوم الحاسوب", "Includes DEUG in Mathematics and Computer Science · Ibn Tofail University": "تشمل دبلوم الدراسات الجامعية العامة في الرياضيات وعلوم الحاسوب · جامعة ابن طفيل", "2021 — 2023": "٢٠٢١ — ٢٠٢٣", "BTS · Information Systems Development": "شهادة التقني العالي · تطوير نظم المعلومات", "Lissane Eddine Ibn Al-Khatib High School": "ثانوية لسان الدين بن الخطيب", "Toolkit": "المهارات والأدوات", "PROGRAMMING": "البرمجة", "HTML & CSS": "بناء صفحات الويب وتنسيقها", "AI & DATA": "الذكاء الاصطناعي والبيانات", "Scientific Computing": "الحوسبة العلمية", "DEVOPS & WEB": "التطوير والتشغيل والويب", "Git & GitHub": "غيت وغيت هاب", "Bootstrap": "بوتستراب", "DESIGN": "التصميم", "Adobe Photoshop": "أدوبي فوتوشوب", "Adobe Illustrator": "أدوبي إليستريتور", "Certifications": "الشهادات", "Culture of Entrepreneurship and Innovation": "ثقافة ريادة الأعمال والابتكار", "Africa Business School · UM6P · Phosboucraa Foundation": "كلية أفريقيا للأعمال · جامعة محمد السادس متعددة التخصصات التقنية · مؤسسة فوسبوكراع", "Responsive Web Design": "تصميم الويب المتجاوب", "freeCodeCamp": "فري كود كامب", "Scientific Computing with Python": "الحوسبة العلمية باستخدام بايثون", "JavaScript Algorithms and Data Structures": "الخوارزميات وهياكل البيانات باستخدام جافاسكريبت", "Thoughtfully built in Morocco. ©": "صُمم بعناية في المغرب. ©", "Mohamed Laaribi.": "محمد لعريبي.", "LinkedIn ↗": "لينكدإن ↗", "Email ↗": "البريد الإلكتروني ↗", "Main navigation": "التنقل الرئيسي", "Mohamed Laaribi, home": "محمد لعريبي، الصفحة الرئيسية", "Language selector": "اختيار اللغة", "Focus areas": "مجالات التخصص"};
  const translateArabic = text => arabicText[text] || (/^\d{2,4}$/.test(text) ? text.replace(/\d/g, digit => '٠١٢٣٤٥٦٧٨٩'[digit]) : text);
  const staticText = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.textContent.trim() && !node.parentElement.closest('[data-i18n],script,style,#github-projects,.theme-toggle')) staticText.push([node, node.textContent]);
  }
  const staticLabels = Array.from(document.querySelectorAll('[aria-label]'))
    .filter(element => !element.matches('.theme-toggle,.menu-toggle'))
    .map(element => [element, element.getAttribute('aria-label')]);
  const originalTitle = document.title;
  const description = document.querySelector('meta[name="description"]');
  const originalDescription = description?.content;
  const menuLabel = open => document.documentElement.lang === 'ar' ? (open ? 'إغلاق القائمة' : 'فتح القائمة') : document.documentElement.lang === 'fr' ? (open ? 'Fermer le menu' : 'Ouvrir le menu') : (open ? 'Close navigation' : 'Open navigation');
  let refreshRepositories = () => {};

  const translations = {
    en: {
      navAbout: 'About', navWork: 'Work', navExperience: 'Experience', navEducation: 'Education', navContact: "Let's talk",
      availability: 'SEEKING GROWTH-FOCUSED ENGINEERING OPPORTUNITIES',
      heroLead: "I'm Mohamed — an AI & Machine Learning Engineer with a passion for NLP, data engineering, and full-stack development.",
      exploreWork: 'Explore my work', contactAction: 'Get in touch', contactEyebrow: "05 / WHAT'S NEXT?",
      contactHeading: "Let's build something", contactHeadingAccent: 'meaningful.',
      contactCopy: 'I’m eager to contribute to ambitious teams, deepen my expertise in AI and software engineering, and take on work that creates measurable value.',
      nameLabel: 'Your name', namePlaceholder: 'How should I address you?', emailLabel: 'Email address', emailPlaceholder: 'you@example.com',
      messageLabel: 'Your message', messagePlaceholder: 'Tell me a little about it...', submit: 'Open email draft',
      formNote: 'This form opens your email app. No message is stored on this site.'
    },
    fr: {
      navAbout: 'À propos', navWork: 'Projets', navExperience: 'Expérience', navEducation: 'Formation', navContact: 'Échangeons',
      availability: 'À LA RECHERCHE D’OPPORTUNITÉS D’INGÉNIERIE AXÉES SUR L’ÉVOLUTION PROFESSIONNELLE',
      heroLead: 'Je suis Mohamed — ingénieur en IA et machine learning, passionné par le NLP, l’ingénierie des données et le développement full-stack.',
      exploreWork: 'Découvrir mes projets', contactAction: 'Me contacter', contactEyebrow: '05 / ET MAINTENANT ?',
      contactHeading: 'Construisons quelque chose de', contactHeadingAccent: 'marquant.',
      contactCopy: 'Je souhaite contribuer à des équipes ambitieuses, approfondir mon expertise en IA et en génie logiciel, et réaliser des projets à forte valeur ajoutée.',
      nameLabel: 'Votre nom', namePlaceholder: 'Comment puis-je vous appeler ?', emailLabel: 'Adresse e-mail', emailPlaceholder: 'vous@exemple.com',
      messageLabel: 'Votre message', messagePlaceholder: 'Parlez-moi un peu de votre projet...', submit: 'Ouvrir un e-mail',
      formNote: 'Ce formulaire ouvre votre application e-mail. Aucun message n’est stocké sur ce site.'
    },
    ar: {
      navAbout: 'نبذة', navWork: 'المشاريع', navExperience: 'الخبرة', navEducation: 'التعليم', navContact: 'تواصل معي',
      availability: 'أبحث عن فرص هندسية تدعم النمو المهني',
      heroLead: 'أنا محمد، مهندس ذكاء اصطناعي وتعلّم آلي شغوف بمعالجة اللغات الطبيعية وهندسة البيانات وتطوير التطبيقات المتكاملة.',
      exploreWork: 'استكشف أعمالي', contactAction: 'تواصل معي', contactEyebrow: '٠٥ / الخطوة التالية',
      contactHeading: 'لنبنِ شيئاً', contactHeadingAccent: 'ذا قيمة.',
      contactCopy: 'أتطلع إلى المساهمة ضمن فرق طموحة، وتعميق خبرتي في الذكاء الاصطناعي وهندسة البرمجيات، والعمل على حلول تحقق قيمة ملموسة.',
      nameLabel: 'الاسم', namePlaceholder: 'كيف يمكنني مخاطبتك؟', emailLabel: 'البريد الإلكتروني', emailPlaceholder: 'you@example.com',
      messageLabel: 'رسالتك', messagePlaceholder: 'أخبرني قليلاً عن مشروعك...', submit: 'فتح رسالة بريد',
      formNote: 'يفتح هذا النموذج تطبيق البريد الإلكتروني لديك. لا يتم تخزين أي رسالة على هذا الموقع.'
    }
  };
  const languageButtons = document.querySelectorAll('.language-button');
  const setLanguage = language => {
    const copy = translations[language] || translations.en;
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = copy[element.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => { element.placeholder = copy[element.dataset.i18nPlaceholder]; });
    staticText.forEach(([node, original]) => {
      const text = original.trim();
      node.textContent = language === 'ar' ? original.replace(text, translateArabic(text)) : original;
    });
    staticLabels.forEach(([element, original]) => {
      const translated = arabicText[original] || original.replace(/^View (.*) repository on GitHub$/, (_, title) => `عرض مستودع ${translateArabic(title)} على غيت هاب`);
      element.setAttribute('aria-label', language === 'ar' ? translated : original);
    });
    document.title = language === 'ar' ? 'محمد لعريبي — مهندس الذكاء الاصطناعي والتعلّم الآلي' : originalTitle;
    if (description) description.content = language === 'ar' ? 'محمد لعريبي، مهندس ذكاء اصطناعي وتعلّم آلي ومطور تطبيقات متكاملة مقيم في المغرب. اكتشف مشاريعي وخبرتي ومهاراتي.' : originalDescription;
    document.querySelector('meta[property="og:title"]').content = document.title;
    document.querySelector('meta[property="og:description"]').content = description.content;
    const menu = document.querySelector('.menu-toggle');
    if (menu) menu.setAttribute('aria-label', menuLabel(menu.getAttribute('aria-expanded') === 'true'));
    languageButtons.forEach(button => {
      const active = button.dataset.language === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('portfolio-language', language); } catch {}
    applyTheme(document.documentElement.dataset.theme);
    const yearLabel = document.querySelector('#year');
    if (yearLabel) yearLabel.textContent = new Intl.NumberFormat(language === 'ar' ? 'ar' : 'en', { useGrouping: false }).format(new Date().getFullYear());
    refreshRepositories();
  };
  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  let savedLanguage;
  try { savedLanguage = localStorage.getItem('portfolio-language'); } catch {}
  setLanguage(savedLanguage && translations[savedLanguage] ? savedLanguage : 'en');
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', menuLabel(!open));
      links.classList.toggle('is-open', !open);
    });
    links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', menuLabel(false));
      links.classList.remove('is-open');
    }));
  }
  const form = document.querySelector('#contact-form');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const arabic = document.documentElement.lang === 'ar';
    const subject = `${arabic ? 'رسالة عبر الموقع من' : 'Portfolio contact from'} ${String(data.get('name')).trim()}`;
    const body = `${arabic ? 'مرحباً محمد،' : 'Hi Mohamed,'}\n\n${String(data.get('message')).trim()}\n\n— ${String(data.get('name')).trim()}\n${String(data.get('email')).trim()}`;
    const note = document.querySelector('#form-note');
    if (note) note.textContent = arabic ? 'سيفتح تطبيق البريد الإلكتروني برسالة جاهزة للإرسال. إذا لم يفتح، راسلني مباشرة على mohamedlaaribi45@gmail.com.' : 'Your email app should open with the message ready to send. If it does not, email mohamedlaaribi45@gmail.com directly.';
    window.location.href = `mailto:mohamedlaaribi45@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
  const githubProjects = document.querySelector('#github-projects');
  const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
  if (githubProjects) {
    const normalizeProjectName = name => String(name).toLowerCase().replace(/[^a-z0-9]/g, '');
    // Include repository aliases when the featured title differs from GitHub.
    const featuredNames = new Set([
      ...Array.from(document.querySelectorAll('#work .project-grid .project-card h3'), heading => normalizeProjectName(heading.textContent)),
      ...['UniversiBot', 'French-Spell-Checker', 'Smart-Spell-Checker', 'Player-Value-Prediction', 'Football-Player-Market-Value-Prediction', 'Soubai-Shop'].map(normalizeProjectName)
    ]);
    document.querySelectorAll('#work .project-grid a[href]').forEach(link => {
      const url = new URL(link.href, window.location.href);
      const segments = url.pathname.split('/').filter(Boolean);
      if (url.hostname === 'github.com' && segments[0]?.toLowerCase() === 'mo7kun' && segments[1]) {
        featuredNames.add(normalizeProjectName(segments[1]));
      }
    });
    // Public repository metadata only: never put a GitHub token in frontend code.
    const loadRepositories = async () => {
      const repositories = [];
      for (let page = 1; ; page += 1) {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 12000);
        try {
          const response = await fetch(`https://api.github.com/users/MO7KUN/repos?sort=created&direction=desc&per_page=100&page=${page}`, {
            headers: { Accept: 'application/vnd.github+json' },
            signal: controller.signal,
            cache: 'no-cache'
          });
          if (!response.ok) throw new Error('GitHub repositories could not be loaded.');
          const batch = await response.json();
          if (!Array.isArray(batch)) throw new Error('Unexpected GitHub response.');
          repositories.push(...batch);
          if (batch.length < 100) return repositories;
        } finally {
          clearTimeout(timeout);
        }
      }
    };
    const repositoryArabic = {
      'Hotel-Price-Prediction-and-Tourism-Analytics': ['توقّع أسعار الفنادق وتحليل السياحة', 'دراسة لأسعار غرف الفنادق باستخدام نماذج التعلّم الآلي، وتجميع الفنادق، ولوحة تفاعلية لتحليل السياحة.'],
      'mohamed-laaribi-portfolio': ['موقعي الشخصي', 'موقع يعرض مشاريعي وخبرتي ومهاراتي ووسائل التواصل معي.'],
      'Cold-Family-Feud': ['لعبة التحدي العائلي', 'لعبة تحدٍّ عائلي متوافقة مع الهواتف، تتضمن أزراراً تفاعلية للمشاركين.'],
      'PFE-E-Sahara': ['مشروع نهاية الدراسة — الصحراء الإلكترونية', 'استكشف ملفات المشروع وتفاصيله في المستودع على غيت هاب.'],
      'Direction-Provinciale-GRH': ['إدارة الموارد البشرية بالمديرية الإقليمية', 'استكشف ملفات المشروع وتفاصيله في المستودع على غيت هاب.'],
      'Library-Management-Systeme': ['نظام إدارة المكتبة', 'استكشف ملفات المشروع وتفاصيله في المستودع على غيت هاب.'],
      'PDS': ['مشروع PDS', 'استكشف ملفات المشروع وتفاصيله في المستودع على غيت هاب.'],
      'minter-dapp': ['تطبيق لامركزي للسكّ', 'استكشف ملفات المشروع وتفاصيله في المستودع على غيت هاب.'],
      'MO7KUN': ['ملفي الشخصي على غيت هاب', 'ملفات إعداد ملفي الشخصي على غيت هاب.']
    };
    let repositoryData = null;
    let repositoryError = false;
    let cachedAt = 0;
    const cacheKey = 'portfolio-public-repositories-v1';
    try {
      const cached = JSON.parse(sessionStorage.getItem(cacheKey) || 'null');
      if (cached && Array.isArray(cached.repositories) && cached.repositories.every(repo => typeof repo.name === 'string' && !repo.private && !repo.disabled)) {
        repositoryData = cached.repositories;
        cachedAt = Number(cached.time) || 0;
      }
    } catch {}
    refreshRepositories = () => {
      const language = document.documentElement.lang;
      const arabic = language === 'ar';
      const french = language === 'fr';
      const copy = arabic ? { label: 'مستودع على غيت هاب', open: 'عرض المستودع على غيت هاب:', fallback: 'استكشف هذا المشروع على غيت هاب.', code: 'برمجيات', updated: 'آخر تحديث', empty: 'لا توجد مستودعات عامة إضافية حالياً.', loading: 'جارٍ تحميل أحدث المستودعات…', error: 'تعذّر تحميل المستودعات حالياً. يمكنك استكشاف أعمالي على غيت هاب.' } : french ? { label: 'DÉPÔT GITHUB', open: 'Ouvrir sur GitHub :', fallback: 'Découvrez ce projet sur GitHub.', code: 'Code', updated: 'Mis à jour', empty: 'Aucun autre dépôt public disponible.', loading: 'Chargement des dépôts…', error: 'Dépôts indisponibles. Découvrez mes projets sur GitHub.' } : { label: 'GITHUB REPOSITORY', open: 'Open on GitHub:', fallback: 'Explore this project on GitHub.', code: 'Code', updated: 'Updated', empty: 'No additional public repositories are available yet.', loading: 'Loading recent repositories…', error: 'Recent repositories are unavailable right now. Visit GitHub to explore my work.' };
      if (!repositoryData) {
        githubProjects.innerHTML = `<p class="github-loading">${repositoryError ? copy.error : copy.loading}</p>`;
        return;
      }
      const dateFormat = new Intl.DateTimeFormat(arabic ? 'ar-MA' : french ? 'fr-FR' : 'en-GB', { dateStyle: 'medium' });
      const numbers = new Intl.NumberFormat(arabic ? 'ar' : 'en');
      const projects = repositoryData.filter(repository => !repository.private && !repository.disabled && !featuredNames.has(normalizeProjectName(repository.name))).slice(0, 9);
      githubProjects.innerHTML = projects.length ? projects.map(repository => {
        const localized = repositoryArabic[repository.name];
        const title = arabic && localized ? localized[0] : repository.name.replace(/[-_]/g, ' ');
        const summary = arabic ? localized?.[1] || copy.fallback : repository.description || copy.fallback;
        const languageName = arabic ? translateArabic(repository.language || copy.code) : repository.language || copy.code;
        const date = new Date(repository.updated_at);
        const updated = Number.isNaN(date.getTime()) ? '' : `<span>${copy.updated} ${dateFormat.format(date)}</span>`;
        return `<article class="github-project-card">
          <div class="github-project-top"><span>${copy.label}</span><a href="https://github.com/MO7KUN/${encodeURIComponent(repository.name)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(copy.open + ' ' + title)}">↗</a></div>
          <h4><bdi>${escapeHtml(title)}</bdi></h4>
          <p>${escapeHtml(summary)}</p>
          <div class="github-project-meta"><span><bdi>${escapeHtml(languageName)}</bdi></span><span>★ ${numbers.format(Number(repository.stargazers_count) || 0)}</span>${updated}</div>
        </article>`;
      }).join('') : `<p class="github-loading">${copy.empty}</p>`;
    };
    refreshRepositories();
    const startLoading = () => {
      if (repositoryData && Date.now() - cachedAt < 600000) return;
      loadRepositories().then(repositories => {
        repositoryData = repositories.filter(repository => !repository.private && !repository.disabled).map(({ name, description, language, stargazers_count, updated_at }) => ({ name, description, language, stargazers_count, updated_at }));
        try { sessionStorage.setItem(cacheKey, JSON.stringify({ time: Date.now(), repositories: repositoryData })); } catch {}
        refreshRepositories();
      }).catch(() => { repositoryError = true; refreshRepositories(); });
    };
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) { observer.disconnect(); startLoading(); }
      }, { rootMargin: '500px' });
      observer.observe(githubProjects);
    } else startLoading();
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Intl.NumberFormat(document.documentElement.lang === 'ar' ? 'ar' : 'en', { useGrouping: false }).format(new Date().getFullYear());
});
