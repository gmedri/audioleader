import { ref, computed } from 'vue'
import { assistenciasData } from '~/data/assistencias'

const VALID_UFS = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

const isValidEmail = (email) => {
  if (!email) return false
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

const isValidUf = (uf) => {
  return VALID_UFS.includes(uf) && assistenciasData.some(item => item.Uf === uf)
}

const isValidCity = (city, uf) => {
  return assistenciasData.some(item => item.Uf === uf && item.Cidade === city)
}

export const useAssistencias = () => {
  const selectedUf = ref('')
  const selectedCity = ref('')

  const ufs = computed(() => {
    const uniqueUfs = [...new Set(assistenciasData.map(item => item.Uf))]
    return uniqueUfs.filter(uf => VALID_UFS.includes(uf)).sort()
  })

  const cities = computed(() => {
    if (!selectedUf.value || !isValidUf(selectedUf.value)) return []
    const filtered = assistenciasData.filter(item => item.Uf === selectedUf.value)
    const uniqueCities = [...new Set(filtered.map(item => item.Cidade))]
    return uniqueCities.sort()
  })

  const filteredAssistencias = computed(() => {
    if (!selectedCity.value || !selectedUf.value) return []
    if (!isValidUf(selectedUf.value) || !isValidCity(selectedCity.value, selectedUf.value)) {
      return []
    }
    return assistenciasData.filter(item =>
      item.Uf === selectedUf.value && item.Cidade === selectedCity.value
    ).map(item => ({
      ...item,
      Email: item.Email && isValidEmail(item.Email) ? item.Email : ''
    }))
  })

  const mapUrl = computed(() => {
    if (!selectedUf.value || !selectedCity.value) return ''
    if (!isValidUf(selectedUf.value) || !isValidCity(selectedCity.value, selectedUf.value)) {
      return ''
    }

    const sanitizedCity = selectedCity.value.replace(/[^\w\s\u00C0-\u00FF-]/g, '')
    const sanitizedUf = selectedUf.value.replace(/[^\w]/g, '')

    const baseUrl = 'https://maps.google.com/maps'
    const params = new URLSearchParams({
      q: `${sanitizedCity}, ${sanitizedUf}`,
      t: 'm',
      z: '12',
      output: 'embed',
      iwloc: 'near'
    })

    return `${baseUrl}?${params.toString()}`
  })

  const resetCity = () => {
    selectedCity.value = ''
  }

  return {
    selectedUf,
    selectedCity,
    ufs,
    cities,
    filteredAssistencias,
    mapUrl,
    resetCity
  }
}
