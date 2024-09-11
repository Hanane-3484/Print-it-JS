const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Click et orientation des flèches du slide
document.querySelector(".arrow_left").addEventListener("click", () => {
    ChangeSlide(-1);
    });

document.querySelector(".arrow_right").addEventListener("click", () => {
    ChangeSlide(1);
    });
    
let i = 0;

function ChangeSlide(sens) {
        i = i + sens;
        if (i > slides.length - 1)
        i = 0 ;
        if (i < 0)
        i = slides.length - 1;

//Chargement des images en fonction du click
let image = document.querySelector(".banner-img");
image.setAttribute("src", "./assets/images/slideshow/"+ slides[i].image);

//Chargement des tagline des images en fonction du click
document.querySelector("#banner p").innerHTML = slides[i].tagLine;

//Chargement du bullet actif en fonction du click
let bullet = document.querySelectorAll('.dot');
bullet.forEach(dot => {
dot.classList.remove('dot_selected');
});
bullet[i].classList.add('dot_selected');
}

let dots = document.querySelector("#banner .dots");
for (let i = 0; i < slides.length; i++) {
let dot = document.createElement('span');
dot.classList.add('dot');
dots.appendChild(dot);
}
