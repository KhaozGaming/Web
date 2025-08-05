



const carrusel = document.getElementById('carrusel');
const imagenes = carrusel.querySelectorAll('img');
let index = 0;

function desplazar(direccion) {
    index += direccion;
    if (index < 0) index = imagenes.length - 1;
    if (index >= imagenes.length) index = 0;
    carrusel.scrollTo({
        left: index * carrusel.clientWidth,
        behavior: 'smooth'
    });
}

setInterval(() => {
    desplazar(1);
    }, 6000);

function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(s => s.classList.remove('activa'));

    document.getElementById(id).classList.add('activa');
    }



document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".NUMSTATS");

  const observer = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        const el = entrada.target;
        const objetivo = +el.getAttribute("data-num");
        let actual = 0;
        const velocidad = 30;
        const incremento = Math.ceil(objetivo / 50);

        const contar = () => {
          if (actual < objetivo) {
            actual += incremento;
            if (actual > objetivo) actual = objetivo;
            el.textContent = `+${actual}`;
            setTimeout(contar, velocidad);
          }
        };

        contar();
        obs.unobserve(el);
      }
    });
  }, {
    threshold: 0.5
  });

  elementos.forEach(el => observer.observe(el));
});







document.addEventListener('DOMContentLoaded', () => {
    const secciones = document.querySelectorAll('.faq-ask');

    secciones.forEach(seccion => {
      const primerAbierto = seccion.querySelector('.faq-contenedor.abierto');
      if (primerAbierto) {
        const sub = primerAbierto.querySelector('.faq-subcontenedor');
        const icono = primerAbierto.querySelector('.faq-titulo i');

        setTimeout(() => {
          sub.style.maxHeight = sub.scrollHeight + 'px';
          if (icono) icono.className = 'fa-solid fa-caret-up';
        }, 50);
      }
    });
  });

  function alternar(tituloDiv) {
    const contenedor = tituloDiv.parentElement;
    const icono = tituloDiv.querySelector('i');
    const sub = contenedor.querySelector('.faq-subcontenedor');
    const estaAbierto = contenedor.classList.contains('abierto');

    if (estaAbierto) {
      sub.style.maxHeight = '0';
      contenedor.classList.remove('abierto');
      icono.className = 'fa-solid fa-plus';
    } else {
      sub.style.maxHeight = sub.scrollHeight + 'px';
      contenedor.classList.add('abierto');
      icono.className = 'fa-solid fa-caret-up';
    }
  }


function abrirPopup(id) {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById(id).style.display = 'block';
    }

function cerrarPopups() {
    document.getElementById('overlay').style.display = 'none';
    document.querySelectorAll('.popup').forEach(p => p.style.display = 'none');
}




document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });