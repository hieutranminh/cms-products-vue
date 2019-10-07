<template>
  <div class="card-body">
    <form role="search" method="get">
      <div class="row">
        <div class="col-md-6 col-lg-2">
          <label for="search_product_code">Product code</label>
          <input type="text" name="search_product_code" class="form-control" id="search_product_code"
                 placeholder="Enter code">
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="start-date">
            <label for="search_product_name">Product name</label>
            <input type="text" name="search_product_name" class="form-control" id="search_product_name"
                   placeholder="Enter product name">
          </div>
        </div>
        <div class="col-md-6 col-lg-2">
          <div class="start-date">
            <label for="search_product_name">Price ASC/DESC</label>
            <div class="btn-group w-100" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary"><i class="fas fa-sort-numeric-up"></i></button>
              <button type="button" class="btn btn-primary"><i class="fas fa-sort-numeric-down-alt"></i></button>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-2">
          <label for="submit">&nbsp;</label>
          <button type="submit" id="submit" name="search" class="btn btn-block btn-primary">
            <i class="fa fa-search"></i>
            Search
          </button>
        </div>
        <div class="col-md-6 col-lg-2">
          <label for="reset">&nbsp;</label>
          <button type="reset" id="reset" name="reset" class="btn btn-block btn-warning">
            <i class="fas fa-retweet"></i>
            Reset
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Search',
  }
</script>
