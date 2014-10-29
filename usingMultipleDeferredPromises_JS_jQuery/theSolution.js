function queryPartners(promise){
    /* Query Partners */
    ... // The code for however we are querying and returning the data.

    /* Query is complete, resolve promise */
    promise.resolve();
    return promise;
}
function queryUsers(promise){
    /* Query Users*/
    ... // The code for however we are querying and returning the data.

    /* Query is complete, resolve promise */
    promise.resolve();
    return promise;
}
function processInfo(promise){
    /* Process Data */
    ... // The code for however we are processing the info.

    /* Processing is complete, resolve promise */
    promise.resolve();
    return promise;
}
function getInfo(){
    /* Initialize Deferred Promises for each function */
    var a = $.Deferred();
    var b = $.Deferred();
    var c = $.Deferred();

    /* Query Partners, supply the promise (a) */
    a = queryPartners(a);
    /* Query Users, supply the promise (b) */
    b = queryUsers(b);

    /* .when() both queries are .done(), run processInfo() */
    $.when(a,b).done(function(){
        /* Process Info from Users, supply promise */
        c = processInfo(c); // Yay it waited for the queries to finish!
    });

    return c; // Returning one last resolved deferred promise here allows us to call getInfo().done() later, if needed
}