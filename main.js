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
let cartcontainer = document.querySelector(".cartpanel")

cartcontainer.hidden = true

buttons.forEach((button,index) => {
    button.addEventListener("click", ()=>{
        if(cart.find(element => element.name == games[index].name) ===-1 || cart.find(element => element.name == games[index].name) === undefined){
        cart.push({name:games[index].name,price:games[index].price,amount:1})}
        else{cart.find(element => element.name == games[index].name).price += games[index].price
        cart.find(element => element.name == games[index].name).amount+=1};
        updateCart()
    })

});
cartButton.addEventListener("click", ()=>{
    console.log(cart)
    if(cartcontainer.hidden == true){
        cartcontainer.hidden = false
    }
    else
    cartcontainer.hidden = true
})
function updateCart(){
    cartcontainer.innerHTML = ""
    let title = document.createElement("p")
    title.innerText = "Your cart"
    cartcontainer.appendChild(title)
    cart.forEach((element) => {
        let gamecontainer = document.createElement("div");
        gamecontainer.className = "game-container"
        let gamename = document.createElement("p");
        let gameprice = document.createElement("p");
        let gameamount = document.createElement("p");
        let removebutton = document.createElement("button");
        gamename.innerText = element.name
        gameprice.innerText = element.price
        gameamount.innerText = element.amount
        removebutton.innerText = "REMOVE";
        removebutton.addEventListener("click", ()=>{
            gamecontainer.remove();
            let index = cart.indexOf(element)
            cart.splice(index, 1)
        })
        gamecontainer.appendChild(gamename)
        gamecontainer.appendChild(gameprice)
        gamecontainer.appendChild(gameamount)
        gamecontainer.appendChild(removebutton)
        cartcontainer.appendChild(gamecontainer)
    })
}
