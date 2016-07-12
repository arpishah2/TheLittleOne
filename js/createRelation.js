var Parse = require('parse/node').Parse;
Parse.serverURL = "http://localhost:1337/parse";
Parse.initialize("my_app_id");

var Kid = Parse.Object.extend("Kid");
var Parent = Parse.Object.extend("Parent");

console.log("1........");

var _child = 'hello';
var _parent = 'c';
var child_id = "FiPUuPV1sG"

// Chitrang var parent_id = "vzxAEhHuh9"
//Prachi
var parent_id = "luFFNTVHRV";


console.log("2........");

var setRelationship = function() {
	/*console.log("Nitya ------------------>");
	console.log(nitya);
	console.log(chitrang);*/
}

function setKid(c) { 
	_child = c;
	console.log("Found kid " + _child.get("name"));
}
function setHello(p) { 
	_parent = p; 
	console.log("Found parent " + _parent.get("name"));
}

console.log("3........");

var q1 = new Parse.Query(Kid);
var q2 = new Parse.Query(Parent);


console.log("4........");

function queryKid(value, callback) {
    q1.get(child_id, {
	success: function(fetchedChild) {
		console.log("5........");
		setKid(fetchedChild);
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
		console.log("6........");
		setHello(fetchedParent);
		callback();
	},
	error: function(object, error) {
		console.log("Failed to get parent: " + error);
	}
});
}

function lastFunction(value, callback){
		
	console.log("7........");

	console.log("Nitya ------------------>");
	console.log(_child);
	console.log(_parent);


	//Let us create a relation between the fetched kid and fetched parent
	//nitya.set("parent",chitrang);
	_child.set("parent",_parent);
	_child.save();

	console.log("8............");


}


// call stack


queryKid(1, function() {
	queryParent(2, function() {
		lastFunction(3, function() {
		});
	});
});

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
