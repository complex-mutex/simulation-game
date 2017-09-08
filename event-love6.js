if (typeof event_love6_isLoad === 'undefined') {
    var event_love6_point = 0;
    var event_love6_dropUp = 1.0;
    var event_love6_pointUp = 100;
    var event_love6_vocalUp = 100;
    var event_love6_dateUp = 1.0;
    var event_love6_candy = 0;
    var event_love6_extra = 0;
    var event_love6_godBase = 0.2;  /* ??? */
    var event_love6_date = [
        /* HP, point */
        [20000, 2029],
        [31284, 3209],
        [42947, 4352],
        [62748, 6297],
        [81724, 8138],
        [109837, 11008],
        [124658, 12514],
        [159837, 16044],
        [189482, 19004],
        [303948, 30486]
    ];
    var event_love6_godDate = [
        /* HP, point */
        [100000, 23467],
        [110000, 24593],
        [121000, 25678],
        [133100, 28378],
        [146410, 30849],
        [161051, 34045],
        [177156, 37307],
        [194871, 41236],
        [214358, 45289],
        [235793, 49797],
        [254656, 53833],
        [275028, 58109],
        [297030, 62649],
        [320792, 67676],
        [346455, 73010],
        [374171, 78955],
        [404104, 85233],
        [436432, 91833],
        [471346, 99078],
        [509053, 107129],
        [544686, 114557],
        [582814, 122464],
        [623610, 131076],
        [667262, 140429],
        [713970, 150032],
        [763947, 160551],
        [817423, 171724],
        [874642, 183682],
        [935866, 196622],
        [1001376, 210618],
        [1051444, 221255],
        [1104016, 232192],
        [1159216, 243662],
        [1217176, 256034],
        [1278034, 268752],
        [1341935, 282232],
        [1409031, 296088],
        [1479482, 311034],
        [1553456, 326369],
        [1631128, 342957],
        [1696373, 356352],
        [1764227, 370692],
        [1834796, 385522],
        [1908187, 401189],
        [1984514, 416878],
        [2063894, 433522],
        [2146449, 451007],
        [2232306, 469023],
        [2321598, 487541],
        [2414461, 507226],
    ];

    /* 本当はconstにしたい */
    var event_love6_minPoint = 0;
    var event_love6_minDropUp = 1.0;
    var event_love6_minPointUp = 100;
    var event_love6_minVocalUp = 100;
    var event_love6_minDateUp = 1.0;
    var event_love6_minCandy = 0;
    var event_love6_minExtra = 0;

    var event_love6_maxDropUp = 9.99;
    var event_love6_maxPointUp = 999;
    var event_love6_maxVocalUp = 999;
    var event_love6_maxDateUp = 9.99;
    var event_love6_maxCandy = 999999;
    var event_love6_maxExtra = 999999;

    var event_love6_isBattle = false;
    var event_love6_maxHp;
    var event_love6_nowHp;
    var event_love6_rarity;
    var event_love6_lv;
    var event_love6_isTwice = false;
    var event_love6_setDate;
}


/* 複数回変数宣言が実行されないための記述 */
var event_love6_isLoad = 1;

$(function(){
    $("#event-love6-point").val(event_love6_point);
    $("#event-love6-save").unbind("click").click(saveParam);
    $("#event-love6-dropUP").val(event_love6_dropUp);
    $("#event-love6-pointUP").val(event_love6_pointUp);
    $("#event-love6-vocalUP").val(event_love6_vocalUp);
    $("#event-love6-godDateUP").val(event_love6_dateUp);
    $("#event-love6-candy").val(event_love6_candy);
    $("#event-love6-extra").val(event_love6_extra);
    event_love6_setDate = setDate;

    $("#event-love6-BPattack").hide();
    $("#event-love6-BPrecover").hide();


    if (event_love6_isBattle) {
        setDate();
    } else {
        $("#event-love6-main").load("event-love6-select.html");
    }

    function setDate(gotoGod = false) {
        if (!event_love6_isBattle) {
            event_love6_isBattle = true;
            event_love6_isTwice = false;
            if (gotoGod) {
                event_love6_rarity = "神";
                event_love6_lv = Math.floor(Math.random() * event_love6_godDate.length);
                event_love6_maxHp = event_love6_godDate[event_love6_lv][0];
            } else {
                event_love6_rarity = "★★★★★";
                event_love6_lv = Math.floor(Math.random() * event_love6_date.length);
                event_love6_maxHp = event_love6_date[event_love6_lv][0];
            }
            event_love6_nowHp = event_love6_maxHp;
        }
        setBPattack();
        $("#event-love6-main").load("event-love6-battle.html");
    }

    function setBPattack() {
        var s = vocal / 10 * (event_love6_vocalUp / 100 + 1.0) * (event_love6_isTwice ? 1.1 : 1);
        s = Math.round(s);
        $("#event-love6-BPattack-1-score").text(s);
        $("#event-love6-BPattack-3-score").text(s * 4);
        $("#event-love6-BPattack-extra-score").text(s * 10);

        $("#event-love6-BPattack-1").unbind("click").click(function(){
            if (bp >= 1) {
                bp--;
                reLoadStatus();
                battle(s * (Math.random() / 3 + 1));
            } else {
                setBPrecover(1);
            }
        });
        $("#event-love6-BPattack-3").unbind("click").click(function(){
            if (bp >= 3) {
                bp -= 3;
                reLoadStatus();
                battle(s * 4 * (Math.random() / 3 + 1));
            } else {
                setBPrecover(3 - bp);
            }
        });
        if (event_love6_extra == 0) {
            $("#event-love6-BPattack-extra").addClass("event-love6-gray");
        } else {
            $("#event-love6-BPattack-extra").removeClass("event-love6-gray");
            $("#event-love6-BPattack-extra").unbind("click").click(function(){
                if (event_love6_extra >= 1) {
                    event_love6_extra--;
                    $("#event-love6-extra").val(event_love6_extra);
                    battle(s * 10 * (Math.random() / 3 + 1));
                }
            });
        }
        $("#event-love6-BPattack").show();
    }
    function setBPrecover(rebp) {
        if (candyFull == 0) {
            $("#event-love6-BPrecover-full").addClass("event-love6-gray");
        } else {
            $("#event-love6-BPrecover-full").removeClass("event-love6-gray");
            $("#event-love6-BPrecover-full").unbind("click").click(function(){
                if (candyFull >= 1) {
                    candyFull--;
                    BPrecover(maxBp);
                }
            });
        }
        if (candyMini == 0) {
            $("#event-love6-BPrecover-mini").addClass("event-love6-gray");
        } else {
            $("#event-love6-BPrecover-mini").removeClass("event-love6-gray");
            $("#event-love6-BPrecover-mini").unbind("click").click(function(){
                if (candyMini >= 1) {
                    let addBp = Math.min(rebp, candyMini)
                    candyMini -= addBp;
                    BPrecover(addBp + bp);
                }
            });
        }
        if (event_love6_candy == 0) {
            $("#event-love6-BPrecover-event").addClass("event-love6-gray");
        } else {
            $("#event-love6-BPrecover-event").removeClass("event-love6-gray");
            $("#event-love6-BPrecover-event").unbind("click").click(function(){
                if (event_love6_candy >= 1) {
                    let addBp = Math.min(rebp, event_love6_candy);
                    event_love6_candy -= addBp;
                    $("#event-love6-candy").val(event_love6_candy);
                    BPrecover(addBp + bp);
                }
            });
        }

        $("#event-love6-BPrecover").show();
    }
    function battle(estHp) {
        estHp = Math.round(estHp);
        $("#event-love6-BPattack").hide();
        if (event_love6_nowHp == 0) return;
        event_love6_nowHp = Math.max(event_love6_nowHp - estHp, 0);
        if (event_love6_nowHp <= 0) {
            event_love6_isBattle = false;
        }
        $("#event-love6-battle-HPnow").stop(true, true).animate(
            {"width" : (event_love6_nowHp / event_love6_maxHp * 100) + "%"},
            {duration : 500, step : function(s){
                $("#event-love6-battle-HP span").text(Math.round(event_love6_maxHp * s / 100) + "/" + event_love6_maxHp);
            }, complete : function() {
                if (event_love6_isBattle) {
                    event_love6_isTwice = true;
                    setBPattack();
                } else {
                    if (event_love6_rarity == "神") {
                        event_love6_point += Math.round(event_love6_godDate[event_love6_lv][1] * (event_love6_pointUp / 100));
                    } else {
                        event_love6_point += Math.round(event_love6_date[event_love6_lv][1] * (event_love6_pointUp / 100));
                    }
                    if (event_love6_rarity != "神" && event_love6_godBase * event_love6_dateUp >= Math.random()) {
                        setDate(true);
                    } else {
                        $("#event-love6-main").load("event-love6-select.html");
                    }
                    $("#event-love6-point").val(event_love6_point);
                }
            }}
        );
    }
    function BPrecover(afterbp) {
        bp = Math.min(Math.max(afterbp, minBp), maxBp);
        reLoadStatus();
        $("#event-love6-BPrecover").hide();
    }

    function getInteger(id, def) {
        var n = parseInt($("#" + id).val());
        return (!isNaN(n) ? n : def);
    }
    function getFloat(id, def) {
        var n = parseFloat($("#" + id).val());
        return (!isNaN(n) ? n : def);
    }

    function saveParam() {
        event_love6_point = getInteger("event-love6-point", event_love6_minPoint);
        event_love6_dropUp = getFloat("event-love6-dropUP", event_love6_minDropUp);
        event_love6_pointUp = getInteger("event-love6-pointUP", event_love6_minPointUp);
        event_love6_vocalUp = getInteger("event-love6-vocalUP", event_love6_minVocalUp)
        event_love6_dateUp = getFloat("event-love6-godDateUP", event_love6_dateUp);
        event_love6_candy = getInteger("event-love6-candy", event_love6_candy);
        event_love6_extra = getInteger("event-love6-extra", event_love6_extra);

        event_love6_dropUp = Math.floor(event_love6_dropUp * 100) / 100;
        event_love6_dateUp = Math.floor(event_love6_dateUp * 100) / 100;

        event_love6_point = Math.max(event_love6_point, event_love6_minPoint);
        event_love6_dropUp = Math.max(Math.min(event_love6_dropUp, event_love6_maxDropUp), event_love6_minDropUp);
        event_love6_pointUp = Math.max(Math.min(event_love6_pointUp, event_love6_maxPointUp), event_love6_minPointUp);
        event_love6_vocalUp = Math.max(Math.min(event_love6_vocalUp, event_love6_maxVocalUp), event_love6_minVocalUp);
        event_love6_dateUp = Math.max(Math.min(event_love6_dateUp, event_love6_maxDateUp), event_love6_minDateUp);
        event_love6_candy = Math.max(Math.min(event_love6_candy, event_love6_maxCandy), event_love6_minCandy);
        event_love6_extra = Math.max(Math.min(event_love6_extra, event_love6_maxExtra), event_love6_minExtra);

        reLoadTrigger();
    }
});