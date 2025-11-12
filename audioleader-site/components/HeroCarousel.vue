<template>
  <div
    class="carousel"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
    aria-roledescription="carousel"
    aria-label="Destaques AudioLeader"
  >
    <div class="carousel-inner" aria-live="polite" aria-atomic="true">
      <Transition name="slide">
        <div
          :key="currentSlide"
          class="carousel-slide"
          :style="{ backgroundImage: `url('${slides[currentSlide].image}')` }"
        >
          <div class="carousel-content">
            <h1 class="title">{{ slides[currentSlide].title }}</h1>
            <p class="subtitle">{{ slides[currentSlide].subtitle }}</p>
            <NuxtLink to="/produtos" class="cta-button">Veja Mais</NuxtLink>
          </div>
        </div>
      </Transition>
    </div>

    <button class="carousel-control prev" @click="prevSlide" aria-label="Slide anterior">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button class="carousel-control next" @click="nextSlide" aria-label="Próximo slide">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <div class="carousel-indicators">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        :class="['indicator', { active: index === currentSlide }]"
        @click="goToSlide(index)"
        :aria-label="`Ir para slide ${index + 1}`"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    image: '/images/slider1.jpg',
    title: 'Amplificadores Profissionais',
    subtitle: 'Alta Potência para sua Sonorização'
  },
  {
    image: '/images/slider2.jpg',
    title: 'Qualidade e Potência',
    subtitle: 'Tecnologia de ponta em áudio profissional'
  },
  {
    image: '/images/slider3.jpg',
    title: 'Referência no Segmento',
    subtitle: 'Amplificadores profissionais com excelente custo benefício'
  },
  {
    image: '/images/slider4.jpg',
    title: 'Linha Completa',
    subtitle: 'Soluções para todas as necessidades'
  },
  {
    image: '/images/slider5.jpg',
    title: 'Produto Brasileiro',
    subtitle: '100% nacional com qualidade internacional'
  },
  {
    image: '/images/slider6.jpg',
    title: 'Tradição e Inovação',
    subtitle: 'Mais de 30 anos de excelência'
  }
]

const currentSlide = ref(0)
const intervalId = ref(null)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoplay = () => {
  intervalId.value = setInterval(nextSlide, 5000)
}

const stopAutoplay = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value)
    intervalId.value = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6));
}

.carousel-content {
  position: relative;
  text-align: center;
  color: #fff;
  z-index: 1;
  max-width: 800px;
  padding: 2rem;
}

.title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: #ff6b00;
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(255,107,0,0.4);
}

.cta-button:hover {
  background: #e55d00;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255,107,0,0.6);
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.2);
  border: none;
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(5px);
  z-index: 2;
}

.carousel-control:hover {
  background: rgba(255,255,255,0.3);
}

.prev {
  left: 2rem;
}

.next {
  right: 2rem;
}

.carousel-indicators {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.indicator.active {
  background: #fff;
  width: 30px;
  border-radius: 6px;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .carousel {
    height: 400px;
  }

  .title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .carousel-control {
    width: 40px;
    height: 40px;
  }

  .prev {
    left: 1rem;
  }

  .next {
    right: 1rem;
  }
}
</style>
