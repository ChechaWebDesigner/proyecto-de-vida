import { reduceArr } from "../helpers/reduceArr.js";
import { BtnMore } from "./BtnMore.js";
import {projects} from "./../assets/data/data-projects.js"
import { CardProject } from "./CardProject.js";
import { TemporalMessage } from "./TemporalMessage.js";

export function Projects() {
  const d = document,
    $container = d.createElement("section"),
    $projects = d.createElement("article"),
    $btnMore = BtnMore({ id: "btn-more-projects", text: "More..." });
  
    let limitInf = 0,
    limitSup = 5;

  $container.classList.add("container", "p-2");
  $projects.classList.add(
    "container-projects",
    "position-relative",
    "d-flex",
    "justify-content-evenly",
    "align-items-center",
    "flex-wrap"
  );
    
  projects.forEach((element) => {
    $projects.appendChild(CardProject({ element }));
  });

  $container.appendChild($projects);

  return $container;
}
