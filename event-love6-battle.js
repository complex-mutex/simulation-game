$(function(){
    $("#event-love6-battle-HP span").text(event_love6_nowHp + "/" + event_love6_maxHp);
    $("#event-love6-battle-HPbar").attr("max", event_love6_maxHp).attr("value", event_love6_nowHp);
    $("#event-love6-battle-info-rarity").text(event_love6_rarity);
    $("#event-love6-battle-info-lv").text("Lv." + (event_love6_lv + 1));
})
