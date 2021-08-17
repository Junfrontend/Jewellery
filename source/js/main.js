'use strict';

var menuButton = document.querySelector('.top-bar__menu-button');
var headerTopBar = document.querySelector('.top-bar');
var header = document.querySelector('.header');
var headerLogo = document.querySelector('.top-bar__logo');
var iconCart = document.querySelector('.top-bar__icon-cart');
var headerMenu = document.querySelector('.header__nav-bar');
var loginModal = document.querySelector('.login');
var loginButton = document.getElementById('login');
var enterButton = document.querySelector('.login__log-in-button');
var loginMenuButton = document.getElementById('login-menu');
var body = document.querySelector('body');
var loginCloseButton = document.querySelector('.login__close-button');
var loginWrapper = document.querySelector('.login__wrapper');
var faqItem = Array.from(document.querySelectorAll('.faq__item'));
var faq = document.querySelectorAll('.faq');
var filterHeader = Array.from(document.querySelectorAll('.filter__header'));
var filterShowButton = document.querySelector('.filter__show-button');
var filter = document.querySelector('.filter');
var addToCartTemp = document.querySelector('.item-was-added-to-cart-template');
var addToCartButton = document.querySelector('.item-card__add-to-cart-button');
var hideCartTemp = document.querySelector('.item-was-added-to-cart-template__close-button');
var itemsCartCounter = document.querySelector('.counter');
var emailField = document.getElementById('login-email');
var passwordField = document.getElementById('login-password');

function showMenu() {
  headerTopBar.classList.toggle('top-bar--closed');
  header.classList.toggle('header--menu-opened');
  headerLogo.classList.toggle('top-bar__logo--white');
  menuButton.classList.toggle('top-bar__menu-button--menu-opened');
  iconCart.classList.toggle('top-bar__icon-cart--menu-opened');
  headerMenu.classList.toggle('nav-bar--closed');
  document.querySelector('body').classList.toggle('overflow-hidden');
}

function showOrCloseLoginModal(e) {
  e.preventDefault();
  loginModal.classList.toggle('login--hidden');
  body.classList.toggle('overflow-hidden');
  emailField.focus();
}

window.addEventListener(('keyup'), function (e) {
  if (e.key === 'Tab' && !loginModal.classList.contains('login--hidden')) {
    if (String(e.target.parentNode.classList.value.slice(0, 5)) !== 'login' &&
    String(e.target.classList.value.slice(0, 5)) !== 'login') {
      emailField.focus();
    }
  }
});
if (enterButton) {
  enterButton.addEventListener(('click'), function () {
    localStorage.setItem(passwordField.name, passwordField.value);
    localStorage.setItem(emailField.name, emailField.value);
  });
}

if (loginCloseButton) {
  loginCloseButton.addEventListener(('click'), showOrCloseLoginModal);
}
if (loginButton) {
  loginButton.addEventListener(('click'), showOrCloseLoginModal);
}

if (loginMenuButton) {
  loginMenuButton.addEventListener(('click'), function (e) {
    e.preventDefault();
    showMenu();
    showOrCloseLoginModal(e);
  });
}

window.addEventListener(('keydown'), function (e) {
  if (e.key === 'Escape' && !loginModal.classList.contains('login--hidden')) {
    showOrCloseLoginModal(e);
  }
});
window.addEventListener(('click'), function (e) {
  if (e.target === loginModal && e.target !== loginWrapper) {
    showOrCloseLoginModal(e);
  }
});
menuButton.addEventListener(('click'), showMenu);

function showOrCloseFaqItem(e) {
  if (e.target.parentNode !== faq[0]) {
    e.target.parentNode.classList.toggle('faq__item--active');
  }
  if (e.target.parentNode === faq[0]) {
    e.target.classList.toggle('faq__item--active');
  }
}

for (var i = 0; i < faqItem.length; i++) {
  faqItem[i].addEventListener(('click'), showOrCloseFaqItem);
}

function showOrHideFilterItem(e) {
  if (e.target.tagName === 'use') {
    e.target.parentNode.parentNode.classList.toggle('filter__header--closed');
    e.target.parentNode.parentNode.parentNode.classList.toggle('filter__field--closed');
  } else if (filterHeader.includes(e.target.parentNode)) {
    e.target.parentNode.classList.toggle('filter__header--closed');
    e.target.parentNode.parentNode.classList.toggle('filter__field--closed');
  } else {
    e.target.classList.toggle('filter__header--closed');
    e.target.parentNode.classList.toggle('filter__field--closed');
  }
}

for (var j = 0; j < filterHeader.length; j++) {
  filterHeader[j].addEventListener(('click'), showOrHideFilterItem);
}

function showFilter() {
  filter.classList.toggle('filter--closed');
  filterShowButton.classList.toggle('filter__show-button--filter-opened');
}

function showOrHideItemCartTemp() {
  addToCartTemp.classList.toggle('item-was-added-to-cart-template--closed');
  document.querySelector('body').classList.toggle('overflow-hidden');
}

if (filterShowButton) {
  filterShowButton.addEventListener(('click'), showFilter);
}

if (addToCartButton) {
  addToCartButton.addEventListener(('click'), showOrHideItemCartTemp);
  hideCartTemp.addEventListener(('click'), showOrHideItemCartTemp);
  window.addEventListener(('keydown'), function (e) {
    if (e.key === 'Escape' && !addToCartTemp.classList.contains('item-was-added-to-cart-template--closed')) {
      showOrHideItemCartTemp();
    }
  });
  window.addEventListener(('click'), function (e) {
    if (e.target === addToCartTemp && e.target !== document.querySelector('.item-was-added-to-cart-template__mask')) {
      showOrHideItemCartTemp();
    }
  });
}
function changeCartValue() {
  itemsCount.textContent = String(counterInput.value);
  cartSubtotal.textContent = 115 * Number(counterInput.value) + ' ';
}

if (itemsCartCounter) {
  var counterPlus = itemsCartCounter.querySelector('.counter__plus-button');
  var counterMinus = itemsCartCounter.querySelector('.counter__minus-button');
  var counterInput = itemsCartCounter.querySelector('input');
  var itemsCount = document.getElementById('items-count');
  var cartSubtotal = document.getElementById('cart-subtotal');
  counterPlus.addEventListener(('click'), function () {
    if (counterInput.value >= 9) {
      counterInput.value = 9;
    } else {
      counterInput.value++;
    }
    changeCartValue();
  });
  counterMinus.addEventListener(('click'), function () {
    if (counterInput.value <= 1) {
      counterInput.value = 1;
    } else {
      counterInput.value--;
    }
    changeCartValue();
  });
}
