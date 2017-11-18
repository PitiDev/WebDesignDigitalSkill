<template>
	<section class="section">
		<div class="hero-body">
		    <div class="container">
			    <div class="section-title">
			      <h2 class="subtitle _is-start"><i class="fa fa-mobile" aria-hidden="true" style="margin-right:5px"></i>Mobile App</h2>

			      	<router-link to="AllServices" class="_is-end">
			      		<i class="fa fa-mobile" aria-hidden="true" style="margin-right:5px"></i>
			      		<span class="icon-label">ຫຼັກສູດທັງໝົດ</span>
					</router-link>
			    </div>
		    </div>
		</div>
		<div class="container">
		  <router-link to="Single">
			<div class="columns is-multiline is-mobile is-desktop" id="Waters_slider">
				<div class="column is-3-desktop is-1-mobile is-4-tablet" v-for="mobile in Mobiles">
					<div class="card">
					  <div class="card-image">
					    <figure class="cover_img">
					      <img :src="mobile.src" alt="Placeholder image">
					    </figure>
					  </div>
					  <div class="card-content">
					    <div class="content">
					      <h4><b>ສອນສ້າງແອັບ Android</b></h4>
					      <p>ໂດຍ: ປິຕິ ພັນທະສົມບັດ <br>ນະຄອນຫຼວງວຽງຈັນ</p>
					      <br>
					      <span><i class="fa fa-clock-o" aria-hidden="true"></i> {{mobile.time}}</span><br>
					    </div>
					  </div>
					</div>
				</div>				
			</div>
		</router-link>
			<div class="slick-nav is-hidden-mobile is-hidden-tablet-only">
				<span class="-prev w-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
				<span class="-next w-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		data() {
			return {
				Mobiles:[
					{
						src: 'https://i.pinimg.com/736x/3d/59/61/3d5961522783745186e43b1f710079ef--design-color-color-ui.jpg',
						time: '15 ຊົ່ວໂມງ'
					},
					{
						src: 'https://cdn.dribbble.com/users/1362697/screenshots/3187289/upload.jpg',
						time: '15 ຊົ່ວໂມງ'
					},
					{
						src: 'http://www.appdesignvault.com/wp-content/uploads/2013/09/all-phone-1.png',
						time: '15 ຊົ່ວໂມງ'
					},
					{
						src: 'https://designmodo.com/wp-content/uploads/2013/06/PicLab-by-Roberto-Nickson.jpg',
						time: '15 ຊົ່ວໂມງ'
					},
					{
						src: 'http://thedeependdesign.com/wp-content/uploads/2013/11/appicons-e1385491132749.jpg',
						time: '15 ຊົ່ວໂມງ'
					},
					{
						src: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/cfa91f26569285.5635745a741b8.jpg',
						time: '15 ຊົ່ວໂມງ'
					},
					{
						src: 'https://cdn-images-1.medium.com/max/1600/1*6e2nhXL2nTaT0anVOHfo6Q.png',
						time: '15 ຊົ່ວໂມງ'
					},
				]
			}
		},

		methods:{
			WatersSlider() {
                $('#Waters_slider').slick({
                	prevArrow: $('.w-prev'),
				 	nextArrow: $('.w-next'),
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
			this.WatersSlider()
		}
	}
</script>

<style>

</style>