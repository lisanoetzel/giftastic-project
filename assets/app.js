$(document).ready(function () {

    // initial array of Looney Tunes Characters
    var topics = ["Yosemite Sam", "Bugs Bunny", "Marvin the Martian", "Wile E Coyote", "Taz"];

    // function that creates buttons for character array
    function buttonMaker() {
        for (i=0; i < topics.length; i++) {
            console.log(topics[i]);
        //this makes the button
            var button = $("<button>");
        //this adds the character's name to the button
            button.attr("data-search", topics[i]);
            button.addClass ("btn btn-info");
            button.text(topics[i]);
        //this adds the button to the div with #buttonArea
            $("#buttonArea").append(button);
        }
    }
    // calling the function
    buttonMaker();

    // var userInput = $("#userSelection").val()
    // var userButton = $("<button");
    // userButton.attr("data-search", userInput);
    // topics.push(userInput);

    // $("#buttonArea").empty();
//when add button is clicked:
//add new thing to array
//clear
//call buttonMaker


// $("#buttonArea").append(button);

$("button").on("click", function() {
    // console.log("Button has been clicked !"); 

    var x= $(this).data("search");
         console.log(x);

// linking variable X (specific buttons) to Giphy API

     var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=tTEa8fvfKr8Saeh5ZKDzFF6yKCCiuzrJ&q=" + x + "&limit=10&offset=0&rating=G&lang=en"
         console.log(queryURL);

// making AJAX call to bring Giphy data/object to HTML

     $.ajax({url: queryURL, method: 'GET'})
         .done(function(response){
            // console.log(response); -- below we'll console log & append rating
            // console.log(response.data[0].rating); - this showed the first item in the data array

            // using FOR LOOP to list first 10 giphys 
             for(var i=0; i<response.data.length; i++){

                 //making rating visual on html page (appending before one another)
                 $('#giphyArea').prepend("<p>Rating: " + response.data[i].rating + "</p>");

                 //making image visual on html page (appending)
                 $('#giphyArea').prepend("<img src=" + response.data[i].images.downsized.url + '">"');

             }

         
         });
});

});