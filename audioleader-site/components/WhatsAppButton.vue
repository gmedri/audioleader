<template>
  <a
    href="https://wa.me/5517997786529"
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-float"
    aria-label="Fale conosco pelo WhatsApp"
  >
    <svg viewBox="0 0 32 32" class="whatsapp-icon">
      <path fill="currentColor" d="M16 0C7.164 0 0 7.163 0 16c0 2.825.744 5.488 2.044 7.806L0 32l8.388-2.194A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.455c-2.476 0-4.9-.68-7.012-1.969l-.503-.302-5.211 1.364 1.392-5.075-.331-.521A13.366 13.366 0 0 1 2.545 16c0-7.412 6.043-13.455 13.455-13.455S29.455 8.588 29.455 16 23.412 29.455 16 29.455z"/>
      <path fill="currentColor" d="M23.194 19.438c-.397-.199-2.35-1.159-2.714-1.291-.364-.133-.629-.199-.894.199-.265.397-1.026 1.291-1.258 1.556-.232.265-.464.298-.861.099-.397-.199-1.675-.617-3.191-1.97-1.18-1.052-1.977-2.351-2.209-2.748-.232-.397-.025-.612.174-.81.179-.178.397-.465.596-.697.199-.232.265-.397.397-.662.133-.265.066-.497-.033-.697-.099-.199-.894-2.153-1.225-2.947-.323-.773-.651-.668-.894-.68-.232-.011-.497-.013-.762-.013s-.697.099-1.061.497c-.364.397-1.391 1.358-1.391 3.313s1.424 3.843 1.623 4.108c.199.265 2.809 4.289 6.805 6.017.951.411 1.693.656 2.271.84.954.303 1.823.26 2.51.158.766-.114 2.35-.961 2.682-1.888.331-.928.331-1.723.232-1.888-.099-.165-.364-.265-.761-.464z"/>
    </svg>
  </a>
</template>

<script setup>
</script>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  background: #25D366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  z-index: 1000;
  text-decoration: none;
}

.whatsapp-float:hover {
  background: #20BA5A;
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
}

.whatsapp-icon {
  width: 36px;
  height: 36px;
}

@media (max-width: 768px) {
  .whatsapp-float {
    width: 56px;
    height: 56px;
    bottom: 1.5rem;
    right: 1.5rem;
  }

  .whatsapp-icon {
    width: 32px;
    height: 32px;
  }
}
</style>
