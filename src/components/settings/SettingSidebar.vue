<template>
  <div class="setting-sidebar">
    <div class="br-logo"><a href=""><span>[</span>Smart <i>Lab</i><span>]</span></a></div>
    <div class="br-sideleft sideleft-scrollbar">
      <label class="sidebar-label pd-x-10 mg-t-20 op-3">Navigation</label>
      <ul class="br-sideleft-menu">
        <li class="br-menu-item">
          <a href="index.html" class="br-menu-link active">
            <i class="menu-item-icon icon ion-ios-home-outline tx-24"></i>
            <span class="menu-item-label">Dashboard</span>
          </a>
        </li>

        <!-- Users -->
        <li class="br-menu-item">
          <a href="layouts.html" class="br-menu-link">
            <i class="fas fa-users-cog fa-lg"></i>
            <span class="menu-item-label">Users</span>
          </a>
        </li>

        <!-- Tests -->
        <li class="br-menu-item">
          <a href="#" class="br-menu-link with-sub">
            <i class="fas fa-vials fa-lg"></i>
            <span class="menu-item-label">Tests</span>
          </a><!-- br-menu-link -->
          <ul class="br-menu-sub">
            <li class="sub-item"><a href="card-dashboard.html" class="sub-link">General</a></li>
            <li class="sub-item"><a href="card-social.html" class="sub-link">Forms</a></li>
            <li class="sub-item"><a href="card-listing.html" class="sub-link">Groups</a></li>
          </ul>
        </li>

        <!-- Doctors -->
        <li class="br-menu-item">
          <a href="#" class="br-menu-link with-sub">
            <i class="fas fa-user-md fa-lg"></i>
            <span class="menu-item-label">Doctors</span>
          </a><!-- br-menu-link -->
          <ul class="br-menu-sub">
            <li class="sub-item"><a href="#" class="sub-link">Doctors</a></li>
            <li class="sub-item"><a href="#" class="sub-link">Specializations</a></li>
          </ul>
        </li>

        <!-- Unit Price -->
        <li class="br-menu-item">
          <a href="sitemap.html" class="br-menu-link">
            <i class="fas fa-money-bill-alt fa-lg"></i>
            <span class="menu-item-label">Share Price</span>
          </a>
        </li>

        <!-- Tubes Color -->
        <li class="br-menu-item">
          <a href="sitemap.html" class="br-menu-link">
            <i class="fas fa-vial fa-lg"></i>
            <span class="menu-item-label">Tubes Color</span>
          </a>
        </li>

        <!-- Printers -->
        <li class="br-menu-item">
          <a href="sitemap.html" class="br-menu-link">
            <i class="fas fa-print fa-lg"></i>
            <span class="menu-item-label">Printers</span>
          </a>
        </li>

        <!-- Backup -->
        <li class="br-menu-item">
          <a href="sitemap.html" class="br-menu-link">
            <i class="fas fa-database fa-lg"></i>
            <span class="menu-item-label">Backup</span>
          </a>
        </li>

        <!-- Companies -->
        <li class="br-menu-item">
          <a href="sitemap.html" class="br-menu-link">
            <i class="fas fa-building fa-lg"></i>
            <span class="menu-item-label">Companies</span>
          </a>
        </li>

      </ul><!-- br-sideleft-menu -->

    </div><!-- br-sideleft -->
  </div>
</template>

<script>
export default {
  name: "setting_sidebar"
}
</script>