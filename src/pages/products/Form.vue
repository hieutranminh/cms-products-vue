<template>
  <form class="form-custom">
    <div class="row">
      <!--Form input-->
      <div class="col-lg-9">
        <div class="card mb-4 py-3 border-top-primary">
          <div class="card-body">
            <!--Field-->
            <div class="form-group">
              <label for="name">Product Name</label>
              <ValidationProvider
                  name="product name"
                  rules="required|max:150"
                  v-slot="{ errors }">
                <input type="text"
                       class="form-control"
                       id="name"
                       v-model="inputData.input_product_name"
                       placeholder="Enter product name"/>
                <small class="form-text text-muted">{{ errors[0] }}</small>
              </ValidationProvider>
            </div>
            <!--Field-->
            <div class="form-group">
              <label for="short-des">Short Description</label>
              <ValidationProvider
                  name="short description"
                  rules="max:500"
                  v-slot="{ errors }">
              <textarea
                  class="form-control"
                  id="short-des"
                  rows="5"
                  placeholder="Enter short description"
                  v-model="inputData.input_short_des">
              </textarea>
                <small class="form-text text-muted">{{ errors[0] }}</small>
              </ValidationProvider>
            </div>
            <!--Field-->
            <div class="form-group">
              <label for="price">Price</label>
              <ValidationProvider
                  name="price"
                  rules="required|numeric|max:10"
                  v-slot="{ errors }">
                <input type="text"
                       class="form-control"
                       id="price"
                       v-model="inputData.input_product_price"
                       placeholder="Enter price"/>
                <small class="form-text text-muted">{{ errors[0] }}</small>
              </ValidationProvider>
            </div>
            <!--Field-->
            <div class="form-group">
              <label for="price">Quantity</label>
              <ValidationProvider
                  name="quantity"
                  rules="required|numeric|max:5"
                  v-slot="{ errors }">
                <input type="text"
                       class="form-control"
                       id="quantity"
                       v-model="inputData.input_product_quantity"
                       placeholder="Enter quantity"/>
                <small class="form-text text-muted">{{ errors[0] }}</small>
              </ValidationProvider>
            </div>
            <!--Field-->
            <div class="form-group">
              <label for="price">Upload Images</label>
              <vue-upload-multiple-image
                  @upload-success="uploadImageSuccess"
                  @before-remove="beforeRemove"
                  @edit-image="editImage"
                  dragText="Drag Image (More)"
                  browseText="(OR) Choose"
                  primaryText="Default"
                  :data-images="inputData.input_upload_image"
              ></vue-upload-multiple-image>
            </div>
          </div>
        </div>
      </div>
      <!--Submit and back-->
      <div class="col-lg-3">
        <div class="card mb-4 py-3 border-top-primary">
          <div class="card-body">
            <button type="button" class="btn btn-success w-100">{{$route.name === 'ProductsCreate' ? 'Create' : 'Edit'}}</button>
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
  import VueUploadMultipleImage from 'vue-upload-multiple-image'

  export default {
    name: 'Form',

    components: {
      VueUploadMultipleImage,
    },

    data () {
      return {
        inputData: {
          input_product_name: '',
          input_short_des: '',
          input_product_price: '',
          input_product_quantity: '',
          input_upload_image: []
        }
      }
    },

    methods: {
      uploadImageSuccess(formData, index, fileList) {
        console.log('data', fileList)
        this.inputData.input_upload_image = fileList
        // Upload image api
        // axios.post('http://your-url-upload', formData).then(response => {
        //   console.log(response)
        // })
      },
      beforeRemove (index, done, fileList) {
        console.log('index', index, fileList)
        var r = confirm("remove image")
        if (r == true) {
          done()
        } else {
        }
      },
      editImage (formData, index, fileList) {
        console.log('edit data', formData, index, fileList)
      },
    }
  }
</script>
