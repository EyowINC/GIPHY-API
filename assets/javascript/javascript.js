$( document ).ready(function() {
// An array of actions, new actions will be pushed into this array;
var actions = ["Dancing", "Jogging", "Falling", "Pushing", "Swimming", 
               "Eating", "Crying", "Winking", "Strolling", "Hopping"];

// Creating Functions & Methods Function that displays all gif buttons
// erasing anything in this div id so that it doesnt duplicate the results
function displayGifButtons(){
    $("#gifButtonsView").empty(); 
    for (var i = 0; i < actions.length; i++){
        var gifButton = $("<button>");
        gifButton.addClass("action");
        gifButton.addClass("btn btn-primary")
        gifButton.attr("data-name", actions[i]);
        gifButton.text(actions[i]);
        $("#gifButtonsView").append(gifButton);
    }
}
// Function to add a new action button
// added so user cannot add a blank button
function addNewButton(){
    $("#addGif").on("click", function(){
    var action = $("#action-input").val().trim();
    if (action == ""){
      return false; 
    }
    actions.push(action);

    displayGifButtons();
    return false;
    });
}
    // Doesnt work properly yet removes all of the added buttons
    function removeLastButton(){
      $("removeGif").on("click", function(){
        actions.pop(action);
        displayGifButtons();
        return false;

     });
}
// Function that displays all of the gifs
function displayGifs(){
    var action = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" 
       + action + "8aCOfn4I6K4IUyLiOt9Pb8cpx9HS6MDP";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: 'GET'

// I need help with from this point
    