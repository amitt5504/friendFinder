var friends = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post('/api/friends', function(req, res) {
		//Assign the input from the user
		var userInput = req.body;
		var userResponses = userInput.scores;

		// Compute best friend match
		var matchName = '';
		var matchImage = '';
		var difference = 10000; 

		//Traversing through the friends array
		for (var i = 0; i < friends.length; i++) {

			//Find the differences between the user and the avainable matches
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}

			//If lowest difference, record the match
			if (diff < difference) {
				difference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].image;
			}
		}

		//Adds user to the friends array
		friends.push(userInput);

		//Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};
