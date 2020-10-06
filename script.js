
let slideIndex = 1;
showSlides(slideIndex);
function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;

    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
};

let portfolioTages = document.querySelector('.image_style');
let portfolio = document.querySelector('.section2 .portfolio_image');
let portfolioImeges = portfolio_image.querySelectorAll('IMG');
let arr =[];

portfolioTages.addEventListener('click', (Event) => {
    if (!event.target.classList.contains('icon_all')) {
    portfolioTages.querySelectorAll('image_position').forEach( item => item.classList.remove('icon_all'));
    Event.target.classList.add('icon_all');
    shuffleImages();
}
});

portfolioImeges.forEach( (item) => {
    arr.push(item);
    item.addEventListener('click', () => {
        portfolioImeges.forEach( item => item.classList.remove('IMG'));
        Event.target.classList.add('IMG');
    });
});

function shuffleImages() {
    portfolioImeges.forEach (item => item.classList.remove('IMG'));

    while (portfolio.firstChild) {
        portfolio.removeChild(portfolio.firstChild);
    }

let currentIndex = portfolioImeges.length;
let temporaryValue, randomIndex;

while(currentIndex !==0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -=1;

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
}

arr.forEach(item => {
    item.classList.add('hidden');
    portfolio.appendChild(item);
    setTimeout(() => item.classList.remove('hidden'),300);
});
}

