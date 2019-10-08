<template>
  <form class="form-custom">
    <div class="row">
      <!--Form input-->
      <div class="col-lg-9">
        <div class="card mb-4 py-3 border-top-primary">
          <div class="card-body">
            <!--Field-->
            <div class="form-group">
              <label for="background">Choose Background Slider</label>
              <div class="form-file">
                <input type="file"
                       name="background"
                       id="background"
                       @change="handleBackground">
              </div>
              <img class="img-file" v-if="inputData.input_slider_background" :src="inputData.input_slider_background" alt="dummy">
              <img class="img-file" v-else src="../../assets/images/dummy-image.png" alt="dummy">
            </div>
            <!--Field-->
            <div class="form-group">
              <label for="title">Slider Title</label>
              <ValidationProvider
                  name="title"
                  rules="required|max:100"
                  v-slot="{ errors }">
                <input type="text"
                       class="form-control"
                       id="title"
                       v-model="inputData.input_slider_title"
                       placeholder="Enter title"/>
                <small class="form-text text-muted">{{ errors[0] }}</small>
              </ValidationProvider>
            </div>
            <!--Field-->
            <div class="form-group">
              <label for="des">Slider Description</label>
              <ValidationProvider
                  name="description"
                  rules="max:150"
                  v-slot="{ errors }">
              <textarea
                  class="form-control"
                  id="des"
                  rows="3"
                  placeholder="Enter description"
                  v-model="inputData.input_slider_des">
              </textarea>
                <small class="form-text text-muted">{{ errors[0] }}</small>
              </ValidationProvider>
            </div>
          </div>
        </div>
      </div>
      <!--Submit and back-->
      <div class="col-lg-3">
        <div class="card mb-4 py-3 border-top-primary">
          <div class="card-body">
            <button type="button" class="btn btn-success w-100">{{$route.name === 'SlidersCreate' ? 'Create' :
              'Edit'}}
            </button>
            <button type="button" @click="$router.go(-1)" class="btn btn-secondary w-100"><i
                class="fas fa-long-arrow-alt-left"></i>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'Form',

    data () {
      return {
        inputData: {
          input_slider_background: '',
          input_slider_title: '',
          input_slider_des: '',
        }
      }
    },

    methods: {
      getBase64(file) {
        let self = this;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          self.inputData.input_slider_background = reader.result;
        };
      },

      handleBackground (event) {
        const file = event.target.files[0]
        this.getBase64(file)
      }
    },
  }
</script>
