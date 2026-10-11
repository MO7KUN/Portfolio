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
      exploreWork: 'استكشف أعمالي', contactAction: 'تواصل معي', contactEyebrow: '05 / الخطوة التالية',
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
    languageButtons.forEach(button => {
      const active = button.dataset.language === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('portfolio-language', language); } catch {}
    applyTheme(document.documentElement.dataset.theme);
  };
  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  let savedLanguage;
  try { savedLanguage = localStorage.getItem('portfolio-language'); } catch {}
  if (savedLanguage && translations[savedLanguage]) setLanguage(savedLanguage);
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      links.classList.toggle('is-open', !open);
    });
    links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      links.classList.remove('is-open');
    }));
  }
  const form = document.querySelector('#contact-form');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = `Portfolio contact from ${String(data.get('name')).trim()}`;
    const body = `Hi Mohamed,\n\n${String(data.get('message')).trim()}\n\n— ${String(data.get('name')).trim()}\n${String(data.get('email')).trim()}`;
    const note = document.querySelector('#form-note');
    if (note) note.textContent = 'Your email app should open with the message ready to send. If it does not, email mohamedlaaribi45@gmail.com directly.';
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
    loadRepositories()
      .then(repositories => {
        const projects = repositories
          .filter(repository => !repository.private && !repository.disabled && !featuredNames.has(normalizeProjectName(repository.name)))
          .slice(0, 9);
        githubProjects.innerHTML = projects.length ? projects.map(repository => `
          <article class="github-project-card">
            <div class="github-project-top"><span>GITHUB REPOSITORY</span><a href="https://github.com/MO7KUN/${encodeURIComponent(repository.name)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHtml(repository.name)} on GitHub">↗</a></div>
            <h4>${escapeHtml(repository.name.replace(/[-_]/g, ' '))}</h4>
            <p>${escapeHtml(repository.description || 'Explore this project on GitHub.')}</p>
            <div class="github-project-meta"><span>${escapeHtml(repository.language || 'Code')}</span><span>★ ${repository.stargazers_count}</span><span>Updated ${new Date(repository.updated_at).toLocaleDateString()}</span></div>
          </article>`).join('') : '<p class="github-loading">No public repositories are available yet.</p>';
      })
      .catch(() => { githubProjects.innerHTML = '<p class="github-loading">Recent repositories are unavailable right now. Visit GitHub to explore my work.</p>'; });
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
});
