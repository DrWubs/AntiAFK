var waitBase = 3600; // DEFAULT: 3600s (1.5 hour)
var waitVar = 1800; // DEFAULT: 1800 (0.5 hour)
 
var responses = ["nice song", "i love this song!", "woo!", ":D", ":)", "NIIICE", "love this", "this is very good", "this song!", "beautiful!"];
 
function speak()
{
        var message = "";
        if(getRandom(0, 100) >= 50)
        {
                message = "@" + API.getDJs()[0].username + " ";
        }
        message += responses[getRandom(0, responses.length)];
        API.sendChat(message);
        setTimeout(function(){speak();}, (waitBase + getRandom(0, waitVar))*1000);
}
 
function getRandom(min, max)
{
        return Math.floor(Math.random()*max + min);
}