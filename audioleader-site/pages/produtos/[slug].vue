<template>
  <div class="produto-page">
    <div class="container">
      <div v-if="produto">
        <NuxtLink to="/produtos" class="back-link">
          ← Voltar para produtos
        </NuxtLink>

        <div class="produto-content">
          <div class="produto-main">
            <div class="produto-image-large">
              <img
                :src="produtoImagePath"
                :alt="produto.nome"
                width="600"
                height="600"
              />
            </div>

            <div class="produto-details">
              <span class="produto-linha-badge">{{ produto.linha }}</span>
              <h1>{{ produto.nome }}</h1>
              <p class="produto-descricao">{{ produto.descricao }}</p>

              <div class="produto-potencias-destaque">
                <h3>Potências</h3>
                <div class="potencias-grid">
                  <div
                    v-for="(potencia, impedancia) in produto.potencias"
                    :key="impedancia"
                    class="potencia-card"
                  >
                    <strong>{{ impedancia.toUpperCase() }}</strong>
                    <span>{{ potencia }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="produto-specs">
            <h2>Especificações Técnicas</h2>
            <div class="specs-table">
              <div
                v-for="(valor, spec) in produto.especificacoes"
                :key="spec"
                class="spec-row"
              >
                <div class="spec-label">{{ formatSpecLabel(spec) }}</div>
                <div class="spec-value">{{ valor }}</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">Peso</div>
                <div class="spec-value">{{ produto.peso }}</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">Dimensões</div>
                <div class="spec-value">{{ produto.dimensoes }}</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">Garantia</div>
                <div class="spec-value">{{ produto.garantia }}</div>
              </div>
            </div>

            <h2>Recursos</h2>
            <ul class="recursos-list">
              <li v-for="(recurso, index) in produto.recursos" :key="index">
                {{ recurso }}
              </li>
            </ul>
          </div>

          <div v-if="produtosRelacionados.length > 0" class="produtos-relacionados">
            <h2>Produtos Relacionados</h2>
            <div class="relacionados-grid">
              <NuxtLink
                v-for="prod in produtosRelacionados"
                :key="prod.id"
                :to="`/produtos/${prod.slug}`"
                class="produto-relacionado-card"
              >
                <div class="produto-relacionado-image">
                  <img
                    :src="`/produtos/${validateImagePath(prod.imagem)}`"
                    :alt="prod.nome"
                    loading="lazy"
                    width="200"
                    height="200"
                  />
                </div>
                <div class="produto-relacionado-info">
                  <h3>{{ prod.nome }}</h3>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="not-found">
        <h1>Produto não encontrado</h1>
        <p>O produto que você está procurando não existe.</p>
        <NuxtLink to="/produtos" class="back-btn">
          Ver todos os produtos
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import produtosData from '~/data/produtos.json'
import { formatSpecLabel, validateSlug, validateImagePath } from '~/utils/produtosHelpers'

const route = useRoute()
const { getProdutoBySlug } = useProdutos()

const validatedSlug = computed(() => validateSlug(route.params.slug))
const produto = computed(() =>
  validatedSlug.value ? getProdutoBySlug(validatedSlug.value) : null
)

const produtoImagePath = computed(() => {
  if (!produto.value) return '/produtos/default.jpg'

  const detailImage = `${produto.value.slug}-detail.jpg`
  const failedProducts = ['al-1600-sub', 'al-2k']

  if (failedProducts.includes(produto.value.slug)) {
    return `/produtos/${validateImagePath(produto.value.imagem)}`
  }

  return `/produtos/${detailImage}`
})

const produtosRelacionados = computed(() =>
  produto.value
    ? produtosData
        .filter(p => p.linha === produto.value.linha && p.id !== produto.value.id)
        .slice(0, 4)
    : []
)

const sanitizeMetaContent = (content) => {
  if (!content || typeof content !== 'string') return ''
  return content
    .replace(/[<>"']/g, '')
    .trim()
    .substring(0, 160)
}

useHead(() => ({
  title: produto.value
    ? `${sanitizeMetaContent(produto.value.nome)} - AudioLeader`
    : 'Produto não encontrado - AudioLeader',
  meta: [
    {
      name: 'description',
      content: produto.value
        ? sanitizeMetaContent(produto.value.descricao)
        : 'Produto não encontrado'
    }
  ]
}))
</script>

<style scoped>
.produto-page {
  min-height: 100vh;
  background: #f8f9fa;
  padding: 3rem 0;
}

.back-link {
  display: inline-flex;
  align-items: center;
  color: #666;
  text-decoration: none;
  margin-bottom: 2rem;
  margin-left: 0.5rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #1a1a1a;
}

.produto-content {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.produto-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 3rem;
}

.produto-image-large {
  width: 100%;
  aspect-ratio: 1;
  background: #f5f5f5;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.produto-image-large img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.produto-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.produto-linha-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #f0f0f0;
  color: #333;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 6px;
  width: fit-content;
}

.produto-details h1 {
  font-size: 2.5rem;
  color: #1a1a1a;
  margin: 0;
  font-weight: 700;
}

.produto-descricao {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

.produto-potencias-destaque {
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
}

.produto-potencias-destaque h3 {
  font-size: 1.2rem;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
  font-weight: 700;
}

.potencias-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
}

.potencia-card {
  padding: 1rem;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.potencia-card strong {
  color: #1a1a1a;
  font-size: 0.85rem;
  font-weight: 700;
}

.potencia-card span {
  color: #666;
  font-size: 0.9rem;
}

.produto-specs {
  padding: 3rem;
  border-top: 1px solid #e9ecef;
}

.produto-specs h2 {
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 3rem;
}

.spec-card {
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
}

.spec-card strong {
  color: #1a1a1a;
  font-size: 0.9rem;
  font-weight: 700;
}

.spec-card span {
  color: #666;
  font-size: 1rem;
}

.specs-table {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 3rem;
}

.spec-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.spec-label {
  font-weight: 600;
  color: #333;
}

.spec-value {
  color: #666;
  text-align: right;
}

.recursos-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.recursos-list li {
  padding: 1rem 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  position: relative;
  padding-left: 3rem;
}

.recursos-list li::before {
  content: '✓';
  position: absolute;
  left: 1rem;
  color: #28a745;
  font-weight: 700;
  font-size: 1.2rem;
}

.produtos-relacionados {
  padding: 3rem;
  border-top: 1px solid #e9ecef;
}

.produtos-relacionados h2 {
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.relacionados-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.produto-relacionado-card {
  background: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.produto-relacionado-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.produto-relacionado-image {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.produto-relacionado-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.produto-relacionado-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.produto-relacionado-info h3 {
  font-size: 1.1rem;
  margin: 0;
  color: #1a1a1a;
  font-weight: 700;
}

.not-found {
  text-align: center;
  padding: 4rem 2rem;
}

.not-found h1 {
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.not-found p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
}

.back-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: #1a1a1a;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.3s ease;
}

.back-btn:hover {
  background: #333;
}

@media (max-width: 1024px) {
  .produto-main {
    grid-template-columns: 1fr;
  }

  .specs-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media (max-width: 768px) {
  .produto-page {
    padding: 1.5rem 0;
  }

  .produto-main {
    padding: 1.5rem;
    gap: 2rem;
  }

  .produto-details h1 {
    font-size: 2rem;
  }

  .preco-valor {
    font-size: 1.5rem;
  }

  .produto-specs {
    padding: 1.5rem;
  }

  .spec-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .spec-value {
    text-align: left;
  }

  .produtos-relacionados {
    padding: 1.5rem;
  }

  .relacionados-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}
</style>
