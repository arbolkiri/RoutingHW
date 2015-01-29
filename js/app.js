window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {url: "./dist/style.css"},
        //js
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"},
        {url: "./js/github.js"}
    ).then(function(){
        document.querySelector("html").style.opacity = 1;
        // start app?
        var token = "dfb1cfcd29b2b0bcf67348aff559c4a96ea7dddd";
        var right_template_url= "./templates/rightside.html";
        new GithubClient(token);
    })

}