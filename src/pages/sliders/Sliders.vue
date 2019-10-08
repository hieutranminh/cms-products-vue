<template>
  <div class="row">
    <!--Title-->
    <div class="col-lg-12">
      <h1 class="h3 mb-2 text-gray-800 mb-3">{{ $route.meta.title }}</h1>
    </div>
    <!--Table-->
    <div class="col-lg-12">
      <div class="card mb-4 py-3 border-top-primary">
        <!--Component table-->
        <Table/>
      </div>
    </div>
  </div>
</template>

<script>
  import Table from './Table'

  export default {
    name: 'Sliders',
    components: {Table},
  }
</script>
