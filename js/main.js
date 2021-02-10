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

/*const rss_url = 'http://newsapi.org/v2/top-headlines?' +
'country=us&' +'apiKey=fc735e5e3785492881825084bef050b3';
fetch(rss_url,{credentials:'include'})
.then(response => response.text())
.then(str => console.log(str));*/
/*let url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=fc735e5e3785492881825084bef050b3';
let req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })*/