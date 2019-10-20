<template>
  <div class="setting">
    Setting Testing
    <!--  Top Bar -->
    <SettingTopBar />

    <!--  Sidebar -->
    <SettingSidebar />

    <!-- Container -->
  </div>
</template>

<script>
import SettingTopBar from "@/components/settings/SettingTopBar.vue";
import SettingSidebar from "@/components/settings/SettingSidebar.vue";
// import SettingTests from "@/components/settings/SettingTests.vue";
// import SettingAdmins from "@/components/settings/SettingAdmins.vue";

export default {
  name: "setting",
  components: {
    SettingTopBar,
    SettingSidebar
  }

};
</script>