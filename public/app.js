



document.addEventListener('DOMContentLoaded', function () {
    const getProducts = document.getElementById('obtener-productos');
    const tableBody = document.getElementById('table-products-body');
    const modalUpdate = document.getElementById('modal');
    const closeModal = document.getElementById('delete');
    const cancelModal = document.getElementById('cancel');

    const modalTitle = document.getElementById('modal-title');
    const updateTitle = document.getElementById('update-title');
    const updatePrice = document.getElementById('update-price');

    const saveUpdate = document.getElementById('save-update');

    const updateDescription = document.getElementById('update-description');
    const updateFile = document.getElementById('update-file');


    /**
     * Abre un modal para actualizar productos desde la table
     * @param {Object} producto - El objeto del produto al detalle
     */
    function Modal(producto) {
        // Agregar la clase 'is-active' al modal de framwork bulma.io
        modalUpdate.classList.add('is-active');
        //Configura el titulo del modal con el titulo del producto
        modalTitle.textContent = `Actualizar producto: ${producto.title}`
        //Actualizar nombre del producto
        updateTitle.value = producto.title
        //Actualizar precio
        updatePrice.value = producto.price
        //actualizar description
        updateDescription.value = producto.description,


            saveUpdate.addEventListener('click', onSaveUpdate)

        function onSaveUpdate() {
            const formData = new FormData();

            formData.append('title', updateTitle.value);
            formData.append('price', updatePrice.value);
            formData.append('description', updateDescription.value);
            formData.append('fileUrl', updateFile.files[0]);



            fetch(`http://localhost:3000/app/v1/products/update/${producto._id}`, {
                method: 'PATCH',

                body: formData

            }).then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo actualizar el producto')
                }
                return response.json()

            }).then(responseData => {
                console.log('Producto actualizado', responseData)
                return new Promise((resolve, reject) => {
                    resolve(); // Resuelve la promesa
                });
            }).catch(e => {
                console.log('Error al actualizar Productos', e)
            })

            

        }
        cancelModal.addEventListener('click', () => {

            modalUpdate.classList.remove('is-active')
            saveUpdate.removeEventListener('click', onSaveUpdate);
            httpGetProducts('http://localhost:3000/app/v1/products')
            
    
        })
    
    
        closeModal.addEventListener('click', () => {
            modalUpdate.classList.remove('is-active')
            saveUpdate.removeEventListener('click', onSaveUpdate);
            httpGetProducts('http://localhost:3000/app/v1/products')
    
        })
        


    }


    function httpGetProducts (url){
        fetch(url)
            .then(response => response.json())
            .then(productos => {

                while (tableBody.firstChild) {
                    tableBody.removeChild(tableBody.firstChild)
                }
                const products = productos.body;

                products.forEach((producto, index) => {

                    /* console.log(producto.fileUrl) */

                    const row = document.createElement('tr');

                    const itemCell = document.createElement('td');
                    itemCell.textContent = index + 1;

                    const nameCell = document.createElement('td');
                    nameCell.textContent = producto.title;

                    const priceCell = document.createElement('td');
                    priceCell.textContent = producto.price;

                    const descriptionCell = document.createElement('td');
                    descriptionCell.textContent = producto.description;


                    const ImageCell = document.createElement('td')
                    const verImage = document.createElement('a');
                    verImage.href = `./show.html?imagenUrl=${encodeURIComponent(producto.fileUrl)}&title=${encodeURIComponent(producto.title)}`;
                    verImage.textContent = 'Ver Imagen'

                    ImageCell.appendChild(verImage);



                    row.appendChild(itemCell);
                    row.appendChild(nameCell);
                    row.appendChild(priceCell);
                    row.appendChild(descriptionCell);
                    row.appendChild(ImageCell);


                    row.addEventListener('click', function () {
                        Modal(producto)
                    })

                    tableBody.appendChild(row);
                })
            }).catch(e => {
                console.log("Error al obtener la lista de productos: ", e)
            })

    }


    getProducts.addEventListener('click', ()=>{
        httpGetProducts('http://localhost:3000/app/v1/products')
    })






})