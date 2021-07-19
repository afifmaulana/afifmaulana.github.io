window.addEventListener('load', function() {
    var isDark = localStorage.getItem("theme")
    if (isDark == 'dark') {
        document.body.setAttribute("data-theme", "dark")
        $('#dark-switch').attr("checked", true)
        $('#icon-light').attr("style", "color : ")
        $('#icon-dark').attr("style", "color : white")
    }else{
        document.body.removeAttribute("data-theme")
        $('#dark-switch').attr("checked", false)
        $('#icon-light').attr("style", "color : #0d1117")
        $('#icon-dark').attr("style", "color : ")
    }
});

$(document).on('click', '#dark-switch', function(){
    var isCheck = $(this).is(':checked');
    initTheme(isCheck)
})

function initTheme(isCheck) {
    if (isCheck) {
        localStorage.setItem("theme", "dark")
        document.body.setAttribute("data-theme", "dark")
        $('#icon-light').attr("style", "color : ")
        $('#icon-dark').attr("style", "color : white")
    }else{
        localStorage.removeItem("theme")
        document.body.removeAttribute("data-theme")
        $('#icon-light').attr("style", "color : #0d1117")
        $('#icon-dark').attr("style", "color : ")
    }
}