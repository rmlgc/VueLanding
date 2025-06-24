<script setup lang="ts">
import simplebar from 'simplebar-vue';

const openAccordion = (title: string, event: Event) => {
	const currentEl = event.currentTarget as Element;
	const element = document.getElementById(title);
	if (currentEl == null) return;
	if (element == null) return;
	if (currentEl.classList == null) return;
	currentEl.classList.toggle("open");
	element.getElementsByClassName("accordion-content")[0].classList.toggle("open");
}
</script>

<template>
	<section class="aboutMe">
		<div class="title-tag">
			<h2 class="text-h3"> 👋 Hi There? I’m Rommel</h2>
		</div>
		<p class="text-body2">
			<br />
			I have a 3 year career as a 'web developer' && <span class="inline-block">2 years of learning progress by my
				own projects</span>
		</p>
		<hr>
		<simplebar :autoHide="false" class="simplebar-height">
			<p class="text-body1">🧑‍🎓 Professional Formation Grade as Web Application Developer 👨‍💻</p>

			<div class="accordion" id="fullStack-web-developer">
				<div class="accordion-header" @click="openAccordion('fullStack-web-developer', $event)">
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
				<div class="accordion-header" @click="openAccordion('frontend-web-developer', $event)">
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
				<div class="accordion-header" @click="openAccordion('backend-web-developer', $event)">
					$ Backend web developer
				</div>
				<div class="accordion-content">
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
			content: "+";
			font-weight: 900;
		}

		&.open::after {
			content: "-";
			font-size: 2rem;
			line-height: 1rem;
		}
	}

	&-content {
		font-size: 0px;
		transition: all 0.5s ease-in-out;
		padding: 0px;

		a,
		small {
			font-size: 0px;
			padding: 0px;
		}

		&.open,
		&.open a,
		&.open small {
			font-size: initial;
			padding: inherit;
		}
	}
}
</style>