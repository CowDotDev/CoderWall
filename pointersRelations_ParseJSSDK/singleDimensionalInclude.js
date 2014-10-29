/*
Parse.com Class Structures

***_User Structure:***
> objectId
> username
> password
> name - string

***Posts Structure:***
> objectId
> postName - string
> postMsg - string
> postAuthor - Pointer< _User > (Pointer to the User Class)

***Comments Structure:***
> objectId
> msg - string
> post - Pointer< Posts > (Pointer to the Posts Class)
> user - Pointer< _User > (Pointer to User Class
*/

// IF YOU USE THIS CODE MAKE SURE TO INCLUDE THE PARSE INIT w/ PARSE JS SDK AND jQUERY LIBRARY
// Parse Init Would go Here

var Posts = Parse.Object.extend("Posts");
var query = new Parse.Query(Posts);

query.include("postAuthor");

query.find().then(function(results){
    /* Go Through Each Post */
    var postsArray = new Array();
    for(i in results){
        /* Set obj to current post*/
        var obj = results[i];
        /* Get Post's Name */
        var postName = obj.get("postName");
        /* Get Post's Message */
        var postMsg = obj.get("postMsg");
        /* Get Post Author's Name */
        var authorName = obj.get("postAuthor").get("name"); // If you have this class structure set up with real data, try alerting this to see that it works!

        /* Let's Put the Post Information in an Array as an Object*/
        postsArray.push({
            post:{
                name: postName,
                msg: postMsg
            },
            author: authorName
        });
    }
});

// Done - yay :D