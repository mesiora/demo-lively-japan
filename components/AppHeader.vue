<template>
  <UContainer>
    <nav class="flex items-center justify-between gap-4 py-8">
      <NuxtLink :to="{ name: 'index' }" aria-label="Home">
        <Logo class="text-5xl" />
      </NuxtLink>

      <ColorMode />
    </nav>
  </UContainer>
</template>
