fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        const productos = data.productos;

        const productosContainer = document.getElementById('productosContainer');
        productos.forEach(producto => {
            const accesoriosElement = document.createElement('p');
            accesoriosElement.textContent = `Nombre: ${producto.nombre}, Precio: $${producto.precio}`;
            productosContainer.appendChild(accesoriosElement);
        });
    })
    .catch(Error => {
        console.error('Ha ocurrido un error');
    });
