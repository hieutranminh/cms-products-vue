<template>
  <div class="card-body">
    <form role="search" method="get">
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <label for="search_news_title">Search for news</label>
          <input type="text" name="search_news_title" class="form-control" id="search_news_title"
                 placeholder="Enter the news title...">
        </div>
        <div class="col-md-6 col-lg-5">
          <div class="start-date">
            <label>Time</label>
            <el-date-picker
                type="daterange"
                v-model="search_time"
                align="right"
                size="small"
                start-placeholder="Start"
                end-placeholder="End"
                value-format="yyyy-MM-dd"
                style="width: 100%">
            </el-date-picker>
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

    data () {
      return {
        search_time: '',
      }
    },
  }
</script>
