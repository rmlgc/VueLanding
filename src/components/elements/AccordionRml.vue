<script setup lang="ts">
	import type { PropType } from 'vue'
	import simplebar from 'simplebar-vue'

	interface element {
		text?: string
		class?: string
		attribute?: string
	}

	interface AccordionItem {
		title: string | element
		description: string | element
		icon?: string
	}

	const props = defineProps({
		accordion: Object as PropType<AccordionItem>
	})

	const openAccordion = (title: string, event: Event) => {
		const currentEl = event.currentTarget as Element
		const element = document.getElementById(title)
		if (currentEl == null) return
		if (element == null) return
		currentEl.classList.toggle("open")
		console.log(event.currentTarget)
		console.log(element.getElementsByClassName("accordion-content")[0].classList.toggle("open"))
	}
</script>

<template>
	<div>
		<dl>
			<dt>$: FullStack web developer</dt>
			<dd false>
				<small>
					I have little experience with apache servers, just enough to manage a web server. I am currently
					interested in learning how to manage/deploy serverless web/App
				</small>
			</dd>
		</dl>
	</div>
	<div class="accordion" id="fullStack-web-developer">
		<div class="accordion-header" @click="openAccordion('fullStack-web-developer', $event)">
			$: FullStack web developer
		</div>
		<div class="accordion-content">
			<p>
				<small>
					I have little experience with apache servers, just enough to manage a web server. I am currently
					interested in learning how to manage/deploy serverless web/App
				</small>
			</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.accordion {
		width: 100%;
	}

	.accordion-header {
		cursor: pointer;
		padding: 1rem;
		border-bottom: 1px solid #eee;
	}

	.accordion-header:hover {
		background: #f8f9fa;
	}

	.accordion-content {
		overflow: hidden;
		max-height: 0;
		transition: max-height 0.3s ease;
	}

	.accordion-content p {
		padding: 1rem;
		margin: 0;
	}

	.accordion-content p small {
		color: #6c757d;
	}

	@media (max-width: 768px) {
		.accordion {
			padding: 1rem;
		}
	}
</style>