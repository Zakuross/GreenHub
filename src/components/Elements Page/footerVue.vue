<template>

  <!--    <div class="text-muted" style="margin-top: 15px; padding-top: 10px; background-color: #3c3d41;">-->
  <!--    <div id="footer-bottom" class="container-fluid" style="background-color: #000; color: #fff; height: 80px;">-->
  <!--      <div class="col-md-12" style="padding-top: 10px;">-->
  <!--        <p class="text-muted credit">-->
  <!--          {{msg}}<br>-->
  <!--          Designed by <a href="http://www.querysoft.com">{{creator}}</a><br>-->
  <!--          <span style="color: #fff; margin: 0px; padding: 0px;">-->
  <!--          <i class="fa fa-chrome fa-lg" aria-hidden="true"></i>-->
  <!--          <i class="fa fa-firefox fa-lg" aria-hidden="true"></i>-->
  <!--          <i class="fa fa-safari-square fa-lg" aria-hidden="true"></i>-->
  <!--          <i class="fa fa-edge fa-lg" aria-hidden="true"></i>-->
  <!--        </span>-->
  <!--        </p>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    </div>-->

  <footer class="backdark">
    <div class="container">
      <div class="row">
        <p class="link text-light green text-muted credit">{{msg}}
          <br>
          Designed by <a href="http://www.querysoft.com">{{creator}}</a>
          <br>
          <span style="color: #fff; margin: 0px; padding: 0px;">
            <div class="text-light text-center col-lg-4 col-xl-3 py-5">
              <div class="justify-content-center align-items-center">
                <p class="link text-light text-adress mx-auto mb-4">
                  Rue du Mont-Blanc 10 74000 Annecy
                </p>
                <div class="mx-auto white-line mb-4"></div>
                  <a href="tel:+330450435569">+33 04 50 43 55 69</a>
                <div class="mx-auto white-line mb-4"></div>
                  <a class="link text-light" href="https://mail.google.com/">contact par mail</a>
              </div>
            </div>
          </span>

          <div class="text-light bg-light col-lg-4 col-xl-6 pt-5 pb-1">
            <div class="text-center">
              <img
                class="mx-auto d-block mb-5">
<!--                src="../icons/darkmode-instagram.jpg"-->
<!--                alt="logo"-->
<!--                width="189"-->

              <div class="text-light d-flex justify-content-around w-25 mx-auto">
                <a href="https://www.instagram.com/">
                  <svg class="green social-icon" width="42" height="42">
<!--                    <use href="/darkmode-instagram.jpg"></use>-->
                  </svg>
                </a>
                <a href="https://www.youtube.com/">
                  <svg class="green social-icon" width="40" height="40">
                    <use href="./public/img/sprite.svg#icon-youtube"></use>
                  </svg>
                </a>
                <a href="https://fr-fr.facebook.com/">
                  <svg class="green social-icon" width="35" height="35">
                    <use href="./public/img/sprite.svg#icon-facebook"></use>
                  </svg>
                </a>
              </div>
              <p class="green">&#169; Restaurant World Cook Annecy - SITE OFFICIEL 2023</p>
            </div>
          </div>
          <div class="text-light text-center col-lg-4 col-xl-3 py-5">
            <div class="">
              <p class="mb-3 green">NEWSLETTER</p>
              <form action="submit">
                <label>
                  <input
                    type="email"
                    name="subscrite_email"
                    placeholder="Email"
                    required
                    class="input-field me-3"
                  >
                </label>
                <button class="input-field" type="submit">OK</button>
              </form>
              <a
                class="text-light link"
                href="https://www.service-public.fr/P10025"
              >MENTIONS LÉGALES</a>
            </div>
          </div>
        </p>
      </div>
    </div>
  </footer>



</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'test',
      creator: 'ZB Society'
    }
  }

}
</script>

<style lang="scss" scoped>
div{
  background-color: black;
}

a{
  color: white;
  text-decoration: none;

}

</style>