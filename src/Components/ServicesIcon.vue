<template>
	<section class="section">
		<div class="hero-body">
		    <div class="container">
			    <div class="section-title">
			      <h2 class="subtitle _is-start"><i class="fa fa-book" aria-hidden="true" style="margin-right:5px"></i>   ຫຼັກສູດຮຽນ</h2>

			      	<router-link to="AllServices" class="_is-end">
			      		<i class="fa fa-book" aria-hidden="true" style="margin-right:5px"></i>   
			      		<span><b>ຫຼັກສູດຮຽນທັງໝົດ</b></span>
					</router-link>
			    </div>
		    </div>
		</div>
		<div class="container">
			<div class="columns is-multiline is-mobile is-desktop">
				<div class="column is-3-desktop is-6-mobile is-3-tablet" v-for="servicesIcon in ServicesIcons">
					<div class=" icon-wraper">
						<img class="service-icon" :src="servicesIcon.src" alt="">
						<div class="service-type">
							<span class="service-name"><b>{{servicesIcon.name}}</b></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		data() {
			return {
				ServicesIcons:[
					{
						src: 'http://nightclub.co.uk/wp-content/uploads/2014/07/inovations.png',
						name:'Marketing'
					},
					{
						src: 'http://gavinmace.com.au/wp-content/themes/gavinmace/img/icon-services-web-development.png',
						name:'Graphi Design'
					},
					{
						src: 'https://www.digitalmarketingtraining.academy/hs-fs/hubfs/DMT/icon_digital_marketing.png?t=1508357006134&width=201&name=icon_digital_marketing.png',
						name:'Web Appication'
					},
					{
						src: 'https://www.ewebbyte.com/wp-content/uploads/2015/07/mob-app-icon.png',
						name:'App Android'
					},
					{
						src: 'http://adlartech.com/wp-content/uploads/2017/07/e-learning-solutions.png',
						name:'Web Design'
					},
					{
						src: 'http://www.seeicons.com/images/iconstore/512/seeicons__57834f95a2461.png',
						name:'WordPress'
					},
					{
						src: 'https://cdn2.iconfinder.com/data/icons/ios-7-style-metro-ui-icons/512/MetroUI_OS_Apple.png',
						name:'App IOS'
					},
					{
						src: 'http://ideacloudcreative.co.uk/wp-content/uploads/2015/03/web-devolopment.png',
						name:'Programing'
					},
					
				]
			}
		}
	}
</script>

<style>
	.service-icon{width: 60%; height: auto}
	.icon-wraper{
		background-color: white;
		/*display: -webkit-flex;
		-moz-display:flex;
		display: flex;
	    flex-direction: column;
	    justify-content: center;
	    align-items: center;*/
		padding: 20px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
	.icon-wraper{
		box-shadow: 8px 10px 20px 0px rgba(46,61,73,0.15);
		text-align: center;
		cursor: pointer;
	}

	.icon-wraper:hover{box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);}


	/*responsive*/
	@media screen and (max-width: 768px){
		.service-icon{ width: 100% !important;}
		span.service-name{font-size: 14px !important}

	}
</style>