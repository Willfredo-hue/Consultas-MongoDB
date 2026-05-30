db.Clientes.insertMany([
  {
    _id: 1,
    nombre: "Ana Belén Cardona",
    correo: "cliente1@gmail.com",
    telefono: "72599396",

    direcciones: [
      "Paseo de Graciela Anglada 630 Piso 1, Palencia, 97696",
      "Urbanización Perla Espejo 24 Apt. 50, Asturias, 98844",
      "Callejón Cipriano Simó 7, Zamora, 38515"
    ],

    productosFavoritos: [
      "USB",
      "Silla Gamer",
      "Teclado",
      "Disco SSD",
      "Webcam",
      "Camara",
      "Fuente Poder",
      "Impresora",
      "Tarjeta Grafica",
      "Microfono"
    ],

    metodosPago: [
      "Visa",
      "MasterCard",
      "PayPal",
      "Bitcoin",
      "Apple Pay"
    ],

    compras: [
      {
        producto: "Monitor",
        fecha: "2026-03-26",
        monto: 1449.88
      },
      {
        producto: "Webcam",
        fecha: "2025-10-07",
        monto: 1428.04
      }
    
    ],

    historialNavegacion: [
      {
        pagina: "Monitor",
        fecha: "2025-12-02"
      },
      {
        pagina: "Procesador",
        fecha: "2026-04-28"
      }
    
  }
]);


//Buscar un cliente con un producto favorito
db.Clientes.find({
  productos_favoritos: "Laptop"
})

// Buscar clientes con compras mayores a $300
db.Clientes.find({
  "compras.monto": { $gt: 300 }
})

//Buscar clientes con 10 o mas compras 
db.Clientes.find({
  $expr: {
    $gt: [
      { $size: "$compras" },
      10
    ]
  }
}).count()

//Agregar un nuevo producto favororito
db.Clientes.updateOne(
  { cliente_id: 1 },
  {
    $addToSet: {
      productos_favoritos: "Airpods"
    }
  }
)

//Eliminar un producto favorito
db.Clientes.updateOne(
  { cliente_id: 1 },
  {
    $pull: {
      productos_favoritos: "Airpods"
    }
  }
)

//Evitar duplicados, con %AddToSet se evita agregar productos con el mismo nombre
db.Clientes.updateOne(
  { cliente_id: 2 },
  {
    $addToSet: { 
      productos_favoritos: "Smartwatch"
    }
  }
)