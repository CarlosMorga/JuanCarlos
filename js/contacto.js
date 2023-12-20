const iconX = document.getElementById('cerrar')
const formModal = document.getElementById('modal-acive')
const validar = document.getElementById('btn-validar')
const form = document.getElementById('contacto')

formModal.addEventListener('click', () =>{
    form.classList.toggle('modal')
    console.log("Esta funcionando el botón")
})