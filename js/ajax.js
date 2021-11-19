$(function() {

    $('#btnLoad').click(function() {
        console.log("clicked");

        //let jsonURL = "https://www.w3schools.com/jquery/demo_ajax_json.js";

        //let jsonURL = "demo.json";

        let jsonURL = "JSONDemo.json";

        $.ajax({
            url: jsonURL,
            dataType: "json",
            success: function(data) {
                    //entry for make
                console.log(data.make);
                $("#make-selector").val(data.make);
                console.log(data.make);
                $('input[type=checkbox]').each(function () {
                    if (data.make === $(this).val())
                    {
                      $(this).prop('checked', true)
                        console.log($(this));
                    }
                });
                //entry for model
                console.log(data.model);
                $("#model-selector").val(data.model);
                console.log(data.model);
                $('input[type=checkbox]').each(function () {
                    if (data.model === $(this).val())
                    {
                      $(this).prop('checked', true)
                        console.log($(this));
                    }
                });
                //entry for part
                console.log(data.part);
                $("#parts-section").val(data.part);
                console.log(data.part);
                $('input[type=checkbox]').each(function () {
                    if (data.part === $(this).val())
                    {
                      $(this).prop('checked', true)
                        console.log($(this));
                    }
                });
                //entry for driver
                console.log(data.driver);
                $("#driver-section").val(data.driver);
                console.log(data.driver);
                $('input[type=radio]').each(function () {
                    if (data.driver === $(this).val())
                    {
                      $(this).prop('checked', true)
                        console.log($(this));
                    }
                });

                
                //entry for name, email and password
                $.each(data, function (key, val) {
                    
                    console.log(key, val);
                    
                    $(`#${key}`).val(val);
                });
            }
        });
    });
});