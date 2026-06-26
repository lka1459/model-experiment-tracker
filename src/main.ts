window.onload=function(){

    console.log("hi")
    
    const form = document.querySelector('#popupOverlay') as HTMLFormElement
    const projectName = document.querySelector('#pname') as HTMLInputElement
    const modelName = document.querySelector('#mname') as HTMLInputElement
    const accuracy = document.querySelector('#accr') as HTMLInputElement
    const precision = document.querySelector('#prec') as HTMLInputElement
    const recall = document.querySelector('#recall') as HTMLInputElement
    const f1Score = document.querySelector('#f1') as HTMLInputElement
    const notes = document.querySelector('#notes') as HTMLTextAreaElement
    const form_close_btn = document.querySelector('.btn-close-form') as HTMLButtonElement
    const submit_btn = document.querySelector("#submit_btn") as HTMLButtonElement

    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('#popupOverlay input')

    form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    inputs.forEach(input => console.log(input.value))
    const notesValue = notes.value 
    console.log(notesValue)
})

function togglePopup() {
        form.classList.toggle('show');
    }
(window as any).togglePopup = togglePopup








}
