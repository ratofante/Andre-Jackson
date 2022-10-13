import '../scss/app.scss';

import Init from './sections/init';
import Nav from './components/nav';

document.addEventListener('DOMContentLoaded', () => {

   var FontFaceObserver = require('fontfaceobserver');
   var imagesLoaded = require('imagesloaded');

   //FONTS
   let almendra = new FontFaceObserver('Almendra Display');

   let lato300 = new FontFaceObserver('Lato', { weight: 300 });
   let lato400 = new FontFaceObserver('Lato', { weight: 400 });
   let lato700 = new FontFaceObserver('Lato', { weight: 700 });
   let lato900 = new FontFaceObserver('Lato', { weight: 900 });

   //IMAGES
   let images = imagesLoaded(document.querySelectorAll('img'));
   images.on('done', (instance) => {
      console.log('-- images loaded');
   })

   let promises = [
      lato300.load(null, 12000),
      lato400.load(null, 12000),
      lato700.load(null, 12000),
      lato900.load(null, 12000),
      almendra.load(null, 12000),
      images
   ];

   Promise.all(promises).then(() => {
      console.log('-- all Promises resolved');

      // Las fonts siguen dando problemas sin darles resolve on catch.
   })

   let init = new Init();
   init.loading();
   init.opening();

   let nav = new Nav();
   nav.init();


})
