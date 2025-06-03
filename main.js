const boxSize = document.getElementById("size")
const container = document.getElementById("container")

boxSize.addEventListener("click", () => {
    let input = prompt("Enter the number of boxes you would like in each row (maximum of 100)")

    input = parseInt(input)
    
    container.innerHTML = ""
    if ((input % 4 === 0) && (input <= 100)) {
        let gridSize = input*input
        
        for (let i = 0; i < gridSize; i++) {
            const element = document.createElement("div")
            element.className = "grid"
            element.style.width = (960/input) + "px"
            element.style.height = (960/input) + "px"

            container.appendChild(element)
        }

        container.addEventListener("mouseover", (element) => {
            if (element.target.className === "grid"){
                element.target.style.backgroundColor = "red"
            }
        })

    } else {
        const element = document.createElement("p")

        element.innerHTML = "A grid cannot be made with the number  you have provided"

        container.appendChild(element)
    }

    
})
