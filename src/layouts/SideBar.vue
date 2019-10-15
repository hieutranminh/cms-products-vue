<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" :class="{'toggled' : toggled}">

    <!-- Sidebar - Brand -->
    <router-link tag="a" :to="{name:'Dashboard'}" class="sidebar-brand d-flex align-items-center justify-content-center">
      <div class="sidebar-brand-icon">
        <i class="fas fa-users-cog"></i>
      </div>
      <div class="sidebar-brand-text mx-3">Admin</div>
    </router-link>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <router-link tag="li" :to="{name:'Dashboard'}" class="nav-item active">
      <a class="nav-link" href="index.html">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
    </router-link>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
      Dynamic Page
    </div>

    <!-- Nav Item  -->
    <router-link tag="li" :to="{name:'News'}" active-class="active" class="nav-item">
      <a class="nav-link">
        <i class="fas fa-newspaper"></i>
        <span>News</span></a>
    </router-link>

    <router-link tag="li" :to="{name: 'Products'}" active-class="active" class="nav-item">
      <a class="nav-link">
        <i class="fab fa-product-hunt"></i>
        <span>Products</span></a>
    </router-link>

    <router-link tag="li" :to="{name: 'Sliders'}" active-class="active" class="nav-item">
      <a class="nav-link">
        <i class="fas fa-clone"></i>
        <span>Sliders</span></a>
    </router-link>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
      Information Page
    </div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        <i class="fas fa-fw fa-cog"></i>
        <span>Components</span>
      </a>
      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Custom Components:</h6>
          <a class="collapse-item" href="buttons.html">Buttons</a>
          <a class="collapse-item" href="cards.html">Cards</a>
        </div>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
      User & Function
    </div>

    <router-link tag="li" :to="{name: 'Accounts'}" active-class="active" class="nav-item">
      <a class="nav-link">
        <i class="fas fa-user-tie"></i>
        <span>User</span></a>
    </router-link>

    <li class="nav-item">
      <a class="nav-link" href="charts.html">
        <i class="fas fa-file-export"></i>
        <span>Export Data</span></a>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block">

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle" @click="toggleSideBar"></button>
    </div>

  </ul>
</template>

<script>
  export default {
    name: 'SideBar',
    data () {
      return {
        toggled: false,
      }
    },
    created () {

    },
    methods: {
      toggleSideBar () {
        this.toggled = !this.toggled;
      }
    }
  }
</script>
