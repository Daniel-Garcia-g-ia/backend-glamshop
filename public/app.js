


document.addEventListener('DOMContentLoaded', function () {
    const getProducts = document.getElementById('obtener-productos');
    const tableBody = document.getElementById('table-products-body');
    const modalUpdate= document.getElementById('modal');
    const closeModal = document.getElementById('delete');
    const modalTitle = document.getElementById('modal-title');
    const updateTitle = document.getElementById('update-title')
    const updatePrice = document.getElementById('update-price')
    const updateDescription= document.getElementById('update-description')

/**
 * Abre un modal para actualizar productos desde la table
 * @param {Object} producto - El objeto del produto al detalle
 */
    function Modal (producto){
        // Agregar la clase 'is-active' al modal de framwork bulma.io
        modalUpdate.classList.add('is-active');
        //Configura el titulo del modal con el titulo del producto
        modalTitle.textContent=`Actualizar producto: ${producto.title}`
        //Actualizar nombre del producto
        updateTitle.value=producto.title
        //Actualizar precio
        updatePrice.value=producto.price
        //actualizar description
        updateDescription.value=producto.description    

        
    }


    getProducts.addEventListener('click', function () {
        console.log('click')
        fetch('http://localhost:3000/app/v1/products')
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


                    row.addEventListener('click', function(){
                        Modal(producto)
                    })

                    tableBody.appendChild(row);
                })
            }).catch(e => {
                console.log("Error al obtener la lista de productos: ", e)
            })
    })


    closeModal.addEventListener('click', ()=>{       

        modalUpdate.classList.remove('is-active')
        
    })




})