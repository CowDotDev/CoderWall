Parse.initialize("xxx", "xxx");

var onLoad = function(){
	// Set Up Query for Post Class
	var allQuery = new Parse.Query("Post"),
		coQuery = new Parse.Query("Post"),
		mtQuery = new Parse.Query("Post"),
		nyQuery = new Parse.Query("Post");
	// Set Up Query for Market Class
	var	coPosts = new Parse.Query("Market"),
		mtPosts = new Parse.Query("Market"),
		nyPosts = new Parse.Query("Market");

	// Set the Queries for the Market Class to Equal to Desired State
	coPosts.equalTo('state', 'CO');
	mtPosts.equalTo('state', 'MT');
	nyPosts.equalTo('state', 'NY');

	// Get all The Posts
	allQuery.find().then(function(data){
		for(i in data){
			var post = data[i];
			var allPostsCont = document.getElementById("allPosts");
			allPostsCont.innerHTML += "<p>"+post.get('msg')+"</p>";
		}
	});

	// Get only CO Posts
	coQuery.matchesQuery('market', coPosts);
	coQuery.find().then(function(data){
		for(i in data){
			var post = data[i];
			var coPostsCont = document.getElementById("coPosts");
			coPostsCont.innerHTML += "<p>"+post.get('msg')+"</p>";
		}
	});

	// Get only MT Posts
	mtQuery.matchesQuery('market', mtPosts);
	mtQuery.find().then(function(data){
		for(i in data){
			var post = data[i];
			var mtPostsCont = document.getElementById("mtPosts");
			mtPostsCont.innerHTML += "<p>"+post.get('msg')+"</p>";
		}
	});

	// Get only NY Posts
	nyQuery.matchesQuery('market', nyPosts);
	nyQuery.find().then(function(data){
		for(i in data){
			var post = data[i];
			var nyPostsCont = document.getElementById("nyPosts");
			nyPostsCont.innerHTML += "<p>"+post.get('msg')+"</p>";
		}
	});
}