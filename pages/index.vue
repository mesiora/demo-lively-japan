<template>
  <div>
    <section class="relative h-screen">
      <ParallaxVideo
        :src="Video1"
        class="absolute left-4 top-[10vh] w-[25vw] lg:left-28"
      />
      <ParallaxVideo
        :src="Video2"
        class="absolute -right-14 top-[54vh] w-[30vw]"
      />
      <UContainer>
        <div
          class="relative z-10 flex h-full flex-col justify-center pl-[20vw] pt-[15vh] text-gray-800 dark:text-white"
        >
          <p
            class="mt-4 font-source-code-pro font-semibold uppercase text-gray-400 dark:text-gray-400"
          >
            A journey to the heart
          </p>
          <h1 class="text-8xl font-bold">
            DISCOVER The
            <span class="text-primary">Vibrant Heart</span>
            <span class="text-gray-400"> of </span>
            <span
              class="bg-black px-2 font-source-code-pro text-white dark:bg-white dark:text-black"
            >
              JAPAN
            </span>
          </h1>
          <p class="mt-12 text-gray-600 dark:text-gray-300">
            Explore the beauty of Country with our gallery of photos and videos.
          </p>
        </div>
      </UContainer>
    </section>

    <section class="reverse-color-mode">
      <UContainer>
        <div class="relative h-screen items-center py-40">
          <div class="relative z-10 p-10">
            <p
              class="mt-4 font-source-code-pro font-semibold uppercase text-gray-400 dark:text-gray-400"
            >
              Immerse yourself
            </p>

            <h2 class="text-7xl font-bold leading-tight">
              See <span class="text-primary"> Why</span> <br />
              <span
                class="bg-white px-2 font-source-code-pro text-black dark:bg-black dark:text-white"
              >
                JAPAN
              </span>
              <br />
              <span class="text-8xl text-gray-400"> Is Different </span>
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
            <!-- <h2 class="mt-10 text-3xl font-bold leading-tight">
              Unveil the Magic of <span class="text-primary">Matcha</span>
            </h2>
            <p class="mt-4">
              Dive into the world of Matcha, Japan's exquisite green tea,
              celebrated for its vibrant color, rich flavor, and numerous health
              benefits. Experience the tradition and tranquility in every sip.
            </p> -->
          </div>
          <ParallaxVideo
            :src="Video3"
            class="absolute left-[45%] top-1/2 w-[20vw] -translate-y-1/2 transform opacity-5"
          />
        </div>
      </UContainer>
    </section>

    <section class="relative">
      <UContainer>
        <div class="relative pb-40 pt-60">
          <span
            class="absolute -top-6 left-0 text-8xl font-bold opacity-[0.025]"
          >
            Looking for <br />
            Stunning websites?
          </span>
          <p
            class="mt-4 font-source-code-pro uppercase text-gray-400 dark:text-gray-400"
          >
            Tell us your dreams
          </p>
          <h1 class="text-6xl font-bold">
            We're
            <span class="text-primary"> Experts</span>
            at building <span class="text-gray-400"> paths </span> to
            <span
              class="bg-black px-2 font-source-code-pro text-white dark:bg-white dark:text-black"
            >
              Success
            </span>
          </h1>
          <p class="mt-12 text-gray-600 dark:text-gray-300">
            We are a team of passionate designers and developers who are
            dedicated to creating beautiful and functional websites that help
            you achieve your goals.
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
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import Video1 from '~/assets/videos/7956436-uhd_2160_3840_24fps.mp4'
import Video2 from '~/assets/videos/7958163-uhd_3840_2160_24fps.mp4'
import Video3 from '~/assets/videos/8748744-uhd_2160_4096_25fps.mp4'
</script>
