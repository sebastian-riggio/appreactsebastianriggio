/* const productos = [
  {
    id: 1,
    name: 'Producto 1',
    precio: 100,
    descripcion: 'Descripcion del producto 1',
    image: 'https://picsum.photos/200/300?image=1',
    stock: 10,
  },
  {
    id: 2,
    name: 'Producto 2',
    precio: 200,
    descripcion: 'Descripcion del producto 2',
    image: 'https://picsum.photos/200/300?image=2',
    stock: 5,
  },
  {
    id: 3,
    name: 'Producto 3',
    precio: 300,
    descripcion: 'Descripcion del producto 3',
    image: 'https://picsum.photos/200/300?image=3',
    stock: 3,
  },
] */

const productos = [
  {
    id: 1,
    name: 'cookie choco',
    image: '/imagenes/cook1.jpg',
    precio: 2,
    category: 'cookies',
    stock: '100',
  },
  {
    id: 2,
    name: 'cookie limon',
    image: '../imagenes/cook2.jpg',
    precio: 2,
    category: 'cookies',
    stock: '100',
  },
  {
    id: 3,
    name: 'cookie chip',
    image: '../imagenes/cook3.jpg',
    precio: 3,
    category: 'cookies',
    stock: '100',
  },
  {
    id: 4,
    name: 'alfa cookie',
    image: '../imagenes/alfa1.jpg',
    precio: 4,
    category: 'alfajor',
    stock: '100',
  },
  {
    id: 5,
    name: 'alfa nuez',
    image: '../imagenes/alfa2.jpg',
    precio: 4.5,
    category: 'alfajor',
    stock: '100',
  },
  {
    id: 6,
    name: 'alfa brownie',
    image: '../imagenes/alfa3.jpg',
    precio: 5,
    category: 'alfajor',
    stock: '100',
  },
  {
    id: 7,
    name: 'mini lemon',
    image: '../imagenes/cake1.jpg',
    precio: 6,
    category: 'cake',
    stock: '100',
  },
  {
    id: 8,
    name: 'mini frutos',
    image: '../imagenes/cake2.jpg',
    precio: 5,
    category: 'cake',
    stock: '100',
  },
  {
    id: 9,
    name: 'mini volcan',
    image: '../imagenes/cake3.jpg',
    precio: 7,
    category: 'cake',
    stock: '100',
  },
]

const producto = {
  id: 1,
  name: 'Remera',
  price: 200,
  stock: 4,

  img:
    'https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera3_vc9mqa.jpg',
  category: 'remeras',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
}

export const traerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
    }, 1000)
  })
}

export const traerProducto = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(producto)
    }, 1000)
  })
}

export default productos
