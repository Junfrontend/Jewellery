'use strict';

var menuButton = document.querySelector('.top-bar__menu-button');
var headerTopBar = document.querySelector('.top-bar');
var header = document.querySelector('.header');
var headerLogo = document.querySelector('.top-bar__logo');
var iconCart = document.querySelector('.top-bar__icon-cart');
var headerMenu = document.querySelector('.header__nav-bar');
menuButton.addEventListener(('click'), showMenu);

function showMenu() {
  headerTopBar.classList.toggle('top-bar--closed');
  header.classList.toggle('header--menu-opened');
  headerLogo.classList.toggle('top-bar__logo--white');
  menuButton.classList.toggle('top-bar__menu-button--menu-opened');
  iconCart.classList.toggle('top-bar__icon-cart--menu-opened');
  headerMenu.classList.toggle('nav-bar--closed');
  document.querySelector('body').classList.toggle('overflow-hidden');
}
