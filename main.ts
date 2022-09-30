let Ontario_HST = 0
game.splash("Welcome To The Pizza Place")
let Labour_Cost = 0.75
let Rent_on_the_shop = 1
let Diameter_Cost = 0.5
Ontario_HST += 0.13
let Diameter_of_pizza = game.askForNumber("How Many Pizzas Would You Like")
let Pizza_Price = Math.round((Labour_Cost + Rent_on_the_shop + Diameter_Cost * Diameter_of_pizza) * 100) / 100
game.splash(convertToText(Pizza_Price))
