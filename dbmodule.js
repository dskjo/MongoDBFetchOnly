var databaseUrl = "localhost/customer";
var collections = ["users"]
var db = require("./mongojs").connect(databaseUrl, collections);

//db(databaseUrl, collections);
db.users.ensureIndex({email:1},{unique:true});



exports.fetchUserDetails=function(username,response){
	console.log('Fetching user details from MongoDB');
	db.users.find({"name":username},function(err, users) {
		if(err || !users){
			response.write("User not found in DB");
			response.end();
		} 
		else if(users.length==0){
			response.write("User not found in DB");
			response.end();
		}
		else {
			response.write("User found in DB"+ ":"+name+"|"+email+"|"+age+"|"+place);
			response.end();
		}
		
	});
}


