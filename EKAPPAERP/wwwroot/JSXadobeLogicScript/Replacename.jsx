debugger
// Open the AI file
var aiFile = new File("D:\\tshirt.ai");

// Define your dataset (in reality, you'd load this from a file)

if (aiFile.exists) {
    var doc = app.open(aiFile);
    debugger;
    var dataset = {
        "jay bhai": "jay bhai hello",
        "test": "Test 6",
        "Lorem ipsum": "hi",
        // Add more mappings here
    };

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
        var oldTextName = textFrame.name;
        // var  ContentName = textFrame.contents;
        if (dataset[oldTextName]) {
            textFrame.name = dataset[oldTextName];
        }

        // if (dataset[ContentName]) {
        //     textFrame.name = dataset[ContentName];
        // }
    }

    // Save the modified AI file
    doc.save();
    doc.close();
}
else {
    alert("The file does not exist: " + filePath);
}
