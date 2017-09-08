$(function(){
    $("#home-event").unbind("click").click(function(){
        if (nowLoad != "event-love6.html") {
            $("#contents").load("event-love6.html");
            nowLoad = "event-love6.html";
        }
    });
});
