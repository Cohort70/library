function createButtonDel() {
    const btnDel = document.createElement('button');
    btnDel.append("X");
    // btnDel.classList.add("del");
    btnDel.style.color = "red";
    btnDel.style.marginLeft = "5px";
    btnDel.addEventListener("click", e => e.target.parentElement.remove());
    return btnDel;
}