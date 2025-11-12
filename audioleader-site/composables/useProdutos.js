import { ref, computed, watch } from 'vue'
import produtosData from '~/data/produtos.json'
import { sanitizeSearchQuery, ORDENACAO_OPTIONS } from '~/utils/produtosHelpers'

const selectedLinha = ref('')
const selectedOrdenacao = ref(ORDENACAO_OPTIONS.PADRAO)
const currentPage = ref(1)
const searchQuery = ref('')
const itemsPerPage = 12
const MAX_PAGES_TO_DISPLAY = 10

const sortStrategies = {
  [ORDENACAO_OPTIONS.POPULARIDADE]: (a, b) => (b.popularidade || 0) - (a.popularidade || 0),
  [ORDENACAO_OPTIONS.RECENTE]: (a, b) => {
    const dateA = a.dataLancamento ? new Date(a.dataLancamento) : new Date(0)
    const dateB = b.dataLancamento ? new Date(b.dataLancamento) : new Date(0)
    return dateB - dateA
  },
  [ORDENACAO_OPTIONS.PRECO_ASC]: (a, b) => (a.preco || 0) - (b.preco || 0),
  [ORDENACAO_OPTIONS.PRECO_DESC]: (a, b) => (b.preco || 0) - (a.preco || 0),
  [ORDENACAO_OPTIONS.PADRAO]: (a, b) => (a.id || 0) - (b.id || 0)
}

export const useProdutos = () => {
  const todasLinhas = computed(() => {
    return [...new Set(produtosData.map(p => p.linha))].sort()
  })

  const produtosFiltrados = computed(() => {
    let produtos = [...produtosData]

    const sanitizedQuery = sanitizeSearchQuery(searchQuery.value)
    if (sanitizedQuery) {
      const query = sanitizedQuery.toLowerCase()
      produtos = produtos.filter(p =>
        ['nome', 'linha', 'descricao'].some(field =>
          p[field]?.toLowerCase().includes(query)
        )
      )
    }

    if (selectedLinha.value) {
      produtos = produtos.filter(p => p.linha === selectedLinha.value)
    }

    const sortFn = sortStrategies[selectedOrdenacao.value] || sortStrategies[ORDENACAO_OPTIONS.PADRAO]
    produtos.sort(sortFn)

    return produtos
  })

  const totalPaginas = computed(() =>
    Math.ceil(produtosFiltrados.value.length / itemsPerPage)
  )

  const produtosPaginados = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    return produtosFiltrados.value.slice(start, start + itemsPerPage)
  })

  const totalResultados = computed(() => produtosFiltrados.value.length)

  const rangeInfo = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage + 1
    const end = Math.min(currentPage.value * itemsPerPage, totalResultados.value)
    const total = totalResultados.value
    const label = total === 1 ? 'produto' : 'produtos'

    return { start, end, total, label }
  })

  const pageRange = computed(() => {
    const total = totalPaginas.value
    const current = currentPage.value

    if (total <= MAX_PAGES_TO_DISPLAY) {
      return Array.from({ length: total }, (_, i) => i + 1)
    }

    const halfDisplay = Math.floor(MAX_PAGES_TO_DISPLAY / 2)
    let startPage = Math.max(1, current - halfDisplay)
    let endPage = Math.min(total, startPage + MAX_PAGES_TO_DISPLAY - 1)

    if (endPage - startPage + 1 < MAX_PAGES_TO_DISPLAY) {
      startPage = Math.max(1, endPage - MAX_PAGES_TO_DISPLAY + 1)
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    )
  })

  const getProdutoBySlug = (slug) => {
    return produtosData.find(p => p.slug === slug)
  }

  const resetFilters = () => {
    selectedLinha.value = ''
    selectedOrdenacao.value = ORDENACAO_OPTIONS.PADRAO
    searchQuery.value = ''
    currentPage.value = 1
  }

  watch([selectedLinha, selectedOrdenacao, searchQuery], () => {
    currentPage.value = 1
  })

  return {
    selectedLinha,
    selectedOrdenacao,
    currentPage,
    searchQuery,
    todasLinhas,
    produtosFiltrados,
    produtosPaginados,
    totalPaginas,
    totalResultados,
    rangeInfo,
    pageRange,
    itemsPerPage,
    getProdutoBySlug,
    resetFilters
  }
}
