let clickC = sessionStorage.getItem("Click");
// console.log(clickC)


let allProduct = document.getElementById('allProduct');

let menShow = "";
if (clickC == "men") {
	for(let i = 0; i < male.length; i++){
		menShow += `
			<div class="col">
		        <div class="card">
		          <a onclick="colectNameM(${i})" href="../ChuseProduct/chuseProduct.html">
		            <img src="../${male[i].product_image}" class="card-img-top" width="100%" alt="...">
		          </a>
		          <div class="card-body">
		            <h5 class="card-title">₹${male[i].product_discount_pri}</h5>
		            <p class="card-text">${male[i].product_name}</p>
		            <a onclick="colectNameM(${i})" href="../ChuseProduct/chuseProduct.html">
		              <button class="btn btn-primary">Buy Now</button>
		            </a>
		          </div>
		        </div>
		    </div>
		`
	}
	allProduct.innerHTML = menShow;
}
const colectNameM = (i) => {
	sessionStorage.setItem("objectItem", JSON.stringify(male[i]));
}


let womenShow = "";
if (clickC == "women") {
	for(let i = 0; i < female.length; i++){
		womenShow += `
			<div class="col">
		        <div class="card">
		          <a onclick="colectNameF(${i})" href="../ChuseProduct/chuseProduct.html">
		            <img src="../${female[i].product_image}" class="card-img-top" width="100%" alt="...">
		          </a>
		          <div class="card-body">
		            <h5 class="card-title">₹${female[i].product_discount_pri}</h5>
		            <p class="card-text">${female[i].product_name}</p>
		            <a onclick="colectNameF(${i})" href="../ChuseProduct/chuseProduct.html">
		              <button class="btn btn-primary">Buy Now</button>
		            </a>
		          </div>
		        </div>
		    </div>
		`
	}
	allProduct.innerHTML = womenShow;
}
const colectNameF = (i) => {
	sessionStorage.setItem("objectItem", JSON.stringify(female[i]));
}


let kidsShow = "";
if (clickC == "kids") {
	for(let i = 0; i < kids.length; i++){
		kidsShow += `
			<div class="col">
		        <div class="card">
		          <a onclick="colectNameK(${i})" href="../ChuseProduct/chuseProduct.html">
		            <img src="../${kids[i].product_image}" class="card-img-top" width="100%" alt="...">
		          </a>
		          <div class="card-body">
		            <h5 class="card-title">₹${kids[i].product_discount_pri}</h5>
		            <p class="card-text">${kids[i].product_name}</p>
		            <a onclick="colectNameK(${i})" href="../ChuseProduct/chuseProduct.html">
		              <button class="btn btn-primary">Buy Now</button>
		            </a>
		          </div>
		        </div>
		    </div>
		`
	}
	allProduct.innerHTML = kidsShow;
}
const colectNameK = (i) => {
	sessionStorage.setItem("objectItem", JSON.stringify(kids[i]));
}


let homeShow = "";
if (clickC == "home") {
	for(let i = 0; i < homeLiving.length; i++){
		homeShow += `
			<div class="col">
		        <div class="card">
		          <a onclick="colectNameH(${i})" href="../ChuseProduct/chuseProduct.html">
		            <img src="../${homeLiving[i].product_image}" class="card-img-top" width="100%" alt="...">
		          </a>
		          <div class="card-body">
		            <h5 class="card-title">₹${homeLiving[i].product_discount_pri}</h5>
		            <p class="card-text">${homeLiving[i].product_name}</p>
		            <a onclick="colectNameH(${i})" href="../ChuseProduct/chuseProduct.html">
		              <button class="btn btn-primary">Buy Now</button>
		            </a>
		          </div>
		        </div>
		    </div>
		`
	}
	allProduct.innerHTML = homeShow;
}
const colectNameH = (i) => {
	sessionStorage.setItem("objectItem", JSON.stringify(homeLiving[i]));
}



let beautyShow = "";
if (clickC == "beauty") {
	for(let i = 0; i < beauty.length; i++){
		beautyShow += `
			<div class="col">
		        <div class="card">
		          <a onclick="colectNameB(${i})" href="../ChuseProduct/chuseProduct.html">
		            <img src="../${beauty[i].product_image}" class="card-img-top" width="100%" alt="...">
		          </a>
		          <div class="card-body">
		            <h5 class="card-title">₹${beauty[i].product_discount_pri}</h5>
		            <p class="card-text">${beauty[i].product_name}</p>
		            <a onclick="colectNameB(${i})" href="../ChuseProduct/chuseProduct.html">
		              <button class="btn btn-primary">Buy Now</button>
		            </a>
		          </div>
		        </div>
		    </div>
		`
	}
	allProduct.innerHTML = beautyShow;
}
const colectNameB = (i) => {
	sessionStorage.setItem("objectItem", JSON.stringify(beauty[i]));
}

