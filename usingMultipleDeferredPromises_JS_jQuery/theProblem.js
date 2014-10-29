function queryPartners(){
    /* Query Partners */
    ... // The code for however we are querying and returning the data.
}
function queryUsers(){
    /* Query Users*/
    ... // The code for however we are querying and returning the data.
}
function processInfo(){
    /* Process Data */
    ... // The code for however we are processing the info.
}
function getInfo(){
    /* Query Partners */
    queryPartners();
    /* Query Users */
    queryUsers();
    /* Process Info from Users */
    processInfo(); // Argh, the code wants to process the info before the queries are done!
}