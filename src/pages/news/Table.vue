<template>
  <div class="card-body">
    <!--button Create-->
    <router-link tag="a" :to="{name: 'NewsCreate'}" class="btn btn-primary btn-icon-split mb-3">
            <span class="icon text-white-50">
              <i class="fas fa-plus"></i>
            </span>
      <span class="text">Create</span>
    </router-link>
    <!--Table-->
    <table class="table table-bordered table-responsive-lg mb-4">
      <thead>
        <tr>
        <th width="10%">No</th>
        <th width="35%">Title</th>
        <th width="20%">Updated at</th>
        <th width="20%">Created at</th>
        <th width="15%">Operations</th>
      </tr>
      </thead>
      <tbody>
        <!--Loop news-->
        <tr>
          <td>1</td>
          <td>Aliqua adipisci consequatur, ad ipsam tincidunt ad ducimus taciti saepe</td>
          <td>1 day ago</td>
          <td>1 week ago</td>
          <td class="text-center">
            <!--button Edit-->
            <router-link tag="button" :to="{name: 'NewsEdit', params: { id: 1 }}" class="m-1 btn btn-warning">
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
    <!--Pagination-->
    <vPagination
        class="pull-right"
        :page-count="6"
        :page-range="3"
        :margin-pages="2"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'">
    </vPagination>
  </div>
</template>

<script>
  //Pagination
  import vPagination from 'vuejs-paginate'

  export default {
    name: 'Table',

    components: {
      vPagination,
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
