let statusMenu = "fechado";
let iconBurguer = document.getElementById('icon-burguer');
let iconX = document.getElementById('icon-x');
let menuMobile = document.getElementById('menu-mobile');
let imgMenu = document.getElementById('logo-img');
let logoName = document.getElementById('logo-name');


imgMenu.addEventListener("mouseenter", ()=>{
  logoName.style.width = "110%";
})

imgMenu.addEventListener("mouseout", ()=>{
  logoName.style.width = "0%";
})

function menu() {

  if (statusMenu == "fechado") {
    iconBurguer.style.display = "none";
    iconX.style.display = "block";
    menuMobile.style.left = "0";

    statusMenu = "aberto";
  } else {
    iconBurguer.style.display = "block";
    iconX.style.display = "none";
    menuMobile.style.left = "-100%";

    statusMenu = "fechado";
  }
}

function inicio() {
  window.location.href = 'index.html';
}


function verificaDispositivo() {
  // Verifica a largura da janela
  const larguraJanela = window.innerWidth;

  // Define uma largura de corte para determinar se é um dispositivo móvel
  const larguraCorte = 1050; // Pode ser ajustado conforme necessário

  // Verifica se a largura da janela é menor que a largura de corte
  const isMobile = larguraJanela < larguraCorte;

  // Exibe a mensagem correspondente
  if (isMobile) {
    if (menuMobile.style.left === '0px') {
   iconBurguer.style.display = "none";
   iconX.style.display = "block";

  }else{
    iconBurguer.style.display = "block";
    iconX.style.display = "none";
  }

  } else {
    iconBurguer.style.display = "none";
    iconX.style.display = "none";
  }
}

// Executa a verificação a cada segundo
setInterval(verificaDispositivo, 500)

AOS.init();

particlesJS("particles-container", {
  particles: {
    number: { value: 150, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "triangle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#821ED0",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);