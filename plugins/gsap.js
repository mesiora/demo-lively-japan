import { gsap } from 'gsap/all' // นำเข้า gsap และ plugins ทั้งหมด
import TextPlugin from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin) // ลงทะเบียน TextPlugin

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('gsap', gsap) // ทำให้ gsap สามารถใช้งานได้ทั่วทั้งแอป
})
