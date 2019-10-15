<template>
  <div class="card-body">
    <!--button Create-->
    <router-link tag="a" :to="{name: 'SlidersCreate'}" class="btn btn-primary btn-icon-split mb-3">
            <span class="icon text-white-50">
              <i class="fas fa-plus"></i>
            </span>
      <span class="text">Create</span>
    </router-link>
    <!--Table-->
    <table class="table table-bordered table-responsive-lg mb-4">
      <thead>
      <tr>
        <th width="10%">Order</th>
        <th width="15%">Background</th>
        <th width="25%">Title</th>
        <th width="25%">Description</th>
        <th width="10%">Show</th>
        <th width="15%">Operations</th>
      </tr>
      </thead>
      <tbody>
      <!--Loop news-->
      <tr>
        <td>1</td>
        <td>
          <img src="../../assets/images/dummy-image.png" style="width: 120px;" alt="dummy">
        </td>
        <td>Tellus debitis ullam dicta leo maecenas adipiscing atque? </td>
        <td>Aliqua adipisci consequatur, ad ipsam tincidunt ad ducimus taciti saepe</td>
        <td class="text-center">
          <el-switch v-model="isShow">
          </el-switch>
        </td>
        <td class="text-center">
          <!--button Edit-->
          <router-link tag="button" :to="{name: 'SlidersEdit', params: { id: 1 }}" class="m-1 btn btn-warning">
            <i class="fas fa-edit"></i>
          </router-link>
          <!--button Delete-->
          <button @click="handleDelete(1)" class="m-1 btn btn-danger">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Table',

    data () {
      return {
        isShow: false,
      }
    },

    methods: {
      //Handle Delete
      handleDelete() {
        this.$swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {
            this.$swal.fire({
              title: "Deleted!",
              text: "Your row has been deleted.",
              type: "success",
              timer: 1000
            })
          }
        })
      }
    }
  }
</script>
