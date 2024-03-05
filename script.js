// window.addEventListener('scroll', function() {
//     var windowCenterY = window.innerHeight / 2;
//     var icons = document.getElementsByClassName('icon');
//     var iconContainers = document.getElementsByClassName('icon-container');
    
//     for (var i = 0; i < icons.length; i++) {
//         var icon = icons[i];
//         var iconContainer = iconContainers[i];

//         var rect = iconContainer.getBoundingClientRect();
//         var iconContainerCenterY = rect.top + rect.height / 2;

//         if (iconContainerCenterY < windowCenterY+150) {
//             // Approaching the center
//             if (iconContainerCenterY*2 < windowCenterY) {
//                 icon.style.transform = "scale(1)";
//                 icon.style.opacity = 0;
//             } else {
//                 icon.style.transform = "scale(2)";
//                 icon.style.opacity = 1;
//             }
//         } else {
//             // Leaving the center
//             if (iconContainerCenterY > windowCenterY) {
//                 icon.style.transform = "scale(1)";
//                 icon.style.opacity = 1;
//             } else {
//                 icon.style.transform = "scale(1)";
//                 icon.style.opacity = 0;
//             }
//         }
//     }
// });

const el1 = document.getElementById('sustainable2');

setTimeout(() => {
  el1.style.visibility = 'visible';
}, 2950);


const el2 = document.getElementById('development2');

setTimeout(() => {
  el2.style.visibility = 'visible';
}, 2950);

const el3 = document.getElementById('goals2');

setTimeout(() => {
  el3.style.visibility = 'visible';
}, 2950);