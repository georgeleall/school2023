document.addEventListener("DOMContentLoaded", function () {
    let help = document.getElementById("help");
    let nojs = document.getElementById("nojs");

    help.hidden = true;
    nojs.hidden = true;

    function showHelp(e) {
        if (e.key === 'h' || e.key === '?') {
            document.body.classList.toggle("showHelp");
        }
    }

    document.addEventListener("keydown", showHelp);
});
