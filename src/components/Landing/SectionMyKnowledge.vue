<script setup lang="ts">
import jsondata from '@/assets/json-data.json'
const jsonData = jsondata;
</script>
<template>
  <section>
    <div class="title-tag">
      <h3 class="text-body1">
        Dominio Tecnológico
      </h3>
      <p class="text-body2">
        Conocimientos Técnicos
      </p>
    </div>
    <div class="resume-content">
      <div id="resumeFrontend" class="resume-item resume-item--frontend">
        <h4 class="text-body1">🪄 Frontend</h4>
        <small class="text-body2">El Arte de la Ilusión Visual</small>
        <ol>
          <li>
            HTML & CSS
            <ul>
              <li>
                <span>HTML5</span>
              </li>
              <li>
                <span>CSS3</span>
              </li>
              <li>
                <span>SCSS</span>
                <span>SASS</span>
                <span>PostCSS</span>
                <span>LESS</span>
              </li>
              <li>
                <span>Tailwind</span>
                <span>Bootstrap</span>
                <span>Material UI</span>
              </li>
            </ul>
          </li>
          <li>
            JavaScript & Frameworks
            <ul>
              <li>
                <span>Vanilla JS</span>
              </li>
              <li>
                <span>Vue</span>
                <span>React</span>
                <span>Angular</span>
                <span>Svelte</span>
                <span>Alpine</span>
              </li>
            </ul>
          </li>
          <li>
            Diseño
            <ul>
              <li>
                <span>Figma</span>
                <span>Adobe XD</span>
                <span>Storybook</span>
              </li>
              <li>
                <span>Animaciones</span>
                <span>Canvas</span>
                <span>SVG</span>
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <div class="resume-item resume-item--backend">
        <h4 class="text-body1">🧙‍♂️ Backend</h4>
        <small class="text-body2">El Dominio de las Profundidades</small>
        <ol>
          <li>
            Lenguajes
            <ul>
              <li>
                Node.js, Deno
              </li>
              <li>
                PHP, Python, Java
              </li>
            </ul>
          </li>
          <li>
            Frameworks
            <ul>
              <li>
                Laravel, CakePHP, Express, NestJS
              </li>
            </ul>
          </li>
          <li>
            APIs y Plantillas
            <ul>
              <li>
                REST, GraphQL, Smarty
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <div class="resume-item resume-item--others">
        <h4>📚 Otros Conjuros</h4>
        <small class="text-body2">Saberes Complementarios</small>
        <ol>
          <li>
            Bases de Datos
            <ul>
              <li>
                MySQL, PostgreSQL, MongoDB
              </li>
              <li>
                Redis, Prisma
              </li>
            </ul>
          </li>
          <li>
            Testing
            <ul>
              <li>
                Jest, Mocha, Cypress
              </li>
            </ul>
          </li>
          <li>
            Herramientas
            <ul>
              <li>
                Git, SEO, Accesibilidad, PWA
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <div class="resume-item resume-item--others">
        <h4>🧠 Magia del Archimago</h4>
        <small class="text-body2">Conocimientos como CTO</small>
        <ol>
          <li>
            DevOps & Infraestructura
            <ul>
              <li>
                Plesk, CloudPanel, cPanel
              </li>
              <li>
                Docker, Kubernetes
              </li>
              <li>
                NGINX, Certbot, AWS
              </li>
            </ul>
          </li>
          <li>
            Arquitectura
            <ul>
              <li>
                Microservicios, Monolitos, Serverless
              </li>
              <li>
                CDN, Balanceadores
              </li>
            </ul>
          </li>
          <li>
            Gestión
            <ul>
              <li>
                Agile, Scrum
              </li>
              <li>
                Documentación, Liderazgo
              </li>
              <li>
                Comunicación técnica
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <div class="resume-item resume-item--others">
        <h4>📜 Artes del Liderazgo & Comunicación</h4>
        <small class="text-body2">Comunicación & Gestión</small>
        <ol>
          <li>
            Herramientas de Comunicación
            <ul>
              <li>
                Slack, Discord, etc.
              </li>
              <li>
                Docker, Kubernetes
              </li>
              <li>
                NGINX, Certbot, AWS
              </li>
            </ul>
          </li>
          <li>
            Gestión de Proyectos
            <ul>
              <li>
                Jira, Trello, etc.
              </li>
              <li>
                CDN, Balanceadores
              </li>
            </ul>
          </li>
          <li>
            Flujos y Metodologías
            <ul>
              <li>
                Agile, Scrum, Kanban
              </li>
              <li>
                Documentación, Liderazgo
              </li>
              <li>
                Comunicación técnica
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.trajectory-timeline {
  &-job {
    display: flex;
    min-height: 450px;
    border-bottom: 1px solid white;

    &--right {
      flex-flow: row-reverse;
    }
  }

  &-content {
    padding: 20px 8px;
  }

  &-date {
    writing-mode: sideways-lr;
    text-orientation: mixed;
    display: flex;
    justify-content: space-around;
    border-right: 1px solid white;
    padding: 20px 8px;
    background: var(--text-color);
    color: var(--background-color);

    &--right {}
  }
}

.resume-content {
  display: flex;
  gap: 2rem;
  flex-flow: row;
  flex-wrap: nowrap;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
}
</style>