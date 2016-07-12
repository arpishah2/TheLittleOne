var Parse = require('parse/node').Parse;
Parse.serverURL = "http://localhost:1337/parse";
Parse.initialize("my_app_id");

var Kid = Parse.Object.extend("Kid");
var Parent = Parse.Object.extend("Parent");

var queryObject = new Parse.Query("Kid");


//to get all the objects belonging to one class

queryObject.find({
    success: function (results) {


        for (var i = 0; i < results.length; i++) {
	    
	    console.log("\n");
	    console.log("************************************Object"+ (i+1) +"************************************"); 
	 
	    var obj = results[i];
 
	    //console.log("Object: --> \n"+obj);

	    //get all the properties and value of the object
	    for(var key in obj){
		if(obj.hasOwnProperty(key)){
			console.log(key + " -> " + obj[key]);
		}
	    }

	    console.log("Name -> "+obj.get("name"));
	    //console.log("Let us get the parent: ");
	    if(obj.get("parent")){
 
	    	var relatedObj = obj.get("parent");

	    	relatedObj.fetch({
			success: function(ob1){
				var parName = ob1.get("name");
				console.log("Parents name -> "+parName);
			},
			error: function(error){
				console.log("Sorry no parent: "+error);
			}
	    	});
	     }
       }
    },
    error: function (error) {
        alert("Error: " + error.code + " " + error.message);
    }
});
