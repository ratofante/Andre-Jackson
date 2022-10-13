import { gsap } from 'gsap';
import SplitText from '../libraries/SplitText';

class Init {

   tl;

   loading() {

      gsap.set('.mask', {
         opacity: 0,
         zIndex: -100
      });

      this.tl = gsap.timeline();

      this.tl.from('.bar', {
         duration: 1.5,
         width: '0%'
      })
         .from('.resume', {
            duration: 1,
            y: 20,
            opacity: 0
         }, "<")
         .from('.cover-logo-icon', {
            duration: 1.5,
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)'
         }, "<")
         .to('.bar', {
            duration: 2,
            width: '100%',
            ease: "power4.in"
         }, ">")
         .addLabel('initFinish');
   }

   opening() {

      let portraits = document.querySelectorAll('.portrait-face');
      let andre = new SplitText('#andre', { type: 'chars' }).chars;

      this.tl.to('.bar', {
         onStart: () => {
            gsap.set('.load-bar', {
               justifyContent: 'flex-end'
            })
         },
         duration: 1,
         width: '0%',
         ease: "power4.in"
      }, 'initFinish')
         .to('.load-bar', {
            duration: 1,
            clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
            ease: "power4.in"
         }, "<")
         .to('.resume', {
            duration: 1,
            y: -20,
            opacity: 0
         }, "<")
         .to('.cover-logo-icon', {
            duration: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0 0%)'
         }, "<")
         .to(portraits[0], {
            duration: 1,
            clipPath: 'polygon(10% 90%, 90% 90%, 90% 10%, 10% 10%)'
         }, "<")
         .to(portraits[0].childNodes[1], {
            duration: 2,
            scale: 0.8
         }, "<")
         .to(portraits[1], {
            duration: 1,
            clipPath: 'polygon(10% 90%, 90% 90%, 90% 10%, 10% 10%)'
         }, "-=1.2")
         .to(portraits[1].childNodes[1], {
            duration: 2,
            scale: 0.8
         }, "<")
         .to(portraits[2], {
            duration: 1,
            clipPath: 'polygon(10% 90%, 90% 90%, 90% 10%, 10% 10%)'
         }, "-=1.2")
         .to(portraits[2].childNodes[1], {
            duration: 2,
            scale: 0.8
         }, "<")
         .to('.portrait', {
            duration: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0% 0%)',
         })
         .to('.cover', {
            duration: 1,
            opacity: 0,
            onComplete: () => { gsap.set('.cover', { zIndex: -100 }) }
         }, "<")
         .from('.main-portrait', {
            duration: 2,
            y: '100vh',
         }, "<")
         .from('.main-portrait-bg', {
            duration: 2,
            clipPath: 'polygon(0vw 100vh, 100vw 0vh, 100vw 0vh, 0vw 0vh)'
         }, "<") // polygon(0vw 5vh, 100vw 5vh, 100vw 100vh, 0vw 100vh)
         .from(andre, {
            duration: .4,
            stagger: 0.025,
            y: 30,
            opacity: 0
         }, ">")

      // Falta animar botón de whatsapp

   }

}

export default Init;