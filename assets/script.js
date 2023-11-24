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


const interval = 5000
const autoSlider = setInterval(()=>{
   moveSlide (1);
}, interval)