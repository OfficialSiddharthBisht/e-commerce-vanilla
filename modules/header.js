function navbar(){
    return `
    <a href="#"> <img src="img/logo.png" class="logo" alt="" /></a>
      <div>
        <ul id="navbar">
          <li><a href="index.html">Home</a></li>
          <li><a href="./pages/shop.html">Shop</a></li>
          <li><a href="./pages/about.html">About</a></li>
          <li><a href="./pages/contact.html">Contact</a></li>
          <li><a href="./pages/login.html">Login</a></li>
          <li>
            <a href="cart.html"
              ><i class="fa-solid fa-bag-shopping" style="color: #333c39"></i
            ></a>
          </li>
          <a href="#" id="close"><i class="far fa-times"></i></a>
        </ul>
      </div>
      <div id="mobile">
        <a href="cart.html"><i class="fa-thin fa-bag-shopping"></i></a>
        <span id="bar"> <i class="fas fa-outdent"></i></span>
      </div>
    `
}
export default navbar;