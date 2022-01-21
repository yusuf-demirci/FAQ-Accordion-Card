function rotateArrow(sectionNumber){
    let arrows = document.querySelectorAll(".arrow")

    arrows.forEach(arrow => {
        if (arrow.accessKey === sectionNumber) arrow.classList.toggle("rotate")
        else arrow.classList.remove("rotate")
    })
}

function toggleAnswers(sectionNumber){
    let paragraphs = document.querySelectorAll("p")

    paragraphs.forEach(element => {
        if (element.accessKey === sectionNumber) element.classList.toggle("display");
        else element.classList.remove("display");
    })
}

function styleQuestions(sectionNumber){
    let questions = document.querySelectorAll(".question");

    questions.forEach(question => {
        if (question.accessKey === sectionNumber) question.classList.toggle("bold");
        else question.classList.remove("bold");
    })
}

$(".question").click(function(e){
    let sectionNumber = e.currentTarget.accessKey;
    rotateArrow(sectionNumber);
    toggleAnswers(sectionNumber);
    styleQuestions(sectionNumber);
})