let btn = document.querySelector("#btn_lupa")
let contai = document.querySelector("#container")
let input = document.querySelector("#input")
const h1 = document.querySelector('#title_user')
const p = document.querySelector("#descrition")

btn.addEventListener("click", ()=> {
    if (input.value == "") {
        alert("Preencha o campo")
    }else {
        contai.style.display="flex"
    }   
})
fetch('https://api.github.com/users/Gabrielrabelo05')
.then(res => res.json())
.then(data => {
    p.textContent = data.bio,
    h1.textContent = data.login
} )


