let shopArea = document.getElementById("shop-area");
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>displayData(json))
// console.log(shopArea)

var cartProduct = JSON.parse(localStorage.getItem("cart")) || [];

function displayData(data){
    console.log(data);
    let size = data.length;
    for(let i = 0; i < size; i++){
        let location = "../img/products/f";
        let pro = document.createElement("div");
        pro.className='pro'
        let img = document.createElement("img");
        let des = document.createElement("div");
        des.className='des'
        let name = document.createElement("h5");
        name.innerText= data[i].title;
        let star = document.createElement("div")
        star.className= 'star'
        star.innerHTML =  `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>`
        let price = document.createElement("h4");
        price.innerText= "₹ "+data[i].price
        des.append(name,star,price)
        let bag = document.createElement("a");
        bag.className="fal fa-bag-shopping cart";
        bag.setAttribute("id","addToCart")
        bag.addEventListener("click",function(){
            addToCart(data[i]);
            console.log(data[i])
        })
        bag.href= "#"
        img.src= data[i].image;
        pro.append(img,des,bag);
        shopArea.append(pro);
    }
}

function addToCart(d){
    let isProductPresent = cartProduct.some(
        function(item){
            return item.id === d.id;
        }
    )
    if(!isProductPresent){
        let obj = {...d, qty:1}
        cartProduct.push(obj);
        localStorage.setItem("cart", JSON.stringify(cartProduct));
        alert("Product added to the cart.");
    }else {
        alert("This product is already present in the cart.");
      }
}