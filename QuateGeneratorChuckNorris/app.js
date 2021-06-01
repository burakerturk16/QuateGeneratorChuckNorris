var dataHtml = document.getElementById("jokes");
var chuck = document.getElementById("chuck-gun");

function CreateJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(data => data.json())
        .then(function (response) {
            dataHtml.innerHTML = response.value
            if (chuck.style.display === "none") {
                chuck.style.display = "inline";
            } else {
                chuck.style.display = "none";
            }
        });
        }
        
function tweetQuote() {
    tweet = `https://twitter.com/intent/tweet?text= ${ dataHtml.innerHTML}`;
    window.open(tweet,'_blank')
}
twitterLink.addEventListener("click", tweetQuote);
