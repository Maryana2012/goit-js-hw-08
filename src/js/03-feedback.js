import throttle from 'lodash.throttle';
const form = document.querySelector('form');


form.addEventListener('input', throttle(handleMakeInputs, 500));
form.addEventListener('submit', handleSubmit);
makeFormLoad();

function handleMakeInputs(){
    const objectForSave = {
        email: form.elements.email.value,
        message: form.elements.message.value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(objectForSave));
}


function handleSubmit(e) {
    e.preventDefault();
    const savedData = localStorage.getItem("feedback-form-state");
    const savedDataParsed = JSON.parse(savedData);

    console.log('email:', savedDataParsed.email);
    console.log('message:', savedDataParsed.message);

    e.currentTarget.reset();
    localStorage.clear();
}


function makeFormLoad() {
    const savedData = localStorage.getItem("feedback-form-state");

    if (savedData) {
        const savedDataParsed = JSON.parse(savedData);

        form.elements.email.value = savedDataParsed.email;
        form.elements.message.value = savedDataParsed.message;
    }    
}