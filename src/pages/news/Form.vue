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
              <label for="new_title">Thumbnail Image</label>
              <el-upload
                  class="avatar-uploader"
                  action=""
                  :show-file-list="false"
                  :multiple="false"
                  :on-change="handleImageSuccess"
                  :auto-upload="false">
                <img v-if="inputData.input_news_thumbnail" :src="inputData.input_news_thumbnail" class="avatar" alt="upload" style="width: 200px;">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
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
          input_news_thumbnail: '',
          input_short_des: '',
          input_content_editor: '',
        }
      }
    },

    methods: {

      getBase64 (img, callback) {
        const reader = new FileReader()
        reader.addEventListener('load', () => callback(reader.result))
        reader.readAsDataURL(img)
      },

      handleImageSuccess(file) {
        if (this.beforeAvatarUpload(file.raw)) {
          this.getBase64(file.raw, (imageUrl) => {
            this.inputData.input_news_thumbnail = imageUrl
          })
        }
      },

      beforeAvatarUpload(file) {
        const typeValidator = ['image/jpeg', 'image/jpg', 'image/png']

        const isType = typeValidator.indexOf(file.type) !== -1
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isType) {
          this.$message.error('Picture must be JPEG, JPG, PNG format!');
        }
        if (!isLt2M) {
          this.$message.error('Picture size can not exceed 2MB!');
        }
        return isType && isLt2M;
      }
    }
  }
</script>

<style scoped>
  .avatar-uploader-icon {
    border: 2px dashed #d9d9d9!important;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    font-size: 28px;
    color: #8c939d;
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
  }
</style>
