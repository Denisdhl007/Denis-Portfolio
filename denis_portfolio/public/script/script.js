// Initialisation de ScrollReveal
window.addEventListener('load', () => {
    const sr = ScrollReveal({
        origin: 'bottom', // Direction d'entrée (du bas)
        distance: '50px',  // Distance d'entrée
        duration: 1000,    // Durée de l'animation
        delay: 300,        // Délai avant l'animation
        reset: false,      // Réinitialiser l'animation après son exécution
    });

    // Cibler les éléments à animer
    sr.reveal('.PassionateUiUxDesigner', {
        delay: 500,
        origin: 'left',
        distance: '20px',
    });

    sr.reveal('.ElevatingUserExperiences', {
        delay: 700,
        origin: 'right',
        distance: '20px',
    });

    sr.reveal('.IMAFreelanceUxDesigner', {
        delay: 900,
        origin: 'bottom',
        distance: '50px',
    });

    sr.reveal('.HireMe', {
        delay: 1200,
        origin: 'top',
        distance: '30px',
    });

    sr.reveal('.Photo', {
        delay: 1100,
        origin: 'right',
        distance: '50px',
    });

    sr.reveal('.footer-container', {
        delay: 1500,
        origin: 'bottom',
        distance: '40px',
    });

    sr.reveal('.footer-info', {
        delay: 1700,
        origin: 'bottom',
        distance: '40px',
    });
});




// Sélectionner tous les boutons de l'accordiona
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    // Trouver le contenu associé
    const content = header.nextElementSibling;

    // Vérifier si le contenu est visible
    if (content.classList.contains("active")) {
      // Si le contenu est déjà actif, on le ferme
      content.classList.remove("active");
      header.classList.remove("active");
    } else {
      // Fermer tous les autres contenus et réinitialiser les flèches
      document.querySelectorAll(".accordion-content").forEach(item => {
        item.classList.remove("active");
      });
      document.querySelectorAll(".accordion-header").forEach(h => {
        h.classList.remove("active");
      });

      // Ouvrir le contenu courant et activer la flèche
      content.classList.add("active");
      header.classList.add("active");
    }
  });
});






// Initialisation de ScrollReveal dans RESUME
ScrollReveal().reveal('.ResumeHeader', {
    delay: 100,  // Délai avant que l'animation commence
    origin: 'top', // Direction de l'animation
    distance: '50px', // Distance parcourue par l'élément
    duration: 1000, // Durée de l'animation
    opacity: 0, // Opacité de départ
    easing: 'ease-in-out',
});

ScrollReveal().reveal('.ResumeBlock', {
    delay: 200,
    origin: 'bottom',
    distance: '40px',
    duration: 800,
    opacity: 0,
    easing: 'ease-in-out',
    interval: 150, // Intervalle entre les éléments animés
});

ScrollReveal().reveal('.ResumeItem', {
    delay: 300,
    origin: 'left',
    distance: '30px',
    duration: 700,
    opacity: 0,
    easing: 'ease-in-out',
    interval: 200,
});

ScrollReveal().reveal('.accordion-item', {
    delay: 400,
    origin: 'right',
    distance: '50px',
    duration: 900,
    opacity: 0,
    easing: 'ease-in-out',
    interval: 250,
});

ScrollReveal().reveal('.ResumeCTA', {
    delay: 500,
    origin: 'top',
    distance: '40px',
    duration: 700,
    opacity: 0,
    easing: 'ease-in-out',
});























   // Sélectionne les éléments
   const map = document.getElementById('map');
   const character = map.querySelector('.character');
   const points = map.querySelectorAll('.education-point');
   const infoContainer = document.getElementById('info-container');

   // Timeline GSAP
   const timeline = gsap.timeline({ repeat: 0, paused: true });

   // Fonction pour révéler les informations d'un point
   const revealInfo = (title, years) => {
       const infoItem = document.createElement('div');
       infoItem.classList.add('info-item');
       infoItem.textContent = `${title}: ${years}`;
       infoContainer.appendChild(infoItem);
   };

   // Fonction pour effacer les informations avant d'ajouter une nouvelle
   const clearInfo = () => {
       infoContainer.innerHTML = '';
   };

   // Ajouter des événements de clic aux points bleus
   points.forEach((point, index) => {
       const cx = point.getAttribute('cx');
       const cy = point.getAttribute('cy');
       const title = point.getAttribute('data-title');
       const years = point.getAttribute('data-years');

       // Animer la boule rouge vers le point cliqué
       point.addEventListener('click', () => {
           clearInfo(); // Efface les anciennes informations
           gsap.to(character, {
               duration: 1,
               attr: { cx: cx, cy: cy },
               onComplete: () => revealInfo(title, years),
           });
       });

       // Ajouter l'animation de la timeline
       timeline.to(character, {
           duration: 2,
           attr: { cx: cx, cy: cy },
           onStart: () => revealInfo(title, years),
       });
   });

   // Lancer l'animation initiale
   timeline.play();