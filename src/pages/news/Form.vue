<template>
  <form class="form-custom">
    <div class="row">
      <!--Form input-->
      <div class="col-lg-9">
        <div class="card mb-4 py-3 border-top-primary">
          <div class="card-body">
            <!--Field-->
            <div class="form-group">
              <label for="new_title">Title</label>
              <ValidationProvider
                  name="title"
                  rules="required|max:150"
                  v-slot="{ errors }">
                <input type="text"
                       class="form-control"
                       name="news_title"
                       id="new_title"
                       v-model="inputData.input_news_title"
                       placeholder="Enter title"/>
                <small id="emailHelp" class="form-text text-muted">{{ errors[0] }}</small>
              </ValidationProvider>
            </div>
            <!--Field-->
            <div class="form-group">
              <label for="thumbnail">Choose Thumbnail image</label>
              <div class="form-file">
                <input type="file"
                       name="thumbnail"
                       id="thumbnail">
              </div>
              <img class="img-file" src="../../assets/images/dummy-image.png" alt="dummy">
            </div>
            <!--Field-->
            <div class="form-group">
              <label for="short-des">Short Description</label>
              <textarea
                  class="form-control"
                  id="short-des" rows="3"
                  placeholder="Enter short description"
                  v-model="inputData.input_short_des">
              </textarea>
            </div>
            <!--Field-->
            <div class="form-group">
              <label>Contents</label>
              <jodit-vue v-model="inputData.input_content_editor"/>
            </div>
          </div>
        </div>
      </div>
      <!--Submit and back-->
      <div class="col-lg-3">
        <div class="card mb-4 py-3 border-top-primary">
          <div class="card-body">
            <button type="button" class="btn btn-success w-100">{{$route.name === 'NewsCreate' ? 'Create' : 'Edit'}}</button>
            <button type="button" @click="$router.go(-1)" class="btn btn-secondary w-100"><i class="fas fa-long-arrow-alt-left"></i>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
  import 'jodit/build/jodit.min.css'
  import JoditVue from 'jodit-vue'

  export default {
    name: 'Form',

    components: {JoditVue},

    data () {
      return {
        inputData: {
          input_news_title: '',
          input_short_des: '',
          input_content_editor: '',
        }
      }
    }
  }
</script>
