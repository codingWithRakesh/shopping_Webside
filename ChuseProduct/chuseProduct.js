let singleItem = document.getElementById('singleItem');
let showItem = "";
let i = JSON.parse(sessionStorage.getItem('objectItem'))


	showItem = `
		<div class="col-md-6">
        <img src="../${i.product_image}" width="100%">
      </div>
      <div class="col-md-6 px-3 py-4 py-md-1">
        <div class="row">
          <div class="col-md-12">
            <h3>${i.product_name}</h3>
          </div>

          <div class="col-md-12">
            <h4 class="text-secondary">${i.product_secon_na}</h4>
          </div>

          <div class="col-md-12 my-3 ">
            <h6 class="text-primary">
              <p class="text-dark d-inline ">${i.product_star}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill"
                viewBox="0 0 16 16">
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </h6>
          </div>

          <div class="col-md-12">
            <h4 class="text-dark me-3 d-inline">₹${i.product_discount_pri}</h4>
            <h4 class="d-inline text-muted me-3">MRP <span style="text-decoration: line-through;">₹${i.product_price}</span></h4>
            <h4 style="color:orange; display: inline;">(<span>${Math.floor(((i.product_price - i.product_discount_pri) / i.product_price) * 100)}% OFF</span>)</h4>
          </div>

          <div class="col-md-12 my-3">
            <a href="../Order/order.html">
              <button type="button" class="btn btn-danger btn-lg">Buy Now</button>
            </a>
          </div>

          <div class="col-md-12 my-1">
            <hr class="">
          </div>

          <div class="col-md-12 my-1">
            <div class="row">
              <h5 class="text-dark me-3 d-inline">
                DELIVERY OPTIONS

                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                  class="bi bi-box-seam mx-2" viewBox="0 0 16 16">
                  <path
                    d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                </svg>
              </h5>
            </div>

            <div class="row" id="checkIdC">
              <div class="col-6">
                <input type="text" class="form-control" id="inputCheck" placeholder="Enter Pincode">
              </div>

              <div class="col-6">
                <button class="btn btn-outline-primary" id="buttonCheck" data-bs-toggle="modal"
                  data-bs-target="#pincodeModal2" data-bs-whatever="@getbootstrap">Check</button>
              </div>

              <div class="col-12 my-1">
                <p class="text-secondary">Please enter PIN code to check delivery time & Pay on Delivery Availability
                </p>
              </div>

              <!-- check pincode modal -->
              <div class="modal fade" id="pincodeModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content" id="modalPin2">

                  </div>
                </div>
              </div>

            </div>

            <div class="row my-3">
              <div class="col-12">
                <h6>100% Original Products</h6>
              </div>
              <div class="col-12">
                <h6>Pay on delivery might be available</h6>
              </div>
              <div class="col-12">
                <h6>Easy 14 days returns and exchanges</h6>
              </div>
              <div class="col-12">
                <h6>Try & Buy might be available</h6>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 my-1">
              <hr class="">
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <h5 class="text-dark me-3 d-inline">
                PRODUCT DETAILS

                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                  class="bi bi-card-text mx-2" viewBox="0 0 16 16">
                  <path
                    d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                  <path
                    d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                </svg>
              </h5>
            </div>

            <div class="row my-3 text-secondary" id="productDetailsId">
              
            </div>

            <div class="row">
              <div class="col-12">
                <h5 class="text-dark me-3 d-inline">
                  Size & Fit
                </h5>
              </div>
              <div class="row my-2 text-secondary" id="productSizeFitId">
                
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <h5 class="text-dark me-3 d-inline">
                  Material & Care
                </h5>
              </div>
              <div class="row my-2 text-secondary" id="productMaterialCareId">
                
              </div>
            </div>
          </div>

        </div>
      </div>
	`
singleItem.innerHTML = showItem

	
	let productDetailsId = document.getElementById('productDetailsId')
	let productDet = ""
	for(let i of male[0].product_Details){
		productDet += `
			<div class="col-12">
		        <h6>${i}</h6>
		    </div>
		`
	}
	productDetailsId.innerHTML = productDet


	let productSizeFitId = document.getElementById('productSizeFitId')
	let productSi = ""
	for(let i of male[0].product_Size_Fit){
		productSi += `
			<div class="col-12">
		        <h6>${i}</h6>
		    </div>
		`
	}
	productSizeFitId.innerHTML = productSi


	let productMaterialCareId = document.getElementById('productMaterialCareId')
	let productMaterialCa = ""
	for(let i of male[0].product_Material_Care){
		productMaterialCa += `
			<div class="col-12">
		        <h6>${i}</h6>
		    </div>
		`
	}
	productMaterialCareId.innerHTML = productMaterialCa



let checkIdC = document.getElementById('checkIdC');
let checkIdCU

let inputCheck
let buttonCheck = document.getElementById('buttonCheck');

let modalPin2 = document.getElementById('modalPin2')
let modalPinU

if (sessionStorage.getItem("userPinCod")) {
	checkIdCU = `
		<div class="col-6">
        	<input type="text" class="form-control" id="inputCheck" placeholder="Enter Pincode" value="${sessionStorage.getItem("userPinCod")}" disabled>
      	</div>

      	<div class="col-12 my-1">
        	<p class="text-secondary">Please enter PIN code to check delivery time & Pay on Delivery Availability
        	</p>
      	</div>
	`
	checkIdC.innerHTML = checkIdCU
} else {

	let pinCodeC = [1,2,3,4,5,6,7,8,9,0]

	buttonCheck.addEventListener("click",()=>{
		inputCheck = document.getElementById('inputCheck').value
		sessionStorage.setItem("userPinCod",inputCheck)
		let getPin = sessionStorage.getItem("userPinCod")

		let pinCodeC2 = pinCodeC.filter((e)=>{
	    	return e == getPin
		})

		if (pinCodeC2 == getPin) {
			if (sessionStorage.getItem("userPinCod")) {
				checkIdCU = `
					<div class="col-6">
		            	<input type="text" class="form-control" id="inputCheck" placeholder="Enter Pincode" value="${getPin}" disabled>
		          	</div>

		          	<div class="col-12 my-1">
		            	<p class="text-secondary">Please enter PIN code to check delivery time & Pay on Delivery Availability
		            	</p>
		          	</div>
				`
				checkIdC.innerHTML = checkIdCU
			}
			modalPinU = `
				<div class="modal-header">
		          <h1 class="modal-title fs-5" id="exampleModalLabel">PIN code Available</h1>
		          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		        </div>
		        <div class="modal-footer">
		          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		        </div>
			`
			modalPin2.innerHTML = modalPinU
		}
		else {
			modalPinU = `
				<div class="modal-header">
		          <h1 class="modal-title fs-5" id="exampleModalLabel">PIN code UnAvailable</h1>
		          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		        </div>
		        <div class="modal-footer">
		          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		        </div>
			`
			modalPin2.innerHTML = modalPinU
		}
	})
}