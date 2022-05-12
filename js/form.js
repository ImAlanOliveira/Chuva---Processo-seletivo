function userQuestion() {
    let topic = document.getElementById('topicDiscussion')

    let userQuestion = document.getElementById('userQuestion')


    userQuestion.classList.add('active');
    topic.classList.add('desativado');
}


function messageUser() {
    let userQuestion = document.getElementById('userQuestion')

    let message = document.getElementById('message')


    userQuestion.classList.remove('active');
    userQuestion.classList.add('disabled');

    let subjectQuestion = document.getElementById('subjectQuestion')
    let textQuestion = document.getElementById('textQuestion')


    let topic = document.getElementById('topic').value
    let userContent = document.getElementById('userContent').value

    subjectQuestion.innerHTML = topic;
    textQuestion.innerHTML = userContent;


    message.style.display = 'flex';
}


function newQuestion() {
    let message = document.getElementById('message')

    let userQuestion = document.getElementById('userQuestion')

    userQuestion.classList.remove('disabled');
    userQuestion.classList.add('active');
    message.style.display = 'none';
}
