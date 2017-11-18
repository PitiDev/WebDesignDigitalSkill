<template>
 <div>
  <section>
    <nav class="navbar is-transparent" style="background-color:#ECEFF1">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/"><b>
        <router-link to="/"><b>ໜ້າຫຼັກ</b>
        </router-link></b>
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="#">
          <b>ຫຼັກສູດຮຽນ</b>
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="#">
            Web Development
          </a>
          <a class="navbar-item" href="#">
            Web Design
          </a>
          <a class="navbar-item" href="#">
            Graphic Design
          </a>
          <a class="navbar-item" href="#">
            Mobile App Android
          </a>
          <a class="navbar-item" href="#">
            Mobile App IOS
          </a>
        </div>
      </div>
      <a class="navbar-item" href="/"><b>
        <router-link to="About"><b>ກ່ຽວກັບເວັບ</b>
        </router-link></b>
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <router-link to="Login">
             <b class="button is-success is-outlined">ເຂົ້າສູ່ລະບົບ</b>
            </router-link>
          </p>
          <p class="control">
            <router-link to="Register">
             <b class="button is-warning">ລົງທະບຽນ</b>
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
  </section>
 </div>
</template>

<script>
	import vSelect from 'vue-select'
	export default{

		methods:{
			TaggleShow(){
				this.show = !this.show
			},

		},
	}
</script>

<style>


</style>