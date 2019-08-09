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
        const cvTitle = res.cvTitle
        let profesion = document.createElement("p")
        profesion.classList.add("cvTitle")
        profesion.innerText = cvTitle
        cvContainer.appendChild(profesion)
        const cvDescription = res.cvDescription
        let description = document.createElement("p")
        description.classList.add("cvDescription")
        description.innerText = cvDescription
        cvContainer.appendChild(description)
    })


