export const SPEC_LABELS = {
  respostaFrequencia: 'Resposta de Frequência',
  distorcaoHarmonica: 'Distorção Harmônica Total',
  slewRate: 'Slew Rate',
  impedanciaEntrada: 'Impedância de Entrada',
  sensibilidadeEntrada: 'Sensibilidade de Entrada',
  alimentacao: 'Alimentação',
  relacaoSinalRuido: 'Relação Sinal/Ruído',
  fatorAmortecimento: 'Fator de Amortecimento',
  consumo: 'Consumo de Potência'
}

export const ORDENACAO_OPTIONS = {
  PADRAO: 'padrao',
  POPULARIDADE: 'popularidade',
  RECENTE: 'recente',
  PRECO_ASC: 'preco-asc',
  PRECO_DESC: 'preco-desc'
}

export const formatSpecLabel = (spec) => SPEC_LABELS[spec] || spec

export const sanitizeSearchQuery = (query) => {
  if (!query || typeof query !== 'string') return ''
  return query
    .trim()
    .replace(/[<>"']/g, '')
    .substring(0, 100)
}

export const validateSlug = (slug) => {
  if (!slug || typeof slug !== 'string') return null

  const sanitized = slug
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '')
    .substring(0, 100)

  return sanitized === slug ? sanitized : null
}

export const validateImagePath = (imagePath) => {
  if (!imagePath || typeof imagePath !== 'string') return 'default.jpg'

  const safePath = imagePath
    .replace(/\.\./g, '')
    .replace(/[^a-zA-Z0-9._-]/g, '')

  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp']
  const hasValidExtension = allowedExtensions.some(ext =>
    safePath.toLowerCase().endsWith(ext)
  )

  return hasValidExtension ? safePath : 'default.jpg'
}

export const getPrimeiraPotencia = (potencias) => {
  if (!potencias || typeof potencias !== 'object') return ''
  return Object.values(potencias)[0] || ''
}
