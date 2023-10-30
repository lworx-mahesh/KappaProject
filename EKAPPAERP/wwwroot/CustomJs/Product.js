



function BasketItems(Id) {
 
    //Ajax
    var Id = 0;
    $.ajax({
        url: '/BasketBall/basketballItems',
        type: 'POST',
        data: {
            'Id': Id // And whatever else you need to pass on ...
        },
        dataType: 'html',
    }).done(function (response) {
      

        $('.homeclass').css("display","none");
        $('#Items_list').html(response);



    }).fail(function (err) {

    });

}



var targInput = document.getElementById("PlayerName");
targInput.addEventListener("blur", UpdateText, false);



function UpdateText()
{
    debugger;

    var nameval = $('#PlayerName').val();
   // var playerNumber = $('#PlayerNumber').val();
    
    showLoader();

    $.ajax({
        url: "/BasketBall/textupdated",
        type: "POST",
        data: { Name: nameval},
        dataType: 'html',
        success: function (response) {
            debugger;


            localStorage.setItem("PlayerNameLs", nameval);
           // localStorage.setItem("PlayerNumberLs", playerNumber);

            hideLoader();
            window.location.reload();
            // $('#pdtViewer').html("");
            // $('#pdtViewer').html(response);

        },
        error: function () {
            //alert("Error");
        }
    });
}


$('#PlayerNameTest').keyup(function () {

    debugger;

    var nameval = $('#PlayerName').val();
    showLoader();

	$.ajax({
        url: "/BasketBall/textupdated",
		type: "POST",
		data: { Name: nameval },
		dataType: 'html',
        success: function (response) {
            debugger;

          
            localStorage.setItem("PlayerNameLs", nameval);
            hideLoader();
            window.location.reload();
           // $('#pdtViewer').html("");
           // $('#pdtViewer').html(response);
		
		},
		error: function () {
			//alert("Error");
		}
	});

});

function showLoader() {
    $(".loader").fadeIn("slow");
}
function hideLoader() {
    $(".loader").fadeOut("slow");
}