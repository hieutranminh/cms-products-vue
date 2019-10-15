<template>
  <div class="card-body">
    <!--button Create-->
    <router-link tag="a" :to="{name: 'AccountsCreate'}" class="btn btn-primary btn-icon-split mb-3">
            <span class="icon text-white-50">
              <i class="fas fa-plus"></i>
            </span>
      <span class="text">Create</span>
    </router-link>
    <!--Table-->
    <table class="table table-bordered table-responsive-lg mb-4">
      <thead>
      <tr>
        <th width="25%">Username</th>
        <th width="35%">Email</th>
        <th width="25%">Created at</th>
        <th width="15%">Operations</th>
      </tr>
      </thead>
      <tbody>
      <!--Loop news-->
      <tr>
        <td>hieutranminh</td>
        <td>hieu.tranminhhcm@gmail.com</td>
        <td>08/10/2019</td>
        <td class="text-center">
          <!--button Edit-->
          <router-link tag="button" :to="{name: 'AccountsEdit', params: { id: 1 }}" class="m-1 btn btn-warning">
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
