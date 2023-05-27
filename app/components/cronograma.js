export function cronograma() {
  const d = document,
    $container = d.createElement("section");

  $container.classList.add("container", "p-2", "flex", "justify-center");

  $container.innerHTML += `
  <table class="table text-center">
  <thead>
    <tr>
      <th>
        No.
      </th>
      <th>
        Actividades
      </th>
      <th>
        A Corto Plazo
      </th>
      <th>
        A Mediano Plazo
      </th>
      <th>
        A Largo Plazo
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-active">
      <td>
        1
      </td>
      <td>
        Crear un horario
      </td>
      <td>
        31/06/24
      </td>
      <td>
        
      </td>
      <td>
        
      </td>
    </tr>
    
    <tr class="table-active">
      <td>
        1
      </td>
      <td>
        Buscar Material en linea gratuito
      </td>
      <td>
        31/06/24
      </td>
      <td>
        
      </td>
      <td>
        
      </td>
    </tr>

    <tr class="table-active">
      <td>
        1
      </td>
      <td>
        Estudiar Python
      </td>
      <td>
        31/06/24
      </td>
      <td>
        
      </td>
      <td>
        
      </td>
    </tr>

    <tr class="table-active">
      <td>
        2
      </td>
      <td>
        Aprender conceptos backend
      </td>
      <td>
        31/06/24
      </td>
      <td>
        
      </td>
      <td>
        
      </td>
    </tr>

    <tr class="table-active">
      <td>
        3
      </td>
      <td>
        Analizar las nuevas tecnologías
      </td>
      <td>
        
      </td>
      <td>
        31/12/25
      </td>
      <td>
        
      </td>
    </tr>

    <tr class="table-active">
      <td>
        4
      </td>
      <td>
        Profundizar en Inteligencia Artificial
      </td>
      <td>
        
      </td>
      <td>
        31/12/25
      </td>
      <td>
        
      </td>
    </tr>

    <tr class="table-active">
      <td>
        4
      </td>
      <td>
        Desarrollar habilidades sociales
      </td>
      <td>
        
      </td>
      <td>
        31/12/25
      </td>
      <td>
        
      </td>
    </tr>

    <tr class="table-active">
      <td>
        5
      </td>
      <td>
        Estudiar temas de negocio
      </td>
      <td>
        
      </td>
      <td>
        31/12/26
      </td>
      <td>
        
      </td>
    </tr>

    <tr class="table-active">
      <td>
        5
      </td>
      <td>
        Conseguir mi Toefl
      </td>
      <td>
        
      </td>
      <td>
        31/12/26
      </td>
      <td>
        
      </td>
    </tr>

    <tr class="table-active">
      <td>
        6
      </td>
      <td>
        Aplicar a un puesto de CEO
      </td>
      <td>
        
      </td>
      <td>
        
      </td>
      <td>
        31/12/27
      </td>
    </tr>

    <tr class="table-active">
      <td>
        6
      </td>
      <td>
        Abrir mi canal de Youtube
      </td>
      <td>
        
      </td>
      <td>
        
      </td>
      <td>
        31/12/27
      </td>
    </tr>

    <tr class="table-active">
    <td>
      7
    </td>
    <td>
      Buscar plazas de docente
    </td>
    <td>
      
    </td>
    <td>
      
    </td>
    <td>
      31/12/28
    </td>
    </tr>

    <tr class="table-active">
    <td>
      7
    </td>
    <td>
      Mejorar habilidades blandas
    </td>
    <td>
      
    </td>
    <td>
      
    </td>
    <td>
      01/01/29
    </td>
    </tr>

    <tr class="table-active">
    <td>
      8
    </td>
    <td>
      Aprender de bienes raices
    </td>
    <td>
      
    </td>
    <td>
      
    </td>
    <td>
      06/06/29
    </td>
    </tr>


    <tr class="table-active">
    <td>
      8
    </td>
    <td>
      Abrir cuenta bancaria a mis padres
    </td>
    <td>
      
    </td>
    <td>
      
    </td>
    <td>
      31/06/29
    </td>
    </tr>

  </tbody>
</table>
  `

  return $container;
}
