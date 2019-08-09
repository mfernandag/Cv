fetch("https://raw.githubusercontent.com/mfernandag/fetch/master/cv.json")
    .then( response => response.json())
    .then( res => { 
        const name = res.name
        let cvContainer = document.getElementById("personalData")
        let nameData = document.getElementById("bioTitle")
        let personName = document.createElement("span")
        personName.classList.add("personName")
        personName.innerText = ` ${name}`
        nameData.appendChild(personName)
        cvContainer.appendChild(nameData)
    })


