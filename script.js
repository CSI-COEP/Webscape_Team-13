const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const cartItem = document.querySelector('.cart-items-container')
const cartBtn = document.querySelector('#cart-btn')
const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('#menu-btn')
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
    
]



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

