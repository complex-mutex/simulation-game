$(function(){
    updateParams();
    $("#setting-save").unbind("click").click(SaveParam);

    function updateParams() {
        $("#setting-lv").val(lv);
        $("#setting-exp").val(exp);
        $("#setting-stamina").val(stamina);
        $("#setting-maxStamina").val(maxStamina);
        $("#setting-bp").val(bp);
        $("#setting-free").val(free);
        $("#setting-premium").val(premium);
        $("#setting-vocal").val(vocal);
        $("#setting-dance").val(dance);
        $("#setting-chargeHalf").val(chargeHalf);
        $("#setting-chargeFull").val(chargeFull);
        $("#setting-candyMini").val(candyMini);
        $("#setting-candyFull").val(candyFull);
    }
    function getInteger(id, def) {
        var n = parseInt($("#" + id).val());
        return (!isNaN(n) ? n : def);
    }
    function getFloat(id, def) {
        var n = parseFloat($("#" + id).val());
        return (!isNaN(n) ? n : def);
    }
    function SaveParam() {
        lv = getInteger("setting-lv", minLv);
        exp = getFloat("setting-exp", minExp);
        stamina = getInteger("setting-stamina", minStamina);
        maxStamina = getInteger("setting-maxStamina", minMaxStamina);
        bp = getInteger("setting-bp", minBp);
        free = getInteger("setting-free", minCoin);
        premium = getInteger("setting-premium", minCoin);
        vocal = getInteger("setting-vocal", minScore);
        dance = getInteger("setting-dance", minScore);
        chargeHalf = getInteger("setting-chargeHalf", minChargeHalf);
        chargeFull = getInteger("setting-chargeFull", minChargeFull);
        candyMini = getInteger("setting-candyMini", minCandyMini);
        candyFull = getInteger("setting-candyFull", minCandyFull);

        exp = Math.floor(exp * 10) / 10;

        lv = Math.min(Math.max(lv, minLv), maxLv);
        exp = Math.min(Math.max(exp, minExp), maxExp);
        maxStamina = Math.min(Math.max(maxStamina, minMaxStamina), maxMaxStamina);
        stamina = Math.min(Math.max(stamina, minStamina), maxStamina);
        bp = Math.min(Math.max(bp, minBp), maxBp);
        free = Math.min(Math.max(free, minCoin), maxCoin);
        premium = Math.min(Math.max(premium, minCoin), maxCoin);
        vocal = Math.min(Math.max(vocal, minScore), maxScore);
        dance = Math.min(Math.max(dance, minScore), maxScore);
        chargeHalf = Math.min(Math.max(chargeHalf, minChargeHalf), maxChargeHalf);
        chargeFull = Math.min(Math.max(chargeFull, minChargeFull), maxChargeFull);
        candyMini = Math.min(Math.max(candyMini, minCandyMini), maxCandyMini);
        candyFull = Math.min(Math.max(candyFull, minCandyFull), maxCandyFull);

        updateParams();
        reLoadStatus();
    }
});
