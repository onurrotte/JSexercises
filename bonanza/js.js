$(document).ready(function () {


    $("#fadeOut").click(function(){
        $("#pout").fadeOut(3000)
    })

    $("#append").click(function(){
        $("#pappend").append("<b>Appended text</b>")
    })
    $("#change").click(function(){
        $("#pchange").css("color","red")
    }
    )




});