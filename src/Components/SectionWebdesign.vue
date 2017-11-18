<template>
	<section class="section">
		<div class="hero-body">
		    <div class="container">
			    <div class="section-title">
			    	<h2 class="subtitle _is-start"><i class="fa fa-desktop" aria-hidden="true" style="margin-right:5px"></i>Web Design</h2>


					<router-link to="AllServices" class="_is-end">
				    	<i class="fa fa-desktop" aria-hidden="true" style="margin-right:5px"></i>
				    	<span class="icon-label">ຫຼັກສູດທັງໝົດ</span>
					</router-link>


			    </div>
		    </div>
		</div>
		<div class="container">
		  <router-link to="Single">
			<div class="columns is-multiline is-mobile is-desktop" id="electric_slider">
				<div class="column is-3-desktop is-1-mobile is-4-tablet" v-for="webdesign in Webdesigns">
					<div class="card">
					  <div class="card-image">
					    <figure class="cover_img">
					      <img :src="webdesign.src" alt="Placeholder image">
					    </figure>
					  </div>
					  <div class="card-content">
					    <div class="content">
					      <h4><b>ອອກແບບເວັບໄຊທ໌</b></h4>
					      <p>ໂດຍ: ປິຕິ ພັນທະສົມບັດ<br>
					      ນະຄອນຫຼວງວຽງຈັນ</p>
					      <br>
					      <span><i class="fa fa-clock-o" aria-hidden="true"></i> 15 ຊົ່ວໂມງ</span><br>
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
				Webdesigns:[
					{src: 'http://balanceyourdesign.com/wp-content/uploads/2015/08/Modern-Web-Design-Trends.jpg'},
					{src: 'https://atdw.com.au/wp-content/uploads/2016/11/Web-development.jpg'},
					{src: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/06/uxdesign-1200x629.jpg'},
					{src: 'http://nv.ua/img/article/7035/43_main_ukr.jpg'},
					{src: 'https://image.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg'},
					{src: 'http://www.propluslogics.com/wp-content/uploads/2017/08/web-design-coimbatore.jpg'},
					{src: 'http://blog.unpakt.netdna-cdn.com//wp-content/uploads/2017/01/47062135_l-Web-Design-Website-WWW-Layout-Page-Connection-Concept.jpg'},
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