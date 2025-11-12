<template>
  <div class="home">
    <HeroCarousel />

    <section class="services">
      <div class="container">
        <div class="services-grid">
          <div v-for="service in services" :key="service.title" class="service-card">
            <div class="icon">
              <component :is="service.icon" />
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="container">
        <h2>Tradição e qualidade em amplificadores profissionais</h2>
        <div class="about-content">
          <p>
            Referência no ramo de amplificadores profissionais, a AudioLeader conta com cinco linhas
            de amplificadores e mais de 40 opções, para diversas finalidades.
          </p>
          <p>
            Fundada em meados de 1993, em Fernandópolis – interior paulista —, a partir da paixão de
            um técnico em eletrônica por sonorização, a AudioLeader foi se destacando e ganhando muitos
            parceiros ao longo dos anos.
          </p>
          <p>
            Hoje, a AudioLeader é reconhecida como referência no ramo de amplificadores profissionais,
            em âmbito nacional e internacional, com destaque em todo o mercado de áudio da América Latina.
          </p>
          <p>
            Os amplificadores da AudioLeader podem ser usados em diversos segmentos, como: carros de som,
            escolas, bandas, clubes, templos, igrejas, trios elétricos e setores comerciais.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { h } from 'vue'

useHead({
  title: 'AudioLeader - Amplificadores Profissionais de Alta Potência | Produtos Brasileiros',
  meta: [
    { name: 'description', content: 'AudioLeader é referência em amplificadores profissionais desde 1993. Fabricamos amplificadores de alta potência com excelente custo-benefício. Linhas AL, ALK, ALS, SLIM e INBOX para sonorização profissional em todo Brasil e América Latina.' },
    { name: 'keywords', content: 'amplificadores profissionais brasil, AudioLeader, amplificador de potência, sonorização profissional, amplificador carros de som, amplificador igreja, amplificador eventos, amplificador brasileiro, equipamentos de áudio' },
    { property: 'og:title', content: 'AudioLeader - Amplificadores Profissionais de Alta Potência' },
    { property: 'og:description', content: 'Referência em amplificadores profissionais desde 1993. Mais de 40 opções em 5 linhas de produtos para sonorização profissional.' },
    { property: 'og:type', content: 'website' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'AudioLeader',
        description: 'Fabricante de amplificadores profissionais de alta potência',
        url: 'https://audioleader.com.br',
        logo: 'https://audioleader.com.br/logo.png',
        foundingDate: '1993',
        foundingLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Fernandópolis',
            addressRegion: 'SP',
            addressCountry: 'BR'
          }
        },
        areaServed: {
          '@type': 'Place',
          name: 'América Latina'
        },
        knowsAbout: ['Amplificadores Profissionais', 'Sonorização', 'Equipamentos de Áudio'],
        sameAs: [
          'https://www.instagram.com/audioleader',
          'https://www.facebook.com/audioleader',
          'https://www.youtube.com/@audioleader'
        ]
      })
    }
  ]
})

const BookIcon = () => h('svg', { width: 48, height: 48, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { d: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20' }),
  h('path', { d: 'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z' })
])

const PackageIcon = () => h('svg', { width: 48, height: 48, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' }),
  h('polyline', { points: '3.27 6.96 12 12.01 20.73 6.96' }),
  h('line', { x1: 12, y1: 22.08, x2: 12, y2: 12 })
])

const WrenchIcon = () => h('svg', { width: 48, height: 48, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { d: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' })
])

const UsersIcon = () => h('svg', { width: 48, height: 48, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
  h('circle', { cx: 9, cy: 7, r: 4 }),
  h('path', { d: 'M23 21v-2a4 4 0 0 0-3-3.87' }),
  h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })
])

const services = [
  {
    title: 'Manuais',
    description: 'Procurando pelos manuais dos produtos SL e AL / ALS? Baixe-os aqui.',
    icon: BookIcon
  },
  {
    title: 'Produtos',
    description: 'Precisando de amplificador? Confira nossa linha de produtos AudioLeader.',
    icon: PackageIcon
  },
  {
    title: 'Assistência',
    description: 'Precisa falar com a assistência técnica? Encontre a mais próxima de você.',
    icon: WrenchIcon
  },
  {
    title: 'Representantes',
    description: 'Presente em todo o país, encontre o representante mais perto de você.',
    icon: UsersIcon
  }
]
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.services {
  padding: 5rem 0;
  background: #f8f9fa;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.service-card {
  background: #fff;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: all 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}

.icon {
  color: #ff6b00;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.service-card p {
  color: #666;
  line-height: 1.6;
}

.about {
  padding: 5rem 0;
}

.about h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
}

.about-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .services {
    padding: 3rem 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .about {
    padding: 3rem 0;
  }

  .about h2 {
    font-size: 2rem;
  }

  .about-content p {
    font-size: 1rem;
  }
}
</style>
