<template>
  <UContainer class="absolute z-50 w-full py-8 xl:relative xl:py-0">
    <nav class="flex items-center justify-between gap-4 xl:py-8">
      <NuxtLink :to="{ name: 'index' }" aria-label="Home">
        <Logo class="text-5xl" />
      </NuxtLink>

      <ColorMode />
    </nav>
  </UContainer>
</template>
