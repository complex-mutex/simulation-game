$(function(){
    $("#top-start-button").unbind("click").click(function(){
        if (nowLoad != "home.html") {
            $("#contents").load("home.html");
            nowLoad = "home.html";
        }
    });
});
