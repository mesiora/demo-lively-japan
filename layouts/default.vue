<script setup>
onMounted(() => {
  useSmoothScroll()
})
</script>

<template>
  <main>
    <AppHeader />
    <slot />
    <AppFooter />
  </main>
</template>
