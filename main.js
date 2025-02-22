const cart=[
    
]

const games=[
    {name: "Shadow of the Past", price:100},
    {name:"Cyberbreak", price:49},
    {name:"Sands of Time", price:25},
    {name:"Survivor 2177", price:65},
    {name:"Abyss Secrets", price:5},
    {name:"Last Bastion", price:9},
    {name:"Singularity", price:15},
    {name:"Storm Hunters", price:9},
    {name:"Call of the Ancestors", price:12},
    {name:"Edges of Reality", price:7},
    {name:"Echoes of Oblivion", price:52}
]

let cartButton = document.querySelector(".cartbutton")
let buttons = document.querySelectorAll(".buy-button")

buttons.forEach((button,index) => {
    button.addEventListener("click", ()=>{
        cart.push(games[index])
    })

});
cartButton.addEventListener("click", ()=>{
    console.log(cart)
})