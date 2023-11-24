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

//////////////////

const carsLocation = [
    {
        "id": 10,
        "image": "assets/images/vehicule1.png",
        "model":"peugeot",
        "description": "bla bla",
        "price": 900,
        "agence": "Paris",
        "thumbnails": [
            "vignette1.jpg",
            "vignette2.jpg"
        ]
    },
    {
        "id": 11,
        "image": "vehicule2.png",
        "model":"ford",
        "description": "bla bla",
        "price": 990,
        "agence": "Paris",
        "thumbnails": [
            "vignette1.jpg",
            "vignette2.jpg"
        ]
    },
    {
        "id": 13,
        "image": "vehicule3.jpg",
        "model":"audi",
        "description": "bla bla",
        "price": 600,
        "agence": "Paris",
        "thumbnails": [
            "vignette1.jpg",
            "vignette2.jpg"
        ]
    },
    {
        "id": 14,
        "image": "vehicule4.jpg",
        "model":"opel",
        "description": "bla bla",
        "price": 700,
        "agence": "Paris",
        "thumbnails": [
            "vignette1.jpg",
            "vignette2.jpg"
        ]
    }

]