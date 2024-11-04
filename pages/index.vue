<template>
  <div>
    <section
      class="relative flex h-screen items-center justify-center xl:block"
    >
      <ParallaxVideo
        :src="Video1"
        class="absolute top-0 h-[50vh] w-full xl:left-28 xl:top-[5vh] xl:h-auto xl:w-[30vw] 2xl:w-[25vw]"
      />
      <ParallaxVideo
        :src="Video2"
        class="absolute top-[50%] h-[50vh] sm:w-full xl:right-0 xl:top-[54vh] xl:h-auto xl:w-[30vw]"
      />
      <UContainer class="w-full">
        <div
          class="relative z-10 flex h-full flex-col justify-center px-5 text-white sm:px-20 xl:pl-[20vw] xl:pt-[15vh] xl:text-gray-800 2xl:pl-[15vw] dark:text-white"
        >
          <p
            class="mt-4 font-source-code-pro font-semibold uppercase text-gray-400 dark:text-gray-400"
          >
            A journey to the heart
          </p>
          <h1 class="text-[4rem] font-bold leading-[1.1] xl:text-8xl">
            DISCOVER The
            <p ref="shake" class="text-primary">
              Vibrant Heart <span class="text-gray-400"> of </span>
            </p>
            <span
              id="JAPAN"
              class="bg-black px-2 font-source-code-pro text-white dark:bg-white dark:text-black"
            >
              日本
            </span>
          </h1>
          <p class="mt-12 text-gray-300 xl:text-gray-600 dark:text-gray-300">
            Explore the beauty of Country with our gallery of photos and videos.
          </p>
        </div>
      </UContainer>
    </section>

    <section class="reverse-color-mode">
      <UContainer class="px-0 sm:px-0 lg:px-0">
        <div class="relative items-center py-0 xl:h-screen xl:py-40">
          <div class="relative z-10 px-8 py-20 sm:px-28 xl:w-full xl:p-10">
            <p
              class="font-source-code-pro font-semibold uppercase text-gray-400 xl:mt-4 dark:text-gray-400"
            >
              Immerse yourself
            </p>
            <!-- ref="japanText"  -->
            <h2 class="text-7xl font-bold leading-tight">
              See <span class="text-primary"> Why</span> <br />
              <div ref="shakeScroll">
                <span
                  class="xl:text-auto bg-white px-2 font-source-code-pro text-[6rem] text-black dark:bg-black dark:text-white"
                >
                  JAPAN
                </span>
              </div>
              <span class="text-6xl text-gray-400 xl:text-8xl">
                Is Different
              </span>
            </h2>

            <UDivider class="w-1/3" />

            <h2 ref="meaw" class="mt-10 text-3xl font-bold leading-tight">
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
            class="absolute top-1/2 h-full w-full -translate-y-1/2 transform opacity-5 xl:left-[52%] xl:h-[90%] xl:w-[25vw] xl:opacity-20"
          />
        </div>
      </UContainer>
    </section>

    <section class="relative" id="Section3">
      <UContainer class="px-0 sm:px-0">
        <div
          class="relative px-10 py-10 sm:px-28 lg:px-[5rem] xl:px-0 xl:pb-10"
        >
          <span
            class="text-6xl font-bold text-gray-400 xl:text-8xl dark:text-gray-400"
          >
            Looking for Stunning
            <br />
            websites?
          </span>
          <p
            class="mt-5 font-source-code-pro uppercase text-gray-400 xl:mt-4 dark:text-gray-400"
          >
            Tell us your dreams
          </p>
          <h1
            ref="expert"
            class="text-5xl font-bold leading-[1.15] xl:text-6xl"
          >
            We're
            <span class="text-primary">Experts</span>
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

const { $gsap } = useNuxtApp()
const shake = ref(null)
const shakeScroll = ref(null)
const japanText = ref(null)
const stunningText = ref(null)
const meaw = ref(null)
const expert = ref(null)

onMounted(() => {
  // เริ่มทำการ animate สำหรับแต่ละ element
  $gsap.to('#JAPAN', {
    duration: 0.8,
    text: 'JAPAN',
    delay: 1,
  })

  if (stunningText.value) {
    animateStunningText(stunningText.value)
  }

  if (japanText.value) {
    animateJapanText(japanText.value)
  }

  if (shake.value) {
    animateShake(shake.value)
  }
  if (shakeScroll.value) {
    animateDropScroll(shakeScroll.value)
  }
  if (meaw.value) {
    animateSlideInFromLeft(meaw.value)
  }
  if (expert.value) {
    animateShakeOnScroll(expert.value)
  }
})

const animateStunningText = (textElement: any) => {
  // ตั้งค่าเริ่มต้น
  $gsap.set(textElement, {
    opacity: 0,
    y: 50,
    scale: 1.2,
    rotation: -10,
  })

  // เริ่ม animation
  $gsap.to(textElement, {
    opacity: 1,
    y: 0,
    scale: 1,
    rotation: 0,
    duration: 1.5,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: textElement,
      start: 'top 150%',
      end: 'bottom top',
      scrub: true,
    },
    onStart: () => {
      const letters = textElement.textContent.split('')
      textElement.textContent = '' // ลบข้อความเดิมออก

      letters.forEach((letter: any, index: number) => {
        const span = document.createElement('span')
        span.textContent = letter === ' ' ? '\u00A0' : letter // รักษาระยะห่างระหว่างคำ
        span.style.display = 'inline-block'
        span.style.opacity = '0' // เริ่มจากโปร่งใส
        span.style.transform = 'translateY(20px)' // เริ่มจากเลื่อนลง
        textElement.appendChild(span)

        // สร้าง animation สำหรับแต่ละตัวอักษร
        $gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.1, // ให้ปรากฏขึ้นตามลำดับ
          ease: 'power1.out',
        })
      })
    },
  })
}

const animateJapanText = (japanElement: any) => {
  $gsap.fromTo(
    japanElement,
    {
      opacity: 0,
      scale: 0.5,
      rotation: -100,
      y: 100,
    },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      y: 0,
      duration: 1.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: japanElement,
        start: 'top 150%', // เริ่มทำงานเมื่อ scroll เข้ามาใกล้ 80% ของ viewport
        end: 'bottom top', // จบเมื่อ scroll ผ่านพ้น element ไป
        scrub: 1, // ทำให้ animation เคลื่อนตามการ scroll
      },
    },
  )
}

const animateShake = (shakeElement: any) => {
  $gsap.from(shakeElement, {
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: 'elastic.out(1, 0.3)', // ให้มี effect เด้งเบาๆ
    rotation: 15, // หมุนเล็กน้อยขณะเข้ามา
    scale: 0.5, // เริ่มจากขนาดเล็กแล้วค่อยๆ ขยาย
  })
}

const animateDropScroll = (dropElement: any) => {
  // ตั้งค่าเริ่มต้นให้เริ่มจากด้านบน
  $gsap.set(dropElement, {
    y: -150, // เริ่มจากด้านบน (ค่าเชิงลบ)
    opacity: 0, // เริ่มจากโปร่งใส
  })

  // สร้าง animation ให้หล่นลงมา
  $gsap.to(dropElement, {
    y: 0, // ย้ายมาที่ตำแหน่งเริ่มต้น
    opacity: 1, // ทำให้โปร่งใส
    duration: 1, // ระยะเวลาในการตก
    ease: 'power2.out', // ความนุ่มนวลของการเคลื่อนไหว
    scrollTrigger: {
      trigger: dropElement,
      start: 'top 90%', // เริ่มทำงานเมื่อ scroll มาที่กลาง viewport
      end: 'bottom top',
      scrub: true, // ทำให้ animation เคลื่อนตามการ scroll
    },
  })
}

const animateSlideInFromLeft = (element: any) => {
  // ตั้งค่าเริ่มต้นให้เริ่มจากด้านซ้าย
  $gsap.set(element, {
    x: -80, // เริ่มจากด้านซ้าย (ค่าลบ)
    opacity: 0, // เริ่มจากโปร่งใส
  })

  // สร้าง animation ให้วิ่งเข้ามาจากด้านซ้าย
  $gsap.to(element, {
    x: 0, // เคลื่อนที่มาที่ตำแหน่งเริ่มต้น
    rotation: 0, // หมุนไปทางขวา
    opacity: 1, // ทำให้โปร่งใส
    duration: 1, // ระยะเวลาในการเคลื่อนที่
    ease: 'power2.out', // ความนุ่มนวลของการเคลื่อนไหว
    scrollTrigger: {
      trigger: element,
      start: 'top 100%', // เริ่มทำงานเมื่อ scroll มาถึง 80% ของ viewport
      end: 'bottom 25%',
      scrub: true, // ทำให้ animation เคลื่อนตามการ scroll
    },
  })
}

const animateShakeOnScroll = (shakeElement: any) => {
  // ตั้งค่าเริ่มต้น
  $gsap.set(shakeElement, {
    rotation: 3, // เริ่มจากการหมุนที่ 0 องศา
  })

  // สร้าง animation แบบเขย่า
  $gsap.to(shakeElement, {
    rotation: 0, // หมุนไปทางขวา
    duration: 0.5, // ระยะเวลาในการหมุน
    ease: 'power1.inOut', // ความนุ่มนวลของการเคลื่อนไหว
    yoyo: true, // หมุนกลับ
    repeat: 12, // ทำให้วนซ้ำตลอด
    scrollTrigger: {
      trigger: shakeElement, // ใช้ element นี้เป็น trigger
      start: 'top 80%', // เริ่มทำงานเมื่อ scroll มาถึง 80% ของ viewport
      end: 'bottom top',
      scrub: true, // ทำให้ animation เคลื่อนตามการ scroll
    },
  })
}
</script>
