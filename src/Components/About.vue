<template>
  <div>
  	<section class="section" style="margin-top:20px">
  	  <div class="container" v-for="about in Abouts">
  	  	<div class="columns is-multiline is-mobile is-desktop">
  	  	 <div class="column is-12-desktop is-12-mobile">
  	  	  <div class="card">
            <div class="card-image">
              <figure class="cover_img">
                <img :src="about.src" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <p> {{ about.text }} </p>
              </div>
            </div>
          </div>
  	  	</div>
  	   </div>
  	  </div>
  	</section>
  </div>
</template>

<script>
export default{
    data() {
      return {
        Abouts:[ 
          {
            src: 'http://128.199.218.120/wp-content/uploads/2016/03/presentaion-1.jpg',
            text: 'ຫຼັກສູດການພັດທະນາເວັບໄຊທ໌ ດ້ວຍ Frameworks Laravel + Vue'
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
<style scoped>
	
</style>