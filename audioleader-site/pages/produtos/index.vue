<template>
  <div class="produtos-page">
    <section class="hero-section">
      <div class="container">
        <h1>Produtos</h1>
        <p>Cinco linhas de amplificadores profissionais de alta qualidade</p>
      </div>
    </section>

    <section class="produtos-section">
      <div class="container">
        <div class="filters-bar">
          <div class="search-box">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Buscar produtos..."
              class="search-input"
              maxlength="100"
              aria-label="Buscar produtos"
            />
          </div>

          <div class="filter-group">
            <label for="linha-filter">Linha:</label>
            <select
              id="linha-filter"
              v-model="selectedLinha"
              class="filter-select"
            >
              <option value="">Todas as linhas</option>
              <option v-for="linha in todasLinhas" :key="linha" :value="linha">
                {{ linha }}
              </option>
            </select>
          </div>

          <div class="filter-group">
            <label for="ordenacao-filter">Ordenar por:</label>
            <select
              id="ordenacao-filter"
              v-model="selectedOrdenacao"
              class="filter-select"
            >
              <option value="padrao">Padrão</option>
              <option value="popularidade">Popularidade</option>
              <option value="recente">Mais recentes</option>
              <option value="preco-asc">Preço: menor ao maior</option>
              <option value="preco-desc">Preço: maior ao menor</option>
            </select>
          </div>
        </div>

        <div class="results-info">
          <p>
            Mostrando <strong>{{ rangeInfo.start }}-{{ rangeInfo.end }}</strong>
            de <strong>{{ rangeInfo.total }}</strong> {{ rangeInfo.label }}
          </p>
        </div>

        <div v-if="produtosPaginados.length > 0" class="produtos-grid">
          <NuxtLink
            v-for="produto in produtosPaginados"
            :key="produto.id"
            :to="`/produtos/${produto.slug}`"
            class="produto-card"
          >
            <div class="produto-image">
              <img
                :src="`/produtos/${validateImagePath(produto.imagem)}`"
                :alt="produto.nome"
                loading="lazy"
                width="300"
                height="300"
              />
            </div>
            <div class="produto-info">
              <span class="produto-linha">{{ produto.linha }}</span>
              <h3>{{ produto.nome }}</h3>
              <p class="produto-potencia">
                {{ getPrimeiraPotencia(produto.potencias) }}
              </p>
              <span class="leia-mais">Leia mais</span>
            </div>
          </NuxtLink>
        </div>

        <div v-else class="no-results">
          <p>Nenhum produto encontrado com os filtros selecionados.</p>
          <button @click="resetFilters" class="reset-btn">
            Limpar filtros
          </button>
        </div>

        <div v-if="totalPaginas > 1" class="pagination">
          <button
            @click="currentPage--"
            :disabled="currentPage === 1"
            class="pagination-btn"
            aria-label="Página anterior"
          >
            ‹
          </button>

          <button
            v-for="page in pageRange"
            :key="page"
            @click="currentPage = page"
            :class="['pagination-number', { active: currentPage === page }]"
            :aria-label="`Página ${page}`"
            :aria-current="currentPage === page ? 'page' : undefined"
          >
            {{ page }}
          </button>

          <button
            @click="currentPage++"
            :disabled="currentPage === totalPaginas"
            class="pagination-btn"
            aria-label="Próxima página"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { getPrimeiraPotencia, validateImagePath } from '~/utils/produtosHelpers'

const {
  selectedLinha,
  selectedOrdenacao,
  currentPage,
  searchQuery,
  todasLinhas,
  produtosPaginados,
  totalPaginas,
  rangeInfo,
  pageRange,
  resetFilters
} = useProdutos()

useHead({
  title: 'Produtos - Amplificadores Profissionais | AudioLeader',
  meta: [
    { name: 'description', content: 'Conheça nossa linha completa de amplificadores profissionais. Cinco linhas (AL, ALK, ALS, SLIM, INBOX) com mais de 40 opções para atender todas as suas necessidades de sonorização. Alta potência e qualidade brasileira.' },
    { name: 'keywords', content: 'amplificadores profissionais, linha AL, linha ALS, linha SLIM, linha INBOX, amplificador 2 ohms, amplificador 4 ohms, amplificador potência, catálogo amplificadores' },
    { property: 'og:title', content: 'Produtos - Amplificadores Profissionais AudioLeader' },
    { property: 'og:description', content: 'Cinco linhas de amplificadores profissionais de alta potência. Mais de 40 modelos para sonorização profissional.' },
    { property: 'og:type', content: 'website' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Amplificadores Profissionais AudioLeader',
        description: 'Catálogo completo de amplificadores profissionais AudioLeader',
        numberOfItems: 53,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Linha AL 2 Ohms',
            description: 'Amplificadores de alta potência 2 Ohms'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Linha ALK 1,3 Ohms',
            description: 'Amplificadores otimizados para alta demanda'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Linha ALS 4 Ohms',
            description: 'Amplificadores compactos para instalações fixas'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Linha SLIM 4 Ohms',
            description: 'Amplificadores slim para espaços reduzidos'
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Linha INBOX',
            description: 'Painéis ativos para conversão de caixas passivas'
          }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.produtos-page {
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

.produtos-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.filters-bar {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  align-items: end;
}

.search-box {
  display: flex;
  flex-direction: column;
}

.search-input {
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #1a1a1a;
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

.filter-select {
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.filter-select:focus {
  outline: none;
  border-color: #1a1a1a;
}

.results-info {
  margin-bottom: 1.5rem;
  padding: 0 0.5rem;
}

.results-info p {
  color: #666;
  font-size: 0.95rem;
}

.produtos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.produto-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.produto-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.produto-image {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.produto-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.produto-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.produto-linha {
  font-size: 0.85rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.produto-info h3 {
  font-size: 1.3rem;
  color: #1a1a1a;
  font-weight: 700;
  margin: 0;
}

.produto-potencia {
  font-size: 0.9rem;
  color: #666;
}

.leia-mais {
  display: inline-block;
  color: white;
  background: #1a1a1a;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: auto;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  text-align: center;
}

.produto-card:hover .leia-mais {
  background: #333;
  transform: translateX(4px);
}

.no-results {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 12px;
}

.no-results p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.reset-btn {
  padding: 0.75rem 2rem;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.reset-btn:hover {
  background: #333;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3rem;
}

.pagination-btn,
.pagination-number {
  padding: 0.5rem 1rem;
  border: 2px solid #ddd;
  background: white;
  color: #333;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 600;
}

.pagination-btn:hover:not(:disabled),
.pagination-number:hover {
  border-color: #1a1a1a;
  background: #f5f5f5;
}

.pagination-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.pagination-number.active {
  background: #1a1a1a;
  color: white;
  border-color: #1a1a1a;
}

@media (max-width: 1024px) {
  .filters-bar {
    grid-template-columns: 1fr;
  }

  .produtos-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }

  .hero-section p {
    font-size: 1rem;
  }

  .produtos-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .pagination {
    flex-wrap: wrap;
  }
}
</style>
