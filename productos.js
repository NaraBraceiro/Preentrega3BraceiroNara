const productosList = [
    {
        id: 1,
        imagen: "../img/producto1.png",
        nombre: "MASQUITENSE THICK",
        descripcion:"Mascarilla para un tratamiento intenso diseñado para el cabello grueso y seco. Su alta concentración de ingredientes activos penetra en la fibra capilar gruesa para brindar nutrición duradera. Facilita el secado.",
        categoria: "mascarilla",
        precio: 20250,
    },
    {
        id: 2,
        imagen: "../img/Masque-Densite-Densifique-200ml-01-Kerastase.png",
        nombre: "MASQUE DENSITÉ",
        descripcion:"Mascarilla diseñada especificamente para cabellos un poco o muy adelgazados. Una fórmula que texturiza, aporta cuerpo y resiliencia para conseguir un cabello más grueso de la raíz a las puntas. Brinda termo-proteccion.",
        categoria: "mascarilla",
        precio: 21815,
    },
    {
        id: 3,
        imagen: "../img/Masque-Curl-Ideal-Discipline-200ml-01-Kerastase.png",
        nombre: "MASKÉRATINE",
        descripcion:"Mascarilla para el cabello grueso y rebelde que necesita suavidad y control del frizz. El cabello queda suave y delicado con una fluidez ligera. Se obtiene mejor manejabilidad y se agiliza el secado.",
        categoria: "mascarilla",
        precio: 29590,
    },
    {
        id: 4,
        imagen: "../img/ELIXIR-ULTIME-MASQUE-VISUAL1.png",
        nombre: "MASQUE ELIXIR ULTIME",
        descripcion:"Máscara para darle brillo al cabello opaco. Restaura las hebras para lograr un brillo sedoso y suave. El cabello opaco se nutre, quedando suave y visiblemente más brillante. Posee vitaminas C, D y Omega 9.",
        categoria: "mascarilla",
        precio: 22450,
    },
    {
        id: 5,
        imagen: "../img/Bain-Cicaextreme-Shampoo-In-Cream-250ml-01-Kerastase-v2.jpg",
        nombre: "LE BAIN CICAEXTREME",
        descripcion:"Shampoo con ácido hialurónico, proporciona una experiencia de lavado perfecta para el cabello rubio decolorado. De textura ultra suave, rica y cremosa, que lava sin fricción aportando una hidratación intensa.",
        categoria: "shampoo",
        precio: 18250,
    },
    {
        id: 6,
        imagen: "../img/Blond-Absolu-Cicaflash.png",
        nombre: "CICAFLASH",
        descripcion:"Gel cremoso y ligero,ideal para todo tipo de rubios. Restaura el cabello sensibilizado, nutriendo la fibra. La combinación de ácido Hialurónico y flor de Edelweiss suaviza y fortalece el cabello y le brida nutrición profunda.",
        categoria: "gel cremoso",
        precio: 25250,
    },
    {
        id: 7,
        imagen: "../img/Blond-Absolu-Bain-Lumiere.png",
        nombre: "BAIN LUMIERE",
        descripcion:"Shampoo contiene infusion de ácido hialurónico ideal para el cabello aclarado, decolorado o gris.limpia cuidadosamente e hidrata desde la raíz hasta las puntas dejándolo suave y con una sensación ligera y luminosa.",
        categoria: "shampoo",
        precio: 18750,
    },
    {
        id: 8,
        imagen: "../img/Blond-Absolu-Cicaplasme.png",
        nombre: "CICAPLASME",
        descripcion:"Crema de tonos lavanda que fortifica el cabello rubio sensibilizado, decolorado o gris. Enriquecida con ácido Hialuronico y flor de Edelweiss, sella las puntas, suaviza la fibra del cabello y controla el frizz. Contiene filtros UV.",
        categoria: "crema",
        precio: 28650,
    },

];



const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedor = document.querySelector("#contenedorProductos");

productosList.forEach(producto => {
    const section = document.createElement("section");
    section.classList.add("row");

    section.innerHTML = `
    <article class="col-12 col-md-6 col-xl-3">
        <div class="card">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="price">$${producto.precio}</p>
                <div class="center">
                    <button class="btn btn-outline-success btn-sm btn-comprar" id="${producto.id}">COMPRAR</button>
                </div>
            </div>
        </div>
    </article>
    `;

    const buttonComprar = section.querySelector(".btn-comprar");

    buttonComprar.addEventListener("click", () => {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    });

    contenedor.appendChild(section);
});








/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //simulador de turnos peluqueria:
// const turnosDisponibles = [
//     {
//       id:1,
//       dia: "Martes",
//       horario: "9 hs",

//     },
//     {
//       id:2,
//       dia:"Martes",
//       horario:"13 hs",
//     },
//     {
//       id:3,
//       dia:"Martes",
//       horario:"16 hs",
//     },
//     {
//       id:4,
//       dia: "Miércoles",
//       horario:"9 hs",
//     },
//     {
//       id:5,
//       dia: "Miércoles",
//       horario:"13 hs",
//     },
//     {
//       id:6,
//       dia: "Miércoles",
//       horario:"16 hs",
//     },
//     {
//       id:7,
//       dia: "Jueves",
//       horario:"9 hs"
//     },
//     {
//       id:8,
//       dia:"Jueves",
//       horario: "13 hs",
//     },
//     {
//       id:9,
//       dia:"Jueves",
//       horario:"16 hs",
//     },
//     {
//       id:10,
//       dia:"Viernes",
//       horario:"9 hs"
//     },
//     {
//       id:11,
//       dia:"Viernes",
//       horario:"13 hs",
//     },
//     {
//       id:12,
//       dia:"Viernes",
//       horario:"16 hs",
//     }
  
//   ]
  
  
  
//   const turnosReservados = {};
  
//   alert("Bienvenidos al sistema de turnos online de Beauty Studio");
//   const nombreCliente = prompt("Ingresa tu nombre y apellido");
//   const telefonoCliente = parseInt(prompt("Ingresa tu nro de teléfono. Te contactaremos en caso de ser necesario"));
  
//   const verTurnosDisponibles = () => {
//     let turnosDisponiblesMensaje = "Turnos disponibles para esta semana:\n";
//     turnosDisponibles.forEach((turno) => {
//       const { id, dia, horario } = turno;
//       turnosDisponiblesMensaje += `ID: ${id}, Día: ${dia}, Horario: ${horario}\n`;
//     });
  
//     alert(turnosDisponiblesMensaje);
//   };
  
//   const reservarTurno = () => {
//     const turnosReservadosIds = [];
  
//     while (true) {
//       const idTurnoElegido = parseInt(prompt("Ingresa el ID del turno que deseas reservar o ingresa 0 para salir:"));
  
//       if (idTurnoElegido === 0) {
//         break;
//       }
  
//       const turno = turnosDisponibles.find((turno) => turno.id === idTurnoElegido);
  
//       if (turno) {
//         const { dia, horario } = turno;
//         const turnoReservado = `${dia}, ${horario}`;
  
//         if (!turnosReservadosIds.includes(idTurnoElegido)) {
//           turnosReservadosIds.push(idTurnoElegido);
//           alert(`¡Tu reserva fue realizada con éxito! ${nombreCliente} tienes un turno para el ${turnoReservado}. Te esperamos en Av Comodoro Rivadavia 437, Bernal. ¡Nos vemos!`);
//         } else {
//           alert(`Lo sentimos, el turno para el ${turnoReservado} ya se encuentra reservado.`);
//         }
//       } else {
//         alert(`No se encontró un turno con el ID ${idTurnoElegido}.`);
//       }
//     }
//   };
  
  
//   verTurnosDisponibles();
//   reservarTurno();
//   alert ("¡Gracias por visitar nuestro sitio web!")























