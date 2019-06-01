/* eslint-disable prettier/prettier */
//This is commenting out the variables used inside of the starter files that I am not using

// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

function productSelect() {
  //productBuild;
}
productSelect();

function newUser(name, password) {
  $.post(
    "/api/user",
    {
      userName: name,
      password: password
    },
    function(result) {
      console.log(result);
      console.log("Welcome New User %s", name);
      alert("Welcome %s!", name);
      location.replace("user/home");
    }
  );
}

function loginUser(name, password) {
  $.get("/api/users/" + name).then(function(data) {
    validPassword(password, data);
  });
}

function userExists(name, password) {
  $.get("/api/users/" + name).then(function(data) {
    if (data === null) {
      alert("USER DOES NOT EXIST");
      return;
    } else {
      loginUser(name, password);
    }
  });
}

function validPassword(password, data) {
  if (password === data.password) {
    location.replace("/user/home"), console.log("Welcome back %s!", data);
    // $(".optionSelection").hide();
  } else {
    alert("INCORRECT PASSWORD");
  }
}



function validateRegister(first, second) {
  check = false;
  if (first === second) {
    return (check = true);
  } else {
    alert("Passwords do not match!");
    return;
  }
}

$(document).ready(function() {
  $(".optionSelection").hide();
});

//$(".choice").click(function() {
//   //var orderBuild = $(this).data("id");
//   //$(".page").empty();
//   //$(".optionSelection").show();

//   console.log(orderBuild);
//   switch (orderBuild) {
//   case "digPrint":
//     console.log("yes");
//     break;

//   case "stickers":
//     console.log("stickers");
//     break;

//   case "cutVinyl":
//     console.log("yes");
//     break;

//   case "banners":
//     console.log("yes");
//     break;

//   case "brochures":
//     console.log("yes");
//     break;

//   case "businessCards":
//     $("#cardsModal").show();
//     console.log("yes");
//     break;

//   case "posters":
//     console.log("yes");
//     break;

//   case "canPrints":
//     console.log("yes");
//     break;

//   case "flyers":
//     console.log("yes");
//     break;

//   default:
//     console.log("wrong");
//   }
// });
//
$(".register").click(function(event) {
  event.preventDefault();
  var name = $("#registerEmail").val();
  var password1 = $("#registerPassword").val();
  var password2 = $("#confirmPassword").val();
  validateRegister(password1, password2);
  if (!check) {
    validate();
  } else if (check) {
    newUser(name, password2);
  }
});

$("#login").click(function(event) {
  event.preventDefault();
  console.log("hey");
  var name = $("#inputEmail").val();
  var password = $("#inputPassword").val();
  userExists(name, password);
});

//I've commented out everything the starter file gave that I'm not using

//I left it in just in case I made a mistake

//This is a prototype and rough skeleton of whats to come

//$(".start").hide();
// The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     // refreshExamples();
//     location.reload();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
