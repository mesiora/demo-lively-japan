import { gsap } from 'gsap/all' // นำเข้า gsap และ plugins ทั้งหมด
import TextPlugin from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(TextPlugin) // ลงทะเบียน TextPlugin
gsap.registerPlugin(ScrollTrigger)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('gsap', gsap) // ทำให้ gsap สามารถใช้งานได้ทั่วทั้งแอป
})
