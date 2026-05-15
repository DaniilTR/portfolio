import './App.css';
import myImage from './iamges/banner-img.jpg';
import project1 from './iamges/projects-1.png';
import project2 from './iamges/projects-2.png';
import project3 from './iamges/projects-3.png';

function App() {
  const contacts = {
    location: 'Алматы, Казахстан',
    phoneDisplay: '+7 (705) 726 8212',
    phoneE164: '77057268212',
    emails: ['asdfghjkl228338@mail.ru', 'qwertyasd.228336@gmail.com'],
    portfolio: 'https://daniiltr.github.io/portfolio',
    github: 'https://github.com/DaniilTR',
  };

  const skills = {
    securityAndInfra: [
      'SIEM Splunk',
      'IDS / IPS',
      'Анализ сетевого трафика',
      'Wireshark',
      'Linux administration',
      'Windows administration',
      'Работа с удалёнными серверами',
      'Основы сетевой безопасности',
      'Troubleshooting',
      'TCP/IP, DNS, DHCP, HTTP/HTTPS (база)',
      'Git / GitHub',
    ],
    backendAndWeb: [
      'Node.js',
      'Express.js',
      'REST API',
      'JavaScript',
      'React',
      'Python',
      'Java',
      'SQL',
      'MySQL',
      'PostgreSQL',
      'MariaDB',
    ],
    tools: ['Linux (Ubuntu)', 'Bash', 'VS Code', 'Yarn', 'npm', 'SCSS', 'HTML5 / CSS3', 'Docker (базовые знания)'],
  };

  const projects = [
    {
      title: 'ATX Wallet — Crypto Wallet Application',
      image: project1,
      description:
        'Мобильное crypto wallet приложение с упором на Web3 и безопасность: UI/UX, интеграция Web3/Blockchain логики, сборка Android и публикация тестовой версии.',
      links: [
        {
          label: 'Google Play (test)',
          href:
            'https://play.google.com/apps/test/RQtx2E2mKaE/ahAO29uNRlOc1gf6vmO0b0jxOFU2ERdII1k0QIWUPaMXgwhuzpJvK-c4LIc4Id_QWhVHSwKnJ19YMsPFjNhkRh1Ovt',
        },
        { label: 'GitHub', href: 'https://github.com/DaniilTR/atx_wallet' },
      ],
      stack: ['Flutter', 'Dart', 'Web3', 'API integration', 'Local storage'],
    },
    {
      title: 'T‑Shirt Store — Fullstack Web Application',
      image: project2,
      description:
        'Fullstack pet‑проект интернет‑магазина одежды: каталог, компонентная архитектура React, адаптивная вёрстка и работа с состоянием приложения.',
      links: [
        { label: 'Demo', href: 'https://daniiltr.github.io/tshirt/' },
        { label: 'GitHub', href: 'https://github.com/DaniilTR/tshirt' },
      ],
      stack: ['React', 'JavaScript', 'SCSS', 'Node.js', 'REST API'],
    },
    {
      title: 'Портфолио',
      image: project3,
      description: 'Этот сайт‑портфолио: кратко обо мне, опыте и проектах — в одном месте.',
      links: [{ label: 'Открыть', href: contacts.portfolio }],
      stack: ['React', 'CSS'],
    },
  ];

  return (
    <div className="App" id="top">
      <div className='Header'>
        <div className='Container'>
          <a href='#top' className='LinkName'>Daniil Trofimov</a>
        </div>
      </div>

      <div className='Banner'>
        <div className='BannerText'>
          <h1>
           Infrastructure Engineer
          </h1>
        </div>
        <div className='BannerImg'>
          <h3>Трофимов Даниил Евгеньевич</h3>
          <img
            src={myImage}
            alt='banner' />
        </div>
      </div>

      <div className='resume'>
        <div className='Container'>
          <div className='row'>
            <div className='resume-text-header'>
              <h2>О себе</h2>
            </div>

            <div className='resume-text'>
              <p>
                Практико‑ориентированный IT‑специалист с опытом системного администрирования, разработки веб‑приложений и изучения
                информационной безопасности. Самостоятельно изучаю инфраструктуру, backend/frontend разработку, Linux и основы
                SOC/сетевой безопасности.
              </p>
              <p>
                Имею опыт работы с серверами, анализом сетевого трафика, SIEM‑системами и разработкой pet‑проектов, включая Web3/crypto
                wallet приложение и fullstack веб‑приложения.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='section'>
        <div className='Container'>
          <h2 className='section-title'>Ключевые навыки</h2>

          <div className='section-grid'>
            <div className='card'>
              <h3>Информационная безопасность и инфраструктура</h3>
              <ul className='list'>
                {skills.securityAndInfra.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className='card'>
              <h3>Backend / Web Development</h3>
              <ul className='list'>
                {skills.backendAndWeb.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className='card'>
              <h3>Dev / Tools</h3>
              <ul className='list'>
                {skills.tools.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='section section-alt'>
        <div className='Container'>
          <h2 className='section-title'>Опыт работы</h2>

          <div className='card'>
            <h3>ORDA Game Center — Системный администратор</h3>
            <p className='muted'>Алматы · Июнь 2023 — Июль 2024 (1 год 2 месяца)</p>
            <ul className='list'>
              <li>Настройка и обслуживание компьютеров</li>
              <li>Настройка серверов</li>
              <li>Администрирование локальной сети</li>
              <li>Удалённая поддержка пользователей</li>
              <li>Диагностика и устранение технических неисправностей</li>
              <li>Работа с Windows и Linux системами</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='project'>
        <div className='Container'>
          <h2 className='project-p'>
            <span className='Span-pr'>проекты</span>
            <br />
            Несколько последних pet‑проектов
          </h2>
          <div className='Img-project'>
            {projects.map((project) => (
              <section key={project.title} className='project-card'>
                <img alt='project' src={project.image} />
                <div className='text-pr'>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className='project-links'>
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target='_blank' rel='noopener noreferrer'>
                        {link.label}
                      </a>
                    ))}
                  </div>

                  <div className='taglist'>
                    {project.stack.map((tag) => (
                      <span key={tag} className='tag'>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <div className='section'>
        <div className='Container'>
          <h2 className='section-title'>Образование</h2>
          <div className='card'>
            <h3>Казахский национальный технический университет имени К. И. Сатпаева</h3>
            <p className='muted'>Алматы · Окончание: 2026</p>
            <p>Специальность: Информационная безопасность телекоммуникационных систем (специалист по защите информации)</p>
          </div>

          <h2 className='section-title'>Языки и дополнительное</h2>
          <div className='section-grid section-grid-2'>
            <div className='card'>
              <h3>Языки</h3>
              <ul className='list'>
                <li>Русский — родной</li>
                <li>Английский — B1</li>
              </ul>
            </div>
            <div className='card'>
              <h3>Дополнительно</h3>
              <ul className='list'>
                <li>Быстрое самостоятельное обучение</li>
                <li>Аналитическое мышление</li>
                <li>Работа с технической документацией</li>
                <li>Практический подход к обучению</li>
                <li>Водительские права: категория B</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='contact'>
        <div className='Container'>
          <h2>Контакты</h2>
          <p>Если хочешь связаться — вот самые быстрые способы:</p>
          <ul>
            <li>
              WhatsApp: <a href={`https://wa.me/${contacts.phoneE164}`}>{contacts.phoneDisplay}</a>
            </li>
            <li>
              Email: <a href={`mailto:${contacts.emails[0]}`}>{contacts.emails[0]}</a>
            </li>
            <li>
              Email (второй): <a href={`mailto:${contacts.emails[1]}`}>{contacts.emails[1]}</a>
            </li>
            <li>
              Portfolio: <a href={contacts.portfolio} target='_blank' rel='noopener noreferrer'>{contacts.portfolio}</a>
            </li>
            <li>
              GitHub: <a href={contacts.github} target='_blank' rel='noopener noreferrer'>{contacts.github}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className='footer'>
        <p>{new Date().getFullYear()} · Daniil Trofimov · React</p>
        <div className='social'>
          <a href={contacts.portfolio} target='_blank' rel='noopener noreferrer'>Portfolio</a>
          <a href={contacts.github} target='_blank' rel='noopener noreferrer'>GitHub</a>
        </div>
      </div>
      
    </div>
  );
} 

export default App;
