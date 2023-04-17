const toggleButtons = document.querySelectorAll('.toggleBtn');
const answers = document.querySelectorAll('.acdAnswer');


toggleButtons.forEach((btn) => {

    btn.addEventListener('click', () => {
        
        if(btn == toggleButtons[0]){
            toggleButtons[0].firstElementChild.classList.toggle('hide');
            toggleButtons[0].lastElementChild.classList.toggle('hide');
            toggleButtons[1].firstElementChild.classList.remove('hide');
            toggleButtons[1].lastElementChild.classList.add('hide');
            toggleButtons[2].firstElementChild.classList.remove('hide');
            toggleButtons[2].lastElementChild.classList.add('hide');
            answers[0].classList.toggle('hide');
            answers[1].classList.add('hide');
            answers[2].classList.add('hide');
        }
        else if(btn == toggleButtons[1]){
            toggleButtons[1].firstElementChild.classList.toggle('hide');
            toggleButtons[1].lastElementChild.classList.toggle('hide');
            toggleButtons[2].firstElementChild.classList.remove('hide');
            toggleButtons[2].lastElementChild.classList.add('hide');
            toggleButtons[0].firstElementChild.classList.remove('hide');
            toggleButtons[0].lastElementChild.classList.add('hide');
            answers[1].classList.toggle('hide');
            answers[2].classList.add('hide');
            answers[0].classList.add('hide');
        } 
        else{
            toggleButtons[2].firstElementChild.classList.toggle('hide');
            toggleButtons[2].lastElementChild.classList.toggle('hide');
            toggleButtons[1].firstElementChild.classList.remove('hide');
            toggleButtons[1].lastElementChild.classList.add('hide');
            toggleButtons[0].firstElementChild.classList.remove('hide');
            toggleButtons[0].lastElementChild.classList.add('hide');
            answers[2].classList.toggle('hide');
            answers[0].classList.add('hide');
            answers[1].classList.add('hide');
        }
    })

})