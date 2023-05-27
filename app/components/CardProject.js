AOS.init({
  duration: 1000,
  once: true,
});

export function CardProject(props) {
  const { element } = props;

  const project = document.createElement("div");
  project.classList.add(
    "project",
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "flex-column",
    "p-4",
    "rounded",
    "shadow",
    "mx-4",
    "my-2",
    "w-30",
    "h-100",
    "text-center"
  );

  project.setAttribute("data-aos", "zoom-in");
  project.style.backgroundImage = `url(${element.img})`;

  const nameProject = document.createElement("h3");
  nameProject.classList.add("element-into-project");
  nameProject.textContent = element.name;

  const descriptionProject = document.createElement("p");
  descriptionProject.classList.add("element-into-project");
  descriptionProject.textContent = element.description;

  project.appendChild(nameProject);
  project.appendChild(descriptionProject);

  return project;
}
