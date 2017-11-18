<template>
	<div>
		<Featured />
		<ServicesIcon />
		<SectionWebdesign />
		<SectionMobile />
		<SectionMarketing />
		<!-- <SectionGraphic /> -->
	</div>
</template>

<script>
	import AllServices from './AllContents/AllServices.vue'
	import Single from './AllContents/Single.vue'
	import Alllearn from './AllContents/Alllearn.vue'
	import AllSearch from './AllContents/AllSearch.vue'
	import About from './About.vue'
	import ServicesIcon from './ServicesIcon.vue'
	import SectionWebdesign from './SectionWebdesign.vue'
	import SectionMobile from './SectionMobile.vue'
	import SectionMarketing from './SectionMarketing.vue'
	import SectionGraphic from './SectionGraphic.vue'
	import Featured from './Featured.vue'

	
	export default{
		components:{
			ServicesIcon,
			SectionWebdesign,
			SectionMobile,
			SectionMarketing,
			SectionGraphic,
			Featured,
			AllServices,
			Single,
			Alllearn,
			AllSearch
		},

		created() {
            //Scrolls to top when view is displayed
            window.scrollTo(0, 0);
        },
	}

</script>

<style>

</style>