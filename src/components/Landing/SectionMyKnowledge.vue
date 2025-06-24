<script setup lang="ts">
import simplebar from 'simplebar-vue';
</script>
<template>
	<section role="region" aria-labelledby="knowledge-title" lang="es" class="knowledge-section">
		<header class="title-tag" role="banner">
			<h1 id="knowledge-title" class="text-body1">
				Dominio Tecnológico
			</h1>
			<p class="text-body2" aria-hidden="true">
				Conocimientos Técnicos
			</p>
		</header>
		<div class="resume-content">
			<article id="resumeFrontend" class="resume-item resume-item--frontend" role="region"
				aria-labelledby="frontend-title" tabindex="0">
				<simplebar :autoHide="false" class="simplebar-height">
					<h2 id="frontend-title" class="text-body1">🪄 Frontend</h2>
					<small class="text-body2" aria-hidden="true">El Arte de la Ilusión Visual</small>
					<nav class="skills-nav" aria-label="Navegación de habilidades de Frontend">
						<ul role="list" class="skills-list">
							<li role="listitem" class="skill-item">
								<h3>HTML & CSS</h3>
								<ul role="list" class="subskills-list">
									<li role="listitem" class="subskill-item">
										<span role="text" class="skill-tag" aria-label="HTML5">HTML5</span>
									</li>
									<li role="listitem">
										<span role="text" class="skill-tag" aria-label="CSS3">CSS3</span>
									</li>
									<li role="listitem">
										<span role="text" class="skill-tag" aria-label="SCSS">SCSS</span>
										<span role="text" class="skill-tag" aria-label="SASS">SASS</span>
										<span role="text" class="skill-tag" aria-label="PostCSS">PostCSS</span>
										<span role="text" class="skill-tag" aria-label="LESS">LESS</span>
									</li>
									<li role="listitem">
										<span role="text" class="skill-tag" aria-label="Tailwind">Tailwind</span>
										<span role="text" class="skill-tag" aria-label="Bootstrap">Bootstrap</span>
										<span role="text" class="skill-tag" aria-label="Material UI">Material UI</span>
									</li>
								</ul>
							</li>
							<li role="listitem" class="skill-item">
								<h3>JavaScript & Frameworks</h3>
								<ul role="list" class="subskills-list">
									<li role="listitem" class="subskill-item">
										<span role="text" class="skill-tag" aria-label="Vanilla JS">Vanilla JS</span>
									</li>
									<li role="listitem">
										<span role="text" class="skill-tag" aria-label="Vue">Vue</span>
										<span role="text" class="skill-tag" aria-label="React">React</span>
										<span role="text" class="skill-tag" aria-label="Angular">Angular</span>
										<span role="text" class="skill-tag" aria-label="Svelte">Svelte</span>
										<span role="text" class="skill-tag" aria-label="Alpine">Alpine</span>
									</li>
								</ul>
							</li>
							<li role="listitem" class="skill-item">
								<h3>Diseño</h3>
								<ul role="list" class="subskills-list">
									<li role="listitem" class="subskill-item">
										<span role="text" class="skill-tag" aria-label="Figma">Figma</span>
										<span role="text" class="skill-tag" aria-label="Adobe XD">Adobe XD</span>
										<span role="text" class="skill-tag" aria-label="Storybook">Storybook</span>
									</li>
									<li role="listitem">
										<span role="text" class="skill-tag" aria-label="Animaciones">Animaciones</span>
										<span role="text" class="skill-tag" aria-label="Canvas">Canvas</span>
										<span role="text" class="skill-tag" aria-label="SVG">SVG</span>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
				</simplebar>
			</article>
			<article id="resumeBackend" class="resume-item resume-item--backend" role="region"
				aria-labelledby="backend-title" tabindex="0">
				<simplebar :autoHide="false" class="simplebar-height">
					<h2 id="backend-title" class="text-body1">🧙‍♂️ Backend</h2>
					<small class="text-body2" aria-hidden="true">El Dominio de las Profundidades</small>
					<nav class="skills-nav" aria-label="Navegación de habilidades de Backend">
						<ul role="list" class="skills-list">
							<li role="listitem" class="skill-item">
								<h3>Lenguajes</h3>
								<ul role="list" class="subskills-list">
									<li role="listitem" class="subskill-item">
										<span role="text" class="skill-tag" aria-label="Node.js">Node.js</span>
										<span role="text" class="skill-tag" aria-label="Deno">Deno</span>
									</li>
									<li role="listitem">
										<span role="text" class="skill-tag" aria-label="PHP">PHP</span>
										<span role="text" class="skill-tag" aria-label="Python">Python</span>
										<span role="text" class="skill-tag" aria-label="Java">Java</span>
									</li>
								</ul>
							</li>
							<li role="listitem" class="skill-item">
								<h3>Frameworks</h3>
								<ul role="list" class="subskills-list">
									<li role="listitem" class="subskill-item">
										<span role="text" class="skill-tag" aria-label="Laravel">Laravel</span>
										<span role="text" class="skill-tag" aria-label="CakePHP">CakePHP</span>
										<span role="text" class="skill-tag" aria-label="Express">Express</span>
										<span role="text" class="skill-tag" aria-label="NestJS">NestJS</span>
									</li>
								</ul>
							</li>
							<li role="listitem" class="skill-item">
								<h3>APIs y Plantillas</h3>
								<ul role="list" class="subskills-list">
									<li role="listitem" class="subskill-item">
										<span role="text" class="skill-tag" aria-label="REST">REST</span>
										<span role="text" class="skill-tag" aria-label="GraphQL">GraphQL</span>
										<span role="text" class="skill-tag" aria-label="Smarty">Smarty</span>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
				</simplebar>
			</article>
			<article id="resumeOthers" class="resume-item resume-item--others" role="region"
				aria-labelledby="others-title" tabindex="0">
				<simplebar :autoHide="false" class="simplebar-height">
					<h2 id="others-title" class="text-body1">📚 Otros Conjuros</h2>
					<small class="text-body2" aria-hidden="true">Saberes Complementarios</small>
					<nav class="skills-nav" aria-label="Navegación de habilidades complementarias">
						<ul role="list" class="skills-list">
							<li role="listitem" class="skill-item">
								<h3>Bases de Datos</h3>
								<ul role="list" class="subskills-list">
									<li role="listitem" class="subskill-item">
										<span role="text" class="skill-tag" aria-label="MySQL">MySQL</span>
										<span role="text" class="skill-tag" aria-label="PostgreSQL">PostgreSQL</span>
										<span role="text" class="skill-tag" aria-label="MongoDB">MongoDB</span>
									</li>
									<li role="listitem">
										<span role="text" class="skill-tag" aria-label="Redis">Redis</span>
										<span role="text" class="skill-tag" aria-label="Prisma">Prisma</span>
									</li>
								</ul>
							</li>
							<li role="listitem" class="skill-item">
								<h3>Testing</h3>
								<ul role="list" class="subskills-list">
									<li role="listitem" class="subskill-item">
										<span role="text" class="skill-tag" aria-label="Jest">Jest</span>
										<span role="text" class="skill-tag" aria-label="Mocha">Mocha</span>
										<span role="text" class="skill-tag" aria-label="Cypress">Cypress</span>
									</li>
								</ul>
							</li>
							<li role="listitem" class="skill-item">
								<h3>Herramientas</h3>
								<ul role="list" class="subskills-list">
									<li role="listitem" class="subskill-item">
										<span role="text" class="skill-tag" aria-label="Git">Git</span>
										<span role="text" class="skill-tag" aria-label="SEO">SEO</span>
										<span role="text" class="skill-tag"
											aria-label="Accesibilidad">Accesibilidad</span>
										<span role="text" class="skill-tag" aria-label="PWA">PWA</span>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
				</simplebar>
			</article>
			<article id="resumeCTO" class="resume-item resume-item--others" role="region" aria-labelledby="cto-title"
				tabindex="0">
				<simplebar :autoHide="false" class="simplebar-height">
					<h2 id="cto-title" class="text-body1">🧠 Magia del Archimago</h2>
					<small class="text-body2" aria-hidden="true">Conocimientos como CTO</small>
					<nav class="skills-nav" aria-label="Navegación de habilidades de CTO">
						<ul role="list" class="skills-list">
							<li role="listitem" class="skill-item">
								<h3>DevOps & Infraestructura</h3>
								<ul role="list" class="subskills-list">
									<li role="listitem" class="subskill-item">
										<span role="text" class="skill-tag" aria-label="Plesk">Plesk</span>
										<span role="text" class="skill-tag" aria-label="CloudPanel">CloudPanel</span>
										<span role="text" class="skill-tag" aria-label="cPanel">cPanel</span>
									</li>
									<li role="listitem">
										<span role="text" class="skill-tag" aria-label="Docker">Docker</span>
										<span role="text" class="skill-tag" aria-label="Kubernetes">Kubernetes</span>
									</li>
									<li role="listitem">
										<span role="text" class="skill-tag" aria-label="NGINX">NGINX</span>
										<span role="text" class="skill-tag" aria-label="Certbot">Certbot</span>
										<span role="text" class="skill-tag" aria-label="AWS">AWS</span>
									</li>
								</ul>
							</li>
							<li role="listitem" class="skill-item">
								<h3>Arquitectura</h3>
								<ul role="list" class="subskills-list">
									<li role="listitem" class="subskill-item">
										<span role="text" class="skill-tag"
											aria-label="Microservicios">Microservicios</span>
										<span role="text" class="skill-tag" aria-label="Monolitos">Monolitos</span>
										<span role="text" class="skill-tag" aria-label="Serverless">Serverless</span>
									</li>
									<li role="listitem">
										<span role="text" class="skill-tag" aria-label="CDN">CDN</span>
										<span role="text" class="skill-tag"
											aria-label="Balanceadores">Balanceadores</span>
									</li>
								</ul>
							</li>
							<li role="listitem" class="skill-item">
								<h3>Gestión</h3>
								<ul role="list" class="subskills-list">
									<li role="listitem" class="subskill-item">
										<span role="text" class="skill-tag" aria-label="Agile">Agile</span>
										<span role="text" class="skill-tag" aria-label="Scrum">Scrum</span>
									</li>
									<li role="listitem">
										<span role="text" class="skill-tag"
											aria-label="Documentación">Documentación</span>
										<span role="text" class="skill-tag" aria-label="Liderazgo">Liderazgo</span>
									</li>
									<li role="listitem">
										<span role="text" class="skill-tag"
											aria-label="Comunicación técnica">Comunicación
											técnica</span>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
				</simplebar>
			</article>
			<article id="resumeLeadership" class="resume-item resume-item--others" role="region"
				aria-labelledby="leadership-title" tabindex="0">
				<simplebar :autoHide="false" class="simplebar-height">
					<h2 id="leadership-title" class="text-body1">📜 Artes del Liderazgo & Comunicación</h2>
					<small class="text-body2" aria-hidden="true">Comunicación & Gestión</small>
					<nav class="skills-nav" aria-label="Navegación de habilidades de Liderazgo">
						<ul role="list" class="skills-list">
							<li role="listitem" class="skill-item">
								<h3>Herramientas de Comunicación</h3>
								<ul role="list" class="subskills-list">
									<li role="listitem" class="subskill-item">
										<span role="text" class="skill-tag" aria-label="Slack">Slack</span>
										<span role="text" class="skill-tag" aria-label="Discord">Discord</span>
										<span role="text" class="skill-tag" aria-label="etc">etc.</span>
									</li>
								</ul>
							</li>
							<li role="listitem" class="skill-item">
								<h3>Gestión de Proyectos</h3>
								<ul role="list" class="subskills-list">
									<li role="listitem" class="subskill-item">
										<span role="text" class="skill-tag" aria-label="Jira">Jira</span>
										<span role="text" class="skill-tag" aria-label="Trello">Trello</span>
										<span role="text" class="skill-tag" aria-label="etc">etc.</span>
									</li>
									<li role="listitem">
										<span role="text" class="skill-tag" aria-label="CDN">CDN</span>
										<span role="text" class="skill-tag"
											aria-label="Balanceadores">Balanceadores</span>
									</li>
								</ul>
							</li>
							<li role="listitem" class="skill-item">
								<h3>Flujos y Metodologías</h3>
								<ul role="list" class="subskills-list">
									<li role="listitem" class="subskill-item">
										<span role="text" class="skill-tag" aria-label="Agile">Agile</span>
										<span role="text" class="skill-tag" aria-label="Scrum">Scrum</span>
										<span role="text" class="skill-tag" aria-label="Kanban">Kanban</span>
									</li>
									<li role="listitem">
										<span role="text" class="skill-tag"
											aria-label="Documentación">Documentación</span>
										<span role="text" class="skill-tag" aria-label="Liderazgo">Liderazgo</span>
									</li>
									<li role="listitem">
										<span role="text" class="skill-tag"
											aria-label="Comunicación técnica">Comunicación
											técnica</span>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
				</simplebar>
			</article>
		</div>
	</section>
</template>
<style scoped lang="scss">
.simplebar-height {
	max-height: 60vh;
}

section {
	position: relative;
	overflow: hidden;
	background: var(--background-color);
	color: var(--text-color);

	.resume-content {
		margin-top: 1rem;
		margin-bottom: 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;

		@media (min-width: 1200px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (min-width: 900px) and (max-width: 1199px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 899px) {
			grid-template-columns: 1fr;
		}

		.resume-item {
			border: 2px solid hsl(120deg 85% 24%);
			border-radius: 8px;
			position: relative;
			overflow: hidden;
			// max-width: 600px;
			width: 100%;
			padding: 1.5rem;
			background: var(--background-color);

			&::before {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: var(--text-color-opacity);
				opacity: 0.1;
				z-index: 0;
			}

			h2 {
				font-size: 1.5rem;
				line-height: 1.2;
				color: var(--text-color);
				margin-bottom: 0.5rem;
				position: relative;
				z-index: 1;
			}

			small {
				font-style: italic;
				color: var(--text-color-opacity);
				font-size: 0.9rem;
				display: block;
				margin-bottom: 1.5rem;
			}

			ul {
				counter-reset: item;
				list-style: none;
				padding-left: 0.5rem;

				li {
					position: relative;
					padding-left: 1.25rem;
					margin-bottom: 1.25rem;
					min-height: 2rem;

					&::before {
						content: counter(item) ".";
						counter-increment: item;
						color: hsl(120deg 85% 24%);
						font-weight: bold;
						position: absolute;
						left: 0;
						font-size: 0.9rem;
						line-height: 1.2;
						padding-left: 0.25rem;
					}

					ul {
						padding-top: 1rem;
						line-height: 1.5;

						li {
							margin-bottom: 1rem;
							min-height: 2rem;

							span {
								display: inline-block;
								padding: 0.5rem 1rem;
								margin-right: 0.75rem;
								margin-bottom: 0.5rem;
								color: hsl(0deg 0% 100%);
								background: hsl(120deg 85% 4%);
								transition: all 0.3s ease;
								font-size: 0.95rem;
								border-radius: 4px;
								position: relative;
								z-index: 1;
								min-width: 8rem;
								text-align: center;

								&.resume-item__select {
									color: hsl(0deg 0% 100%);
									background: hsl(120deg 85% 24%);
									transform: scale(1.05);
									box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
									font-weight: bold;
								}

								&:hover {
									transform: scale(1.02);
									background: hsl(120deg 85% 14%);
									box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
									font-weight: bold;
								}

								&:focus {
									outline: 2px solid hsl(120deg 85% 24%);
									outline-offset: 2px;
									background: hsl(120deg 85% 14%);
								}
							}
						}
					}
				}
			}
		}
	}

	@media (max-width: 768px) {
		.resume-content {
			grid-template-columns: 1fr;
		}

		.resume-item {
			padding: 1.25rem;
		}

		h2 {
			font-size: 1.25rem;
		}

		h3 {
			font-size: 1.1rem;
		}

		span {
			font-size: 0.875rem;
		}
	}
}
</style>