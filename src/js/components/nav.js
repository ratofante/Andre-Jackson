import { gsap } from 'gsap';

class Nav {

   btn = document.querySelector('.nav-btn');
   isActive = false;

   toggle() {
      const nav = gsap.timeline();

      const changeState = () => { this.isActive = !this.isActive }
      !this.isActive ? showNav() : hideNav()
      changeState()

      function showNav() {
         let bars = document.querySelectorAll('.btn-bar');

         nav.to(bars[1], {
            duration: .5,
            opacity: 0
         }).to(bars[0], {
            duration: .5,
            rotate: '40deg',
            backgroundColor: '#eef0f2'
         }, "<").to(bars[2], {
            duration: .5,
            rotate: '-40deg',
            backgroundColor: '#eef0f2'
         }, "<").to('.navbar-picture', {
            duration: 1,
            transform: 'translateY(100%)',
            ease: 'linear'
         }, "<").to('.navbar-menu', {
            duration: 1,
            transform: 'translateY(100%)',
            ease: 'linear'
         }, "<+=0.4").to('.navbar-picture-img', {
            duration: 2,
            ease: 'linear',
            scale: 1
         }, "<+=0.5").from('.navbar-menu-nav-link', {
            duration: .3,
            translateX: '-10%',
            opacity: 0,
            ease: 'linear',
            stagger: 0.08
         }, "<");
      }

      function hideNav() {
         let bars = document.querySelectorAll('.btn-bar');

         nav.to([bars[0], bars[2]], {
            duration: .5,
            rotate: '0deg',
            onComplete: () => {
               gsap.to([bars[0], bars[2]], {
                  backgroundColor: '#1c1c1c',
                  duration: .5
               })
            }
         }).to(bars[1], {
            duration: 0.5,
            opacity: 1
         }, "<").to('.navbar-menu-nav-link', {
            translateX: '10%',
            duration: .3,
            opacity: 0,
            stagger: 0.08,
         }, "<").to('.navbar-picture', {
            duration: 1,
            transform: 'translateY(0%)',
            ease: 'linear'
         }, "<").to('.navbar-menu', {
            duration: 1.2,
            transform: 'translateY(0%)',
            ease: 'linear'
         }, "<").to('.navbar-picture-img', {
            duration: 2,
            ease: 'linear',
            scale: 1.2,
            onComplete: () => {
               gsap.set('.navbar-menu-nav-link', {
                  translateX: '0%',
                  opacity: 1
               })
            }
         }, "<+=0.5");
      }

   }

   init() {
      this.btn.addEventListener('click', this.toggle);
   }

   destroy() {
      this.btn.removeEventListener('click', this.toggle);
   }
}

export default Nav;