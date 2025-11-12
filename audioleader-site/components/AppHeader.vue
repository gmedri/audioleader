<template>
  <header class="header">
    <div class="container">
      <NuxtLink to="/" class="logo">
        <img src="/images/logo.png" alt="AudioLeader" />
      </NuxtLink>

      <nav class="nav">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/produtos" class="nav-link">Produtos</NuxtLink>
        <NuxtLink to="/assistencia" class="nav-link">Assistência</NuxtLink>
        <NuxtLink to="/representantes" class="nav-link">Representantes</NuxtLink>
        <NuxtLink to="/contato" class="nav-link">Contato</NuxtLink>
      </nav>

      <button
        class="mobile-toggle"
        @click="toggleMenu"
        :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
        :aria-expanded="menuOpen"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>

    <nav
      v-if="menuOpen"
      class="mobile-nav"
      @keydown.esc="closeMenu"
      role="navigation"
      aria-label="Menu de navegação mobile"
    >
      <NuxtLink to="/" class="mobile-nav-link" @click="closeMenu">Home</NuxtLink>
      <NuxtLink to="/produtos" class="mobile-nav-link" @click="closeMenu">Produtos</NuxtLink>
      <NuxtLink to="/assistencia" class="mobile-nav-link" @click="closeMenu">Assistência</NuxtLink>
      <NuxtLink to="/representantes" class="mobile-nav-link" @click="closeMenu">Representantes</NuxtLink>
      <NuxtLink to="/contato" class="mobile-nav-link" @click="closeMenu">Contato</NuxtLink>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<style scoped>
.header {
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 40px;
  width: auto;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ff6b00;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.bar {
  width: 25px;
  height: 3px;
  background: #333;
  margin: 3px 0;
  transition: 0.3s;
}

.mobile-nav {
  display: none;
  flex-direction: column;
  padding: 1rem 2rem;
  background: #f8f8f8;
}

.mobile-nav-link {
  padding: 1rem 0;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  border-bottom: 1px solid #e0e0e0;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }

  .mobile-nav {
    display: flex;
  }
}
</style>
