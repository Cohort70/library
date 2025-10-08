function createButtonDel(callback) {
    const btnDel = document.createElement('button');
    btnDel.append("X");
    btnDel.style.color = "red";
    btnDel.style.marginLeft = "5px";
    btnDel.addEventListener("click", e => {
        e.target.parentElement.remove();
        if (typeof callback === "function") {
            callback();
        }
    });
    return btnDel;
}

function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    element.append(content);
    return element;
}