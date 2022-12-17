const portfolioItems = document.querySelectorAll('.portfolio__item');
const portfolioItemDescription = document.querySelectorAll('.portfolio-item__description');

//delete class on all items
portfolioItemDescription.forEach(n => {
  n.classList.remove('portfolio-item__description_visible');
});

//mouseenter on item
for (let i = 0; i < portfolioItems.length; i++){
  portfolioItems[i].addEventListener('mouseenter', function (){
    portfolioItemDescription[i].classList.add('portfolio-item__description_visible');
  })
}
//mouseleave on item
for (let i = 0; i < portfolioItems.length; i++){
  portfolioItems[i].addEventListener('mouseleave', function (){
    portfolioItemDescription[i].classList.remove('portfolio-item__description_visible');
  })
}
