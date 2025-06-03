const arrowLeft = document.getElementById("arr-left");
const arrowRight = document.getElementById("arr-right");
const scrollContainer = document.getElementById("slide-cont");
const getToWork = document.getElementById("nav-menu-link-1");
const getToMe = document.getElementById("nav-menu-link-2");
const getToContact = document.getElementById("nav-menu-link-3");
const hiEmoji = document.getElementById("hi-emoji");
const toTopBtn = document.getElementById("to-top-btn");

function nextImage() {
    scrollContainer.scrollLeft += 610;
}

function prevImage() {
    scrollContainer.scrollLeft -= 610;
}

arrowRight.addEventListener("click", nextImage)
arrowLeft.addEventListener("click", prevImage)

getToWork.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({
        top: 800,
        behavior: "smooth"
    });
});

getToMe.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({
        top: 1600,
        behavior: "smooth"
    });
});

getToContact.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({
        top: 2300,
        behavior: "smooth"
    });
});

function shakeHand() {
    hiEmoji.classList.toggle("animate__shakeX");
}

hiEmoji.addEventListener("click", shakeHand);

window.onscroll = function() {showToTopBtn()};

function showToTopBtn() {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        toTopBtn.style.display = "flex";
        toTopBtn.style.opacity = 1;
    } else {
        toTopBtn.style.display = "none";
    }
}

showToTopBtn();

toTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
})

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//   <title>Pixel Perfect Cursor Hover</title>
//   <style>
//     body {
//       margin: 0;
//       background: #111;
//       height: 100vh;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }

//     img {
//       width: 300px;
//       display: block;
//     }

//     canvas {
//       display: none;
//     }
//   </style>
// </head>
// <body>
//   <img id="hoverImage" src="yourImage.png" alt="Hover Target">
//   <canvas id="maskCanvas"></canvas>

//   <script>
//     const image = document.getElementById('hoverImage');
//     const canvas = document.getElementById('maskCanvas');
//     const ctx = canvas.getContext('2d');

//     image.onload = () => {
//       canvas.width = image.naturalWidth;
//       canvas.height = image.naturalHeight;
//       ctx.drawImage(image, 0, 0);
//     };

//     image.addEventListener('mousemove', (e) => {
//       const rect = image.getBoundingClientRect();

//       const scaleX = image.naturalWidth / rect.width;
//       const scaleY = image.naturalHeight / rect.height;

//       const x = Math.floor((e.clientX - rect.left) * scaleX);
//       const y = Math.floor((e.clientY - rect.top) * scaleY);

//       if (x < 0 || y < 0 || x >= image.naturalWidth || y >= image.naturalHeight) return;

//       const pixel = ctx.getImageData(x, y, 1, 1).data;
//       const alpha = pixel[3];

//       if (alpha > 10) {
//         document.body.style.cursor = 'url("cursor-inverted.png"), auto';
//       } else {
//         document.body.style.cursor = 'auto';
//       }
//     });

//     image.addEventListener('mouseleave', () => {
//       document.body.style.cursor = 'auto';
//     });
//   </script>
// </body>
// </html>