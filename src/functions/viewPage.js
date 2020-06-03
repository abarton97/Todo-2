export function show(elementID) {
    var ele = document.getElementById(elementID);
    if (!ele) {
        return;
    }
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}