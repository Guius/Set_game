window.onload = function() {


// SET CONTROLLER
var setController = (function() {

	var pool_card_1, pool_card_2, pool_card_3, pool_card_4, i;
	var pool_cards_row = [];
	var pool_cards = [];
	var pool_cards_deck = [];
	var cards = [];
	var cardToAdd = [10];
	var indicesCardToAdd = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	var cardsOfSet = [];



	var cardSituations = {
		counter: 0,
		extraCards: 0,
		numberCardsToAdd: function() {
			return  12 + this.extraCards - this.counter;
		},
		pool_cards: pool_cards,
		pool_cards_deck: pool_cards_deck,
		cardToAdd: cardToAdd,
		indicesCardToAdd: indicesCardToAdd,
		cardsOfSet: cardsOfSet
	};


	return {
		setUpPool: function() {

			for (pool_card_1 = 1; pool_card_1 < 4; pool_card_1++) {
				for (pool_card_2 = 1; pool_card_2 < 4; pool_card_2++){
					for (pool_card_3 = 1; pool_card_3 < 4; pool_card_3++){
						for (pool_card_4 = 1; pool_card_4 < 4; pool_card_4++){
							pool_cards_row.push(pool_card_1);
							pool_cards_row.push(pool_card_2);
							pool_cards_row.push(pool_card_3);
							pool_cards_row.push(pool_card_4);


							pool_cards_deck.push(pool_cards_row);
							pool_cards.push(pool_cards_row);

							pool_cards_row = [];	
						}
					}
				}
			}
			console.table(pool_cards);
		},

		getNumberEmpty: function() {
			return cardSituations.numberCardsToAdd;
		},

		addToDeckArray: function() {
			if (cardSituations.cardToAdd[0] === 10) {
				cardSituations.cardToAdd.splice(0, 1);
			}
			for (var i = 0; i < cardSituations.numberCardsToAdd(); i++) {
				var indexCard = Math.floor(Math.random()*pool_cards.length);							
				cardSituations.cardToAdd.push(cardSituations.pool_cards[indexCard]);
				cardSituations.pool_cards.splice(indexCard, 1);
			}
			cardSituations.counter += cardSituations.numberCardsToAdd();	
			cardSituations.indicesCardToAdd = [];
		},

		addToSetArray: function(a) {
			if (cardSituations.cardsOfSet.length === 3) {
				cardSituations.cardsOfSet.splice(0, 0, cardSituations.cardToAdd[a]);
				cardSituations.cardsOfSet.splice(3, 1);
			} else {
				cardSituations.cardsOfSet.push(cardSituations.cardToAdd[a]);				
			}
			console.table(cardsOfSet);
		},


		getcardSituations: function(){
			return cardSituations;
		}


	};	


}) ();





// UI CONTROLLER
var UIController = (function() {

	var cardObject2 = setController.getcardSituations();


	var DOMstrings = {
		test: ".test",
		card0: "#card0",
		card1: "#card1",
		card2: "#card2",
		card3: "#card3",
		card4: "#card4",
		card5: "#card5",
		card6: "#card6",
		card7: "#card7",
		card8: "#card8",
		card9: "#card9",
		card10: "#card10",
		card11: "#card11",
		button0: ".button0",
		button1: ".button1",
		button2: ".button2",
		button3: ".button3",
		button4: ".button4",
		button5: ".button5",
		button6: ".button6",
		button7: ".button7",
		button8: ".button8",
		button9: ".button9",
		button10: ".button10",
		button11: ".button11"

	};





	return {

		getDOMstrings: function() {
			return DOMstrings;
		}
	}

}) ();



	// DRAWING THE SHAPES CONTROLLER
	var drawingController = (function() {


		var cardObject3 = setController.getcardSituations();


		var colors = ["aquamarine", "DeepPink", "LightSalmon"];
		


	
			return {
				drawCard: function(x, g, z, m, n, p) {
					console.log("function drawCard has been called successfully");
					var c = document.getElementById("card" + p);
					var ctx = c.getContext("2d");			
					ctx.beginPath();
					ctx.lineWidth = "4";
					if (n === 1) {
						if (x === 1) {
							ctx.arc(147, 75, 40, 0, 2 * Math.PI); /*147*/					
						} else if (x === 2) {
							if (g === 1) {
								ctx.arc((97), 75, 40, 0, 2 * Math.PI); /*147*/											
							} else if (g === 2) {
								ctx.arc((194), 75, 40, 0, 2 * Math.PI); /*147*/											
							}
						} else if (x === 3) {
							if (g === 1) {
								ctx.arc((50), 75, 40, 0, 2 * Math.PI); /*147*/											
							} else if (g === 2) {
								ctx.arc((147), 75, 40, 0, 2 * Math.PI); /*147*/											
							} else if (g === 3)	{
								ctx.arc((244), 75, 40, 0, 2 * Math.PI); /*147*/																	
							}				
						}
					} else if (n === 2) {
						if (x === 1) {
							ctx.rect(120, 35, 55, 80);  
						} else if (x === 2) {
							if (g === 1) {
								ctx.rect(80, 35, 55, 80);  
							} else if (g === 2) {
								ctx.rect(165, 35, 55, 80);  			
							}
						} else if (x === 3) {
							if (g === 1) {
								ctx.rect(35, 35, 55, 80);  
							} else if (g === 2) {
								ctx.rect(120, 35, 55, 80);  
							} else if (g === 3)	{
								ctx.rect(205, 35, 55, 80);  
							}				
						}				
					} else if (n === 3) {
						if (x === 1) {
						    ctx.moveTo(185, 70);
						    ctx.lineTo(115, 115);
						    ctx.lineTo(115, 25);
						    ctx.lineTo(185, 70);						
						} else if (x === 2) {
							if (g === 1) {
							    ctx.moveTo(145, 70);
							    ctx.lineTo(75, 115);
							    ctx.lineTo(75, 25);
							    ctx.lineTo(145, 70);	
							} else if (g === 2) {
							    ctx.moveTo(235, 70);
							    ctx.lineTo(165, 115);
							    ctx.lineTo(165, 25);
							    ctx.lineTo(235, 70);							
							}
						} else if (x === 3) {
							if (g === 1) {
							    ctx.moveTo(95, 70);
							    ctx.lineTo(25, 115);
							    ctx.lineTo(25, 25);
							    ctx.lineTo(95, 70);							
							} else if (g === 2) {
							    ctx.moveTo(185, 70);
							    ctx.lineTo(115, 115);
							    ctx.lineTo(115, 25);
							    ctx.lineTo(185, 70);							
							} else if (g === 3)	{
							    ctx.moveTo(275, 70);
							    ctx.lineTo(205, 115);
							    ctx.lineTo(205, 25);
							    ctx.lineTo(275, 70);				
							}				
						}				
					}
					ctx.strokeStyle = z;
					if (m === 1) {
						ctx.stroke();
					} else if (m === 2) {
						ctx.fillStyle = z;				
						ctx.fill();				
					} else if (m === 3) {
						var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
						my_gradient.addColorStop(0, z);
						my_gradient.addColorStop(1, "white");
						ctx.fillStyle = my_gradient;			
						ctx.lineWidth = "4";
						ctx.fill();								
					}
	
				},
	
	
	

	
				init: function() {

					console.log("card drawer has started");

					for (var cardNumber = 0; cardNumber < cardObject3.cardToAdd.length; cardNumber++) {

						var numberOfShapes = cardObject3.cardToAdd[cardNumber][0]; /*choose between 1, 2 and 3*/
						var color = colors[(cardObject3.cardToAdd[cardNumber][1]) - 1]; /*any color that is recognised by css*/
						var fillType = cardObject3.cardToAdd[cardNumber][2]; /*choose between filled, empty and gradient*/
						var shape = cardObject3.cardToAdd[cardNumber][3]; /*choose between triangle, rectangle and circle*/						


						for (var i = 0; i < numberOfShapes; i++) {
							drawingController.drawCard(numberOfShapes, (i+1), color, fillType, shape, cardNumber);
						}
					}

				}					
			}
	
	
		}) ();







// GLOBAL APP CONTROLLER
var controller = (function(setCtrl, UICtrl) {
	var cardObject1 = setCtrl.getcardSituations();

	var setUpEventListeners = function() {
		var DOM = UICtrl.getDOMstrings();
		document.querySelector(DOM.button0).addEventListener("click", addToSet.bind(this, 0));
		document.querySelector(DOM.button1).addEventListener("click", addToSet.bind(this, 1));
		document.querySelector(DOM.button2).addEventListener("click", addToSet.bind(this, 2));
		document.querySelector(DOM.button3).addEventListener("click", addToSet.bind(this, 3));
		document.querySelector(DOM.button4).addEventListener("click", addToSet.bind(this, 4));
		document.querySelector(DOM.button5).addEventListener("click", addToSet.bind(this, 5));
		document.querySelector(DOM.button6).addEventListener("click", addToSet.bind(this, 6));
		document.querySelector(DOM.button7).addEventListener("click", addToSet.bind(this, 7));
		document.querySelector(DOM.button8).addEventListener("click", addToSet.bind(this, 8));
		document.querySelector(DOM.button9).addEventListener("click", addToSet.bind(this, 9));
		document.querySelector(DOM.button10).addEventListener("click", addToSet.bind(this, 10));
		document.querySelector(DOM.button11).addEventListener("click", addToSet.bind(this, 11));
	};

	
	// FUNCTION TO ADD NEW CARDS
	var addCards = function() {
	// 1. Find out how many cards need to be added	
		setCtrl.getNumberEmpty();
		console.log("cards to add: " + cardObject1.numberCardsToAdd());

	// 2. Add a random selection of cards from the pool of cards to an array (the deck of cards) and remove the selected cards from the pool of cards
		setCtrl.addToDeckArray();
		console.table(cardObject1.pool_cards);
		console.table(cardObject1.cardToAdd);

	// 3. Draw the cards on the cards
		drawingController.init();
		console.log("number of cards to add: " + cardObject1.numberCardsToAdd());
		console.log("the indices of the cards to add are: " + cardObject1.indicesCardToAdd);

	};


	// FUNCTION TO SELECT A SET
	var addToSet = function(b) {
	// 1. Add card to array of potential set and remove from the card's display from the deck
	setCtrl.addToSetArray(b);

	// 2. Display the selected cards in the set boxes


	// 3. Check if set is correct


	// 4. Alert user of result


	// 5. Reset the cards to their original position if the set was wrong or add new cards to deck if set is right
	}; 




	
	return {
		// Create a pool of cards as part of initialisation
		init: function() {
			console.log("Application has started");
			setCtrl.setUpPool();
			setUpEventListeners();
			addCards();
		}
	};




}) (setController, UIController);

controller.init();

	

}

