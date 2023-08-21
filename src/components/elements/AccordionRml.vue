<script setup lang="ts">
import type { PropType } from 'vue'
import simplebar from 'simplebar-vue';

interface element {
  text?: string
  class?: string
  attribute?: string
}

interface accordion {
  title: string|element
  description: string|element
  icon?: string
}

const props = defineProps({
  accordion: Object as PropType<accordion>
})
const openAccordion = (title:string, event:Event)=>{
  const currentEl = event.currentTarget;
  const element = document.getElementById(title)
  if(currentEl== null)return
  if(element== null)return
  currentEl.classList.toggle("open");
  console.log(event.currentTarget);
  console.log(element.getElementsByClassName("accordion-content")[0].classList.toggle("open"));

}

</script>
<template>
<div>
            <dl>
              <dt>$: FullStack web developer
              </dt>
              <dd false>
                <small>
                I have little experience with apache servers, just enough to manage a web server. I am currently
                interested in learning how to manage/deploy serverless web/App
              </small>
              </dd>
            </dl>
          </div>
<div class="accordion" id="fullStack-web-developer">
    <div class="accordion-header" @click="openAccordion('fullStack-web-developer',$event)">
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

</style>