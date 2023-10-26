var base_url = window.location.origin;
var path = base_url+'/images/tshirt/';

        //pdt360DegViewer(imgDivid, count, path, imgType, playable, autoPlay, drag, mouseMove, buttonNavigation, keyNavigation, scroll);

        //pdt360DegViewer('car0', 17, path, 'png', true, true, false, false, false, false, false);    //playable autoPlay
       // pdt360DegViewer('car1', 17, path, 'png', true, false, false, false, false, false, false);   //playable
      //  ('car2', 17, path, 'png', false, true, false, false, false, false, false);   //autoPlay
        pdt360DegViewer('product_item_view', 16, path, 'png', false, false, true, false, false, false, false);   //draggable
      //  pdt360DegViewer('car4', 17, path, 'png', false, false, false, true, false, false, false);   //mouseMove
      //  pdt360DegViewer('car5', 17, path, 'png', false, false, false, false, true, false, false);   //buttonNavigation
       // pdt360DegViewer('car6', 17, path, 'png', false, false, false, false, false, true, false);   //keys
       // pdt360DegViewer('car7', 17, path, 'png', false, false, false, false, false, false, true);   //scroll





            $("#generate-button").click(function () {
                const text = $("#text-input").val();
                const fontSize = $("#font-size-input").val();

                // Create a copy of the original image.
                const image = new Image();
                image.src = $("#output-image").attr("src");

                const canvas = $("<canvas>")[0];
                canvas.width = image.width;
                canvas.height = image.height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, 0);

                // Add text to the canvas.
                ctx.font = `${fontSize}px Arial`;
                ctx.fillStyle = "white";
                ctx.fillText(text, 20, 40);

                // Convert the canvas to a data URL and set it as the image source.
                const dataURL = canvas.toDataURL("image/jpeg");

                // Display the generated image.
                $("#output-image").attr("src", dataURL);

                // Show the download link.
                $("#download-link").attr("href", dataURL).show();
            });
 