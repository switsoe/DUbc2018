    var charList =  ["Mr. Pink", "Mr. Blond", "Mr. White", "Mr. Brown", "Mr. Brown", "Mr. Orange", "Mr. Blue"];
    function renderButtons() {

        $("#gifs-appear-here").empty();

        for (var i = 0; i < charList.length; i++) {

            // Then dynamicaly generating buttons for each movie in the array.
            // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
            var a = $("<button>");
            
            // Adding a class
            a.addClass("char");
            // Adding a data-attribute with a value of the movie at index i
            a.attr("data-name", charList[i]);
            // Providing the button's text with a value of the movie at index i
            a.text(charList[i]);
            // Adding the button to the HTML
            $("#gifs-appear-here").append(a);
        }
    }
       
      $("#add-char").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var char = $("#char-input").val().trim();
        // The movie from the textbox is then added to our array
        charList.push(char);

        // calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Calling the renderButtons function at least once to display the initial list of movies
      renderButtons();
