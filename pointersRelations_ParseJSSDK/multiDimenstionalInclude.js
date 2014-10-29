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

var Comments= Parse.Object.extend("Comments");
var query = new Parse.Query(Comments);

/*Get the Post's Info*/
query.include("post");
/*Get the Post Author's Info*/
query.include("post.postAuthor");
/*Get the Comment's Author Info*/
query.include("user");

query.find().then(function(results){
    /* Go Through Each Comment*/
    var commentsArray = new Array();
    for(i in results){
        /* Set obj to current comment*/
        var obj = results[i];
        /* Get Post's Name */
        var postName = obj.get("post").get("postName"); // If you're pulling real data to test this, try to alert this to see that it works!
        /* Get Post's Message */
        var postMsg = obj.get("post").get("postMsg"); // If you're pulling real data to test this, try to alert this to see that it works!
        /* Get Post Author's Name */
        var authorName = obj.get("post").get("postAuthor").get("name"); // If you're pulling real data to test this, try to alert this to see that it works!
        /* Get Comment's Message */
        var commentMsg = obj.get("msg");
        /* Get Comment's Author*/
        var commentAuthor = obj.get("user").get("name"); // If you're pulling real data to test this, try to alert this to see that it works!

        /* Let's Put the Comment Information in an Array as an Object*/
        commentsArray.push({
            post:{
                name: postName,
                msg: postMsg
            },
            author: authorName,
            comment: {
                author: commentAuthor,
                msg: commentMsg
            }
        });
    }
});

// Done - yay :D