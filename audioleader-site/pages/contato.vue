<template>
  <div class="contato-page">
    <section class="hero-section">
      <div class="container">
        <h1>Entre em Contato</h1>
        <p>Precisa falar com nossa equipe? Envie uma mensagem para o departamento e aguarde nosso contato.</p>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <div class="content-wrapper">
          <div class="form-container">
            <h2>Envie sua Mensagem</h2>

            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label for="department">Departamento *</label>
                <select
                  id="department"
                  v-model="formData.department"
                  required
                  class="form-control"
                  autocomplete="off"
                >
                  <option value="">Escolha o Departamento</option>
                  <option value="ouvidoria">Ouvidoria</option>
                  <option value="financeiro">Financeiro</option>
                  <option value="faturamento">Faturamento</option>
                  <option value="compras">Compras</option>
                  <option value="assistencia">Assistência Técnica</option>
                  <option value="administrativo">Administrativo</option>
                  <option value="vendas">Vendas</option>
                  <option value="desenvolvimento">Desenvolvimento</option>
                </select>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="name">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    v-model="formData.name"
                    required
                    maxlength="100"
                    placeholder="Seu nome"
                    class="form-control"
                    autocomplete="name"
                  />
                </div>

                <div class="form-group">
                  <label for="email">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    v-model="formData.email"
                    required
                    maxlength="255"
                    placeholder="seu@email.com"
                    class="form-control"
                    autocomplete="email"
                  />
                  <span v-if="emailError" class="error-message">{{ emailError }}</span>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="phone">Telefone *</label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="formData.phone"
                    required
                    maxlength="15"
                    placeholder="(00) 00000-0000"
                    class="form-control"
                    autocomplete="tel"
                    @input="formatPhone"
                  />
                  <span v-if="phoneError" class="error-message">{{ phoneError }}</span>
                </div>

                <div class="form-group">
                  <label for="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    v-model="formData.city"
                    maxlength="100"
                    placeholder="Sua cidade"
                    class="form-control"
                    autocomplete="address-level2"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Assunto *</label>
                <input
                  type="text"
                  id="subject"
                  v-model="formData.subject"
                  required
                  maxlength="200"
                  placeholder="Assunto da mensagem"
                  class="form-control"
                  autocomplete="off"
                />
              </div>

              <div class="form-group">
                <label for="message">Mensagem * ({{ formData.message.length }}/5000)</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  maxlength="5000"
                  rows="6"
                  placeholder="Descreva sua solicitação..."
                  class="form-control"
                ></textarea>
              </div>

              <button type="submit" :disabled="isSubmitting" class="submit-btn">
                <span v-if="!isSubmitting">Enviar Mensagem</span>
                <span v-else>Enviando...</span>
              </button>

              <div v-if="submitMessage" :class="['submit-message', submitStatus]">
                {{ submitMessage }}
              </div>
            </form>
          </div>

          <div class="info-container">
            <div class="info-card">
              <h3>Informações de Contato</h3>

              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <strong>Endereço</strong>
                  <p>AudioLeader Amplificadores<br>Brasil</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <strong>E-mail</strong>
                  <p><a href="mailto:contato@audioleader.com.br">contato@audioleader.com.br</a></p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <strong>Horário de Atendimento</strong>
                  <p>Segunda a Sexta<br>08:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div class="social-card">
              <h3>Redes Sociais</h3>
              <p>Acompanhe nossas novidades</p>
              <div class="social-links">
                <a href="https://instagram.com/audioleader" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="white" stroke-width="2" fill="none"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" stroke-width="2"></line>
                  </svg>
                </a>
                <a href="https://facebook.com/audioleader" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://youtube.com/audioleader" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const formData = reactive({
  department: '',
  name: '',
  email: '',
  phone: '',
  city: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref('')
const emailError = ref('')
const phoneError = ref('')

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

const validateBrazilianPhone = (phone) => {
  const digits = phone.replace(/\D/g, '')
  if (digits.length !== 10 && digits.length !== 11) return false

  const ddd = parseInt(digits.substring(0, 2))
  if (ddd < 11 || ddd > 99) return false

  if (digits.length === 11 && digits[2] !== '9') return false

  return true
}

const formatPhone = (event) => {
  let value = event.target.value.replace(/\D/g, '')
  if (value.length > 11) value = value.slice(0, 11)

  if (value.length > 10) {
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  } else if (value.length > 6) {
    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
  } else if (value.length > 2) {
    value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2')
  }

  formData.phone = value

  if (value.length > 0) {
    phoneError.value = validateBrazilianPhone(value) ? '' : 'Telefone inválido'
  } else {
    phoneError.value = ''
  }
}

const handleSubmit = async () => {
  emailError.value = ''
  phoneError.value = ''

  if (!validateEmail(formData.email)) {
    emailError.value = 'Por favor, insira um e-mail válido.'
    return
  }

  if (!validateBrazilianPhone(formData.phone)) {
    phoneError.value = 'Por favor, insira um telefone válido.'
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''

  try {
    await new Promise(resolve => setTimeout(resolve, 1500))

    submitMessage.value = 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    submitStatus.value = 'success'

    Object.keys(formData).forEach(key => {
      formData[key] = ''
    })

    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  } catch (error) {
    submitMessage.value = 'Erro ao enviar mensagem. Por favor, tente novamente.'
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: 'Contato - AudioLeader',
  meta: [
    { name: 'description', content: 'Entre em contato com a AudioLeader. Envie sua mensagem para o departamento desejado e aguarde nosso retorno.' }
  ]
})
</script>

<style scoped>
.contato-page {
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

.contact-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.form-container {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.form-container h2 {
  margin-bottom: 2rem;
  color: #1a1a1a;
  font-size: 1.8rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
}

.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.form-control {
  padding: 0.875rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-control:focus {
  outline: none;
  border-color: #1a1a1a;
  box-shadow: 0 0 0 3px rgba(26, 26, 26, 0.1);
}

select.form-control {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23666' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 3rem;
}

textarea.form-control {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  padding: 1rem 2rem;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-btn:hover:not(:disabled) {
  background: #333;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(26, 26, 26, 0.3);
}

.submit-btn:disabled {
  background: #999;
  cursor: not-allowed;
  transform: none;
}

.submit-message {
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  margin-top: 1rem;
}

.submit-message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card,
.social-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.info-card h3,
.social-card h3 {
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  font-size: 1.4rem;
}

.info-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-icon {
  flex-shrink: 0;
  color: #1a1a1a;
}

.info-item strong {
  display: block;
  margin-bottom: 0.25rem;
  color: #1a1a1a;
}

.info-item p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.info-item a {
  color: #0066cc;
  text-decoration: none;
}

.info-item a:hover {
  text-decoration: underline;
}

.social-card p {
  color: #666;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background: #1a1a1a;
  color: white;
}

.social-links a:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(26, 26, 26, 0.3);
}

@media (max-width: 968px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }

  .hero-section p {
    font-size: 1rem;
  }

  .form-container,
  .info-card,
  .social-card {
    padding: 1.5rem;
  }

  .form-container h2 {
    font-size: 1.5rem;
  }
}
</style>
