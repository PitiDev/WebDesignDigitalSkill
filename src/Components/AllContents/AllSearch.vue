<template>
	<section class="section">
		<div class="container">
			<h1 id="font1">ຜົນການຄົ້ນຫາ: Graphic Design</h1>
			<hr>
			<router-link to="Single">
			<div class="columns is-multiline is-mobile is-desktop">
				<div class="column is-3-desktop is-12-mobile is-4-tablet" v-for="search in Searchs">
					<div class="card">
					  <div class="card-image">
					    <figure class="cover_img">
					      <img :src="search.src" alt="Placeholder image">
					    </figure>
					  </div>
					  <div class="card-content">
					    <div class="content">
					      <h4><b>ສອນອອກແບບ</b></h4>
					      <p>ໂດຍ: ປິຕິ ພັນທະສົມບັດ <br>
					      ນະຄອນຫຼວງວຽງຈັນ</p>
					      <br>
					      <span><i class="fa fa-clock-o" aria-hidden="true"></i> {{search.time}}</span><br>
					    </div>
					  </div>
					</div>
				</div>				
			</div>
		  </router-link>
		</div>
	</section>
</template>

<script>
	export default{
		data() {
			return {
				Searchs:[
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
				]
			}
		},

		created() {
            //Scrolls to top when view is displayed
            window.scrollTo(0, 0);
        },
	}
</script>

<style>
	.breadcrumb li {
		cursor: pointer;
	}
	#font1{
		font-size: 30px;
	}
</style>