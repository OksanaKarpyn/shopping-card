const openshopping = document.querySelector('.shopping .fa-cart-shopping');
const closeShopping = document.querySelector('.closeShopping');
const listMenu = document.querySelector('.list-menu');
const body = document.querySelector('body');
const cards = document.querySelector('.cards');
const listcard = document.querySelector('.listcard');
const container = document.querySelector('.container');

const total = document.querySelector('.total');

// actions
openshopping.addEventListener('click',function(){
    cards.classList.add('active');
    container.classList.add('active');
})
closeShopping.addEventListener('click',function(){
    cards.classList.remove('active');
    container.classList.remove('active');
})
let products=[
    {
        id: 1,
        name: 'partsbs',
        image: 'hamburger.png',
        price: 13.00,
    },
    {
        id: 2,
        name: 'ttatattat',
        image: 'hamburger.png',
        price: 13.00,
    },
    {
        id: 3,
        name: 'loremfhfhf',
        image: 'hamburger.png',
        price: 13.00,
    },
    {
        id: 4,
        name: 'lorem10',
        image: 'hamburger.png',
        price: 13.00,
    },
    {
        id: 5,
        name: 'hamburget',
        image: 'hamburger.png',
        price: 13.00,
    },
    {
        id: 6,
        name: 'tttt',
        image: 'hamburger.png',
        price: 13.00,
    },
    {
        id: 7,
        name: 'partsbs',
        image: 'hamburger.png',
        price: 13.00,
    },
    {
        id: 8,
        name: 'partsbs',
        image: 'hamburger.png',
        price: 13.00,
    },
    {
        id: 9,
        name: 'partsbs',
        image: 'hamburger.png',
        price: 13.00,
    },
    
]
 const listCard = [];
 const quantity = document.querySelector('.quantity');
const pathImg = './img/';

function initApp(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.className = 'list-item';
        newDiv.innerHTML +=`
         <img src="${pathImg}${value.image}" alt="">
         <div class ="list-info "> 
            <div class="list-title ps-3">${value.name}</div>
            <div class="list-price ps-3 pb-2">$${value.price.toLocaleString()}</div>
            <button class="btn btn-outline-secondary  mx-3 mb-2" onclick ="addToCard(${key})">Add to Card</button>
         </div>
        `;
        listMenu.appendChild(newDiv);
       
    })
}
initApp();
function addToCard(key){
    if(listCard[key] == null){
        // listCard[key] = products[key];
        // listCard[key].quantity = 1 ;
        listCard[key] = { ...products[key], quantity: 1 }; 
    }
    console.log(listCard); 

   
    ricaricaCard();
    // console.log(ricaricaCard())
}
// function ricaricaCard(){
//     listCard.innerHTML = ''; 
//     let count = 0;
//     let totalPrice = 0;
//     listCard.forEach((value,key)=>{
//         totalPrice += value.price;
//         count += value.quantity;

//         if (value !== null){
//             let newdiv = document.createElement('li');
//             newdiv.innerHTML = `
//             <div class="listCardImg">
//               <img src="${pathImg}${value.image}" alt="">
//               <div>
//                   <div> product name</div>
//                   <div>${value.name}</div>
//               </div>
//             </div>
//             <div>$${value.price.toLocaleString()}</div>
           
//             <button onclick="changequantity(${key},${value.quantity-1})">-</button>
//             <div class="count">${value.quantity}</div>
//             <button onclick="changequantity(${key},${value.quantity+1})">+</button>

//             `;
//             listcard.appendChild(newdiv)
//         }
//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }

function ricaricaCard() {
    listcard.innerHTML = ''; // Corretto per utilizzare listcard, non listCard
    let count = 0;
    let totalPrice = 0;

    listCard.forEach((value, key) => {
        if (value !== null) {
            totalPrice += value.price;
            count += value.quantity;

            let newdiv = document.createElement('li');
            newdiv.innerHTML = `
            <div class="listCardImg">
              <img src="${pathImg}${value.image}" alt="">
              <div>
                  <div>Nome prodotto</div>
                  <div>${value.name}</div>
              </div>
            </div>
          
            <div>$${value.price.toLocaleString()}</div>
           
            <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
            `;

            listcard.appendChild(newdiv);
        }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key,quantity){
    if(quantity == 0){
        delete listCard[key];
    }else{
        listCard[key].quantity = quantity;
        listCard[key].price = quantity * products[key].price;
    }
    ricaricaCard();
}