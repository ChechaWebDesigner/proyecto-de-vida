export function estrategias() {
  const d = document,
    $container = d.createElement("section");

  $container.classList.add("container", "p-2", "flex", "justify-center");

  $container.innerHTML += `
  <table class="table">
  <thead>
    <tr>
    <th scope="col"></th>
      <th scope="col">A Corto Plazo</th>
      <th scope="col">A Mediano Plazo</th>
      <th scope="col">A Largo Plazo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Para alcanzar Metas</td>
      <td>
        <ul>
          <li>
            Seguir estudiando de manera autodidacta.
          </li>
          <li>
            Profundizar en Python.
          </li>
          <li>
            Entrar al mundo del backend.
          </li>
        </ul>
      </td>

      <td>
        <ul>
          <li>
            Utilizar mis conocimientos para ascender.
          </li>
          <li>
            Aplicar mis conocimientos y experiencia laboral en el trabajo.
          </li>
        </ul>
      </td>

      <td>
        <ul>
          <li>
            Utilizar mis conocimientos para dar clases.
          </li>
          <li>
            Buscar puestos de CEO.
          </li>
          <li>
            Utilizar mis ahorros para invertir.
          </li>
        </ul>
      </td>
    </tr>

    <tr>
    <td>Para vencer los obstaculos</td>
    <td>
      <ul>
        <li>
          Aprovechar el tiempo.
        </li>
        <li>
          Apagar el celular al hacer deberes.
        </li>
        <li>
          No distraerme en el trabajo.
        </li>
        <li>
          Poner tiempos limites.
        </li>
      </ul>
    </td>

    <td>
      <ul>
        <li>
         Ignorar los malos comentarios.
        </li>
        <li>
          Aceptar criticas constructivas.
        </li>
        <li>
         Distribuir el tiempo.
        </li>
        <li>
          Luchar contra la corrupción.
        </li>
      </ul>
    </td>

    <td>
      <ul>
        <li>
          Manejar de manera correcta mi tiempo.
        </li>
        <li>
          Aprender sobre las leyes de Barcelona.
        </li>
        <li>
          Disfrutar a mis padres.
        </li>
      </ul>
    </td>
  </tr>

  <tr>
  <td>Para vencer los problemas</td>
  <td>
    <ul>
      <li>
        Ganar mis cursos.
      </li>
      <li>
        Buscar buenas oportunidades.
      </li>
      <li>
        Escuchar consejos.
      </li>
      <li>
        Escoger un buen presidente.
      </li>
    </ul>
  </td>

  <td>
    <ul>
      <li>
       Ahorrar.
      </li>
      <li>
        Culminar mis cursos.
      </li>
      <li>
       Buscar plazas de jefatura.
      </li>
    </ul>
  </td>

  <td>
    <ul>
      <li>
        Tener mi diploma.
      </li>
      <li>
        Evitar problemas con la ley,
      </li>
      <li>
        Tener resultados positivos para puestos de CEO.
      </li>
    </ul>
  </td>
</tr>

  </tbody>
</table>
  `
  return $container;
}
