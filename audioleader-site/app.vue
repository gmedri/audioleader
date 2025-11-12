<script setup>
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  <NuxtErrorBoundary>
    <div>
      <AppHeader />
      <NuxtPage />
      <AppFooter />
      <WhatsAppButton />
      <Analytics />
    </div>
    <template #error="{ error }">
      <div class="error-page">
        <h1>Algo deu errado</h1>
        <p>{{ error.message }}</p>
      </div>
    </template>
  </NuxtErrorBoundary>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}

.error-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
}

.error-page h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.error-page p {
  color: #666;
}
</style>
