//number animation
$('.counter-count').each(function () {

    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
//thank you or error message
function subscribeFunction() {
    let emailCheck = document.getElementById("email").value;
    if(emailCheck == "")
    {
        document.getElementById("thankyou").style.color = "red";
        document.getElementById("thankyou").innerHTML = "Please enter email id";
    }
    else
    {
        document.getElementById("thankyou").style.color = "green";
        document.getElementById("thankyou").innerHTML = "Thank you for your subscription."
    }
}



