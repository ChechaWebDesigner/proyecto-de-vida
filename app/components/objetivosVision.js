import { skills } from "./../assets/data/data-skill.js";
import { BtnMore } from "./BtnMore.js";

export function objetivosVision() {
  const d = document,
    $container = d.createElement("section");

  $container.classList.add("container", "p-2", "flex", "justify-center");

  $container.innerHTML += `
    <ul class="dark-color-white fs-5 fw-semibold">
      <li>Ser CEO de una empresa relevante de tecnología</li>
      <li>Conocer Barcelona</li>
      <li>Apoyar a mi familia</li>
      <li>Contribuir a mi nación</li>
   </ul>
  `

  return $container;
}
