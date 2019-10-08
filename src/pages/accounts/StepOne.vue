<template>
  <div class="card-body">
    <div class="row">
      <!--Field-->
      <div class="col-lg-6">
        <div class="form-group">
          <label for="first_name">First Name</label>
          <ValidationProvider
              name="first name"
              rules="required"
              v-slot="{ errors }">
            <input type="text"
                   class="form-control"
                   id="first_name"
                   placeholder="Enter first name"
                   v-model="inputData.input_first_name"/>
            <small class="form-text text-muted">{{ errors[0] }}</small>
          </ValidationProvider>
        </div>
      </div>
      <!--Field-->
      <div class="col-lg-6">
        <div class="form-group">
          <label for="last_name">Last Name</label>
          <ValidationProvider
              name="last name"
              rules="required"
              v-slot="{ errors }">
            <input type="text"
                   class="form-control"
                   id="last_name"
                   placeholder="Enter last name"
                   v-model="inputData.input_last_name"/>
            <small class="form-text text-muted">{{ errors[0] }}</small>
          </ValidationProvider>
        </div>
      </div>
      <!--Field-->
      <div class="col-lg-6">
        <div class="form-group">
          <label for="username">Username</label>
          <ValidationProvider
              name="username"
              rules="required"
              v-slot="{ errors }">
            <input type="text"
                   class="form-control"
                   id="username"
                   placeholder="Enter username"
                   v-model="inputData.input_username"/>
            <small class="form-text text-muted">{{ errors[0] }}</small>
          </ValidationProvider>
        </div>
      </div>
      <!--Field-->
      <div class="col-lg-6">
        <div class="form-group">
          <label for="email">Email</label>
          <ValidationProvider
              name="email"
              rules="required"
              v-slot="{ errors }">
            <input type="text"
                   class="form-control"
                   id="email"
                   placeholder="Example@gmail.com"
                   v-model="inputData.input_first_name"/>
            <small class="form-text text-muted">{{ errors[0] }}</small>
          </ValidationProvider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StepOne',

    data() {
      return {
        inputData: {
          input_first_name: '',
          input_last_name: '',
          input_username: '',
          input_email: '',
        },
      }
    },

    methods : {

    }
  }
</script>
