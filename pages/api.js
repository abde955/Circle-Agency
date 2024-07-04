fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
  .then(response => response.json())
  .then(data => {
    // Obtener el primer proyecto para la página individual
    const project = data[0];

    // Generar HTML para la página de proyecto individual
    const projectPageHTML = `
      <div class="project-page">
        <h1>${project.name}</h1>
        <div class="description">${project.description}</div>
        <div class="completed-on">Fecha: ${project.completed_on}</div>
        <img src="${project.image}" alt="Imagen del proyecto ${project.name}">
        <div class="content">${project.content}</div>
      </div>
    `;

    // Insertar la página de proyecto individual en el contenedor correspondiente
    document.getElementById('project-page').innerHTML = projectPageHTML;

    // Tomar los proyectos restantes para los proyectos recientes (tarjetas)
    const recentProjects = data.slice(1, 4); // Tomamos los siguientes 3 proyectos

    // Generar HTML para los proyectos recientes (tarjetas)
    const recentProjectsHTML = recentProjects.map(project => `
      <div class="card">
        <img src="${project.image}" class="card-img" alt="Imagen de la tarjeta">
        <div class="card-body">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <br>
          <a href="/Circle-Agency/pages/${project.name}.html" class="btn">Learn more</a>
        </div>
      </div>
    `).join('');
      
    // Insertar las tarjetas de proyectos recientes en el contenedor correspondiente
    document.querySelector('.project-cards').innerHTML = recentProjectsHTML;
  })
  .catch(error => console.error('Error al obtener datos de la API:', error));