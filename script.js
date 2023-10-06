let btn = document.querySelector("#btn_lupa")
let contai = document.querySelector("#container")
let input = document.querySelector("#input")
const user = document.querySelector('#title_user')
const p = document.querySelector("#descrition")

btn.addEventListener("click", ()=> {
    if (input.value == "") {
        alert("Preencha o campo")
    }else {
        contai.style.display="flex"
    }   
})
function searchUser() {
    const input =  document.querySelector ("#input").value
    const apiUrl = `https://api.github.com/users/${input}`

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            const avatar  = data.avatar_url
            user.textContent = data.name
            p.textContent =  data.bio
            const reposUrl =  data.repos_url
            document.getElementById("avatar").src = avatar;

            fetch(reposUrl)
            .then(response => response.json())
            .then(repos => {
                const reposList = document.getElementById("repos")
                reposList.innerHTML = ''
                repos.forEach(repo => {
                    const li = document.createElement("li")
                    const repoLink =  document.createElement("a")
                    repoLink.href = repo.html_url
                    repoLink.textContent = repo.name
                    repoLink.target = "_black"
                    li.appendChild(repoLink)
                    reposList.appendChild(li)
                })
            })
            .catch(error => {
                console.error("Erro na busca do repositório", error)
        })
        .catch(erro => {
            console.error("Erro na busca do usuário", erro)

        })
    }
)}
