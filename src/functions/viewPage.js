export function show(elementID) {
    let ele = document.getElementById(elementID);
    if (!ele) {
        return;
    }
    let pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}