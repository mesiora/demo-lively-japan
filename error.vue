<template>
  <section class="relative h-[50vh] md:h-[70vh] lg:h-[80vh]">
    <UContainer>
      <div
        class="relative z-10 flex h-full flex-col justify-center pl-[20vw] pt-[15vh] text-gray-800 dark:text-white"
      >
        <p
          class="mt-4 font-source-code-pro uppercase text-gray-400 dark:text-gray-400"
        >
          Oops! Looks like you've stumbled upon a digital dead end.
        </p>
        <p
          class="mt-4 font-source-code-pro uppercase text-gray-400 dark:text-gray-400"
        >
          Don't worry, though
        </p>
        <h1 class="text-8xl font-bold">
          We're
          <span
            class="bg-black px-2 font-source-code-pro text-white dark:bg-white dark:text-black"
          >
            experts
          </span>
          at building <span class="text-gray-400"> paths </span> to
          <span
            class="bg-black px-2 font-source-code-pro text-white dark:bg-white dark:text-black"
          >
            success
          </span>
        </h1>
        <p class="mt-12 text-gray-600 dark:text-gray-300">
          Why settle for a {{ error?.statusCode || 500 }} when you could have a
          stunning website of your own? Contact us today and let's turn this
          error into an opportunity!
        </p>
        <p
          class="mt-12 flex items-center gap-1 text-gray-600 dark:text-gray-300"
        >
          <UTooltip text="medusiora@github">
            <a
              href="https://github.com/medusiora"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="flex items-center gap-1">
                <UAvatar
                  src="https://avatars.githubusercontent.com/u/38559820?v=4"
                  alt="Avatar"
                />
                <span
                  class="bg-black px-2 text-white dark:bg-white dark:text-black"
                >
                  Medusiora
                </span>
              </div>
            </a>
          </UTooltip>
          - Everything can
          <span class="text-primary">Work!</span>
        </p>
      </div>
      <div class="mt-14">
        <NuxtLink to="/" class="text-primary text-sm">
          Go back to the home page
        </NuxtLink>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})
</script>
