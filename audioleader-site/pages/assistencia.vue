<template>
  <div class="assistencia-page">
    <section class="hero-section">
      <div class="container">
        <h1>Assistência Técnica</h1>
        <p>Encontre a assistência técnica autorizada mais próxima de você</p>
      </div>
    </section>

    <section class="find-assistencia">
      <div class="container">
        <h2>Encontre uma Assistência</h2>

        <div class="filters">
          <div class="filter-group">
            <label for="uf-select">Estado (UF)</label>
            <select
              id="uf-select"
              v-model="selectedUf"
              @change="resetCity"
              class="select-input"
            >
              <option value="">Selecione um estado</option>
              <option v-for="uf in ufs" :key="uf" :value="uf">
                {{ uf }}
              </option>
            </select>
          </div>

          <div class="filter-group">
            <label for="city-select">Cidade</label>
            <select
              id="city-select"
              v-model="selectedCity"
              :disabled="!selectedUf"
              class="select-input"
            >
              <option value="">Selecione uma cidade</option>
              <option v-for="city in cities" :key="city" :value="city">
                {{ city }}
              </option>
            </select>
          </div>
        </div>

        <div v-if="filteredAssistencias.length > 0" class="results-section">
          <div class="results-grid">
            <div v-for="assistencia in filteredAssistencias" :key="`${assistencia.Local}-${assistencia.Cidade}-${assistencia.Uf}`" class="assistencia-card">
              <h3>{{ assistencia.Local }}</h3>
              <div class="info-row">
                <span class="label">Cidade:</span>
                <span>{{ assistencia.Cidade }} - {{ assistencia.Uf }}</span>
              </div>
              <div v-if="assistencia.Email" class="info-row">
                <span class="label">Email:</span>
                <a :href="`mailto:${assistencia.Email}`">{{ assistencia.Email }}</a>
              </div>
              <div v-if="assistencia.Telefone" class="info-row">
                <span class="label">Telefone:</span>
                <a :href="`tel:${assistencia.Telefone.split('|')[0].trim().replace(/\D/g, '')}`">
                  {{ assistencia.Telefone }}
                </a>
              </div>
            </div>
          </div>

          <div v-if="mapUrl" class="map-container">
            <h3>Localização</h3>
            <iframe
              :src="mapUrl"
              :title="`Mapa de ${selectedCity} - ${selectedUf}`"
              :aria-label="`Localização das assistências técnicas em ${selectedCity}, ${selectedUf}`"
              width="100%"
              height="450"
              style="border:0;"
              sandbox="allow-scripts allow-same-origin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div v-else-if="selectedCity" class="no-results">
          <p>Nenhuma assistência encontrada para a cidade selecionada.</p>
        </div>
      </div>
    </section>

    <section class="manuais-section">
      <div class="container">
        <h2>Download de Manuais</h2>
        <p class="subtitle">Baixe os manuais dos nossos produtos</p>

        <div class="manuais-grid">
          <div class="manual-card">
            <div class="manual-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3>Linha SL</h3>
            <p>Manual da Linha SL de Amplificadores</p>
            <a href="/manuais/manual-linha-sl.pdf" download class="download-btn">
              Download PDF
            </a>
          </div>

          <div class="manual-card">
            <div class="manual-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3>Linha AL/ALS</h3>
            <p>Manual da Linha AL/ALS de Amplificadores</p>
            <a href="/manuais/manual-linha-al-als.pdf" download class="download-btn">
              Download PDF
            </a>
          </div>

          <div class="manual-card">
            <div class="manual-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3>Linha Inbox</h3>
            <p>Manual da Linha Inbox de Amplificadores</p>
            <a href="/manuais/manual-linha-inbox.pdf" download class="download-btn">
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useAssistencias } from '~/composables/useAssistencias'

const {
  selectedUf,
  selectedCity,
  ufs,
  cities,
  filteredAssistencias,
  mapUrl,
  resetCity
} = useAssistencias()

useHead({
  title: 'Assistência Técnica - AudioLeader',
  meta: [
    { name: 'description', content: 'Encontre a assistência técnica autorizada AudioLeader mais próxima de você. Download de manuais disponível.' }
  ]
})
</script>

<style scoped>
.assistencia-page {
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

.find-assistencia {
  padding: 4rem 0;
  background: #f8f9fa;
}

.find-assistencia h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #1a1a1a;
}

.filters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto 3rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
}

.filter-group label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.select-input {
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.select-input:hover:not(:disabled) {
  border-color: #666;
}

.select-input:focus {
  outline: none;
  border-color: #1a1a1a;
  box-shadow: 0 0 0 3px rgba(26, 26, 26, 0.1);
}

.select-input:disabled {
  background: #f5f5f5;
  cursor: not-allowed;
  opacity: 0.6;
}

.results-section {
  margin-top: 3rem;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding: 0 1rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 1400px) {
  .results-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.assistencia-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.assistencia-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.assistencia-card h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
  font-weight: 600;
}

.info-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.info-row .label {
  font-weight: 600;
  color: #666;
}

.info-row a {
  color: #0066cc;
  text-decoration: none;
  transition: color 0.2s ease;
  word-break: break-all;
  overflow-wrap: break-word;
}

.info-row a:hover {
  text-decoration: underline;
  color: #0052a3;
}

.map-container {
  margin-top: 3rem;
}

.map-container h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
  text-align: center;
}

.no-results {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
}

.no-results p {
  font-size: 1.1rem;
  color: #666;
}

.manuais-section {
  padding: 4rem 0;
  background: white;
}

.manuais-section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

.manuais-section .subtitle {
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.manuais-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.manual-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.manual-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.manual-icon {
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.manual-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

.manual-card p {
  color: #666;
  margin-bottom: 1.5rem;
}

.download-btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #1a1a1a;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.3s ease;
}

.download-btn:hover {
  background: #333;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }

  .hero-section p {
    font-size: 1rem;
  }

  .filters {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .results-grid {
    grid-template-columns: 1fr;
  }

  .manuais-grid {
    grid-template-columns: 1fr;
  }
}
</style>
