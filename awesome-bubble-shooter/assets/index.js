const canvas = document.querySelector('canvas')

//const of context and spacifing the type of game.
const ctx = canvas.getContext('2d')

//cavas height and width
canvas.height = innerHeight
canvas.width = innerWidth

//Making a class for AracBord name it Player. 
class Player 
{
    //Spacifing the size and alingment of player in constructor
    constructor(x, y, radius, color)
    {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    //Drawing the player on canvas with draw class.
    draw() 
    {
        ctx.beginPath()
        ctx.arc
        (
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2,
            false
        )
        ctx.fillStyle = this.color
        ctx.fill()
    }
}

//Making player in center of the canvas.
const x = canvas.width / 2
const y = canvas.height /2

//creating a new Player
const player = new Player
(
    x,
    y,
    20,
    'red'
)

//calling the draw class to show the player on canvas.
player.draw()

console.log(player)