<template>
 <div>
 	<section>
 	 <div class="">
 	  <section id="margincard">
 	  	 <div class=""  id="colorcard">
			  <div class="">
			     <div class="">
			        <div class="column is-8-desktop is-12-mobile is-3-tablet is-offset-2">
			          <div class="box" id="colorbox">
			            <div class="field is-grouped" style="margin-top:5px">
			              <p class="control is-expanded">
			              	<div class="field">

							  <div class="control is-hidden-mobile">
							    <div class="select">
							      <select>
							        <option>Select Course</option>
							        <option>Web Design</option>
							        <option>Web Appication</option>
							        <option>App Android</option>
							        <option>App IOS</option>
							        <option>Graphic Design</option>
							      </select>
							    </div>
							  </div>

							</div>
			                <input class="input" type="text" placeholder="ຄົ້ນຫາຫຼັກສູດຮຽນ">
			              </p>
			              <p class="control" style="margin-left:5px">
			                <a class="button is-warning">
			                 <b> <router-link to="AllSearch">ຄົ້ນຫາ</router-link></b>
			                </a>
			              </p>
			            </div>
			          </div>
			        </div>
                </div>
			  </div>
			</div>
 	  </section>
 	 </div>
 	</section>
 </div>
</template>
<script>
	export default{
		
	}
</script>

<style scoped>
	#margincard{
		margin-top: 1px;
	}
	#center{
		text-align: center;
		font-size: 30px;
	}
	#colorcard{
		background-image: url('http://www.aspirecreative.co.uk/assets/images/blog-images/web-agency-process.jpg');
		height: 350px;
	}
	#text{
		color: #ffffff;
	}
	#colorbox{
		background: #CCC;
        opacity: 0.9;
        margin-top: 100px;
        margin-bottom: 50px;
	}
</style>