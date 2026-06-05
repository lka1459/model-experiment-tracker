window.onload=function(){

    const form = document.querySelector('#experiment-form') as HTMLFormElement
    const projectName = document.querySelector('#pname') as HTMLInputElement
    const modelName = document.querySelector('#mname') as HTMLInputElement
    const accuracy = document.querySelector('#accr') as HTMLInputElement
    const precision = document.querySelector('#prec') as HTMLInputElement
    const recall = document.querySelector('#recall') as HTMLInputElement
    const f1Score = document.querySelector('#f1') as HTMLInputElement
    const notes = document.querySelector('#notes') as HTMLTextAreaElement

    form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        projectName.value,
        modelName.value,
        accuracy.value,
        precision.value,
        recall.value,
        f1Score.value,
        notes.value
    )
})
}
