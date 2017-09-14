$(function(){
    $.ajaxSetup({cache : true});
    reLoadStatus = setParam;
    reLoad();
    $("#footer-top").unbind("click").click(function(){
        if (nowLoad != "top.html") {
            $("#contents").load("top.html");
            nowLoad = "top.html";
        }
    });
    $("#footer-reload").unbind("click").click(function() {
        reLoad();
    });
    $("#footer-setting").unbind("click").click(function(){
        if (nowLoad != "setting.html") {
            $("#contents").load("setting.html");
            nowLoad = "setting.html";
        }
    });
    $("#footer-home").unbind("click").click(function(){
        if (nowLoad != "home.html") {
            $("#contents").load("home.html");
            nowLoad = "home.html";
        }
    });

    /* functions */
    function setParam() {
        $("#header-exp-bar").attr("value", exp / 100);
        $("#header-lv span").text("Lv." + lv);
        $("#header-stamina-bar").attr("max", maxStamina).attr("value", stamina);
        $("#header-stamina span").text(stamina + "/" + maxStamina);
        $("#header-bp span").text(bp + "/" + maxBp);
        for (var _ = 0; _ < maxBp; _++) {
            if(_ < bp) $("#header-bp-area div").eq(_).removeClass("header-bp-off").addClass("header-bp-on");
            else $("#header-bp-area div").eq(_).removeClass("header-bp-on").addClass("header-bp-off");
        }
        $("#header-free .header-coin-count").text(free);
        $("#header-premium .header-coin-count").text(premium);
    }
    function reLoad() {
        setParam();
        $("#contents").load(nowLoad);
    }
});
