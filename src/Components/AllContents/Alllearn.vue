<template>
  <div>
  	<section class="section" style="margin-top:20px">
  	  <div class="container"  v-for="single in Singles">
        <div class="columns is-multiline is-mobile is-desktop">
          <div class="column is-9-desktop is-12-mobile">
           <div class="card">
            <div class="card-image image">
              <iframe width="760" height="315" src="https://www.youtube-nocookie.com/embed/oIbXnBmD0jg" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="card-content">
              <div class="content">
                <h4><b>{{single.h1}}</b></h4>
                <span> {{single.text}}</span><br>
              </div>
            </div>
          </div>
         </div>
         <div class="column is-3-desktop is-12-mobile is-clearfix">
           <div class="card">
			  <div class="card-image">
			    <figure class="image is-900x900">
                <img :src="single.src" alt="Placeholder image">
              </figure>
			  </div>
			  <div class="card-content">
			    <div class="media">
			      <div class="media-content">
			        <p class="title is-4" style="text-align:center">ອຈ ປິຕິ ພັນທະສົມບັດ</p>
			      </div>
			    </div>
			  </div>
			</div>
         </div>
         <div class="column is-9-desktop is-12-mobile">
           <div class="card">
            <div class="card-content">
              <h2><i class="fa fa-play-circle-o" aria-hidden="true" style="margin-right:10px"></i>
              	<b>{{single.lession}}</b>
                <iframe width="720" height="315" src="https://www.youtube-nocookie.com/embed/znm56AuVimg" frameborder="0" allowfullscreen></iframe>
              </h2>
            </div>
          </div>
         </div>
         <div class="column is-9-desktop is-12-mobile">
           <div class="card">
            <div class="card-content">
              <h2><i class="fa fa-play-circle-o" aria-hidden="true" style="margin-right:10px"></i>
                <b>{{single.lession}}</b>
              </h2>
            </div>
          </div>
         </div>
         <div class="column is-9-desktop is-12-mobile">
           <div class="card">
            <div class="card-content">
              <h2><i class="fa fa-play-circle-o" aria-hidden="true" style="margin-right:10px"></i>
                <b>{{single.lession}}</b>
              </h2>
            </div>
          </div>
         </div>
         <div class="column is-9-desktop is-12-mobile">
           <div class="card">
            <div class="card-content">
              <h2><i class="fa fa-play-circle-o" aria-hidden="true" style="margin-right:10px"></i>
                <b>{{single.lession}}</b>
              </h2>
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
        Singles:[ 
          {
            src: 'https://www.statistics.com/uploads/images/profile-icon.png',
            h1: 'ຫຼັກສູດການພັດທະນາເວັບໄຊທ໌ ດ້ວຍ Frameworks Laravel + Vue',
            text: 'ຫຼັກສູດການພັດທະນາເວັບໄຊທ໌ ດ້ວຍ Frameworks Laravel + Vueຫຼັກສູດການພັດທະນາເວັບໄຊທ໌ ດ້ວຍ Frameworks Laravel + Vueຫຼັກສູດການພັດທະນາເວັບໄຊທ໌ ດ້ວຍ Frameworks Laravel + Vue',
            course: 'ຫຼັກສູດການພັດທະນາເວັບໄຊທ໌ ດ້ວຍ Frameworks Laravel + Vue',
            unit: '15 ບົດ',
            time: '12 ຊົ່ວໂມງ',
            money: '0 ກີບ',
            lession: '1 ສອນສ້າງເວັບໄຊທ໌ດ້ວຍ Wordpress By Dekcomlao SetupProgram EP1'
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