//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */

//writ your code here .....

//a.
var arrayOfPlayers = []
function player(name){
	
	this.na = name;
	this.addInfo = addInfo;
	this.increaseLevel= increaseLevel;
	this.isAvailable = isAvailable;
	return this;
}

//b.
addInfo = function(age, position, level, availability){
	this.age = age;
	this.position =position;
	this.level = level;
	this.availability =availability;
	arrayOfPlayers.push({ name : this.na, age : this.age, position : this.position, level: this.level, available: this.availability});

};

//c.
increaseLevel = function(n){
	this.level +=n; 
}

//d.
isAvailable = function(){
	return (this.availability === "available")? true: false;
}

//e.
var player1= player("sam");
player1.addInfo(33, "center", 4, "available");
var player2= player("john");
player2.addInfo(20, "align", 2, "not");
var player3= player("saied");
player3.addInfo(40, "center", 4, "available");
var player4= player("Azoz");
player4.addInfo(19, "left", 1, "not");

//f.
function decrease(){
	 arrayOfPlayers.map(function(value, index){
		if(value["age"] >30)
			value["level"] -=1;
	});
	 return arrayOfPlayers;
}

//g.
function sortPalyerBy(array, str){
	return array.sort(function(x, y){
		return x[str] > y[str];
	})
}