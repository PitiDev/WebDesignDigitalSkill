<template>
  <div>
  	<section class="section" style="margin-top:20px">
  	  <div class="container"  v-for="single in Singles">
        <div class="columns is-multiline is-mobile is-desktop">
          <div class="column is-8-desktop is-12-mobile">
           <div class="card">
            <div class="card-image">
              <figure class="cover_img">
                <img :src="single.src" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <h4><b>{{single.h1}}</b></h4>
                <span> {{single.text}}</span><br>
              </div>
            </div>
          </div>
         </div>
         <div class="column is-4-desktop is-12-mobile is-clearfix">
           <div class="card">
            <div class="card-content">
              <div class="content">
                <center><h3><b style="color:#23d160">ກ່ຽວກັບຫຼັກສູດ</b></h3></center>
                <p><i class="fa fa-book" aria-hidden="true"></i>
                  <b style="color:#23d160">ຫຼັກສູດ:</b> {{ single.course }} </p>
                <p><i class="fa fa-bookmark-o" aria-hidden="true"></i>
                  <b style="color:#23d160">ຈຳນວນ:</b> {{ single.unit }} </p>
                <p><i class="fa fa-clock-o" aria-hidden="true"></i>
                  <b style="color:#23d160">ເວລາ:</b> {{ single.time }} </p>
                <p><i class="fa fa-usd" aria-hidden="true"></i>
                  <b style="color:#23d160">ລາຄາ:</b> {{ single.money }} </p>
                <center>
                  <router-link to="Alllearn">
                    <a href="#" class="button is-success is-outlined"><i class="fa fa-check-circle-o" aria-hidden="true" style="margin-right:5px"></i>ຊື້ຫຼັກສູດຮຽນ</a>
                  </router-link>
                </center>
              </div>
            </div>
          </div>

          <div class="card" style="margin-top:20px">
            <div class="card-image">
              <figure class="cover_img">
                <img :src="single.src" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">  
            </div>
          </div>

         </div>
         <div class="column is-8-desktop is-12-mobile">
           <div class="card">
            <div class="card-content">
              <h2><i class="fa fa-play-circle-o" aria-hidden="true" style="margin-right:10px"></i>
                <b>{{single.lession}}</b>
              </h2>
            </div>
          </div>
         </div>
         <div class="column is-8-desktop is-12-mobile">
           <div class="card">
            <div class="card-content">
              <h2><i class="fa fa-play-circle-o" aria-hidden="true" style="margin-right:10px"></i>
                <b>{{single.lession}}</b>
              </h2>
            </div>
          </div>
         </div>
         <div class="column is-8-desktop is-12-mobile">
           <div class="card">
            <div class="card-content">
              <h2><i class="fa fa-play-circle-o" aria-hidden="true" style="margin-right:10px"></i>
                <b>{{single.lession}}</b>
              </h2>
            </div>
          </div>
         </div>
         <div class="column is-8-desktop is-12-mobile">
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
            src: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/cfa91f26569285.5635745a741b8.jpg',
            h1: 'ຫຼັກສູດການພັດທະນາເວັບໄຊທ໌ ດ້ວຍ Frameworks Laravel + Vue',
            text: 'ຫຼັກສູດການພັດທະນາເວັບໄຊທ໌ ດ້ວຍ Frameworks Laravel + Vueຫຼັກສູດການພັດທະນາເວັບໄຊທ໌ ດ້ວຍ Frameworks Laravel + Vueຫຼັກສູດການພັດທະນາເວັບໄຊທ໌ ດ້ວຍ Frameworks Laravel + Vue',
            course: 'ຫຼັກສູດການພັດທະນາເວັບໄຊທ໌ ດ້ວຍ Frameworks Laravel + Vue',
            unit: '15 ບົດ',
            time: '12 ຊົ່ວໂມງ',
            money: '0 ກີບ',
            lession: 'ແນະນຳສູ່ຫຼັກສູດການພັດທະນາເວັບໄຊທ໌'
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