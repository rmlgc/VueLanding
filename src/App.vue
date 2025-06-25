<script setup lang="ts">

import 'simplebar-vue/dist/simplebar.min.css';
import { onMounted, ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import WipPage from '@/components/Landing/WipPage.vue'
import NavMenu from '@/components/Landing/NavMenu.vue'
import SectionAboutMe from '@/components/Landing/SectionAboutMe.vue'
import SectionResume from '@/components/Landing/SectionResume.vue'
import SectionMyKnowledge from '@/components/Landing/SectionMyKnowledge.vue'
import SectionPortfolio from '@/components/Landing/SectionPortfolio.vue'
import SectionContact from '@/components/Landing/SectionContact.vue'


const pageIsLoad = ref(false)

interface MenuLinkItem {
	title: string;
	href: string;
	scrollTo?: {
		id: string;
	};
}
const menuLinks: MenuLinkItem[] = [
	{
		title: 'About Me',
		href: 'about-me',
		scrollTo: {
			id: 'elAboutMe',
		},
	},
	{
		title: 'Resume',
		href: 'resume',
		scrollTo: {
			id: 'elResume',
		},
	},
	{
		title: 'Knowledges',
		href: 'knowledge',
		scrollTo: {
			id: 'elKnowledge',
		},
	},
	{
		title: 'Portfolio',
		href: 'portfolio',
		scrollTo: {
			id: 'elPortfolio',
		},
	},
	{
		title: 'Contact',
		href: 'mailto:rommelgarcia4b@gmail.com?subject=Consulta%20desde%20tu%20portfolio!&body=Buenas%20Rommel%2C%20Me%20gustaria%20saber%20mas%20sobre...%0A%0A...%0A%0ASaludos%2C%0A',
		scrollTo: false,
	},
]
const headerMenuRef = ref<InstanceType<typeof NavMenu> | null>(null);

onMounted(() => {
	let options = {}
	isDocumentReadyStateComplete()
	document.onreadystatechange = () => {
		isDocumentReadyStateComplete()
	}
})
const isDocumentReadyStateComplete = () => {
	if (document.readyState == "complete") {
		setTimeout(() => {
			pageIsLoad.value = true;

			let targetSlug = '';
			const currentHash = window.location.hash;
			if (currentHash) {
				targetSlug = currentHash.substring(1);
			} else {
				const pathname = window.location.pathname;
				const pathSegments = pathname.split('/').filter(segment => segment);
				if (pathSegments.length > 0) {
					targetSlug = pathSegments[pathSegments.length - 1];
				}
			}
			if (targetSlug) {
				if (headerMenuRef.value && typeof headerMenuRef.value.externalScrollByHref === 'function') {
					setTimeout(() => {
						headerMenuRef.value.externalScrollByHref(targetSlug);
					}, 250);
				}
			}

		}, 2750);
	}
}
const initIntersection = (element: any, elementIsVisible: any, elementScroll: any, newOptions = {}) => {
	let options = {
		threshold: 0.12,
		...newOptions
	}

	useIntersectionObserver(
		element,
		([{ isIntersecting }], observerElement) => {
			elementIsVisible.value = isIntersecting
		},
		options
	)
}
</script>

<template>
	<NavMenu v-show="pageIsLoad" :menuLinks="menuLinks" ref="headerMenuRef"></NavMenu>
	<WipPage id="elWip" ref="elWip" class="content-full"></WipPage>
	<main v-show="pageIsLoad" class=" ">
		<SectionAboutMe id="elAboutMe" ref="elAboutMe" class="content section-card section-card--sticky main-content">
		</SectionAboutMe>
		<SectionResume id="elResume" ref="elResume" class="content section-card main-content"></SectionResume>
	</main>
	<main v-show="pageIsLoad" class=" ">
		<SectionMyKnowledge id="elKnowledge" ref="elKnowledge" class="content section-card ">
		</SectionMyKnowledge>
	</main>
	<main v-show="pageIsLoad" class=" ">
		<SectionPortfolio id="elPortfolio" ref="elPortfolio" class="content main-content section-card ">
		</SectionPortfolio>
		<SectionContact v-show="pageIsLoad" id="elContact" ref="elContact" class="content main-content wrap-center">
		</SectionContact>
	</main>
	<footer>
		<a href="https://linktr.ee/rommelgc" target="_blank">Rommel Garcia Coronado</a>
	</footer>
</template>

<style lang="scss">
.title-tag {
	background: var(--text-color);
	color: var(--background-color);
	padding-left: 30px;
	margin: 0px;
	margin-right: 60px;
	position: relative;
	padding: 1rem 0.5rem 1rem 2rem;

	&::before,
	&::after {
		content: "";
		display: block;
		position: absolute;
	}

	&::before {
		width: 30px;
		height: 100%;
		top: 0%;
		left: 0%;
		background: var(--background-color);
		clip-path: polygon(0 0, 0% 100%, 100% 50%);
	}

	&::after {
		width: 60px;
		height: 100%;
		top: 0%;
		left: 100%;
		background: var(--text-color);
		clip-path: polygon(0 0, 0% 100%, 100% 50%);
	}
}
</style>

<style scoped lang="scss">
.f {
	text-decoration: none;
}

#elAboutMe {

	@media only screen and (min-width:820px) {
		min-width: 400px;
		max-width: 40dvw;
	}
}
</style>