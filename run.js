var BasicCard = require('./BasicCard.js')
var ClozeCard = require('./ClozeCard.js')

var card1 = new BasicCard("Who was the first president of the USA?", "George Washington")
var card2 = new ClozeCard("George Washington was the first president of the United States.", "George Washington")
console.log("Making card 3")
var card3 = new ClozeCard("George Washington was the first president of the United States.", "Ab Lincoln")



console.log(card1.front)
console.log(card1.back)
console.log(card2.partialText)
console.log(card3.fullText)