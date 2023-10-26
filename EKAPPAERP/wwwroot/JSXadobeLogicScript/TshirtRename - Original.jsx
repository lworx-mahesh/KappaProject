
// Include the json2.js library

#include "json2.js"   //where my jsx is calling from that folder , so same folder I have to put that json2 libaray

// Open the AI file
var aiFile = new File("D:\\front.ai");

// Define your dataset (in reality, you'd load this from a file)

if (aiFile.exists) {

    app.preferences.setBooleanPreference("ShowExternalJSXWarning", false);
    var doc = app.open(aiFile);
   

    var TextName="";
   var Numberdata="";

// Load the JSON configuration file
var jsonFile = File("D:\\illustrator_params.json"); // Adjust the path as needed
if (jsonFile.exists) {
    jsonFile.open("r");
    var jsonString = jsonFile.read();
    jsonFile.close();

    // Parse the JSON data
    var parameters = JSON.parse(jsonString);

    // Access the parameters
     TextName = parameters.Parameter1;
     Numberdata = parameters.Parameter2;

    // Your script logic here, using parameter1, parameter2, etc.
} else {
    alert("JSON configuration file not found.");
}





// // Get the command-line arguments
// var args = $.arguments;

// // Check if arguments are provided
// if (args!=undefined && args.length > 0) {
//     // Access the arguments
//     var argument1 = args[0];
//     var argument2 = args[1];
//     // ... (access more arguments as needed)

//     // Your script logic here
//     // Use argument1, argument2, etc., in your script
// } else {
//     alert("No arguments provided.");
// }



    // var dataset = {
    //     "test": "test change",
    //     "Jay": "Jay update",
    //     "Front": "Jay update",
    // };

    // Create a text frame
    // var textFrame = doc.textFrames.add();

    // // Set text content
    // textFrame.contents = "Hello, World! jay";

    // // Set text frame position and size
    // textFrame.left = 100; // X position
    // textFrame.top = 100;  // Y position
    // textFrame.width = 200; // Width
    // textFrame.height = 50;  // Height

    // // You can also style the text frame
    // textFrame.textRange.characterAttributes.size = 72;  // Font size
    // textFrame.textRange.characterAttributes.fillColor = doc.defaultFillColor; // Text color


    // Loop through text items and update text names
    for (var i = 0; i < doc.textFrames.length; i++) {
        var textFrame = doc.textFrames[i];

        var TextFrameName = textFrame.name; 

        var ContentName = textFrame.contents; 

       // var oldTextName = textFrame.name; //Textfarme is like invisible name some times textframe has no contents

       //  var  ContentName = textFrame.contents; //which show on image  some time contetx has no textframeName


         if (TextFrameName=="Front") {
            textFrame.contents=TextName;
        }
        if (TextFrameName=="Back") {
            textFrame.contents=TextName;
        }

        // if (ContentName=="New") {
        //     textFrame.contents="Done";
        // }

        // if (dataset[oldTextName]) {
        //     textFrame.name = dataset[oldTextName];
        // }

        // if (dataset[ContentName]) {
        //     textFrame.contents = "jay new";
        // }

      

  
    }


        // Replace 'YourGroupName' with the name of the group containing the text elements.
        for (var i = 0; i < doc.groupItems.length; i++) {  //groups item is like text on image we have to check that name in group or textframe
 
           
    
      
        }
    




    // Save the modified AI file
    doc.save();
    doc.close();
}
else {
    alert("The file does not exist: " + filePath);
}
