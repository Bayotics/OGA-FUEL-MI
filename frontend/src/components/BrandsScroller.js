import '../scroller.css'
import { useRef } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion"
import { wrap } from "@motionone/utils"
import logo from '../assets/Fuel-me/pngs/logo.png'
import conoil from '../assets/Fuel-me/pngs/conoil.png'
import enyo from '../assets/Fuel-me/pngs/enyo.png'
import exxon from '../assets/Fuel-me/pngs/exxon.png'
import mobil from '../assets/Fuel-me/pngs/mobil.png'
import mrs from '../assets/Fuel-me/pngs/mrs.png'
import nnpc from '../assets/Fuel-me/pngs/nnpc.png'
import oando from '../assets/Fuel-me/pngs/oando.png'
import total from '../assets/Fuel-me/pngs/total.png'


function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })
  const x = useTransform(baseX, v => `${wrap(50, -50, v)}%`)

  const directionFactor = useRef(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        {/* <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span> */}
      </motion.div>
    </div>
  )
}

export default function BrandScroller() {
  return (
    <section>
        
      <ParallaxText baseVelocity={-1}>
        <div className='flex gap-8'>
          <img className="h-8 w-16" src = {conoil} alt="fuel-me-logo" />
          <img className="h-8 w-16" src = {enyo} alt="fuel-me-logo" />
          <img className="h-8 w-16" src = {exxon} alt="fuel-me-logo" />
          <img className="h-8 w-16" src = {mobil} alt="fuel-me-logo" />
          <img className="h-8 w-16" src = {mrs} alt="fuel-me-logo" />
          <img className="h-8 w-16" src = {nnpc} alt="fuel-me-logo" />
          <img className="h-8 w-16" src = {oando} alt="fuel-me-logo" />
          <img className="h-8 w-16" src = {total} alt="fuel-me-logo" />
        </div>
      </ParallaxText>
      <div className='mt-4'>
      <ParallaxText baseVelocity={1}>
        <div className='flex gap-8'>
          <img className="h-8 w-16" src = {conoil} alt="fuel-me-logo" />
          <img className="h-8 w-16" src = {enyo} alt="fuel-me-logo" />
          <img className="h-8 w-16" src = {exxon} alt="fuel-me-logo" />
          <img className="h-8 w-16" src = {mobil} alt="fuel-me-logo" />
          <img className="h-8 w-16" src = {mrs} alt="fuel-me-logo" />
          <img className="h-8 w-16" src = {nnpc} alt="fuel-me-logo" />
          <img className="h-8 w-16" src = {oando} alt="fuel-me-logo" />
          <img className="h-8 w-16" src = {total} alt="fuel-me-logo" />
        </div>
      </ParallaxText>
      </div>
      
    </section>
  )
}