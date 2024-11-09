<template>
  <div class="mouse-trail" ref="trail">
    <div class="mouse-trail-inner"></div>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'

interface Position {
  x: number
  y: number
}

interface TrailConfig {
  normalSize: number
  hoverSize: number
  videoSize: number
  speed: number
  initialDelay: number
}

// Configuration
const config: TrailConfig = {
  normalSize: 70,
  hoverSize: 20,
  videoSize: 320,
  speed: 0.07,
  initialDelay: 0.5,
}

// Refs and state
const trail = ref<HTMLElement | null>(null)
const isHovering = ref(false)
const mousePosition = reactive<Position>({ x: 0, y: 0 })
const trailPosition = reactive<Position>({ x: 0, y: 0 })

// Mouse movement handler with debounce
const updateMousePosition = (e: MouseEvent) => {
  mousePosition.x = e.x
  mousePosition.y = e.y
  checkCursor(e)
}

// Cursor style checker
const checkCursor = (e: MouseEvent) => {
  if (!trail.value) return

  const element = document.elementFromPoint(e.clientX, e.clientY)
  if (!element) return

  const computedStyle = window.getComputedStyle(element)

  const isPointer = computedStyle.cursor === 'pointer'
  const isClickable =
    element.tagName === 'BUTTON' ||
    element.tagName === 'A' ||
    element.hasAttribute('role') ||
    isPointer ||
    element.hasAttribute('data-video')

  let size = config.normalSize
  if (isClickable) {
    size = config.hoverSize
  }

  const isVideo = element.hasAttribute('data-video')

  if (isVideo) {
    size = config.videoSize
    const vid = Math.floor(Math.random() * 10) + 1
    addVideo(`${vid}.mp4`)
  } else {
    const video = trail.value.querySelector('video')
    if (video) {
      video.remove()
    }
  }

  if (isClickable !== isHovering.value) {
    isHovering.value = isClickable
    animateTrailSize(size)
  }
}

// Trail size animation
const animateTrailSize = (size: number = 70) => {
  if (!trail.value) return

  gsap.to(trail.value, {
    width: `${size}px`,
    height: `${size}px`,
    duration: 0.3,
    ease: 'power2.out',
    borderRadius: size >= config.videoSize ? '0' : '50%',
  })
}

// Initialize trail animation
const initTrailAnimation = () => {
  if (!trail.value) return

  // Set initial position
  gsap.set(trail.value, {
    xPercent: -50,
    yPercent: -50,
    scale: 0,
    autoAlpha: 0,
  })

  // Fade in animation
  gsap.to(trail.value, {
    scale: 1,
    autoAlpha: 1,
    duration: 0.6,
    delay: config.initialDelay,
    ease: 'power2.out',
  })

  // Create animation ticker
  gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - config.speed, gsap.ticker.deltaRatio())
    trailPosition.x += (mousePosition.x - trailPosition.x) * dt
    trailPosition.y += (mousePosition.y - trailPosition.y) * dt

    if (trail.value) {
      gsap.set(trail.value, {
        x: trailPosition.x,
        y: trailPosition.y,
      })
    }
  })
}

// Add video to trail
const addVideo = (dataVideo: string) => {
  // stop if video already exists
  if (!trail.value) return
  if (trail.value.querySelector('video')) return

  const video = document.createElement('video')

  if (!dataVideo) return

  video.src = `/videos/${dataVideo}`
  video.autoplay = true
  video.loop = true
  video.muted = true
  video.playsInline = true
  video.controls = false
  video.style.opacity = '0'

  const inner = trail.value.querySelector('.mouse-trail-inner')
  if (inner) {
    inner.appendChild(video)

    video.oncanplay = () => {
      gsap.to(video, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }
}

// Cleanup function
const cleanup = () => {
  gsap.ticker.remove(initTrailAnimation)
  window.removeEventListener('mousemove', updateMousePosition)
}

// Lifecycle hooks
onMounted(() => {
  nextTick(() => {
    // Disable if touch device
    if ('ontouchstart' in window) return

    // Initialize mouse position
    trailPosition.x = window.innerWidth / 2
    trailPosition.y = window.innerHeight / 2
    mousePosition.x = trailPosition.x
    mousePosition.y = trailPosition.y

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition, { passive: true })

    // Initialize animation
    initTrailAnimation()
  })
})

onUnmounted(() => {
  cleanup()
})

// Handle visibility changes
const visibility = useDocumentVisibility()

watch(visibility, (value) => {
  if (value === 'hidden') {
    cleanup()
  } else {
    initTrailAnimation()
    window.addEventListener('mousemove', updateMousePosition, { passive: true })
  }
})
</script>

<style>
.mouse-trail {
  width: v-bind('`${config.normalSize}px`');
  height: v-bind('`${config.normalSize}px`');
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1000;
  backdrop-filter: invert(1) grayscale(1);
  /* mix-blend-mode: exclusion; */
  will-change: transform, width, height;
}

.mouse-trail-inner {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  transition: transform 0.2s ease-out;
}

.mouse-trail .mouse-trail-inner video {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  filter: contrast(70%);
}

.mouse-trail:hover .mouse-trail-inner {
  transform: scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .mouse-trail {
    display: none;
  }
}
</style>
