var Parse = require('parse/node').Parse;
Parse.serverURL = "http://localhost:1337/parse";
Parse.initialize("my_app_id");

var Kid = Parse.Object.extend("Kid");
var Parent = Parse.Object.extend("Parent");
var _child = 'hello', _parent = 'c',_parent2 = 'b';
var child_id = "HD0eAH5C3N"; //Kanav
//var child_id = "FiPUuPV1sG"; //Nitya
var parent_id = "vzxAEhHuh9" //Chitrang
var parent_id2 = "luFFNTVHRV"; //Prachi
var relation = "fizz buzz";
var q1 = new Parse.Query(Kid);
var q2 = new Parse.Query(Parent);
var q3 = new Parse.Query(Parent);

function queryKid(value, callback) {
    q1.get(child_id, {
	success: function(fetchedChild) {
		console.log("1........");
		_child = fetchedChild;
		console.log(_child);
    console.log("            -> " + _child.get('name'));
		callback();
	},
	error: function(object, error) {
		console.log("Failed to get kid: " + error);
	}
    });
}



function queryParent(value, callback) {
    q2.get(parent_id, {
	success: function(fetchedParent) {
		console.log("2........");
		_parent = fetchedParent;
		console.log(_parent + " -> " + _parent.get("name"));
		callback();
	},
	error: function(object, error) {
		console.log("Failed to get parent: " + error);
	}
    });
}


function queryParent2(value, callback) {
    q3.get(parent_id2, {
	success: function(fetchedParent) {
		console.log("3........");
		_parent2 = fetchedParent;
		console.log(_parent2 + " -> " + _parent2.get("name"));
		callback();
	},
	error: function(object, error) {
		console.log("Failed to get parent: " + error);
	}
    });
}

function lastFunction(value, callback){
		
	console.log("4........");

	console.log("child -> "+_child);
	console.log("parent ->"+_parent);
	console.log("parent2 ->"+_parent2);

	//Let us create a relation between the fetched kid and fetched parent
	//nitya.set("parent",chitrang);
	//_child.set("parent",_parent);
	//_child.save();

	relation = _child.relation("parent");
	relation.add([_parent,_parent2]);
	_child.save();

	console.log(relation);
	console.log("5............");
	callback();


}

function addAttribute(value,callback){

  if(!_child.has('fav_game')) {

		console.log("Let us add an attribute");
		_child.set("fav_game","Lego");
		_child.save(null, { 
				success: function(params) {
					console.log("added fav_game, save success");
					console.log("Let us double check if attribute is there...");
					console.log(_child.has('fav_game'));
				},
				error: function(params) {
					console.log("could not save after adding the attribute. save failed");
				}
		});

	} else {
		console.log('We already have fav_game: ' + _child.get('fav_game'));
	}

	callback();
}

function removeAttribute(value,callback){
	if(_child.has('fav_game')) {
	console.log("Let us remove attribute");
	_child.unset("fav_game");
	_child.save(null, { 
			success: function(params) {
				console.log("removed attribute fav_game, save success");
			},
			error: function(params) {
				console.log("could not save after removing the attribute. save failed");
			}
	});
	} else {
		console.log("Nothing to remove");
	}
	callback();

}

function getMMRelation(value,callback){
	console.log("6................");
  _child.fetch();

	// if(_child.has('fav_game')) {
	// 	console.log("Found attribute fav_game");
	// 	a = _child.get('fav_game');
	// 	console.log("fav_game -> "+a);
	// 	console.log(":)");
	// }
	// else{
	// 	console.log("No attribute - fav_game");
	// 	console.log("Hahahaa not found");
	// }
	if(_child.has('friends')) {
		console.log("Found relationship and trying to delete it")
		_child.unset('friends');
		_child.save(null, { 
			success: function(params) {
				console.log("save success");
			},
			error: function(params) {
				console.log("save failed");
			}
		});
	} else {
		console.log("friends relation not found");
	}

  callback();
}

function getRelation(value, callback) {
  console.log("getting relation: " + _child.get("parent"));
  _child.get("parent").fetch({
    success: function(obj1) {
      console.log("Parent name -> " + obj1.get('name'));
    },
    error: function(err) {
      console.log("No parent: " + err);
    }
  });
// .get('name'));
//  var relationQuery = new Parse.Query(Parse.Kid);
//  relationQuery.include("parent");

  callback();
}

function unsetRelation(value, callback) {
  _child.unset("parent");
  _child.save();
  console.log("removed direct relaionship by unset");

  callback();
}

function removeRelation(value, callback) {

  console.log('Removing  relationship');
  _child.remove('parent');//, null);
  _child.save();
  console.log('Removed  relationship');
  callback();
}

/*
queryKid(1, function() {
   addAttribute(2, function() {
			getMMRelation(3,function(){ 
				removeAttribute(4, function() {
					getMMRelation(5,function(){ 
					});
				});
			});
	 });
});
*/

// call stack
// Direction relation between Nitya and Prachi

// queryKid(1, function() {
// 	getRelation(5,function(){ 
//     unsetRelation(3, function() {
//       getRelation(6, function() {
//       });
//     });
// 	});
// });


queryKid(1, function() {
  getMMRelation(2,function(){ 
      getMMRelation(5,function(){ 
      });
  });
});

/*
queryKid(1, function() {
	queryParent(2, function() {
		queryParent2(3,function(){ 
			removeRelation(4, function() {
				getMMRelation(5,function(){ 
				});
			});
		});
	});
});


queryKid(1, function() {
	queryParent(2, function() {
		queryParent2(3,function(){ 
			lastFunction(4, function() {
				getMMRelation(5,function(){ 
				});
			});
		});
	});
});
*/
//console.log("8........");


//findChild("FiPUuPV1sG")
//	.then(findParent("vzxAEhHuh9"))
//	.then(setParent());

/*

nitya.set("parent",chitrang);
nitya.save();
var relation = nitya.relation("parent");
relation.add(chitrang);
nitya.save();
*/
