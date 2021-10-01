let btn = document.querySelector('.site-header__btn');
let modal = document.querySelector('.modal');
let modal__btn = document.querySelector('.modal__btn');
btn.addEventListener('click',function(){
  modal.classList.add('open')
})
modal__btn.addEventListener('click',function(){
  modal.classList.remove('open')
})