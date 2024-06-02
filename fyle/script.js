// Get the modal
var modal = document.getElementById("contactModal");

// Get the button that opens the modal
var btn = document.getElementById("contactUsBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const popup = document.getElementById('companyGrowthPopup');
const openPopupBtn = document.getElementById('open-popup');
const closePopup = document.querySelector('.close-popup');

openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == popup) {
        popup.style.display = 'none';
    }
});