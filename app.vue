<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
onMounted(() => {
  nextTick(() => {
    // if not iOS and android
    const ua = navigator.userAgent || navigator.vendor
    if (!/(Mac|iPhone|iPod|iPad|android)/i.test(ua)) {
      document.documentElement.classList.add('custom-scrollbar')
    }
  })
})
</script>

<style>
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  --color-mode-reverse-bg: #1c1b22;
  --color-mode-reverse-text: #fff;
}

html.dark {
  --color-mode-reverse-bg: #fff;
  --color-mode-reverse-text: #1c1b22;
}

.reverse-color-mode {
  background-color: var(--color-mode-reverse-bg);
  color: var(--color-mode-reverse-text);
}

.custom-scrollbar {
  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #555;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #222;
  }
}
</style>
