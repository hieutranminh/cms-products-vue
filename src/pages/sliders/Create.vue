<template>
  <div class="row">
    <!--Title-->
    <div class="col-lg-12">
      <h1 class="h3 mb-2 text-gray-800 mb-3">{{ $route.meta.title }}</h1>
    </div>
    <!--Form-->
    <div class="col-lg-12">
      <Form/>
    </div>
  </div>
</template>

<script>
  import Form from './Form'

  export default {
    name: 'Create',
    components: {Form},
  }
</script>
