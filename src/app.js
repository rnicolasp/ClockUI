import Alarm from "./Alarm.js";
import Clock from "./Clock.js";
import Stopwatch from "./Stopwatch.js";
import Timer from "./Timer.js";

customElements.define("x-alarm", Alarm);
customElements.define("x-clock", Clock);
customElements.define("x-stopwatch", Stopwatch);
customElements.define("x-timer", Timer);

// src/app.js
document.addEventListener('DOMContentLoaded', () => {
    const sections = {
      clock: document.getElementById('clock'),
      alarm: document.getElementById('alarm'),
      stopwatch: document.getElementById('stopwatch'),
      timer: document.getElementById('timer'),
    };
  
    const navLinks = document.querySelectorAll('nav a');
  
    // Funció per amagar totes les seccions
    function hideAllSections() {
      Object.values(sections).forEach(section => {
        section.style.display = 'none';
      });
    }
  
    // Funció per mostrar una secció específica
    function showSection(sectionId) {
      hideAllSections();
      sections[sectionId].style.display = 'block';
    }
  
    // Afegim esdeveniments als enllaços de navegació
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Evitem el comportament per defecte dels enllaços
        const sectionId = link.getAttribute('href').substring(1); // Obtenim l'ID de la secció
        showSection(sectionId);
      });
    });
  
    // Mostrem la secció per defecte (Clock)
    showSection('clock');
  });