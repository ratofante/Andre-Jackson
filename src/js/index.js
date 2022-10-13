import '../scss/app.scss';

import Init from './sections/init';
import Nav from './components/nav';

document.addEventListener('DOMContentLoaded', () => {

   var FontFaceObserver = require('fontfaceobserver');
   var imagesLoaded = require('imagesloaded');

   //FONTS

   let almendra = new Promise((resolve, reject) => {
      let font = new FontFaceObserver('Almendra Display');
      font.load().then(() => {
         console.log('-- Almendra Loaded');
         resolve()
      }).catch((e) => {
         console.log(e);
         resolve()
      })
   })

   let lato300 = new Promise((resolve, reject) => {
      let font = new FontFaceObserver('Lato', { weight: 300 });
      font.load().then(() => {
         console.log('-- Lato300 Loaded');
         resolve()
      }).catch((e) => {
         console.log(e);
         resolve()
      })
   })

   let lato400 = new Promise((resolve, reject) => {
      let font = new FontFaceObserver('Lato', { weight: 400 });
      font.load().then(() => {
         console.log('-- Lato300 Loaded');
         resolve()
      }).catch((e) => {
         console.log(e);
         resolve()
      })
   })

   let lato700 = new Promise((resolve, reject) => {
      let font = new FontFaceObserver('Lato', { weight: 700 });
      font.load().then(() => {
         console.log('-- Lato300 Loaded');
         resolve()
      }).catch((e) => {
         console.log(e);
         resolve()
      })
   })

   let lato900 = new Promise((resolve, reject) => {
      let font = new FontFaceObserver('Lato', { weight: 900 });
      font.load().then(() => {
         console.log('-- Lato300 Loaded');
         resolve()
      }).catch((e) => {
         console.log(e);
         resolve()
      })
   })

   //let almendra = new FontFaceObserver('Almendra Display');
   //let lato300 = new FontFaceObserver('Lato', { weight: 300 });
   //let lato400 = new FontFaceObserver('Lato', { weight: 400 });
   //let lato700 = new FontFaceObserver('Lato', { weight: 700 });
   //let lato900 = new FontFaceObserver('Lato', { weight: 900 });

   //IMAGES
   let images = imagesLoaded(document.querySelectorAll('img'));
   images.on('done', (instance) => {
      console.log('-- images loaded');
   })

   console.log(images)

   let promises = [
      lato300,
      lato400,
      lato700,
      lato900,
      almendra,
      images
   ];

   Promise.all(promises).then(() => {
      console.log('-- all Promises resolved');

      // Las fonts siguen dando problemas sin darles resolve on catch.
      let init = new Init();
      init.loading();
      init.opening();

      let nav = new Nav();
      nav.init();

   }).catch((e) => {
      console.log(e);
   })
})
