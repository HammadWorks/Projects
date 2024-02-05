const infoCards = document.querySelectorAll('.info_card');

infoCards.forEach((card,index) => {
    card.addEventListener("click", () => {
        let detail = card.nextElementSibling;
        if (detail.classList.contains('open')) {
            card.getElementsByTagName('img')[0].style.transform = 'rotate(0deg)'
            detail.classList.toggle('open');
        }
        else {
            card.getElementsByTagName('img')[0].style.transform = 'rotate(45deg)'
            detail.classList.toggle('open');
        }
        removeOpen(index);
    }
    )
}
)

function removeOpen(index1) {
    infoCards.forEach((card2,index2) => {
        if(index1 != index2) {
            card2.nextElementSibling.classList.remove('open');
            card2.getElementsByTagName('img')[0].style.transform = 'rotate(0deg)'
        }
})
}