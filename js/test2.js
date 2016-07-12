var Parse = require('parse/node').Parse;
Parse.serverURL = "http://localhost:1337/parse";
Parse.initialize("my_app_id");
var KidClass = new Parse.Object.extend("Kid");
var query = new Parse.Query(KidClass);

query.get("2beqxJ4iXe", {
	success: function(kid) {

		


		console.log(kid.get("name"));
		console.log(kid.get("ObjectId"));
		var frnds = kid.get("friends");
		console.log("Are we here"+frnds);

		for(var property in frnds) {

		    if(typeof frnds[property] === 'object'){
		
			var newObj = frnds[property];
			console.log(property + "=" + frnds[property]);

			console.log("--------------------------------");
			for(var p in newObj){
				console.log(p + "=" + newObj[p]);				
			}
			console.log("-------------------------------");

		    }
                    
		    else{
			 console.log(property + "=" + frnds[property]);
		    }
	        }


		frnds.fetch({
			success: function(friend){
				var nameOfFriend = friend.get("name");
				console.log("Name of the friend in relation is: ");
				console.log(nameOfFriend);
			},
			error: function(object, error){
				console.log("Failed to get friend name");
				console.log(error);
			}

		});
	},
	error: function(object,error){
		console.log(error);
	}
});


