// logIn Function
function loginFun() {
	// Log In
	let recipientEmail = document.getElementById('recipientEmail').value;
	let recipientPass = document.getElementById('recipientPass').value;
	let loginButton = document.getElementById('loginButton');

	// Sing Up
	let singName;
	let singEmail;
	let singPass;
	let singConPass;
	let singInButton = document.getElementById('singInButton');
	let singConPassClass = document.getElementsByClassName('singConPassClass')[0];

	// Sing Up Button
	singConPassClass.addEventListener('input', () => {
		singPass = document.getElementById('singPass').value;
		singConPass = document.getElementById('singConPass').value;

		if (singPass == singConPass) {
			singConPassClass.classList.remove('border-danger');
		}
		else {
			singConPassClass.classList.add('border-danger');
		}

		if (singConPass == null) {
			singInButton.disabled = true;
		}
		else {
			singInButton.disabled = false;
		}
	})

	singInButton.addEventListener('click', () => {
		singEmail = document.getElementById('singEmail').value;
		singPass = document.getElementById('singPass').value;
		singConPass = document.getElementById('singConPass').value;
		singName = document.getElementById('singName').value;

		localStorage.setItem('email', singEmail);
		localStorage.setItem('pass', singConPass);
		localStorage.setItem('userNa', singName);

		document.getElementById('singEmail').value = null;
		document.getElementById('singPass').value = null;
		document.getElementById('singConPass').value = null;
		document.getElementById('singName').value = null;
	})

	// Login Button
	let reconClas = document.getElementsByClassName('reconClas')
	reconClas[0].addEventListener('input', () => {
		if (reconClas[0] == null && reconClas[1] == null) {
			loginButton.disabled = true;
		}
		else {
			loginButton.disabled = false;
		}
	})

	let loginUpModal = document.getElementById('loginUpModal');
	loginButton.addEventListener('click', () => {
		// alert("65")
		let emailGet = localStorage.getItem('email');
		let passGet = localStorage.getItem('pass');

		recipientEmail = document.getElementById('recipientEmail').value;
		recipientPass = document.getElementById('recipientPass').value;

		// alert(emailGet + " " + passGet + " " + recipientEmail + " " + recipientPass)

		if (emailGet == recipientEmail && passGet == recipientPass) {
			// alert("73")
			let good = `
				<div class="modal-dialog">
					<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="exampleModalLabel">Log in Succesfully</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					</div>
					</div>
				</div>
			`
			loginUpModal.innerHTML = good;
			localStorage.setItem('message', 'loginSuccesful');
		}
		else {
			let good = `
				<div class="modal-dialog">
					<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="exampleModalLabel">Log in UnSuccesfully</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					</div>
					</div>
				</div>
			`
			loginUpModal.innerHTML = good;
		}

		document.getElementById('recipientEmail').value = null;
		document.getElementById('recipientPass').value = null;
	})
}
// loginFun();
let userLog = document.getElementById('userLog');
let loginBox = document.getElementById('loginBox');
let dataStor;
userLog.addEventListener("click",()=>{
	if (localStorage.getItem('message')) {
		// alert(localStorage.getItem('message'))
		if (localStorage.getItem('email') && localStorage.getItem('pass') && localStorage.getItem('userNa')) {
			loginFun();
			dataStor = `
				<div class="modal-header">
		          <h1 class="modal-title fs-5" id="exampleModalLabel">Hello ${localStorage.getItem('userNa')}</h1>
		          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		        </div>
		        <div class="modal-footer">
		          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		        </div>
			`
			loginBox.innerHTML = dataStor;
		}
		else {
			loginFun();
		}
	}
	else {
		loginFun();
	}	
})



// Navigason Button function
let menList = document.getElementById('menList');
let womenList = document.getElementById('womenList');
let kidsList = document.getElementById('kidsList');
let homeLivingList = document.getElementById('homeLivingList');
let beautyList = document.getElementById('beautyList');

menList.addEventListener('click',()=>{
	sessionStorage.setItem("Click","men")
})

womenList.addEventListener('click',()=>{
	sessionStorage.setItem("Click","women")
})

kidsList.addEventListener('click',()=>{
	sessionStorage.setItem("Click","kids")
})

homeLivingList.addEventListener('click',()=>{
	sessionStorage.setItem("Click","home")
})

beautyList.addEventListener('click',()=>{
	sessionStorage.setItem("Click","beauty")
})