const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit',(e) => {
        e.preventDefault();
        const formTextInput = document.querySelector('input#searchByID');
        console.log(formTextInput.value);
        fetch(`http://localhost:3000/movies/${formTextInput.value}`)
        .then(res=> res.json())
        .then(json => {
            const title = document.querySelector('section#movieDetails h4')
            const summary = document.querySelector('section#movieDetails p')
            title.textContent = json.title;
            summary.textContent = json.summary;
        }) 
    })
  
}

document.addEventListener('DOMContentLoaded', init);