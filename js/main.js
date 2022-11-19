// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "Mueble TV-01",
        imagen: "./img/abrigos/01.jpg",
        categoria: {
            nombre: "Muebles para TV",
            id: "abrigos"
        },
        precio: 999
    },
    {
        id: "abrigo-02",
        titulo: "Mueble TV-02",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Muebles para TV",
            id: "abrigos"
        },
        precio: 1029
    },
    {
        id: "abrigo-03",
        titulo: "Mueble TV-03",
        imagen: "./img/abrigos/03.jpg",
        categoria: {
            nombre: "Muebles para TV",
            id: "abrigos"
        },
        precio: 1499
    },
    {
        id: "abrigo-04",
        titulo: "Mueble TV-04",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Muebles para TV",
            id: "abrigos"
        },
        precio: 899
    },
    {
        id: "abrigo-05",
        titulo: "Mueble TV-05",
        imagen: "./img/abrigos/05.jpg",
        categoria: {
            nombre: "Muebles para TV",
            id: "abrigos"
        },
        precio: 499
    },
    // Camisetas
    {
        id: "camiseta-01",
        titulo: "Escritorio 01",
        imagen: "./img/camisetas/01.jpg",
        categoria: {
            nombre: "Escritorios Modernos",
            id: "camisetas"
        },
        precio: 699
    },
    {
        id: "camiseta-02",
        titulo: "Escritorio 02",
        imagen: "./img/camisetas/02.jpg",
        categoria: {
            nombre: "Escritorios Modernos",
            id: "camisetas"
        },
        precio: 859
    },
    {
        id: "camiseta-03",
        titulo: "Escritorio 03",
        imagen: "./img/camisetas/03.jpg",
        categoria: {
            nombre: "Escritorios Modernos",
            id: "camisetas"
        },
        precio: 796
    },
    {
        id: "camiseta-04",
        titulo: "Escritorio 04",
        imagen: "./img/camisetas/04.jpg",
        categoria: {
            nombre: "Escritorios Modernos",
            id: "camisetas"
        },
        precio: 989
    },
    {
        id: "camiseta-05",
        titulo: "Escritorio 05",
        imagen: "./img/camisetas/05.jpg",
        categoria: {
            nombre: "Escritorios Modernos",
            id: "camisetas"
        },
        precio: 589
    },
    {
        id: "camiseta-06",
        titulo: "Escritorio 06",
        imagen: "./img/camisetas/06.jpg",
        categoria: {
            nombre: "Escritorios Modernos",
            id: "camisetas"
        },
        precio: 379
    },
    {
        id: "camiseta-07",
        titulo: "Escritorio 07",
        imagen: "./img/camisetas/07.jpg",
        categoria: {
            nombre: "Escritorios Modernos",
            id: "camisetas"
        },
        precio: 559
    },
    {
        id: "camiseta-08",
        titulo: "Escritorio 08",
        imagen: "./img/camisetas/08.jpg",
        categoria: {
            nombre: "Escritorios Modernos",
            id: "camisetas"
        },
        precio: 799
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Terraza 01",
        imagen: "./img/pantalones/01.jpg",
        categoria: {
            nombre: "Terrazas",
            id: "pantalones"
        },
        precio: 1299
    },
    {
        id: "pantalon-02",
        titulo: "Terraza 02",
        imagen: "./img/pantalones/02.jpg",
        categoria: {
            nombre: "Terrazas",
            id: "pantalones"
        },
        precio: 599
    },
    {
        id: "pantalon-03",
        titulo: "Terraza 03",
        imagen: "./img/pantalones/03.jpg",
        categoria: {
            nombre: "Terrazas",
            id: "pantalones"
        },
        precio: 829
    },
    {
        id: "pantalon-04",
        titulo: "Terraza 04",
        imagen: "./img/pantalones/04.jpg",
        categoria: {
            nombre: "Terrazas",
            id: "pantalones"
        },
        precio: 699
    },
    {
        id: "pantalon-05",
        titulo: "Terraza 05",
        imagen: "./img/pantalones/05.jpg",
        categoria: {
            nombre: "Terrazas",
            id: "pantalones"
        },
        precio: 1989
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">S/${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}