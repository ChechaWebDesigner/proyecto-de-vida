import { TitleSection } from "./TitleSection.js";

export function AboutMe(props) {
  const d = document,
    $container = d.createElement("section"),
    $row = d.createElement("div"),
    $firstRow = d.createElement("div"),
    $secondRow = d.createElement("div"),
    { description, imgSource } = props;

  $container.classList.add(
    "container",
    "border-bottom",
    "border-primary",
    "rounded-bottom",
    "shadow-sm",
    "my-2",
    "pb-1"
  );
  $row.classList.add("row", "row-cols-12", "mx-0");
  $firstRow.classList.add(
    "col-12",
    "col-md-7",
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "flex-column"
  );
  $secondRow.classList.add(
    "col-12",
    "col-md-5",
    "d-flex",
    "align-items-center",
    "justify-content-center",
    "position-relative"
  );

  $firstRow.appendChild(
    TitleSection({
      id: "mision-vision",
      text: "Proyecto de Vida",
    })
  );
  $firstRow.innerHTML += `
    <h2 class="fs-2 fw-bold text-title-name" style="min-height: 60px; height: fit-content;"><span class="my-name">Cesar Joel González Oliva</span></h2>
    <div class="fw-semibold text-justify dark-color-white">
      <h3 class="fs-3 fw-bold">Mi Visión</h3>
      <p>
        Ser CEO del area tecnologica de una compañia reconocida a nivel mundial, cumpliendo mi sueño de conocer barcelona, y  apoyando a mi familia y sobre todo al país
      </p>
      <h3 class="fs-3 fw-bold">Mi Misión</h3>
      <p>
        Soy estudiante universitario disciplinado, apasionado, responsable, lo cual me permitirá aprender las habilidades necesarias de programación y demás areas, lo que me permitirá alcanzar un puesto de CEO en una comáñia relevante dentro del mundo del desarrollo.
      </p>
    </div>
  `;
  $secondRow.innerHTML = `
    <div class="text-center my-picture">
      <img src="${imgSource}" alt="Me" class="w-50 position-relative rounded-circle">
    </div>
  `;
  $row.appendChild($firstRow);
  $row.appendChild($secondRow);
  $container.appendChild($row);

  return $container;
}
