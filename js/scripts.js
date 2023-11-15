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


function showImage(data) {
    const modal = document.querySelector('.modal');
    modal.classList.add('open');
    document.querySelector('.modal-img').src = "assets/" + data + ".jpeg";
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('open');
}

function closeModalBackground(e) {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
}