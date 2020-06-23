export function storedList() {
    let list = document.querySelector(".taskList")
    let list1 = document.querySelector(".taskList1")
    let storedValues = window.localStorage.todayItems;
    let storedValues1 = window.localStorage.upcomingItems;
    if (storedValues = 'undefined') {
        console.log("foo")
    } else {
        list.innerHTML = storedValues;
    }
    if (storedValues1 = 'undefined') {
        console.log("woo")
    } else {
        list1.innerHTML = storedValues1;
    }
}

export function removeItems() {
    let close = document.getElementsByClassName("remove");
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
            var div = this.parentElement;
            div.parentNode.removeChild(div);
            store();
        });
    }
}

function store() {
    let list = document.querySelector(".taskList")
    window.localStorage.todayItems = list.innerHTML;

    let list1 = document.querySelector(".taskList1")
    window.localStorage.upcomingItems = list1.innerHTML;
}