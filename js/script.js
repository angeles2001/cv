const cv = {
  nombre: "Ángeles Gallego Castaño",
  foto: "img/IMG_20200521_125727.jpg",
  contacto: {
    telefono: "667312540",
    email: "angelesgallego01@gmail.com",
    direccion: "C/ Antonio Romero Velasco 4, La Solana"
  },
  sobreMi: "Profesional en educación infantil y marketing, competente en crear programas educativos y estrategias de comunicación que fomenten el aprendizaje y desarrollo infantil.",
  aptitudes: [
    "Capacidades creativas y prácticas para actividades educativas",
    "Actitud positiva y responsable",
    "Trabajo bajo presión",
    "Observadora, paciente y tolerante"
  ],
  experiencia: [
    {
      puesto: "Técnica de marketing (prácticas profesionales)",
      lugar: "J. Delgado",
      fecha: "Octubre 2024",
      tareas: [
        "Plan de marketing",
        "Estrategias en RRSS",
        "Creación de contenidos para RRSS"
      ]
    },
    {
      puesto: "Educadora Infantil (prácticas profesionales)",
      lugar: "Escuela infantil Hermanas Barrera",
      fecha: "Marzo 2022 - Junio 2022",
      tareas: [
        "Planificación de clases",
        "Actividades: teatros, juegos, cuentos",
        "Circuitos de Psicomotricidad",
        "Realización de asambleas"
      ]
    },
    {
      puesto: "Cuidadora de comedor (prácticas)",
      lugar: "CEIP Federico Romero",
      fecha: "Enero 2024",
      tareas: [
        "Organización del comedor escolar",
        "Higiene y salud",
        "Actividades socio-educativas"
      ]
    },
  ],
  estudios: [
    "Bachillerato de Humanidades | IES Clara Campoamor | 2018 - 2020",
    "CFGS Educación Infantil | IES Atenea | 2020 - 2022",
    "CP Nivel 3 Marketing y Compraventa Internacional | CEAT | 2024"
  ],
  cursos: [
    "Cuidador de comedor escolar | Enero 2024",
    "Manipulador de alimentos | Diciembre 2023",
    "Las emociones en diferentes etapas de la vida | Junio 2023",
    "Actividades Infantiles en el comedor escolar | Mayo 2023",
    "El juego en el proceso educativo | Febrero 2023"
  ],
  otros: [
    "Carnet de conducir",
    "Vehículo propio",
    "Disponibilidad total y geográfica"
  ]
};

function renderCV(cv) {
  return `
    <div class="foto-container">
      <img src="${cv.foto}" alt="Foto de perfil" class="foto">
    </div>
    <h1>${cv.nombre}</h1>
    <p style="text-align:center;">${cv.sobreMi}</p>

    ${renderSection("📞 Contacto", `
      <p>Tel: ${cv.contacto.telefono}</p>
      <p>Email: ${cv.contacto.email}</p>
      <p>Dirección: ${cv.contacto.direccion}</p>
    `)}

    ${renderSection("💼 Experiencia Laboral", `
      ${cv.experiencia.map(exp => `
        <div>
          <h3>${exp.puesto} - ${exp.lugar}</h3>
          <p><em>${exp.fecha}</em></p>
          <ul>
            ${exp.tareas.map(t => `<li>${t}</li>`).join("")}
          </ul>
        </div>
      `).join("")}
    `)}

    ${renderSection("🎓 Formación Académica", `
      <ul>
        ${cv.estudios.map(est => `<li>${est}</li>`).join("")}
      </ul>
    `)}

    ${renderSection("📚 Cursos", `
      <ul>
        ${cv.cursos.map(c => `<li>${c}</li>`).join("")}
      </ul>
    `)}

    ${renderSection("✨ Aptitudes", `
      <ul>
        ${cv.aptitudes.map(a => `<li>${a}</li>`).join("")}
      </ul>
    `)}

    ${renderSection("📌 Otros", `
      <ul>
        ${cv.otros.map(o => `<li>${o}</li>`).join("")}
      </ul>
    `)}
  `;
}

function renderSection(title, content) {
  return `
    <h2 class="accordion">${title} <span>▶</span></h2>
    <div class="section-content">${content}</div>
  `;
}

// Renderizado
document.getElementById("app").innerHTML = renderCV(cv);

// Funcionalidad desplegables
document.querySelectorAll(".accordion").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const content = btn.nextElementSibling;
    content.classList.toggle("open");
  });
});
