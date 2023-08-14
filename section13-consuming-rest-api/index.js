const container = document.getElementById("container")
const form = document.getElementById("form")

function fill(){
    axios.get("http://localhost:8081/games")
        .then(response =>{
            console.log(response.data)

            response.data.forEach(element => {
                let p = document.createElement("p")
                p.className = "game"
                p.id = element.id
                p.innerHTML = `
                ${element.title} 
                    <button>Editar</button>
                    <button>Deletar</button>
                `
                p.onclick = (e) => {
                    if(e.target.textContent === "Editar"){
                        console.log("Editar")
                    }
                    if(e.target.textContent === "Deletar"){
                        const id = e.target.parentNode.getAttribute("id")
                        deleteGame(id)
                    }
                }
                container.appendChild(p)
            });
        })
        .catch(error =>{
            throw new Error(error)
        })
}

function deleteGame(id){
    axios.delete(`http://localhost:8081/games/${id}`)
    .then(()=>{
        location.reload()
    })
    .catch((error)=>{
        throw new Error(error)
    })
}

function newGame(game){
    axios.post(`http://localhost:8081/games/`, game)
    .then(()=>{
        window.alert("Jogo criado com sucesso!")
        location.reload()
    })
    .catch((error)=>{
        throw new Error(error)
    })
}

form.addEventListener('submit', async (event)=>{
    event.stopPropagation()
    event.preventDefault()

    const formData = new FormData(form)
    const formDataObject = {};

    for (const [key, value] of formData.entries()) {
        formDataObject[key] = value;
    }
    
    const newGameData = {
        title: formDataObject.title,
        year: formDataObject.year,
        price: formDataObject.price,
        platform: {
            ps: formDataObject.platform.includes("PS") ? true : false,
            xbox: formDataObject.platform.includes("XBOX") ? true : false,
            pc: formDataObject.platform.includes("PC") ? true : false,
        }
    }

    newGame(newGameData)
})
