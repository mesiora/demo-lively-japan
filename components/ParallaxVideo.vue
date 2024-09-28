<template>
  <div v-if="src" class="aspect-auto">
    <ClientOnly>
      <video
        ref="video"
        class="h-full w-full object-cover opacity-0 transition-opacity duration-1000"
        :src="src"
        autoplay
        loop
        muted
        @canplay="handleCanPlay"
      ></video>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const video = ref<HTMLVideoElement | null>(null)

defineProps({
  src: String,
})

const handleCanPlay = () => {
  console.log('can play')

  if (video.value) {
    video.value.classList.add('opacity-100')
  }
}
</script>

<style>
.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}
</style>
