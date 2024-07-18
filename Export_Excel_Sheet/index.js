
const scriptURL = 'https://script.google.com/macros/s/AKfycby-dhGLSoXooGcYtjC73_s2BeeMZMUerHc33hgYESvvbhIERXarHEvv3zF0-Qy92k_Fig/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
