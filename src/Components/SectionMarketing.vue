<template>
	<section class="section">
		<div class="hero-body">
		    <div class="container">
			    <div class="section-title">
			      <h2 class="subtitle _is-start"><i class="fa fa-lightbulb-o" aria-hidden="true" style="margin-right:5px"></i>Digital Marketing</h2>

					<router-link to="AllServices" class="_is-end">
				      	<i class="fa fa-lightbulb-o" aria-hidden="true" style="margin-right:5px"></i>
				      	<span class="icon-label">ຫຼັກສູດທັງໝົດ</span>
					</router-link>

			    </div>
		    </div>
		</div>
		<div class="container">
		  <router-link to="Single">
			<div class="columns is-multiline is-mobile is-desktop" id="Account_slider">
				<div class="column is-3-desktop is-1-mobile is-4-tablet" v-for="marketing in Marketings">
					<div class="card">
					  <div class="card-image">
					    <figure class="cover_img">
					      <img :src="marketing.src" alt="Placeholder image">
					    </figure>
					  </div>
					  <div class="card-content">
					    <div class="content">
					      <h4><b>ຫຼັກສູດການຕະຫຼາດອອນໄລນ໌</b></h4>
					      <p>ໂດຍ: ປິຕິ ພັນທະສົມບັດ<br>
					      ນະຄອນຫຼວງວຽງຈັນ</p>
					      <br>
					      <span><i class="fa fa-clock-o" aria-hidden="true"></i> {{marketing.time}}</span><br>
					    </div>
					  </div>
					</div>
				</div>				
			</div>
		</router-link>
			<div class="slick-nav is-hidden-mobile is-hidden-tablet-only">
				<span class="-prev a-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
				<span class="-next a-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		data() {
			return {
				Marketings:[
					{
						src: 'http://digital4africa.com/wp-content/uploads/2017/07/A-Glimpse-Of-Digital-Marketing-Through-The-Eyes-Of-A-Practioner.jpg',
						time: '15 ຊົ່ວໂມງ'
					},
					{
						src: 'http://www.newmediadigital.com/digital/wp-content/uploads/2015/12/DigitalMarketing.jpg.pagespeed.ce.L2NuOLAmE9.jpg',
						time: '15 ຊົ່ວໂມງ'
					},
					{
						src: 'https://www.alleasolutions.com/wp-content/uploads/2017/08/wegyaani-digital-marketing-adwords.jpg',
						time: '15 ຊົ່ວໂມງ'
					},
					{
						src: 'https://www.growthpoint.info/wp-content/uploads/2017/08/treefrog-digital-marketing.jpg',
						time: '15 ຊົ່ວໂມງ'
					},
					{
						src: 'https://d1qhuz9ahqnrhh.cloudfront.net/wp-content/uploads/2017/01/Digital-Marketing-750x381.png',
						time: '15 ຊົ່ວໂມງ'
					},
					{
						src: 'http://www.thenextrex.com/wp-content/uploads/2017/04/shutterstock_193197476.jpg',
						time: '15 ຊົ່ວໂມງ'
					},
					{
						src: 'https://blog.hubspot.com/hubfs/00-Blog_Thinkstock_Images/sales-performance-plan-strategies.jpg?t=1506513622756',
						time: '15 ຊົ່ວໂມງ'
					},
				]
			}
		},

		methods:{
			AccountSlider() {
                $('#Account_slider').slick({
                	prevArrow: $('.a-prev'),
				 	nextArrow: $('.a-next'),
    				appendDots:$(".-dot"),
                    arrows: true,
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                        }
                    }, {
                        breakpoint: 992,
                        settings: {
                        	arrows: false,
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }, {
                        breakpoint: 768,
                        centerMode: true,
                        settings: {
                        	arrows: false,
                            centerMode: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                        	arrows: false,
                            centerMode: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                });
            },
		},

		mounted() {
			this.AccountSlider()
		}
	}
</script>

<style>

</style>