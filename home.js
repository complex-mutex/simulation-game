$(function(){
    $("#home-event").click(function(){
        if (nowLoad != "event-love6.html") {
            $("#contents").load("event-love6.html");
            nowLoad = "event-love6.html";
        }
    });
});
