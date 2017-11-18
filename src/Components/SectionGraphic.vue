<template>
	<section class="section">
		<div class="hero-body">
		    <div class="container">
			    <div class="section-title">
			    	<h2 class="subtitle _is-start"><i class="fa fa-paint-brush" aria-hidden="true" style="margin-right:5px"></i>Graphic Design</h2>

					<router-link to="AllServices" class="_is-end">
				    	<i class="fa fa-paint-brush" aria-hidden="true" style="margin-right:5px"></i>
				    	<span class="icon-label">ຫຼັກສູດທັງໝົດ</span>
					</router-link>


			    </div>
		    </div>
		</div>
		<div class="container">
		  <router-link to="Single">
			<div class="columns is-multiline is-mobile is-desktop" id="electric_slider">
				<div class="column is-3-desktop is-1-mobile is-4-tablet" v-for="Electric in Electrics">
					<div class="card">
					  <div class="card-image">
					    <figure class="cover_img">
					      <img :src="Electric.src" alt="Placeholder image">
					    </figure>
					  </div>
					  <div class="card-content">
					    <div class="content">
					      <h4><b>ສອນອອກແບບ</b></h4>
					      <p>ໂດຍ: ປິຕິ ພັນທະສົມບັດ<br>
					      ນະຄອນຫຼວງວຽງຈັນ</p>
					      <br>
					      <span><i class="fa fa-clock-o" aria-hidden="true"></i> {{ Electric.time }}</span><br>
					    </div>
					  </div>
					</div>
				</div>				
			</div>
		</router-link>
			<div class="slick-nav is-hidden-mobile is-hidden-tablet-only">
				<span class="-prev e-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
				<span class="-next e-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		data() {
			return {
				Electrics:[
					{src: 'http://queueadvertising.co.uk/wp-content/uploads/2017/01/q-brand-graphic-design.jpg'},
					{src: 'http://www.webdschool.com/images/thumbs/graphic-design-courses.jpg'},
					{src: 'https://udemy-images.udemy.com/course/750x422/396204_c12c_3.jpg'},
					{src: 'http://www.bapugraphics.com/blog/wp-content/uploads/2016/11/lp_banner_graphic_design.jpg'},
					{time: '15 ຊົ່ວໂມງ'}
				]
			}
		},

		methods:{
			ElectricSlider() {
                $('#electric_slider').slick({
                	prevArrow: $('.e-prev'),
				 	nextArrow: $('.e-next'),
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
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }, {
                        breakpoint: 768,
                        centerMode: true,
                        settings: {
                            centerMode: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            centerMode: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                });
            },
		},

		mounted() {
			this.ElectricSlider()
		}
	}
</script>

<style>

</style>