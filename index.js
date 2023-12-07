const image = [
	"images/image1.jpg",
	"images/image2.jpg",
	"images/image3.jpg"
]



// arr
let showConBox = document.getElementById('showConBox')
let showareya = document.getElementById('showareya')

let show = ""
let newM = male.slice(0,3)
for(let i = 0; i < newM.length; i++){
	show += `
		<div class="col">
      <div class="card">
        <a onclick="fun1(${i})" href="ChuseProduct/chuseProduct.html">
          <img src="${newM[i].product_image}" class="card-img-top" width="100%" alt="...">
        </a>
        <div class="card-body">
          <h5 class="card-title">₹${newM[i].product_discount_pri}</h5>
          <p class="card-text">${newM[i].product_name}</p>
          <a onclick="fun1(${i})" href="ChuseProduct/chuseProduct.html">
            <button class="btn btn-primary">Buy Now</button>
          </a>
        </div>
      </div>
    </div>
	`
}
showareya.innerHTML = show
const fun1 = (i) => {
	sessionStorage.setItem("objectItem", JSON.stringify(newM[i]));
}


let show2 = ""
let femaleF = female.slice(0,3)
for(let i = 0; i < femaleF.length; i++){
	show2 += `
		<div class="col">
      <div class="card">
        <a onclick="femaleFF(${i})" href="ChuseProduct/chuseProduct.html">
          <img src="${femaleF[i].product_image}" class="card-img-top" width="100%" alt="...">
        </a>
        <div class="card-body">
          <h5 class="card-title">₹${femaleF[i].product_discount_pri}</h5>
          <p class="card-text">${femaleF[i].product_name}</p>
          <a onclick="femaleFF(${i})" href="ChuseProduct/chuseProduct.html">
            <button class="btn btn-primary">Buy Now</button>
          </a>
        </div>
      </div>
    </div>
	`
}
showareya.innerHTML = show2 + showareya.innerHTML
const femaleFF = (i) => {
	sessionStorage.setItem("objectItem", JSON.stringify(femaleF[i]));
}

let show3 = ""
let kidsK = kids.slice(0,3)
for(let i = 0; i < kidsK.length; i++){
	show3 += `
		<div class="col">
      <div class="card">
        <a onclick="kidsKK(${i})" href="ChuseProduct/chuseProduct.html">
          <img src="${kidsK[i].product_image}" class="card-img-top" width="100%" alt="...">
        </a>
        <div class="card-body">
          <h5 class="card-title">₹${kidsK[i].product_discount_pri}</h5>
          <p class="card-text">${kidsK[i].product_name}</p>
          <a onclick="kidsKK(${i})" href="ChuseProduct/chuseProduct.html">
            <button class="btn btn-primary">Buy Now</button>
          </a>
        </div>
      </div>
    </div>
	`
}
showareya.innerHTML = show3 + showareya.innerHTML
const kidsKK = (i) => {
	sessionStorage.setItem("objectItem", JSON.stringify(kidsK[i]));
}


let show4 = ""
let homeLivingH = homeLiving.slice(0,3)
for(let i = 0; i < homeLivingH.length; i++){
	show4 += `
		<div class="col">
      <div class="card">
        <a onclick="homeLL(${i})" href="ChuseProduct/chuseProduct.html">
          <img src="${homeLivingH[i].product_image}" class="card-img-top" width="100%" alt="...">
        </a>
        <div class="card-body">
          <h5 class="card-title">₹${homeLivingH[i].product_discount_pri}</h5>
          <p class="card-text">${homeLivingH[i].product_name}</p>
          <a onclick="homeLL(${i})" href="ChuseProduct/chuseProduct.html">
            <button class="btn btn-primary">Buy Now</button>
          </a>
        </div>
      </div>
    </div>
	`
}
showareya.innerHTML = show4 + showareya.innerHTML
const homeLL = (i) => {
	sessionStorage.setItem("objectItem", JSON.stringify(homeLivingH[i]));
}


let show5 = ""
let beautyB = beauty.slice(0,3)

for(let i = 0; i < beautyB.length; i++){
	show5 += `
		<div class="col">
      <div class="card">
        <a onclick="beautyBB(${i})" href="ChuseProduct/chuseProduct.html">
          <img src="${beautyB[i].product_image}" class="card-img-top" width="100%" alt="...">
        </a>
        <div class="card-body">
          <h5 class="card-title">₹${beautyB[i].product_discount_pri}</h5>
          <p class="card-text">${beautyB[i].product_name}</p>
          <a onclick="beautyBB(${i})" href="ChuseProduct/chuseProduct.html">
            <button class="btn btn-primary">Buy Now</button>
          </a>
        </div>
      </div>
    </div>
	`
}
showareya.innerHTML = show5 + showareya.innerHTML
const beautyBB = (i) => {
	sessionStorage.setItem("objectItem", JSON.stringify(beautyB[i]));
}
