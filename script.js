const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const cartItem = document.querySelector('.cart-items-container')
const cartBtn = document.querySelector('#cart-btn')
const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('#menu-btn')
const login = document .querySelector('.loginForm')
const register = document .querySelector('.registerForm')
// const loginBtn= document.querySelector('#loginBtn')
const userBtn= document.querySelector('#user-btn')
var logCount=0;
const Menu =[
    {
        name:"6 Mini Pizza",
        prize:"$104.99",
        img:"images/mini-pizzas.jpg",
    },
    {
        name:"5 Mini Burgers",
        prize:"$99.99",
        img:"images/mini-burgers.jpg",
    },
    {
        name:"2 Mixed Pizza",
        prize:"$159.99",
        img:"images/mixed-pizza.jpg",
    },
    {
        name:"2 Meatball Burger",
        prize:"$89.99",
        img:"images/meatball-burger.jpg",
    }
    
];
if (logCount>0){
    userBtn.style.display="";
}



searchBtn.addEventListener('click', ()=>{
    searchForm.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm) ){
            searchForm.classList.remove('active');
        }
    })
})

cartBtn.addEventListener('click', ()=>{
    cartItem.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem) ){
            cartItem.classList.remove('active');
        }
    })
})

menuBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(navbar) && !e.composedPath().includes(menuBtn) ){
            navbar.classList.remove('active');
        }
    })
})

// loginBtn.addEventListener('click', ()=>{
//     logCount=logCount+1;    
// })



function showLogin(){
    register.style.display="none";
    login.style.display="flex";
}
function showRegister(){
    register.style.display="flex";
    login.style.display="none";
}

// Cart Feature:

var emptyCart = document.getElementById("emptyCart");
var checkOutBtn = document.getElementById("checkOutBtn");

var alertBox = document.getElementById("alertBox");

var cartContainer = document.getElementById("cartContainer");
var cartContainerList = document.getElementById("cartContainerList");;

checkOutBtn.style.display = "none";

function addToCart(idstr) {
    var id = Number(idstr);
    console.log(id)
    var newEntry = document.createElement('li');
    var newItem = document.createElement('div');
    newItem.className = "cart-item";

    var newItemImg = document.createElement('img');
    newItemImg.src = Menu[id].img;

    var newItemContent = document.createElement('div');
    newItemContent.className = "content"

    var newItemName = document.createElement('h3');
    newItemName.textContent = Menu[id].name

    var newItemPrice = document.createElement('div');
    newItemPrice.className = "price"
    newItemPrice.textContent = Menu[id].prize;


    newItemContent.appendChild(newItemName);
    newItemContent.appendChild(newItemPrice);

    newItem.appendChild(newItemImg);
    newItem.appendChild(newItemContent);

    newEntry.appendChild(newItem);
    cartContainerList.appendChild(newEntry);

    emptyCart.style.display = "none";
    checkOutBtn.style.display = "block";

    alertBox.style.display = "flex";
    setTimeout(() => {alertBox.style.display = "none"}, 2000);

}

var mainTag = document.getElementById("mainTag");
var loginPopup = document.getElementById("loginMainContainer");

function showPopup(){
    loginPopup.style.display = "flex";
    mainTag.classList.toggle('blur')
}
function hidePopup(){
    loginPopup.style.display = "none";
    mainTag.classList.toggle('blur')
}