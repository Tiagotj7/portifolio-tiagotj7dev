'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

import gitlogo from './assets/git_dev.png';
import linklogo from './assets/link_dev.png';
import instalogo from './assets/insta_logo_dev.png';
import devlogo from './assets/dev_logo.png';
import perfillogo from './assets/perfil11.png';
import notelogo from './assets/dev_img.png';
import cerlogo from './assets/cer3.png';
import nextlogo from './assets/next_logo.png';
import contactlogo from './assets/contato_dev.png';

// Exemplo usando Sacramento (assinatura)
import { Caveat } from "next/font/google"

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
})

// CONFIGURAÇÃO DO EMAILJS - SUBSTITUA PELOS SEUS DADOS
const EMAILJS_CONFIG = {
  serviceId: 'service_ru7swxa',    // Substitua pelo seu Service ID
  templateId: 'template_mdy70wm',   // Substitua pelo seu Template ID
  publicKey: 'Tg4sjZ-iNTZ_Hrr03'     // Substitua pela sua Public Key
};

export default function Home() {

useEffect(() => {
  AOS.init({
    duration: 1000, // tempo das animações em ms
    once: true,     // anima só uma vez por seção
  });
}, []);

// Função REAL para enviar emails
const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  const form = e.currentTarget;
  const submitBtn = form.querySelector('.submit-btn') as HTMLButtonElement;
  const originalText = submitBtn.textContent;
  
  // Animação de envio
  submitBtn.innerHTML = 'Enviando...';
  submitBtn.style.background = 'linear-gradient(135deg, #f39c12, #e67e22)';
  submitBtn.disabled = true;
  
  try {
    // ENVIO REAL COM EMAILJS
    const result = await emailjs.sendForm(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      form,
      EMAILJS_CONFIG.publicKey
    );
    
    console.log('Email enviado com sucesso:', result.text);
    
    // Sucesso
    submitBtn.innerHTML = 'Enviado! ✓';
    submitBtn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
    
    // Reset após 2 segundos
    setTimeout(() => {
      submitBtn.innerHTML = originalText || 'Enviar';
      submitBtn.style.background = 'linear-gradient(135deg, #007bff, #0056b3)';
      submitBtn.disabled = false;
      form.reset();
    }, 2000);
    
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    
    // Erro
    submitBtn.innerHTML = 'Erro ao enviar ✗';
    submitBtn.style.background = 'linear-gradient(135deg, #dc3545, #c82333)';
    
    // Reset após 3 segundos
    setTimeout(() => {
      submitBtn.innerHTML = originalText || 'Enviar';
      submitBtn.style.background = 'linear-gradient(135deg, #007bff, #0056b3)';
      submitBtn.disabled = false;
    }, 3000);
  }
};

  return (
    <div className='App'>
      <header className="App-header">
        <nav className='name-nav'>
          <ul>
            <li><Image src={devlogo} className='devlogo-app' alt="dev" /></li>
            <li><h2>Tiagotj7</h2></li>
          </ul>
        </nav>
        <nav className='icons-nav'>
          <ul>
            <li><h2>Social</h2></li>
            <li><a href="https://github.com/Tiagotj7/"><Image src={gitlogo} alt="GitHub" /></a></li>
            <li><a href="https://www.linkedin.com/in/tiagotj7dev/"><Image src={linklogo} alt="Linkedin" /></a></li>
            <li><a href="https://www.instagram.com/tiagotj7.dev/"><Image src={instalogo} alt="Instagram" /></a></li>
          </ul>
        </nav>
      </header>

      {/* Apresentação */}
      <main className='main-content'>
        <div className='geral1'>
          <div className='information'>
            <h1>Prazer,</h1>
            <h1>Tiago</h1>
            <h1>Carvalho!</h1>
            <a href="https://www.linkedin.com/in/tiagotj7dev/">
              <button className='button-more'><h3>Saiba Mais!</h3></button>
            </a>
          </div>
          <div className='logodev-container'>
            <Image src={perfillogo} className='perfillogo-container' alt="perfil" />
          </div>
        </div>
      </main>

      {/* Sobre Mim */}
      <section className='about-section'>
        <div className='note-container'>
          <Image src={notelogo} className='notelogo-container' alt="notelog" />
        </div>
        <div className='comment'>
          <h1>Sobre Mim:</h1>
          <p>
            Sou desenvolvedor front-end e de software, com experiência em cibersegurança e apaixonado por criar soluções inovadoras.
            Trabalho com HTML, CSS, JavaScript, Python, C, PHP, React, TypeScript e WordPress, desenvolvendo projetos que unem desempenho, segurança e usabilidade.
            Meu foco está em entregar aplicações eficientes e adaptáveis às necessidades do usuário.
            No meu portfólio e GitHub, você encontrará projetos que demonstram minha habilidade em desenvolvimento web, automação e otimização de processos.
            Estou sempre em busca de desafios para evoluir e contribuir com a tecnologia. 💻🔒🌐
          </p>
        </div>
      </section>

      {/* Certificados */}
      <section className='main3-content'>
        <div className='certificates-container'>
          <div className='cert-list-container'>
            <h1 className='cert-title'>CERTIFICADOS</h1>
            <ul className='cert-list'>
              <li>Cursando - Técnico em Desenvolvimento de Sistemas - SENAI</li>
              <li>Internet do Comportamento (IoB) em Serviços</li>
              <li>Públicos Digitais</li>
              <li>Site utilizando Html, Css e Js</li>
              <li>Curso Segurança em Tecnologia da Informação</li>
              <li>Introdução ao Hacking e Pentest 2.0</li>
              <li>Introdução ao Excel</li>
              <li>Visual Studio Code</li>
              <li>Desenvolvimento Moderno de Software</li>
              <li>Informática básica</li>
              <li>DIO.me</li>
              <li>Bootcamp</li>
            </ul>
            <a href="https://drive.google.com/file/d/13tjN7JVKBRxSTfySOSU3wBl5sT_az3gU/view?usp=drive_link" target="_blank">
              <button className='curriculo-button'>CURRÍCULO</button>
            </a>
          </div>
          <div className='brain-image-container'>
            <Image src={cerlogo} className='brain-image' alt="Brain" />
          </div>
        </div>
      </section>

      {/* Nova Seção de Contato - COM ENVIO REAL */}
      <section className='contact-section'>
        <div className='contact-container'>
          {/* Informações de Contato - Lado Esquerdo */}
          <div className='contact-info'>
            <h1>Contact us</h1>
            
            <div className='contact-details'>
              
              <div className='contact-item'>
                <h3>Email</h3>
                <a href="mailto:tiagotj7dev@gmail.com">tiagotj7dev@gmail.com</a>
              </div>
              
              <div className='contact-item'>
                <h3>Address</h3>
                <span>Alagoinhas, BA</span>
              </div>
              
              <div className='contact-item'>
                <h3>Social</h3>
                <div className='social-icons'>
                  <a href="https://github.com/Tiagotj7/" className='social-link'>
                    <Image src={gitlogo} alt="GitHub" width={24} height={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/tiagotj7dev/" className='social-link'>
                    <Image src={linklogo} alt="LinkedIn" width={24} height={24} />
                  </a>
                  <a href="https://www.instagram.com/tiagotj7.dev/" className='social-link'>
                    <Image src={instalogo} alt="Instagram" width={24} height={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato - COM NOMES CORRETOS */}
          <div className='contact-form-container'>
            <form className='contact-form' onSubmit={handleContactSubmit}>
              <div className='form-group'>
                <input 
                  type="text" 
                  name="name"              // ← IMPORTANTE: name="name"
                  className='form-input' 
                  placeholder='Seu nome'
                  required 
                />
              </div>
              
              <div className='form-group'>
                <input 
                  type="email" 
                  name="email"             // ← IMPORTANTE: name="email"
                  className='form-input' 
                  placeholder='Seu email'
                  required 
                />
              </div>
              
              <div className='form-group'>
                <textarea 
                  name="message"           // ← IMPORTANTE: name="message"
                  className='form-input form-textarea' 
                  placeholder='Sua mensagem'
                  rows={5}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className='submit-btn'>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <footer className='footer-bottom'>
        <div className='footer-bottom-content'>
          <div className='copyright'>
            © 2025. Todos os direitos reservados.
          </div>
          <div className='ass-footer'>
            Tiagotj7.dev
          </div>
        </div>
      </footer>
    </div>
  );
}
