export function metas() {
  const d = document,
    $container = d.createElement("section");

  $container.classList.add("container", "p-2", "flex", "justify-center");

  $container.innerHTML += `
  <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
     <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Corto Plazo
      </button>
      </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
        <ul>
          <li>
            Culminar 3 semestres con excelentes calificaciones.
          </li>
          <li>
            A fin de año trabajar como desarrollador Web.
          </li>
          <li>
            En un mes comenzar a contribuir en el hogar.
          </li>
          <li>
            En Junio apoyar a mi país votando.
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Mediano Plazo
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
        <ul>
          <li>
            En cinco años terminar la universidad.
          </li>
          <li>
            En cuatro años tener un puesto similar a CEO.
          </li>
          <li>
            En tres años ser un experto (Senior) en el área del frontend.
          </li>
          <li>
            En cuatro años poder apoyar a mis padres en todo lo que necesiten.
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Largo Plazo
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
        <ul>
          <li>
            En ocho años dar clases sobre tecnología. 
          </li>
          <li>
            En ocho años lograr tener un puesto de CEO.
          </li>
          <li>
            En siete años comenzar mi propio negocio.
          </li>
          <li>
            En ocho años hacer que mis padres ya no necesiten trabajar.
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
  `

  return $container;
}
