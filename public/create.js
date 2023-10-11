/* const ENV = require ('../config/index') */


document.addEventListener('DOMContentLoaded', function () {
    const addProduct = document.getElementById('form-create')
    const titleInput = document.getElementById('title');
    const priceInput = document.getElementById('price');
    const descriptionInput = document.getElementById('description');
    const fileInput = document.getElementById('file');
    function AlertSucces(text) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${text}`,
            showConfirmButton: false,
            timer: 1500
        })
    }
    function AlertFail(text) {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    }
    addProduct.addEventListener('submit', function (event) {

        event.preventDefault();
        

        fetch('http://localhost:3000/app/v1/products/create', {
            method: 'POST',
            body: new FormData(addProduct),
        })
            .then(response => {
                // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito
                if (response.ok) {
                    AlertSucces('roducto creado con éxito')
                    titleInput.value = '';
                    priceInput.value = '';
                    descriptionInput.value = '';
                    fileInput.value = '';
                } else {
                    AlertFail('Error al crear el producto')
                }
            })
            .catch(error => {
                console.error('Error al enviar el formulario: ', error);
            });
    })







})