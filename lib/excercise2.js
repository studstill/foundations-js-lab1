
/* ----------------- Favorite Animals ----------------------------------------
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next. http://www.w3schools.com/jsref/jsref_random.asp
 Hint: read the whole Math.random description on that page and try the examples
*/

// TODO: 10 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick

exports.chooseAnimal = function() {
  var favoriteAnimals = [ "elephant", "penguin", "eagle", "camel" ],
    nextAnimal;
    // TODO Implement me
    // random number between 0 and the total num of animals in array
    randomIndex = Math.floor(Math.random() * favoriteAnimals.length);
    nextAnimal = favoriteAnimals[randomIndex];
    return nextAnimal;
};
