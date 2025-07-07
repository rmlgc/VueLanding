<script setup lang="ts">
import simplebar from 'simplebar-vue';
import heroMenu from '@/components/hero/heroMenu.vue';
import HeroAccordionMenu from '@/components/hero/heroAccordionMenu.vue'
import jsondata from '@/assets/data_knowledges_cards.json'
import { ref, onMounted } from 'vue'
import { toggleHeight, setupToggleHeightOnClick } from '@/assets/erre-web-helpers/src/helpers/toggleHeight.js';

const activeIndex = ref(null)
const jsonData = jsondata;

const sections = [
	{
		title: 'Frontend',
		subtitle: 'Vue, React, Svelte',
		items: ['Vue 3', 'React 18', 'SvelteKit']
	},
	{
		title: 'Backend',
		subtitle: 'Node, Laravel',
		items: ['Laravel 9', 'Express', 'Bun']
	},
	{
		title: 'Frontend',
		subtitle: 'Vue, React, Svelte',
		items: ['Vue 3', 'React 18', 'SvelteKit']
	},
	{
		title: 'Backend',
		subtitle: 'Node, Laravel',
		items: ['Laravel 9', 'Express', 'Bun']
	},
	{
		title: 'Frontend',
		subtitle: 'Vue, React, Svelte',
		items: ['Vue 3', 'React 18', 'SvelteKit']
	},
	{
		title: 'Backend',
		subtitle: 'Node, Laravel',
		items: ['Laravel 9', 'Express', 'Bun']
	}
]

onMounted(() => {
	setupToggleHeightOnClick();
});

const mapJsonToHeroAccordion = (categories: object) => {
	return categories.map((category: object) => ({
		title: category.name,
		subtitle: category.description,
		items: category.cards.map(card => {
			return {
				name: card.name,
				description: card.description,
				level: card.level,
				quote: Array.isArray(card.quote) ? card.quote.join(' / ') : card.quote,
				type: card.type,
				tcg_type: card.tcg_type,
				id: card.id,
				tags: card.tags || [],
				features: card.features || card.strengths || [],
				icon: card.icon || null,
				stats: card.stats || {},
				projects: card.projects || [],
				interactions: card.interactions || {}
			}
		}),
		theme: category.tcg_theme // si necesitas usarlo para color u otro prop extendido
	}))
}
const accordionData = mapJsonToHeroAccordion(jsondata.tech_stack_cards.categories)
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
		<!-- 
		<simplebar :autoHide="false" class="simplebar-width">
			<div class="hero-content">

				<hero-menu
					v-for="({ name, description, tcg_theme, cards }, index) in jsonData.tech_stack_cards.categories"
					:title="name" :cards="cards" :description="description" />
			</div>
		</simplebar>
		 -->
		<div class="hero-accordion-menu">
			<HeroAccordionMenu v-for="(section, index) in accordionData" :key="index" v-model="activeIndex"
				:index="index" :title="section.title" :subtitle="section.subtitle" height="75svh" direction="row"
				class="amin-w-[320px]" cardClass="accordion-card">
				<template #body>
					<div class="hero-accordion-body-content">


						<div :id="item.id + '-' + item.level" v-for="(item) in section.items"
							v-on:click.prevent="toggleHeight($event.currentTarget.querySelector('.accordion-details'))"
							class="hero-accordion-body-content-items">
							<h4>
								<span>
									{{ item.name }} <span class="material-symbols-outlined">touch_app</span>
								</span>
							</h4>
							<div class="accordion-details is-collapsed">
								<p>
									<small>
										{{ item.type }}
									</small> |
									<small>{{ item.level }} </small> |
									<small v-for="(name) in item.features">
										<span style="display: inline-block;">
											{{ name }} -
										</span>
									</small>
								</p>
								<hr />
								<p>

									{{ item.description }}
								</p>
								<!-- <p>
							<small v-for="(name) in item.tags">
								{{ name }} -
							</small>
						</p> -->
								<p>

								</p>
								<!-- <p>
							{{ item.icon }}
						</p>
						<p>
							{{ item.stats }}
						</p> -->
								<p>
									<small v-for="(name) in item.projects">
										{{ name ?? "" }} -
									</small>
								</p>
								<!-- <p>
							{{ item.interactions }}
						</p> -->
							</div>
							<hr><br>
						</div>
					</div>
				</template>
				<template #footer>
				</template>
			</HeroAccordionMenu>
		</div>
	</section>
</template>
<style scoped lang="scss">
.is-collapsed {
	overflow: hidden;
	height: 0;
}

.hero-accordion-menu {
	display: flex;
	overflow-x: auto;
	gap: 1rem;
	padding-right: 2rem;
	padding-left: 2rem;
	margin-top: 1rem;
	margin-bottom: 2rem;
}

.hero-content {
	display: flex;
	flex-direction: row;
	// justify-content: center;
	align-items: center;
	// flex-wrap: wrap;
	width: 100%;
	gap: 16px;

	min-height: 60svh;
	height: 97svh;
	max-height: 97svh;

	// @media (min-width: 600px) {
	// 	flex-flow: row wrap;
	// }
}

.accordion-card {
	background: var(--text-color-opacity);
	color: var(--background-color);
	display: flex;
	flex-direction: column;
}

.accordion-details {
	background: var(--text-color-opacity);
	border-radius: 8px;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
}

.hero-accordion-body-content {
	overflow: auto;
}

.hero-accordion-body-content-items {
	cursor: pointer;
}

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