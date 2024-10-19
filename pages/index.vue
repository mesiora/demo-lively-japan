<template>
  <div>
    <section
      class="relative flex items-center justify-center xl:block h-screen"
    >
      <ParallaxVideo
        :src="Video1"
        class="absolute top-0 h-[50vh] w-full xl:left-28 xl:top-[10vh] xl:h-auto xl:w-[25vw]"
      />
      <ParallaxVideo
        :src="Video2"
        class="absolute top-[50%] h-[50vh] xl:-right-14 xl:top-[54vh] xl:h-auto xl:w-[30vw]"
      />
      <UContainer class="w-full">
        <div
          class="relative z-10 flex h-full flex-col justify-center px-5 text-white xl:pl-[20vw] xl:pt-[15vh] xl:text-gray-800 dark:text-white"
        >
          <p
            class="mt-4 font-source-code-pro font-semibold uppercase text-gray-400 dark:text-gray-400"
          >
            A journey to the heart
          </p>
          <h1 class="text-[4rem] font-bold leading-[1.1] xl:text-8xl">
            DISCOVER The
            <span class="text-primary">Vibrant Heart</span>
            <span class="text-gray-400"> of </span>
            <span
              class="bg-black px-2 font-source-code-pro text-white dark:bg-white dark:text-black"
            >
              JAPAN
            </span>
          </h1>
          <p class="mt-12 text-gray-300 xl:text-gray-600 dark:text-gray-300">
            Explore the beauty of Country with our gallery of photos and videos.
          </p>
        </div>
      </UContainer>
    </section>

    <section class="reverse-color-mode">
      <UContainer class="px-0">
        <div class="relative items-center py-0 xl:h-screen xl:py-40">
          <div class="relative z-10 px-8 py-20 xl:p-10">
            <p
              class="font-source-code-pro font-semibold uppercase text-gray-400 xl:mt-4 dark:text-gray-400"
            >
              Immerse yourself
            </p>

            <h2 class="text-7xl font-bold leading-tight">
              See <span class="text-primary"> Why</span> <br />
              <span
                class="xl:text-auto bg-white px-2 font-source-code-pro text-[6rem] text-black dark:bg-black dark:text-white"
              >
                JAPAN
              </span>
              <br />
              <span class="text-6xl text-gray-400 xl:text-8xl">
                Is Different
              </span>
            </h2>

            <UDivider class="w-1/3" />

            <h2 class="mt-10 text-3xl font-bold leading-tight">
              <span class="text-primary"> Meaww </span> island
            </h2>
            <p class="mt-4 lg:w-2/3">
              Japan is home to a fascinating place known as Meawww island. Other
              countries also have similar enchanting places. Let's cherish and
              protect these beloved angels. 🐈 ...
            </p>
          </div>
          <ParallaxVideo
            :src="Video3"
            class="absolute top-1/2 h-full w-full -translate-y-1/2 transform opacity-10 xl:left-[45%] xl:h-auto xl:w-[20vw]"
          />
        </div>
      </UContainer>
    </section>

    <section class="relative">
      <UContainer class="px-0">
        <div class="relative px-10 py-10 xl:pb-40">
          <span
            class="text-6xl font-bold text-gray-400 xl:text-8xl dark:text-gray-400"
          >
            Looking for <br />
            Stunning websites?
          </span>
          <p
            class="mt-5 font-source-code-pro uppercase text-gray-400 xl:mt-4 dark:text-gray-400"
          >
            Tell us your dreams
          </p>
          <h1 class="text-5xl font-bold leading-[1.15] xl:text-6xl">
            We're
            <span class="text-primary"> Experts</span>
            at building <span class="text-gray-400"> paths </span> to
            <span
              class="bg-black px-2 font-source-code-pro text-[4.5rem] text-white xl:text-5xl dark:bg-white dark:text-black"
            >
              Success
            </span>
          </h1>
          <p class="mt-6 text-gray-600 xl:mt-12 dark:text-gray-300">
            We are a team of passionate designers and developers who are
            dedicated to creating beautiful and functional websites that help
            you achieve your goals.
          </p>
          <p
            class="mt-8 flex items-center gap-1 text-gray-600 xl:mt-12 dark:text-gray-300"
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
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import Video1 from '~/assets/videos/7956436-uhd_2160_3840_24fps.mp4'
import Video2 from '~/assets/videos/7958163-uhd_3840_2160_24fps.mp4'
import Video3 from '~/assets/videos/8748744-uhd_2160_4096_25fps.mp4'
</script>
