<template>
  <div class="representantes-page">
    <section class="hero-section">
      <div class="container">
        <h1>Representantes</h1>
        <p>A AudioLeader está presente em todo o país. Encontre o representante mais perto de você.</p>
      </div>
    </section>

    <section class="representative-section">
      <div class="container">
        <div class="representative-card">
          <div class="rep-header">
            <div class="icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="rep-info">
              <h2>DAIANE FÁVERO</h2>
              <p class="role">Vendas Central</p>
            </div>
          </div>

          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="contact-content">
                <span class="label">Email Principal</span>
                <a href="mailto:daiane@audioleader.com.br">daiane@audioleader.com.br</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="contact-content">
                <span class="label">Email Alternativo</span>
                <a href="mailto:daiane@equipaudiorepresentacoes.com.br">daiane@equipaudiorepresentacoes.com.br</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div class="contact-content">
                <span class="label">Telefone / WhatsApp</span>
                <a href="tel:+5517997786529">(17) 99778-6529</a>
              </div>
            </div>

            <div class="whatsapp-cta">
              <a href="https://wa.me/5517997786529" target="_blank" rel="noopener noreferrer" class="whatsapp-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Enviar Mensagem no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Representantes - AudioLeader',
  meta: [
    { name: 'description', content: 'A AudioLeader está presente em todo o país. Encontre o representante mais perto de você.' }
  ]
})
</script>

<style scoped>
.representantes-page {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-section p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.representative-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.representative-card {
  max-width: 700px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.rep-header {
  background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
  color: white;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.icon {
  flex-shrink: 0;
}

.rep-info h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.role {
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
}

.contact-details {
  padding: 2rem;
}

.contact-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  border-bottom: 1px solid #e9ecef;
}

.contact-item:last-of-type {
  border-bottom: none;
}

.contact-icon {
  flex-shrink: 0;
  color: #1a1a1a;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  font-weight: 600;
  color: #666;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-content a {
  color: #0066cc;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.2s ease;
}

.contact-content a:hover {
  color: #0052a3;
  text-decoration: underline;
}

.whatsapp-cta {
  margin-top: 2rem;
  text-align: center;
}

.whatsapp-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: #25D366;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}

.whatsapp-btn:hover {
  background: #20BA5A;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }

  .hero-section p {
    font-size: 1rem;
  }

  .rep-header {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.5rem;
  }

  .rep-info h2 {
    font-size: 1.5rem;
  }

  .contact-item {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .contact-details {
    padding: 1rem;
  }

  .whatsapp-btn {
    font-size: 1rem;
    padding: 0.875rem 1.5rem;
  }
}
</style>
