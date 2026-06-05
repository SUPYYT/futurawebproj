function initSas(){
    NID = localStorage.getItem("NID")
    if(NID === null){
        localStorage.setItem("NID", 0)
        NID = localStorage.getItem("NID")
    }


    people = JSON.parse(localStorage.getItem("ppl"))
    if(people === null){
        localStorage.setItem("ppl", JSON.stringify([]))
        people = JSON.parse(localStorage.getItem("ppl"))
    }
}

function initAdm(){
    const CONTAINER = document.getElementById("showStuff")
    const sasEl = document.getElementById("sastanci")
    const logEl = document.getElementById("logout")
    const logInEl = document.getElementById("loginForm")
    people = JSON.parse(localStorage.getItem("ppl"))
    NID = localStorage.getItem("loggedIn")
    if(NID === null){
        localStorage.setItem("loggedIn", false)
        NID = localStorage.getItem("loggedIn")
    }
    // NID = true
    if(NID === "false"){
        NID = false
    }
    else if(NID === "true"){
        NID = true
    }
    // NID = true
    if(!NID){
        return
    }

    logInEl.style.display = "none"
    sasEl.style.display = "initial"
    logEl.style.display = "initial"
    people.forEach(sst => {
        console.log(sst)
        CONTAINER.innerHTML+= '<div class="adminShowBox" id="' + sst.userId + '"><div class="showBoxName center"><span id="1' + String(sst.userId + sst.ime + sst.prezime) + '">' + sst.ime + ' ' + sst.prezime + '</span></div><hr><div class="showBoxContent centerChildren"><div id="2' + String(sst.userId + sst.ime + sst.prezime) + '">Adresa: ' + sst.adress + '</div><div id="3' + String(sst.userId + sst.ime + sst.prezime) + '">Broj telefona: ' + sst.number + '</div><div id="4' + String(sst.userId + sst.ime + sst.prezime) + '">Mail: ' + sst.mail + '</div></div></div>'
    });

}


function login(){
    const IME = document.getElementById("ime").value
    const PASS = document.getElementById("pass").value
    let valid = true
    if(!validateField(IME)){
        valid = false
    }
    if(!validateField(PASS)){
        valid = false
    }
    if(!valid){
        return
    }

    if(IME !== "admin" || PASS !== "admin123"){
        alert("Netočno korisničko ime ili lozinka")
        return
    }
    localStorage.setItem("loggedIn", true)

}

function logout(){
    localStorage.setItem("loggedIn", false)
    location.reload()
}


function sastanak(e){
    const IME = document.getElementById("ime").value
    const PREZIME = document.getElementById("prezime").value
    const ADRESA = document.getElementById("adresa").value
    const TELEFON = document.getElementById("broj").value
    const MAIL = document.getElementById("mail").value
    let valid = true

    if(!validateEmail(MAIL)){
        valid = false
    }

    if(!validateField(IME)){
        valid = false
    }

    if(!validateField(PREZIME)){
        valid = false
    }

    if(!validateField(ADRESA)){
        valid = false
    }

    if(!validatePhone(TELEFON)){
        valid = false
    }
    // valid = true
    if(!valid){
        return
    }

    const ID = localStorage.getItem("NID")
    const obj = {userId: ID,ime:IME,prezime:PREZIME,adress:ADRESA,number:TELEFON,mail:MAIL}
    localStorage.setItem("NID", Number(ID)+1)

    
    ppl = JSON.parse(localStorage.getItem("ppl"))
    
    ppl.push(obj)

    localStorage.setItem("ppl", JSON.stringify(ppl))


}


function validateEmail(email) { 
	// let email = document.getElementById('email').value; 
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
    if (!emailRegex.test(email)) { 
        alert("Molimo unesite ispravan e-mail."); 
        return false; 
	} 
    return true; 
} 


function validateField(ime) { 
    if (ime === "") { 
        alert("Molimo ispunite sva polja!"); 
        return false; 
	} 
    return true; 
}

function validatePhone(phone) { 
	// let phone = document.getElementById('phone').value; 
    const phoneRegex = /^[0-9]{10}$/;  // Pretpostavlja broj telefona sa 10 znamenki
    if (!phoneRegex.test(phone)) { 
        alert("Molimo unesite ispravan broj telefona."); 
        return false; 
	} 
    return true; 
}

