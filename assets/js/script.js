// OPEN AND CLOSE MENU

let firstCurrencyBox = document.querySelector('.currency__box-send');
let secondCurrencyBox = document.querySelector('.curency__box-convert');
let firstHiddenCurrency = document.querySelector('.first-currency__menu');
let secondHiddenCurrency = document.querySelector('.second-currency__menu');
let wholeFirstDisplay = document.querySelector('.current-currency-send');
let wholeSecondDisplay = document.querySelector('.current-currency-get');



const toggleMenu = () => {
    firstHiddenCurrency.classList.toggle('active');
}

firstCurrencyBox.addEventListener('click', e => {
    if(secondHiddenCurrency.classList.contains('active')){
        secondHiddenCurrency.classList.remove('active');
    } 
        e.stopPropagation();
        toggleMenu();
    
});



const toggleSecondMenu = () => {
    secondHiddenCurrency.classList.toggle('active');
}

secondCurrencyBox.addEventListener('click', e => {
    e.stopPropagation();
    toggleSecondMenu();
});

document.addEventListener('click', e => {
      let target = e.target;
      let its_menu = target == firstHiddenCurrency || firstHiddenCurrency.contains(target);
      let its_hamburger = target == wholeFirstDisplay;
      let menu_is_active = firstHiddenCurrency.classList.contains('active');
      
      if (!its_menu && !its_hamburger && menu_is_active) {
        toggleMenu();
      }
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == secondHiddenCurrency || secondHiddenCurrency.contains(target);
    let its_hamburger = target == wholeSecondDisplay;
    let menu_is_active = secondHiddenCurrency.classList.contains('active');
    
    if (!its_menu && !its_hamburger && menu_is_active) {
        toggleSecondMenu();
    }
});

// END OPEN AND CLOSE MENU

// CHANGE CURRENCY BY DOWN MENU

const paymentValues = ['Visa/Mastercard UAH', 'Advcash', 'Bitcoin', 'Etherium'];

const youSentContainer = document.querySelector('#you-sent');
const firstDisplay = document.querySelector('#display-1');
const youGetContainer = document.querySelector('#you-get');
const secondDisplay = document.querySelector('#display-2');

const renderMenu = (container, display) => {
    paymentValues.map(payment => {
        if (payment == paymentValues[0]){
            container.innerHTML = (`
            <div class="currency__item-big" data-payment-id="${payment}">
                <img src="./assets/image/icon/card.png" alt="" class="img img-currency-menu"></img>          
                <span>${payment}</span>
            </div>
        ` )
        
        } else {
        container.innerHTML +=  (`
        <div class="currency__item-big" data-payment-id="${payment}">
            <img src="./assets/image/icon/${payment.toLowerCase()}.png" alt="" class="img img-currency-menu"></img>          
            <span>${payment}</span>
        </div>
    ` )}}).join('');

    addMenuListeners(container, display);
    
    
};

const addMenuListeners = (container, display) => {

    container.querySelectorAll('.currency__item-big').forEach(element => {
        element.addEventListener('click', ({ target }) => {
            let textPayment = target.dataset.paymentId;

            if (textPayment == 'Visa/Mastercard UAH') {
                display.innerHTML = `<img src="./assets/image/icon/card.png" alt="" class="img img-currency-menu">
                <span id="display-2">Visa/Mastercard UAH</span>
                <span class="arrow-down"></span>`
               } else {
                
                display.innerHTML = `<img src="./assets/image/icon/${textPayment.toLowerCase()}.png" alt="" class="img img-currency-menu">
                <span id="display-2">${textPayment}</span>
                <span class="arrow-down"></span>`
            }
            
            
        })
    });
};

renderMenu(youSentContainer, wholeFirstDisplay);
renderMenu(youGetContainer, wholeSecondDisplay);

// END CHANGE CURRENCY BY DOWN MENU

const buttonChange = function(button, display) {
    
  
    let buttonId = button.id;
   
    
    button.addEventListener('click', e => {

        wholeFirstDisplay.innerHTML = `<img src="./assets/image/icon/bitcoin.png" alt="" class="img img-currency-menu">
        <span id="display-2">Bitcoin</span>
        <span class="arrow-down"></span>`;

        paymentValues.map(payment => {
            console.log(payment);
            
            
            if(payment.toLowerCase() == buttonId){
                display.innerHTML = `<img src="./assets/image/icon/${payment.toLowerCase()}.png" alt="" class="img img-currency-menu">
                <span id="display-2">${payment}</span>
                <span class="arrow-down"></span>`
    
            } else if (buttonId == 'visa'){
                display.innerHTML = `<img src="./assets/image/icon/card.png" alt="" class="img img-currency-menu">
                <span id="display-2">Visa/Mastercard UAH</span>
                <span class="arrow-down"></span>`
                
            }
            
        })
  
})};

let toCardButton = document.querySelector('#visa');
let toEtheriumButton = document.querySelector('#etherium');
let toAdvcashButton = document.querySelector('#advcash');



buttonChange(toCardButton, wholeSecondDisplay);
buttonChange(toEtheriumButton, wholeSecondDisplay);
buttonChange(toAdvcashButton, wholeSecondDisplay);


// MENU FOR MOBILE

let buttonHamburger = document.querySelector('.hamburger');
let hamburgerLines = document.querySelectorAll('.line');
let menuHeader = document.querySelector('.menu-header');

// function openHeaderMenu() {
//     menuHeader.classList.toggle('open');
//     buttonHamburger.classList.toggle('open');
//     body.style.position = 'fixed'; 
// }

// buttonHamburger.addEventListener('click', openHeaderMenu)



// document.addEventListener('click', e => {
//     let target = e.target;
//     let header_menu = target == menuHeader || menuHeader.contains(target);
//     let its_hamburger = target == buttonHamburger;
//     let menu_is_active = menuHeader.classList.contains('open');
    
//     if (!header_menu && !its_hamburger && menu_is_active) {
//         openHeaderMenu();
//     }
// });

let checkbox = document.querySelector('.checkbox');
let menu = document.querySelector('.mobile-menu');
let body = document.querySelector('body');

function showMenu() {
    let handler = function () {

        menu.classList.remove("b-enter-active");
        menu.removeEventListener("transitionend", handler);
    };
    menu.style.display = "block";
    
    menu.classList.add("b-enter");

    raf(function () {
        menu.classList.add("b-enter-active");
        menu.classList.remove("b-enter");
    });

    menu.addEventListener("transitionend", handler);
}

function hideMenu() {
    let handler = function () {
        menu.style.display = "none";
        menu.classList.remove("b-hide-active");
        menu.classList.remove("b-hide-to");
        menu.removeEventListener("transitionend", handler);
    };

    menu.classList.add("b-hide");

    raf(function () {
        menu.classList.add("b-hide-active");
        menu.classList.add("b-hide-to");
        menu.classList.remove("b-hide");
    });

    menu.addEventListener("transitionend", handler);
}

function raf(fn) {
    window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
            fn();
        });
    });
}

checkbox.addEventListener('click', function () {
    if (this.hasAttribute('data-open')) {
        body.classList.remove('hidden');
        this.removeAttribute('data-open');
        hideMenu();
    } else {
        this.setAttribute('data-open', 'open');
        body.classList.add('hidden');
        showMenu();
    }

})


// END MENU FOR MOBILE