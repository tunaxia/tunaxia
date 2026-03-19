import './style.css'
import heroImg from './assets/hero.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header id="header">
  <div class="container">
    <nav>
      <a href="/" class="logo">Tunaxia</a>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  </div>
</header>

<section id="hero">
  <div class="container">
    <div class="hero-content">
      <div class="hero-image-wrapper">
        <img src="${heroImg}" class="hero-image" alt="Tunaxia Hero">
        <div class="glow"></div>
      </div>
      <h1>Hi 👋 &nbsp; I'm <span class="highlight">Tunaxia</span></h1>
      <p class="subtitle">Vibe Coder | Cloud, Data Platform, GenAI & DevOps Engineer</p>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="https://github.com/tunaxia" target="_blank" class="btn btn-secondary">GitHub</a>
      </div>
    </div>
  </div>
</section>

<section id="about">
  <div class="container">
    <h2>About Me</h2>
    <p class="about-text">
      I spend my time contributing to open source and working professionally on cloud infrastructure, automated pipelines, and intelligence.
    </p>
  </div>
</section>

<section id="projects">
  <div class="container">
    <div class="section-header">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
      <h2>Featured Projects</h2>
    </div>
    <div class="project-grid">
      <div class="project-card">
        <div class="project-content">
          <h3>Boto-Tracks</h3>
          <p>Boto Tracks is a modern, fast, and searchable interface for tracking changes, fixes, and features in the AWS SDK for Python (Botocore and Boto3).</p>
          <div class="project-links">
            <a href="https://boto-tracks.tunaxia.com" target="_blank" class="project-link">
              <span class="link-text">Visit Website</span>
              <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
            <a href="https://github.com/tunaxia/boto-tracks" target="_blank" class="project-link github">
              <svg class="icon-small" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span class="link-text">GitHub</span>
            </a>
          </div>
        </div>
      </div>
      <!-- Add more project cards here in the future -->
    </div>
  </div>
</section>

<section id="contact">
  <div class="container">
    <div class="section-header">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      <h2>Reach Me</h2>
    </div>
    <div class="contact-card">
      <p>Want to vibe together? Drop me a message or follow my journey!</p>
      <div class="social-links-grid">
        <a href="https://tellonym.me/tunaxia" target="_blank" class="social-item">
          <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          <span>Tellonym</span>
        </a>
        <a href="https://www.youtube.com/@tunaxia" target="_blank" class="social-item youtube">
          <svg class="icon-small" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.612 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          <span>YouTube</span>
        </a>
        <a href="https://www.reddit.com/user/tunaxia/" target="_blank" class="social-item reddit">
          <svg class="icon-small" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 15c0 1.381-1.119 2.5-2.5 2.5-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5zm-4.5 0c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5zm10.74-3.541c-.417 0-.796.162-1.077.423-1.078-.771-2.527-1.258-4.13-1.308l.872-4.111 2.842.603c.046.724.647 1.294 1.38 1.294.764 0 1.385-.621 1.385-1.385s-.621-1.385-1.385-1.385c-.516 0-.965.285-1.205.706l-3.153-.67c-.161-.034-.323.059-.381.215l-.973 4.588c-1.637.016-3.123.504-4.227 1.297-.282-.266-.665-.432-1.087-.432-.874 0-1.585.711-1.585 1.585 0 .428.17.815.445 1.101-.01.109-.015.219-.015.33 0 2.227 2.464 4.038 5.49 4.038s5.491-1.811 5.491-4.038c0-.11-.005-.22-.014-.327.279-.286.452-.676.452-1.104 0-.874-.711-1.585-1.585-1.585z"/></svg>
          <span>Reddit</span>
        </a>
      </div>
    </div>
  </div>
</section>

<footer id="footer">
  <div class="container">
    <div class="footer-content">
      <p>&copy; ${new Date().getFullYear()} Tunaxia.</p>
      <div class="footer-links">
        <a href="https://github.com/tunaxia" target="_blank">GitHub</a>
        <a href="https://www.youtube.com/@tunaxia" target="_blank">YouTube</a>
        <a href="https://www.reddit.com/user/tunaxia/" target="_blank">Reddit</a>
      </div>
    </div>
  </div>
</footer>
`
