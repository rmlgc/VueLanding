<script setup lang="ts">
import simplebar from 'simplebar-vue';
import jsondata from '@/assets/json-data.json'
import { onMounted, ref } from 'vue';
const jsonData = jsondata;

const openAccordion = (title: string, event: Event) => {
	const currentEl = event.currentTarget as Element;
	const element = document.getElementById(title);
	if (currentEl == null) return;
	if (element == null) return;
	if (currentEl.classList == null) return;
	currentEl.classList.toggle("open");
	element.getElementsByClassName("accordion-content")[0].classList.toggle("open");
}

const totalYears = ref(0);
const totalMonths = ref(0);

const totalYearsAcademic = ref(0);
const totalMonthsAcademic = ref(0);

onMounted(() => {
	let calculateMonths = 0;
	jsonData.jobs_trajectory.forEach(job => {
		const start = parseDate(job.date_start);
		const end = parseDate(job.date_end);
		calculateMonths += monthDiff(start, end) + 1;
	});

	totalYears.value = Math.floor(calculateMonths / 12);
	totalMonths.value = calculateMonths % 12;

	let academicCalculateMonths = 0;
	jsonData.academic_trajectory.forEach(job => {
		const start = parseDate(job.date_start);
		const end = parseDate(job.date_end);
		academicCalculateMonths += monthDiff(start, end) + 1;
	});

	totalYearsAcademic.value = Math.floor(academicCalculateMonths / 12);
	totalMonthsAcademic.value = academicCalculateMonths % 12;
})

function parseDate(dateStr: any) {
	if (dateStr === "Actually") return new Date(); // hoy
	return new Date(dateStr + " 1"); // asumir día 1
}

function monthDiff(start: any, end: any) {
	let months = (end.getFullYear() - start.getFullYear()) * 12;
	months += end.getMonth() - start.getMonth();
	return Math.max(months, 0);
}
</script>

<template>

	<section class="aboutMe">
		<div class="hero">
			<div class="title-tag">
				<h1 class="text-h1 title-tag-text">Rommel:</h1>
				<h2 class="text-h4 title-tag-text">Senior Web Developer and Project Mentor</h2>
			</div>
			<!-- <blockquote class="text-body2">
				<p>
					Kanban, Scrum, KISS...
					Methodology is just the map; the project is the destination. The map must adapt
					to the terrain.
				</p>
				<cite>Geminis AI</cite> -->
			<!-- La metodología es solo el mapa; el proyecto es el destino. El mapa debe adaptarse al terreno. -->
			<!-- </blockquote> -->
			<blockquote>
				<p>
					<!-- 
					Kanban, Scrum, KISS... la metodología es una <strong>herramienta, no una regla</strong>. Siempre
					debe ser <strong>flexible y adaptarse</strong> a las <strong>necesidades específicas del
						proyecto</strong>.
						 -->
					<span class="inline-block">
						Kanban, Scrum, KISS...
					</span>
					<span class="inline-block">
						methodology is a <strong>tool, not a rule</strong>.
					</span>
					<span class="inline-block">
						It must always be <strong>flexible and adapt</strong> to the <strong>project’s specific
							needs</strong>.
					</span>
				</p>
				<cite>Rommel Garcia Coronado</cite>
			</blockquote>
		</div>
		<p class="text-body2">
			<!-- Desarrollador Web con
			<strong>
				más de {{ totalYearsAcademic > 0 ? totalYearsAcademic : "" }} años de experiencia
			</strong>
			combinada:
			{{ totalYears > 0 ? totalYears : "" }} años en el sector profesional y
			{{ totalYearsAcademic - totalYears > 0 ? totalYearsAcademic - totalYears : "" }}
			años de aprendizaje académicos y a través de proyectos personales.
			<br>
			<br> -->
			Web Developer with {{ totalYearsAcademic > 0 ? totalYearsAcademic : "" }}+ years of combined experience:
			{{ totalYears > 0 ? totalYears : "" }} years in the professional sector and
			{{ totalYearsAcademic - totalYears > 0 ? totalYearsAcademic - totalYears : "" }} years of academic learning
			and personal projects.
		</p>
		<hr>
		<simplebar :autoHide="false" class="simplebar-height">
			<p class="text-body1">🧑‍🎓 Professional Formation Grade as Web Application Developer 👨‍💻</p>

			<div class="accordion" id="fullStack-web-developer">
				<div class="accordion-header" data-toggle-initial="collapsed" data-toggle-height
					data-toggle-text-prefix-alt=" ▼  " data-toggle-text-prefix=" ▲  "
					data-toggle-target="#fullStack-web-developer .accordion-content">
					$: FullStack web developer
				</div>
				<div class="accordion-content">
					<p>
						<small>
							I have little experience with apache servers, just enough to manage a web server. I am
							currently interested in learning how to manage/deploy serverless web/App
						</small>
					</p>
				</div>
			</div>
			<div class="accordion" id="frontend-web-developer">
				<div class="accordion-header" data-toggle-height data-toggle-initial="expanded"
					data-toggle-text-prefix-alt=" ▼  " data-toggle-text-prefix=" ▲  "
					data-toggle-target="#frontend-web-developer .accordion-content">
					$ Frontend web developer
				</div>
				<div class="accordion-content">
					<p>
						<small>
							I feel more confident designing and developing the client side (<a href="#resumeFrontend"
								:class="`bg-glass active`">FrontEnd</a>)
						</small>
					</p>
				</div>
			</div>
			<div class="accordion" id="backend-web-developer">
				<div class="accordion-header" data-toggle-height data-toggle-initial="collapsed"
					data-toggle-text-prefix-alt=" ▼  " data-toggle-text-prefix=" ▲  "
					data-toggle-target="#backend-web-developer .accordion-content">
					$ Backend web developer
				</div>
				<div class="accordion-content is-collapsed">
					<p>
						<small>
							however, developing the server side is always a challenge, it's not my best path, but being
							constantly learning is rewarding(<a href="#resumeFrontend"
								:class="`bg-glass active`">BackEnd</a>)
						</small>
					</p>
				</div>
			</div>
			<p class="text-body2">
				$ Helpdesk Operator
			</p>
			<hr>
			<p class="text-body2">
				🧑‍🎨 my free time:
			</p>
			<p class="text-body2">
				$ 👾 Play Videogames 🎲
			</p>
			<p class="text-body2">
				$ 🎥 Content creator 🐒
			</p>
		</simplebar>
	</section>
</template>

<style scoped lang="scss">
.simplebar-height {
	max-height: 60vh;
}

.accordion {
	border: 1px solid var(--text-color-opacity);

	&-header {
		display: flex;
		background: var(--text-color);
		color: var(--background-color);
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		padding: 0.5rem 1rem;
		padding-left: 20px;
		padding-right: 20px;
		cursor: pointer;

		&::after {
			content: "";
			font-weight: 900;
		}

		&.open::after {
			content: "-";
			font-size: 2rem;
			line-height: 1rem;
		}
	}

	&-content {
		// font-size: 0px;
		transition: all 0.5s ease-in-out;
		// padding: 0px;

		a,
		small {
			// font-size: 0px;
			// padding: 0px;
		}

		&.open,
		&.open a,
		&.open small {
			// font-size: initial;
			// padding: inherit;
		}
	}
}
</style>