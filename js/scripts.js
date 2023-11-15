WebFont.load({
    google: {
        families: ["Cormorant Garamond:300,300italic,regular,italic,500,500italic,600", "Roboto:300,300italic,regular,italic,500,500italic,700,700italic,900"]
    }
});


!function (o, c) {
    var n = c.documentElement
        , t = " w-mod-";
    n.className += t + "js",
        ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
}(window, document);