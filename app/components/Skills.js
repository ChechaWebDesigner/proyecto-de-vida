import { reduceArr } from "../helpers/reduceArr.js";
import { skills } from "./../assets/data/data-skill.js";
import { BtnMore } from "./BtnMore.js";
import { CardSkill } from "./CardSkill.js";
import { TemporalMessage } from "./TemporalMessage.js";

export function Skills() {
  const d = document,
    $container = d.createElement("section"),
    $skills = d.createElement("article"),
    $btnMore = BtnMore({ id: "btn-more-skills", text: "More..." });

  let limitInf = 0,
    limitSup = 5;

  $container.classList.add("container", "p-2");
  $skills.classList.add(
    "container-skills",
    "position-relative",
    "d-flex",
    "justify-content-evenly",
    "align-items-center",
    "flex-wrap"
  );

  skills.forEach((element) => {
    $skills.appendChild(CardSkill({ element }));
  });

  $container.appendChild($skills);

  return $container;
}
