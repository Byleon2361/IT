
window.onload = function () { setClock(); setDate(); }
function setClock() {
    var clock = document.getElementById('clock');
    clock.innerHTML = '';
    var text = "";

    var openImage = "<IMG SRC=\"" + getPath(location.href) + "src\/dg";
    var closeImage = ".gif\" HEIGHT=21 WIDTH=16>";

    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    now = null;

    var ampm = ""
    if (hour >= 12) {
        hour -= 12;
        ampm = "pm";
    } else
        ampm = "am";
    hour = (hour == 0) ? 12 : hour;

    if (minute < 10)
        minute = "0" + minute;
    if (second < 10)
        second = "0" + second;
    minute += "";
    second += "";
    hour += "";

    for (var i = 0; i < hour.length; ++i) {
        text += openImage + hour.charAt(i) + closeImage;
    }

    text += openImage + "c.gif\" HEIGHT=21 WIDTH=9>";//:
    for (var i = 0; i < minute.length; ++i) {
        text += openImage + minute.charAt(i) + closeImage;
    }

    text += openImage + "c.gif\" HEIGHT=21 WIDTH=9>";//:
    for (var i = 0; i < second.length; ++i) {
        text += openImage + second.charAt(i) + closeImage;
    }
    text += openImage + ampm + closeImage;

    if (hour == 12 && ampm == "am") //Если время 00.00, то поменять дату
    {
        setDate();
    }
    clock.innerHTML = text;

    //var timeout = 60 - second;
    setTimeout("setClock()", 1000);
}
function setDate() {
    var dateElem = document.getElementById('date');
    dateElem.innerHTML = '';

    var text = "";
    var openImage = "<IMG SRC=\"" + getPath(location.href) + "src\/dg";
    var closeImage = ".gif\" HEIGHT=21 WIDTH=16>";
    var now = new Date();
    var date = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();
    now = null;

    month++;

    date += "";
    month += "";
    year += "";

    for (var i = 0; i < date.length; ++i) {
        text += openImage + date.charAt(i) + closeImage;
    }
    text += openImage + "p.gif\" HEIGHT=21 WIDTH=9>";
    for (var i = 0; i < month.length; ++i) {
        text += openImage + month.charAt(i) + closeImage;
    }
    text += openImage + "p.gif\" HEIGHT=21 WIDTH=9>";

    for (var i = 0; i < year.length; ++i) {
        text += openImage + year.charAt(i) + closeImage;
    }
    dateElem.innerHTML = text;
}
function getPath(url) {
    lastSlash = url.lastIndexOf("/");

    return url.substring(0, lastSlash + 1);
}