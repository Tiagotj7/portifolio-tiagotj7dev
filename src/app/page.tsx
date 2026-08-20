'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';


import gitlogo from './assets/git_dev.png';
import linklogo from './assets/link_dev.png';
import instalogo from './assets/insta_logo_dev.png';
import heroPortrait from './assets/hero-portrait.png';
import aboutPortrait from './assets/about-portrait.jpg';
import type { IconType } from 'react-icons';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaPhp, FaLinux, FaShieldAlt, FaWordpress, FaBug,
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiNextdotjs, SiNestjs, SiMysql, SiPostgresql, SiFirebase, SiSupabase,
} from 'react-icons/si';

// CONFIGURAÇÃO DO EMAILJS - SUBSTITUA PELOS SEUS DADOS
const EMAILJS_CONFIG = {
  serviceId: 'service_ru7swxa',    // Substitua pelo seu Service ID
  templateId: 'template_mdy70wm',   // Substitua pelo seu Template ID
  publicKey: 'Tg4sjZ-iNTZ_Hrr03'     // Substitua pela sua Public Key
};

const CERTS = [
  { text: 'Técnico em Desenvolvimento de Sistemas', tag: '// SENAI · cursando' },
  { text: 'Internet do Comportamento (IoB) em Serviços Públicos Digitais', tag: '// certificado' },
  { text: 'Site utilizando HTML, CSS e JS', tag: '// certificado' },
  { text: 'Segurança em Tecnologia da Informação', tag: '// certificado' },
  { text: 'Introdução ao Hacking e Pentest 2.0', tag: '// certificado' },
  { text: 'Introdução ao Excel', tag: '// certificado' },
  { text: 'Visual Studio Code', tag: '// certificado' },
  { text: 'Desenvolvimento Moderno de Software', tag: '// certificado' },
  { text: 'Informática Básica', tag: '// certificado' },
  { text: 'Formação DIO.me', tag: '// bootcamp' },
];

const SKILLS = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS',
  'Python', 'C', 'C++', 'PHP', 'MySQL', 'PostgreSQL', 'Firebase', 'Supabase', 'Linux', 'WordPress',
];

// Efeito "galeria expansiva" — inspirado no modelo de galeria CSS que você mandou
const CAPACITACOES: { name: string; desc: string; from: string; to: string; icon: IconType; icon2?: IconType }[] = [
  { name: 'HTML5', desc: 'Estrutura semântica e acessível para a web.', from: '#e2431c', to: '#5c130c', icon: FaHtml5 },
  { name: 'CSS3', desc: 'Layout, animações e responsividade.', from: '#5b6b78', to: '#23292e', icon: FaCss3Alt },
  { name: 'JavaScript', desc: 'Interatividade e lógica no front-end.', from: '#ffb65c', to: '#c9491c', icon: SiJavascript },
  { name: 'TypeScript', desc: 'Tipagem estática para código mais seguro.', from: '#8fa1ad', to: '#3d474e', icon: SiTypescript },
  { name: 'React', desc: 'Interfaces componentizadas e reativas.', from: '#ff7a33', to: '#7a1710', icon: FaReact },
  { name: 'Next.js', desc: 'Aplicações React com SSR, rotas e performance.', from: '#8fa1ad', to: '#101316', icon: SiNextdotjs },
  { name: 'Node.js', desc: 'APIs e serviços back-end em JavaScript.', from: '#5b6b78', to: '#101316', icon: FaNodeJs },
  { name: 'NestJS', desc: 'Back-end estruturado e escalável em TypeScript.', from: '#c9491c', to: '#2a1208', icon: SiNestjs },
  { name: 'Python', desc: 'Automação, scripts e back-end.', from: '#5b6b78', to: '#17110c', icon: FaPython },
  { name: 'PHP', desc: 'Back-end e integração com WordPress.', from: '#ffb65c', to: '#5c130c', icon: FaPhp },
  { name: 'Bancos de Dados', desc: 'Modelagem e consultas com MySQL e PostgreSQL.', from: '#ffb65c', to: '#3d2410', icon: SiMysql, icon2: SiPostgresql },
  { name: 'Firebase & Supabase', desc: 'Backend as a service, auth e banco em nuvem.', from: '#ff7a33', to: '#3a1208', icon: SiFirebase, icon2: SiSupabase },
  { name: 'Linux', desc: 'Administração, automação e hardening de servidores.', from: '#d43c1a', to: '#0a0a0b', icon: FaLinux },
  { name: 'Cibersegurança', desc: 'Pentest, hardening e boas práticas.', from: '#d43c1a', to: '#0a0a0b', icon: FaShieldAlt },
];

// Efeito "flip card" — inspirado no modelo de card CSS que você mandou.
// Substitua pelos seus projetos reais (título, descrição, stack e link).
const PROJETOS: { title: string; category: string; desc: string; stack: string[]; link: string; from: string; to: string; icon: IconType }[] = [
  {
    title: 'Portfólio Pessoal',
    category: 'Front-end · Next.js',
    desc: 'Este site: interface em React/Next.js com foco em performance, acessibilidade e identidade visual própria.',
    stack: ['Next.js', 'TypeScript', 'CSS'],
    link: 'https://github.com/Tiagotj7/',
    from: '#ff7a33', to: '#7a1710',
    icon: SiNextdotjs,
  },
  {
    title: 'Painel de Gestão',
    category: 'Front-end · Dashboard',
    desc: 'Interface de painel administrativo com componentes reutilizáveis e consumo de API REST.',
    stack: ['React', 'JavaScript', 'API REST'],
    link: 'https://github.com/Tiagotj7/',
    from: '#5b6b78', to: '#23292e',
    icon: FaReact,
  },
  {
    title: 'Landing Page Institucional',
    category: 'Web · WordPress',
    desc: 'Site institucional responsivo, com CMS customizado e otimização de carregamento.',
    stack: ['WordPress', 'PHP', 'CSS'],
    link: 'https://github.com/Tiagotj7/',
    from: '#8fa1ad', to: '#3d474e',
    icon: FaWordpress,
  },
  {
    title: 'Ferramenta de Pentest',
    category: 'Segurança · Script',
    desc: 'Script em Python para varredura e diagnóstico básico de vulnerabilidades em ambientes de teste.',
    stack: ['Python', 'Linux', 'Segurança'],
    link: 'https://github.com/Tiagotj7/',
    from: '#ffb65c', to: '#d43c1a',
    icon: FaBug,
  },
];

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const submitBtn = form.querySelector('.submit-btn') as HTMLButtonElement;
    const originalText = submitBtn.textContent;

    submitBtn.innerHTML = 'Enviando...';
    submitBtn.style.background = 'linear-gradient(135deg, #f39c12, #e67e22)';
    submitBtn.disabled = true;

    try {
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form,
        EMAILJS_CONFIG.publicKey
      );

      console.log('Email enviado com sucesso:', result.text);

      submitBtn.innerHTML = 'Enviado! ✓';
      submitBtn.style.background = '#22c55e';

      setTimeout(() => {
        submitBtn.innerHTML = originalText || 'Enviar mensagem';
        submitBtn.style.background = '';
        submitBtn.disabled = false;
        form.reset();
      }, 2000);

    } catch (error) {
      console.error('Erro ao enviar email:', error);

      submitBtn.innerHTML = 'Erro ao enviar ✗';
      submitBtn.style.background = '#dc3545';

      setTimeout(() => {
        submitBtn.innerHTML = originalText || 'Enviar mensagem';
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 3000);
    }
  };

  return (
    <div className='App'>
      {/* Nav pill flutuante */}
      <header className="App-header">
        <div className='nav-pill'>
          <div className='nav-brand'>
            <span className='nav-brand-icon'>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M12 2V22M3 7L21 17M21 7L3 17" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
            </span>
            <span className='nav-brand-name'>tiagotj7.dev</span>
          </div>
          <ul className='nav-links'>
            <li><a href="#inicio" className='nav-link-active'>Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#capacitacoes">Capacitações</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#certificados">Certificados</a></li>
          </ul>
          <a href="#contato" className='nav-cta-ghost'>
            <span className='nav-cta-dot'></span>
            Contato
            <span className='nav-cta-arrow'>→</span>
          </a>
        </div>
      </header>

      {/* Apresentação */}
      <main className='main-content' id='inicio'>
        <div className='hero-v2'>
          {/* Coluna esquerda — texto */}
          <div className='hero-v2-text' data-aos="fade-up">
            <div className='section-eyebrow hero-eyebrow-v2'>DESENVOLVEDOR FULL STACK &amp; CIBERSEGURANÇA</div>
            <h1 className='hero-title-v2'>
              <span className='hero-title-line'>Construo interfaces.</span>
              <span className='hero-title-gradient'>Protejo<br />sistemas.</span>
            </h1>
            <p className='hero-desc-v2'>
              Soluções digitais modernas com foco em performance,<br />
              segurança e experiência do usuário.
            </p>
            <div className='hero-cta-v2'>
              <a href="#projetos" className='btn-primary-v2'>Ver projetos →</a>
              <a href="https://drive.google.com/file/d/13tjN7JVKBRxSTfySOSU3wBl5sT_az3gU/view?usp=drive_link" target="_blank" className='btn-ghost-v2'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><polygon points="2,1 10,6 2,11" /></svg>
                Baixar currículo
              </a>
            </div>
            <div className='hero-badges-v2'>
              <span className='hero-badge'>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                Alagoinhas, BA
              </span>
              <span className='hero-badge'>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                Full Stack
              </span>
              <span className='hero-badge'>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                Foco em Cibersegurança
              </span>
            </div>
          </div>

          {/* Coluna direita — imagem */}
          <div className='hero-v2-image' data-aos="fade-left">
            <div className='hero-v2-img-wrap'>
              <Image
                src={heroPortrait}
                alt="Tiago Carvalho"
                fill
                priority
                className='hero-v2-photo'
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
              {/* Linha laranja decorativa lateral direita */}
              <div className='hero-v2-line'></div>
              {/* Partículas decorativas */}
              <div className='hero-v2-dots'>
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sobre Mim */}
      <section className='about-section' id='sobre'>
        <div className='about-grid'>
          <div className='note-container' data-aos="fade-right">
            <div className='about-media-frame'>
              <Image src={aboutPortrait} className='notelogo-container' alt="Tiago Carvalho" />
            </div>
          </div>
          <div className='comment' data-aos="fade-left">
            <div className='section-eyebrow'>sobre_mim</div>
            <h1>Desenvolvedor Full Stack & Cibersegurança</h1>
            <p>
              Sou Desenvolvedor Full Stack com foco em desenvolvimento web, software e cibersegurança, apaixonado por criar soluções inovadoras e eficientes. Trabalho com HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, NestJS, PHP, Python, C++, MySQL, PostgreSQL, Firebase e Supabase, utilizando plataformas como Vercel, InfinityFree e AlwaysData. Também possuo experiência com Linux, incluindo distribuições como Kali Linux, Zorin OS, Ubuntu, entre outras, além de conhecimentos em infraestrutura, automação e segurança. Meu foco está em desenvolver aplicações modernas, escaláveis e seguras, sempre aplicando boas práticas de desenvolvimento e buscando proporcionar uma excelente experiência ao usuário. No meu GitHub, compartilho projetos que demonstram minha experiência em desenvolvimento web, sistemas, automação e otimização de processos. Estou sempre em busca de novos desafios para evoluir profissionalmente e contribuir com soluções que gerem impacto real por meio da tecnologia.

            </p>
            <div className='skills-row'>
              {SKILLS.map((skill) => (
                <span className='skill-chip' key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capacitações — galeria expansiva */}
      <section className='capacitacoes-section' id='capacitacoes'>
        <div className='section-inner'>
          <div className='section-eyebrow' style={{ justifyContent: 'center', display: 'flex' }}>capacitações</div>
          <h1 className='section-heading'>Stack e frentes de atuação</h1>
          <p className='section-lead'>Passe o mouse (ou toque) em cada faixa para ver do que se trata.</p>

          <div className='gallery-strip' data-aos="fade-up">
            {CAPACITACOES.map((item) => {
              const Icon = item.icon;
              const Icon2 = item.icon2;
              return (
                <div
                  className='gallery-item'
                  key={item.name}
                  style={{ ['--item-from' as string]: item.from, ['--item-to' as string]: item.to }}
                  tabIndex={0}
                >
                  <span className='gallery-item-icon'>
                    <Icon />
                    {Icon2 && <Icon2 />}
                  </span>
                  <span className='gallery-item-label'>{item.name}</span>
                  <div className='gallery-item-detail'>
                    <strong>{item.name}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projetos Destaques — flip cards */}
      <section className='projects-section' id='projetos'>
        <div className='section-inner'>
          <div className='section-eyebrow' style={{ justifyContent: 'center', display: 'flex' }}>projetos destaques</div>
          <h1 className='section-heading'>Do código ao deploy</h1>
          <p className='section-lead'>Passe o mouse (ou toque) em um card para ver os detalhes.</p>

          <div className='projects-grid'>
            {PROJETOS.map((proj, i) => (
              <div className='project-card' key={proj.title} tabIndex={0} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className='project-card-inner'>
                  <div
                    className='project-face project-front'
                    style={{ background: `linear-gradient(155deg, ${proj.from}, ${proj.to})` }}
                  >
                    <span className='project-category'>{proj.category}</span>
                    <proj.icon className='project-icon' />
                    <div>
                      <h3 className='project-title'>{proj.title}</h3>
                      <span className='project-hint'>toque para ver detalhes →</span>
                    </div>
                  </div>
                  <div className='project-face project-back'>
                    <div>
                      <span className='project-category project-category-dark'>{proj.category}</span>
                      <h3 className='project-title-back'>{proj.title}</h3>
                      <p className='project-desc'>{proj.desc}</p>
                    </div>
                    <div>
                      <div className='project-stack'>
                        {proj.stack.map((s) => (
                          <span className='skill-chip' key={s}>{s}</span>
                        ))}
                      </div>
                      <a href={proj.link} target="_blank" className='project-link'>Ver projeto ↗</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificados */}
      <section className='main3-content' id='certificados'>
        <div className='certificates-container'>
          <div className='section-eyebrow' style={{ justifyContent: 'center', display: 'flex' }}>formação &amp; certificados</div>
          <div className='cert-list-container' data-aos="fade-up">
            <div className='cert-window-bar'>
              <div className='terminal-dots'>
                <span></span><span></span><span></span>
              </div>
              <p className='cert-title'>certificados.list</p>
            </div>
            <ol className='cert-list'>
              {CERTS.map((cert) => (
                <li key={cert.text}>
                  <span>{cert.text} <span className='tag'>{cert.tag}</span></span>
                </li>
              ))}
            </ol>
            <a href="https://drive.google.com/file/d/13tjN7JVKBRxSTfySOSU3wBl5sT_az3gU/view?usp=drive_link" target="_blank">
              <button className='curriculo-button'>Ver currículo completo</button>
            </a>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className='contact-section' id='contato'>
        <div className='contact-container'>
          <div className='contact-info' data-aos="fade-right">
            <h1>Vamos conversar</h1>

            <div className='contact-details'>
              <div className='contact-item'>
                <h3>Email</h3>
                <a href="mailto:tiagotj7dev@gmail.com">tiagotj7dev@gmail.com</a>
              </div>

              <div className='contact-item'>
                <h3>Localização</h3>
                <span>Alagoinhas, BA</span>
              </div>

              <div className='contact-item'>
                <h3>Redes sociais</h3>
                <div className='social-icons'>
                  <a href="https://github.com/Tiagotj7/" className='social-link'>
                    <Image src={gitlogo} alt="GitHub" width={18} height={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/tiagotj7dev/" className='social-link'>
                    <Image src={linklogo} alt="LinkedIn" width={18} height={18} />
                  </a>
                  <a href="https://www.instagram.com/tiagocarvalho_dev/" className='social-link'>
                    <Image src={instalogo} alt="Instagram" width={18} height={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='contact-form-container' data-aos="fade-left">
            <div className='form-window-bar'>
              <div className='terminal-dots'>
                <span></span><span></span><span></span>
              </div>
              <span className='form-window-title'>contato.send()</span>
            </div>
            <form className='contact-form' onSubmit={handleContactSubmit}>
              <div className='form-group'>
                <input
                  type="text"
                  name="name"
                  className='form-input'
                  placeholder='Seu nome'
                  required
                />
              </div>

              <div className='form-group'>
                <input
                  type="email"
                  name="email"
                  className='form-input'
                  placeholder='Seu email'
                  required
                />
              </div>

              <div className='form-group'>
                <textarea
                  name="message"
                  className='form-input form-textarea'
                  placeholder='Sua mensagem'
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className='submit-btn'>
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='footer-bottom'>
        <div className='footer-bottom-content'>
          <div className='copyright'>
            © 2026 Tiago Carvalho. Todos os direitos reservados.
          </div>
          <div className='ass-footer'>
            <span>{'>'}</span> tiagotj7.dev
          </div>
        </div>
      </footer>
    </div>
  );
}
