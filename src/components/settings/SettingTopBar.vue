<template>
  <div class="setting_topBar">
    <div class="br-header">
      <div class="br-header-left">
        <div class="navicon-left hidden-md-down">
          <a id="btnLeftMenu" href>
            <i class="icon ion-navicon-round"></i>
          </a>
        </div>
        <div class="navicon-left hidden-lg-up">
          <a id="btnLeftMenuMobile" href>
            <i class="icon ion-navicon-round"></i>
          </a>
        </div>
        <!-- input-group -->
      </div>
      <!-- br-header-left -->
      <div class="br-header-right">
        <nav class="nav">
          <div class="dropdown nav-link nav-link-profile">
            <span class="logged-name hidden-md-down">Khaled Debuch</span>
            <img src="https://via.placeholder.com/500" class="wd-32 rounded-circle" alt />
            <span class="square-10 bg-success"></span>
          </div>
          <!-- dropdown -->
        </nav>
        <div class="navicon-right">
          <a id="btnRightMenu" href class="pos-relative">
            <i class="icon ion-ios-chatboxes-outline"></i>
            <!-- start: if statement -->
            <span class="square-8 bg-danger pos-absolute t-10 r--5 rounded-circle"></span>
            <!-- end: if statement -->
          </a>
        </div>
        <!-- navicon-right -->
      </div>
      <!-- br-header-right -->
    </div>
    <!-- br-header -->
  </div>
</template>

<script>
// import jQuery from 'jquery';
// const $ = jQuery;


export default {
  name: "setting_topBar",
};




/* 
$(document).ready(function() {
  // This will collapsed sidebar menu on left into a mini icon menu
  $("#btnLeftMenu").on("click", function() {
    var menuText = $(".menu-item-label");

    if ($("body").hasClass("collapsed-menu")) {
      $("body").removeClass("collapsed-menu");

      // show current sub menu when reverting back from collapsed menu
      $(".show-sub + .br-menu-sub").slideDown();

      $(".br-sideleft").one("transitionend", function(e) {
        menuText.removeClass("op-lg-0-force");
        menuText.removeClass("d-lg-none");
      });
    } else {
      $("body").addClass("collapsed-menu");

      // hide toggled sub menu
      $(".show-sub + .br-menu-sub").slideUp();

      menuText.addClass("op-lg-0-force");
      $(".br-sideleft").one("transitionend", function(e) {
        menuText.addClass("d-lg-none");
      });
    }
    return false;
  });
}); */
</script>