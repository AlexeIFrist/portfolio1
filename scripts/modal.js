var openedMK = document.getElementById("openedMK");
openedMK.addEventListener("click", function(event) {
  event.preventDefault();
}, false);

var opened = document.getElementById("opened");
opened.addEventListener("click", function(event) {
  event.preventDefault();
}, false);

function openedModalMK() {
    document.getElementById("modalMK").classList.add("modal-opened");
}

function closedModalMK() {
    document.getElementById("modalMK").classList.remove("modal-opened");
}

function openedModal() {
    document.getElementById("modal").classList.add("modal-opened");
}

function closedModal() {
    document.getElementById("modal").classList.remove("modal-opened");
}