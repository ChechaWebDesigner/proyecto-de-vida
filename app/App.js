import { AboutMe } from "./components/AboutMe.js";
import { BtnChangeTheme } from "./components/BtnChangeTheme.js";
import { Navbar } from "./components/Navbar.js";
import { writeEffect } from "./helpers/writing.js";
import { TitleSection } from "./components/TitleSection.js";
import { Skills } from "./components/Skills.js";
import { SoftSkills, valores } from "./components/SoftSkills.js";
import { Projects } from "./components/Projects.js";
import { ContactForm } from "./components/ContactForm.js";
import { contact } from "./helpers/contact.js";
import { objetivosVision } from "./components/objetivosVision.js";
import { metas } from "./components/metas.js";
import { cronograma } from "./components/cronograma.js";
import { estrategias } from "./components/estrategias.js";

export async function App() {
  const d = document,
    $root = d.getElementById("root");

  // Navbar Links

  const links = [
    {
      href: "#mision-vision",
      text: "Proyecto de Vida",
    },
    {
      href: "#principios",
      text: "Principios",
    },
    {
      href: "#valores",
      text: "Valores",
    },
    {
      href: "#areas-de-apoyo",
      text: "Areas de apoyo",
    },
    {
      href: "#objetivo-vision",
      text: "Objetivo Visión",
    },
    {
      href: "#aspectos-a-considerar",
      text: "Aspectos a considerar",
    },
    {
      href: "#metas",
      text: "Metas",
    },
    {
      href: "#estrategias",
      text: "Estrategias",
    },
    {
      href: "#cronograma",
      text: "Cronograma",
    },
  ];

  // Ading Components

  await $root.appendChild(
    BtnChangeTheme({ dataDark: "[data-dark]", moon: "🌛", sun: "🌞" })
  );
  await $root.appendChild(
    Navbar({
      links
    })
  );
  await $root.appendChild(
    AboutMe({
      imgSource: "./app/assets/images/my-picture.png",
    })
  );

  await $root.appendChild(
    TitleSection({
      id: "principios",
      text: "Mis principios",
    })
  );
  await $root.appendChild(SoftSkills());

  await $root.appendChild(
    TitleSection({
      id: "valores",
      text: "Mis valores",
    })
  );
  await $root.appendChild(valores());

  await $root.appendChild(
    TitleSection({
      id: "areas-de-apoyo",
      text: "areas de apoyo",
    })
  );
  await $root.appendChild(Skills());

  await $root.appendChild(
    TitleSection({
      id: "objetivo-vision",
      text: "Objetivo de mi visión",
    })
  );
  await $root.appendChild(objetivosVision());

  await $root.appendChild(
    TitleSection({
      id: "aspectos-a-considerar",
      text: "Aspectos a considerar",
    })
  );
  await $root.appendChild(Projects());
  
  await $root.appendChild(
    TitleSection({
      id: "metas",
      text: "metas",
    })
  );
  await $root.appendChild(metas());
  
  await $root.appendChild(
    TitleSection({
      id: "estrategias",
      text: "Estrategias",
    })
    );
  await $root.appendChild(estrategias());

  await $root.appendChild(
    TitleSection({
      id: "cronograma",
      text: "Cronograma",
    })
    );
  await $root.appendChild(cronograma());
    
  writeEffect(".my-name");
}
