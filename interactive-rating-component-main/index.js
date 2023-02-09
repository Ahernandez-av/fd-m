const rating_buttons = Array.from(document.querySelectorAll('.rating'));
const submit_button = document.querySelector('.submit');
const rating_state = document.querySelector('.rating-state');
const thanks_state = document.querySelector('.thanks-state');
const rating_field = document.querySelector('.selected-rating');

submit_button.style.opacity = 0.5;

rating_buttons.forEach(button => button.addEventListener('click', addRating, false));
submit_button.addEventListener('click', submitRating, false);

function addRating() {
    if (submit_button.style.opacity == 0.5) {
        submit_button.style.opacity = 1;
    };
    if (this.classList.contains("active")) {
        return
    } else {
        let rating = this.innerHTML;
        this.classList.toggle('active')
        selectRating(rating);
        rating_field.innerHTML = rating;
    };
}

function submitRating() {
    rating_state.classList.add('fadeout');
    rating_state.classList.replace('show','hide');

    thanks_state.classList.replace('hide', 'show');
    thanks_state.classList.add('fadein');

    setTimeout(() => {backToRating()}, '4000');
}

function selectRating(num) {
    rating_buttons.forEach(button => {
        if(button.innerHTML != num) {
            button.classList.remove('active');
        }
    })
}

function backToRating() {
    rating_buttons.forEach(button => {
        button.classList.remove('active');
    })

    submit_button.style.opacity = 0.5;

    rating_state.classList.replace('hide', 'show');
    rating_state.classList.replace('fadeout', 'fadein');

    thanks_state.classList.replace('fadein', 'fadeout');
    thanks_state.classList.replace('show', 'hide');

}