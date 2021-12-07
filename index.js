let plates = [  
    {    
        img:"./images/greenplate2.jpg",
        name: "2.5 lb Green Plate",
        features: `<ul><li>Weight: 2.5 lb</li><li>Color: Green</li><li>Brand: Rogue</li></ul> `,
        price: 1363,
          id: 1,
         },   
 
     {
         img: './images/blueplate2.jpg',
         name: "5 lb Blue Plate",
         features: `<ul><li>Weight: 5 lb</li><li>Color: Blue</li><li>Brand: Rogue</li></ul> `,
         price: 2730,
         id: 2,
     },
     {
         img: './images/whiteplate.jpg',
         name: " 10 lb White Plate",
         features: `<ul><li>Weight: 10 lb</li><li>Color: White</li><li>Brand: Rogue</li></ul> `,
         price: 5450,
         id: 3 ,
     },
     {
         img: './images/greenplate.jpg',
         name: " 25 lb Green Plate",
         features: `<ul><li>Weight: 25 lb</li><li>Color: Green</li><li>Brand: Rogue</li></ul> `,
         price: 13640,
         id: 4,
     },
     { 
         img: './images/yellowplate.jpg',
         name: "35 lb Yellow Plate",
         features: `<ul><li>Weight: 35 lb</li><li>Color: Yellow</li><li>Brand: Rogue</li></ul> `,
         price: 19090,
         id: 5,
 
     },
     {
         img: './images/blueplate.jpg',
         name: "45 lb Blue Plate",
         features: `<ul><li>Weight: 45 lb</li><li>Color: Blue</li><li>Brand: Rogue</li></ul> `,
         price: 24546,
         id : 6,
     },
     {
         img: './images/redplate.jpg',
         name: "55 lb Red Plate",
         features: `<ul><li>Weight: 55 lb</li><li>Color: Red</li><li>Brand: Rogue</li></ul> `,
         price: 30000,
         id : 7 ,
     }
 ]

 let CFitems = [
 
     {
         name: 'ROGUE SR-1 BEARING SPEED ROPE',
         img: './images/jumprope(p).png',
         features:"<ul><li>Brand: Rogue</li></ul>",
         price: 7500,
         id: 8,
     },
     {
         name:'BEAR KOMPLEX 2 HOLE HAND GRIPS - CARBON FIBER',
         img: './images/grips(p).jpg',
         features:"<ul><li>Brand: Rogue</li><li>Material: Carbon Fiber</li></ul>",
         price: 40,
         id: 9,
     },
 
     {
         name: 'Rogue Games Box',
         img: './images/gamebox(p).jpg',
         features:"<ul><li>Brand: Rogue</li><li>Material: Wood</li></ul>",
         price: 125,
         id: 10,
     },
 
     {
         name: 'BLACK CONCEPT 2 ROWERG ROWER - PM5',
         img: './images/concept2(p).jpg',
         features:"<ul><li>Brand: Concept 2</li></ul>",
         price: 7500,
         id: 11,
     },
 
     {
         name:'Echo Bike',
         img: './images/echobike(p).jpg',
         features:"<ul><li>Brand: Rogue</li></ul>",
         price: 745,
         id: 12,
     },
     {
         name: 'Bike ERG',
         img: './images/bike(p).jpg',
         features:"<ul><li>Brand: Concept 2</li></ul>",
         price: 900,
         id: 13,
     },
     {
         name: 'Medice Ball',
         img: './images/medball(p).jpg',
         features:"<ul><li>Brand: Rogue</li></ul>",
         price: 100,
         id: 14,
     },
     {
         name: 'ROGUE P-4 PULL-UP SYSTEM',
         img: './images/pullupsystem(p).jpg',
         features:"<ul><li>Brand: Rogue</li><li>Max Weight Support: 400 lb</li></ul>",
         price: 7500,
         id: 15,
     }
     
 ]
 
 
 let rigsAndRacks = [
     {
         name: 'Rogue SML-2C Squat Stand',
         img: './images/squatstand1(p).jpg',
         features:"<ul><li>Brand: Rogue</li></ul>",
         price:495,
         id:16,
     },
     {
         name: 'ROGUE ECHO SQUAT STAND 2.0',
         img: './images/squatstand2(p).jpg',
         features:"<ul><li>Brand: Rogue</li></ul>",
         price:295,
         id:17,
     },
     {
         name: 'Monster Lite RML-390FULLW Fold Back Wall Mount Power Rack',
         img: './images/wallmountrackp.jpg',
         features:"<ul><li>Brand: Rogue</li></ul>",
         price: 1200,
         id:18,
     },
     {
         name: 'Monster RM-3W Fold Back Rack',
         img: './images/wallmountrack2p.jpg',
         features:"<ul><li>Brand: Rogue</li></ul>",
         price: 1325,
         id: 19,
     }
 ]
 
 
 let barbells = [
     { 
         name: 'Barbell' ,
         img: './images/barbell1.jpg',
         features: "<ul><li>Brand: Rogue</li><li>Weight: 45 lbs</li></ul>",
         price: 200,
         id: 20,
 
     },
     {
         name: 'Barbell' ,
         img: './images/barbell2.jpg',
         features: "<ul><li>Brand: Rogue</li><li>Weight: 35 lbs</li></ul>",
         price: 180,
         id: 21,
 
     },
     {
         name: 'Barbell' ,
         img: './images/barbell3.jpg',
         features: "<ul><li>Brand: Fenix</li><li>Weight: 45 lbs</li></ul>",
         price: 150,
         id: 22,
 
     },
     {
         name: 'Barbell' ,
         features: "<ul><li>Brand: Fenix</li><li>Weight: 35 lbs</li></ul>",
         img: './images/barbell4.jpg',
         price: 140,
         id: 23,
 
     }
    
    
 
 ]
 
 
 let offers = [ 
     {
         name: 'Rope',
         img: './images/combo1.jpg',
         features: "<ul><li>Brand: Rogue</li></ul>",
         price: 15,
         id: 24
     },
     {
         name: 'Barbell and 355 lbs in Plates',
         img: './images/combo2.jpg',
         features:"<ul><li>Brand: Rogue</li></ul>",
         price: 1000,
         id: 25
     },
     {
         name: 'Rack and Concept 2',
         img: './images/combo3.jpg',
         features:"<ul><li>Brand: Rogue</li></ul>",
         price: 1500 ,
         id: 26
     },
     {
         name: 'Weight Vest and Pull Ups System',
         img: './images/combo4.jpg',
         features:"<ul><li>Brand: Rogue</li><li>Weight Vest of 20 lb</li><li>Max Weight Support: 400lb</li></ul>",
         price: 200,
         id: 27
     }
 ]
 
 
 let allProducts = [...plates, ...CFitems, ...rigsAndRacks, ...barbells, ...offers ]
 
 
 let Cart = [ ]
 
 
 const addToCart = function (productId)    { 
 
     let productToAdd =  Cart.find ((item)=> item.id===productId)
 
     if (productToAdd) { 
         productToAdd.cantidad += 1
     }
     else { 
         let {id, name, price} =  allProducts.find ((item)=> item.id===productId)
         
 
         Cart.push({id: id, name: name, price: price, cantidad: 1})
     }
 
     localStorage.setItem("Cart", JSON.stringify(Cart))
     let CartLS = JSON.parse(localStorage.getItem("Cart")) 
     console.log(CartLS)
     paintCart()
 
 }
 
    
 const deleteFromCart = function (id) { 
    let product = Cart.find((item) => item.id===id)
    product.cantidad -= 1
     if (product.cantidad  === 0) {
        let indice =  Cart.indexOf(product) 
        Cart.splice(indice, 1) 
    }
     localStorage.setItem("Cart", JSON.stringify(Cart))
     let CartLS = JSON.parse(localStorage.getItem("Cart")) 
     console.log(CartLS)
     paintCart()
     totalPrice()  
 }

 let cartList = document.getElementById('cart') 
 const paintCart = function() {
     cartList.innerHTML=''
     const paint = Cart.forEach( (item) => {
         let productInCart = document.createElement('div')
         productInCart.className = 'productInCart'
         productInCart.innerHTML = `<div class= "detail"><span class= "detail">Product: </span>${item.name} <Br> <span class= "detail">Amount: </span> ${item.cantidad} <button class="btn-delete" id='btn-add-${item.id}'><i class="fa fa-plus" aria-hidden="true"></i></button> <button class="btn-delete" id='btn-quite-${item.id}'><i class="fa fa-minus-circle" aria-hidden="true"></i></button><Br><span class= "detail">Price: </span>  ${item.price * item.cantidad}$<Br>`
         cartList.appendChild(productInCart)
         let btnQuit = document.getElementById(`btn-quite-${item.id}`)
         btnQuit.onclick = function () {
             deleteFromCart(item.id)
         }
         let btnAdd = document.getElementById(`btn-add-${item.id}`)
         btnAdd.onclick = function () {
            addToCart(item.id)
         }
        totalPrice()      
     } ) 
 }

const totalPrice = function () {
    let precioTotal = document.getElementById('preciototal')
    precioTotal.innerHTML= `${Cart.reduce( (acc,item)=> acc += item.price * item.cantidad, 0 )}$`

 }

 let btnDeleteAll = document.getElementById("deleteall")
 btnDeleteAll.onclick = () => {
     Cart.length = 0
     localStorage.setItem("Cart", JSON.stringify(Cart))
     let CartLS = JSON.parse(localStorage.getItem("Cart")) 
     console.log(CartLS)
     totalPrice()
     paintCart()
 }
               
 let postId = 0
 let comment = document.getElementById('comment')
 comment.innerHTML = 'If you are thinking yet about buy our products, you can read the costumers reviews about their products and the purchasing process'
 const llamarApi = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${postId}`)
      .then((info)=> info.json())
        .then(data => { 
             comment.innerHTML =  ''
            comment.innerHTML= `<p><span class= "detail">Name:</span> ${data.name} <Br><span class= "detail">Email:</span> ${data.email}<Br> <span class= "detail">Review:</span> ${data.body}`     
      })
}
 let btnNext = document.getElementById('btn-next')
 btnNext.onclick = function() {
     postId++
     llamarApi()  
     btnBack.classList.remove("div-hide")
 }
 
 let btnBack = document.getElementById('btn-back')
 btnBack.onclick = function() {
     postId -= 1
     if (postId === 0) {
         comment.innerHTML = '<span class= "detail">If you are thinking yet about buy our products, you can read the costumers reviews about their products and the purchasing process</span>'
         btnBack.classList.add("div-hide")
      } else { 
         llamarApi()
     }
 }


 
let productContainer = document.getElementById('allproducts')
let showProducts = function (array,title) {
    productContainer.innerHTML= ""
    let titulo = document.getElementById('title')
    titulo.innerText = title
    array.forEach( (item) => {
        
        let itemContainer = document.createElement('div')
        itemContainer.innerHTML = `<div><img src="${item.img}" alt=""><div class= "article-detail">Name: ${item.name} <Br> Features: ${item.features}<Br>Price: ${item.price}$</div></div>`
        itemContainer.className= "item"
        productContainer.appendChild(itemContainer)
        let btn = document.createElement('button')
        btn.classList.add("btn-add")
        btn.innerHTML = `Add To Cart     <i class="fa fa-plus" aria-hidden="true"></i>  `    
        btn.onclick = function () { 
            addToCart(item.id)
            paintCart()
        } 
        itemContainer.appendChild(btn)
         }) 
}

let optionCF = document.getElementById('option-cf')
optionCF.onclick = function (e) {
    e.preventDefault()
    showProducts( CFitems, "Crossfit Equipment")
}
let optionPt = document.getElementById('option-pt')
optionPt.onclick = function (e) {
    e.preventDefault()
    showProducts( plates, "Plates")
}
let optionBb = document.getElementById('option-bb')
optionBb.onclick = function (e) {
    e.preventDefault()
    showProducts( barbells, "Barbells")
}

let optionRr = document.getElementById('option-rr')

optionRr.onclick = function (e) {
    e.preventDefault()
    showProducts( rigsAndRacks, "Rigs And Racks")
}

let optionOffer = document.getElementById('option-offer')

optionOffer.onclick = function (e) {
    e.preventDefault()
    showProducts( offers, "Offers")
}

let optionAll = document.getElementById('option-all')

optionAll.onclick = function (e) {
    e.preventDefault()
    showProducts( allProducts, "All Products")
}

const users = []

class user {
    constructor (name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;

    } ;
    
}

const btnSubmit = document.getElementById('btn-submit')
btnSubmit.onclick = (e) => {
    e.preventDefault()
    let userName = document.getElementById('name')
    let userEmail = document.getElementById('email')
    let userPhone = document.getElementById('phone')
    if((userName.value === "") || (userEmail.value === "")|| (userPhone.value === "")) {
        alert("You have to complete all the info")
    } else  { 
        let repeatUser = users.find(person => person.email === userEmail.value)
        if(repeatUser) {
            alert("There is another person registered with this email")
        } else {
            let person = new user (userName.value, userPhone.value,userEmail.value)
            users.push(person)
             localStorage.setItem("users", JSON.stringify(users))
             userName.value =""
             userEmail.value =""
             userPhone.value =""
             alert("We will contact you")
        }
    }
}




