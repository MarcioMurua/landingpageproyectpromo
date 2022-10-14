(function(){
    const titleQuestions = [...document.querySelectorAll('.question__slider--all')];
    console.log(titleQuestions);
    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement

            addPadding.classList.toggle('question')

            question.children[0].classList.toggle('questions__img--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.getElementsByClassName.height = `${height}px`;
        })
    })

})();