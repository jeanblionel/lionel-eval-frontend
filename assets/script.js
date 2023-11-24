const slides = [
    {
        "image":"background.jpg",
    },
    {
        "image":"background2.jpg",
    },
    {
        "image":"background3.jpg",
    },
]

const imgSlide = document.querySelector('.banner-img');

//défilement et retour à la slide d'origine
let numero = 0;
const moveSlide = () => {
    if (numero > slides.length - 2) {
       numero = 0;  
    }
    else {
        numero++
    }
    
    updateSlide(numero);
};



const updateSlide = ()=>{
    imgSlide.src ="./assets/images/slideshow/" + slides[numero].image;
};

//défilement automatique
const interval = 5000
const autoSlider = setInterval(()=>{
   moveSlide (1);
}, interval)
