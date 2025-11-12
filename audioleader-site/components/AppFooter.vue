<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Acesse pelo Celular</h3>
          <img src="/images/qr-code.png" alt="QR Code AudioLeader" class="qr-code" />
        </div>

        <div class="footer-section">
          <h3>Siga-nos nas Redes Sociais</h3>
          <div class="social-links">
            <a href="https://www.instagram.com/audioleaderamplificadores/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/images/instagram-icon.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/audioleader/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="/images/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/audioleaderamplificadores" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src="/images/youtube-icon.png" alt="YouTube" />
            </a>
          </div>
        </div>

        <div class="footer-section">
          <img src="/images/selo-brasileiro.png" alt="Produto 100% Brasileiro" class="selo" />
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} AudioLeader. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: #1a1a1a;
  color: #fff;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.qr-code {
  max-width: 150px;
  height: auto;
  background: #fff;
  padding: 0.5rem;
  border-radius: 8px;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  transition: transform 0.3s;
}

.social-links a:hover {
  transform: scale(1.1);
}

.social-links img {
  width: 40px;
  height: 40px;
}

.selo {
  max-width: 200px;
  height: auto;
}

.footer-bottom {
  border-top: 1px solid #333;
  padding-top: 1rem;
  text-align: center;
}

.footer-bottom p {
  color: #888;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .footer-section img {
    margin: 0 auto;
  }
}
</style>
