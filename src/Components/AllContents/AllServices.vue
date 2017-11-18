<template>
	<section class="section">
		<div class="container">
			<nav class="breadcrumb" aria-label="breadcrumbs">
			  <ul>
			    <li>
					<router-link to="/">
			    		<a href="#">ໜ້າຫຼັກ</a>
					</router-link>
			    </li>
			    <li class="is-active"><a href="#" aria-current="page">ຫຼັກສູດທັງໝົດ</a></li>
			  </ul>
			</nav>
			<router-link to="Single">
			<div class="columns is-multiline is-mobile is-desktop">
				<div class="column is-3-desktop is-12-mobile is-4-tablet" v-for="account in Accounts">
					<div class="card">
					  <div class="card-image">
					    <figure class="cover_img">
					      <img :src="account.src" alt="Placeholder image">
					    </figure>
					  </div>
					  <div class="card-content">
					    <div class="content">
					      <h4><b>ສອນອອກແບບ</b></h4>
					      <p>ໂດຍ: ປິຕິ ພັນທະສົມບັດ <br>
					      ນະຄອນຫຼວງວຽງຈັນ</p>
					      <br>
					      <span> {{account.tel}}</span><br>
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
				Accounts:[
					{
						src: 'https://i.pinimg.com/736x/3d/59/61/3d5961522783745186e43b1f710079ef--design-color-color-ui.jpg',
						tel: 'Web Design'
					},
					{
						src: 'https://cdn.dribbble.com/users/1362697/screenshots/3187289/upload.jpg',
						tel: '02097778968'
					},
					{
						src: 'http://www.appdesignvault.com/wp-content/uploads/2013/09/all-phone-1.png',
						tel: '02097778968'
					},
					{
						src: 'https://designmodo.com/wp-content/uploads/2013/06/PicLab-by-Roberto-Nickson.jpg',
						tel: '02097778968'
					},
					{
						src: 'http://thedeependdesign.com/wp-content/uploads/2013/11/appicons-e1385491132749.jpg',
						tel: '02097778968'
					},
					{
						src: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/cfa91f26569285.5635745a741b8.jpg',
						tel: '02097778968'
					},
					{
						src: 'https://cdn-images-1.medium.com/max/1600/1*6e2nhXL2nTaT0anVOHfo6Q.png',
						tel: '02097778968'
					},
					{
						src: 'https://i.pinimg.com/736x/3d/59/61/3d5961522783745186e43b1f710079ef--design-color-color-ui.jpg',
						tel: '02097778968'
					},
					{
						src: 'https://cdn.dribbble.com/users/1362697/screenshots/3187289/upload.jpg',
						tel: '02097778968'
					},
					{
						src: 'http://www.appdesignvault.com/wp-content/uploads/2013/09/all-phone-1.png',
						tel: '02097778968'
					},
					{
						src: 'https://designmodo.com/wp-content/uploads/2013/06/PicLab-by-Roberto-Nickson.jpg',
						tel: '02097778968'
					},
					{
						src: 'http://thedeependdesign.com/wp-content/uploads/2013/11/appicons-e1385491132749.jpg',
						tel: '02097778968'
					},
					{
						src: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/cfa91f26569285.5635745a741b8.jpg',
						tel: '02097778968'
					},
					{
						src: 'https://cdn-images-1.medium.com/max/1600/1*6e2nhXL2nTaT0anVOHfo6Q.png',
						tel: '02097778968'
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
</style>