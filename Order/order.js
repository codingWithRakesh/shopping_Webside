let lastChe = document.getElementById('lastChe');
let wri;
if (localStorage.getItem('email') && localStorage.getItem('pass') && localStorage.getItem('userNa')) {
	wri = `
		<div class="col-md-6">
            <p class="">Hello ${localStorage.getItem('userNa')}</p>
        </div>
	`
	lastChe.innerHTML = wri
}

let orderLog = document.getElementById('orderLog');
if (orderLog != null) {
	orderLog.addEventListener("click", () => {
		loginFun();
	})
}

// check pin code
let checkPinCode
let buttonCheck = document.getElementById('buttonCheck');
let pinRow = document.getElementById('pinRow')
let pinRowSh
let modalPin = document.getElementById('modalPin')
let modalPinsh;
let enterPinCode = document.getElementById('enterPinCode')

let allitem = document.getElementById('allitem')
let fillAddress = document.getElementById('fillAddress')
let allAm = document.getElementById('allAm')

let i = JSON.parse(sessionStorage.getItem('objectItem'))
let show = ""

if (sessionStorage.getItem("userPinCod")) {
	pinRowSh = `
		<div class="col-6">
	        <input type="text" class="form-control" id="checkPinCode" placeholder="Enter Pincode" value="${sessionStorage.getItem("userPinCod")}" disabled>
	    </div>
	`
	pinRow.innerHTML = pinRowSh
	allitem.classList.remove("d-none");
	fillAddress.classList.remove("d-none");
	enterPinCode.value = sessionStorage.getItem("userPinCod")
	enterPinCode.disabled = true

	show = `
		<div class="row mb-3">
	    <div class="col-md-4 mb-2 mb-md-0">
	      <img src="../${i.product_image}" width="100%">
	    </div>

	    <div class="col-md-8">

	      <div class="row">
	        <div class="col-12">
	          <h3>${i.product_name}</h3>
	        </div>
	        <div class="col-12 my-1">
	          <h6>Enter Quantity</h6>
	          <div class="row">
	            <div class="col-6">
	              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Quantity"
	                value="1">
	            </div>
	            <div class="col-6">
	              <button class="btn btn-outline-primary">Submit</button>
	            </div>
	          </div>
	        </div>

	        <div class="col-8 my-1">
	          <h6>Enter Size</h6>
	          <select class="form-select" aria-label="Default select example">
	            <option selected>Select Size</option>
	            <option value="S">S</option>
	            <option value="M">M</option>
	            <option value="L">L</option>
	            <option value="XL">XL</option>
	            <option value="XXL">XXL</option>
	          </select>
	        </div>

	        <div class="col-12 my-1">
	          <h4 class="text-dark me-3 d-inline">₹${i.product_discount_pri}</h4>
	        </div>

	        <div class="col-12 my-1">
	          <button class="btn btn-outline-danger">Cancel</button>
	        </div>
	      </div>
	    </div>
	  </div>
	`
	allitem.innerHTML = show
	allAm.innerHTML = i.product_discount_pri
}
else {
	let pincode = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	buttonCheck.addEventListener("click", () => {
		checkPinCode = document.getElementById('checkPinCode').value;
		sessionStorage.setItem("userPinCod", checkPinCode)
		let getPin = sessionStorage.getItem("userPinCod")

		let pincode2 = pincode.filter((e) => {
			return e == getPin
		})

		if (pincode2 == getPin) {
			pinRowSh = `
				<div class="col-6">
			        <input type="text" class="form-control" id="checkPinCode" placeholder="Enter Pincode" value="${sessionStorage.getItem("userPinCod")}" disabled>
			    </div>
			`
			pinRow.innerHTML = pinRowSh
			enterPinCode.value = sessionStorage.getItem("userPinCod")
			enterPinCode.disabled = true
			modalPinsh = `
				<div class="modal-header">
		          <h1 class="modal-title fs-5" id="exampleModalLabel">PIN code Available</h1>
		          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		        </div>
		        <div class="modal-footer">
		          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		        </div>
			`
			modalPin.innerHTML = modalPinsh
			allitem.classList.remove("d-none");
			fillAddress.classList.remove("d-none");
		}
		else {
			modalPinsh = `
				<div class="modal-header">
		          <h1 class="modal-title fs-5" id="exampleModalLabel">PIN code UnAvailable</h1>
		          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		        </div>
		        <div class="modal-footer">
		          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		        </div>
			`
			modalPin.innerHTML = modalPinsh
		}
	})
}


console.log(i)


