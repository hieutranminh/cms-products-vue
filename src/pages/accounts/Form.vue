<template>
  <div class="row">
    <div class="col-lg-9">
      <div class="card mb-4 py-3 border-top-primary">
        <div class="card-body">
          <!--Timeline-->
          <div class="form-timeline">
            <!--Step item timeline-->
            <div class="item" :class="{active: step >= 1}">
              <div class="icon">
                <i class="fas fa-info"></i>
              </div>
              <p>Information</p>
            </div>
            <!--Step item timeline-->
            <div class="item" :class="{active: step >= 2 }">
              <div class="icon">
                <i class="fas fa-user-lock"></i>
              </div>
              <p>Passwords</p>
            </div>
            <!--Step item timeline-->
            <div class="item" :class="{active: step === 3}">
              <div class="icon">
                <i class="fas fa-check"></i>
              </div>
              <p>Submission</p>
            </div>
          </div>
          <!--Form input-->
          <ValidationObserver tag="form" class="form-custom" ref="formAccount">
            <!--Step 01-->
            <div class="row" v-if="step === 1">
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
                           v-model="inputData.input_email"/>
                    <small class="form-text text-muted">{{ errors[0] }}</small>
                  </ValidationProvider>
                </div>
              </div>
              <!--Button event-->
              <div class="col-lg-12">
                <div class="button-event my-3 text-right">
                  <button class="next" :class="{disabled: !canNext}" @click.prevent="next()" :disabled="!canNext">Next</button>
                </div>
              </div>
            </div>
            <!--Step 02-->
            <div class="row" v-if="step === 2">
              <!--Field-->
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="password">Password</label>
                  <ValidationProvider
                      name="password"
                      rules="required"
                      v-slot="{ errors }">
                    <input type="text"
                           class="form-control"
                           id="password"
                           placeholder="Enter password"
                           v-model="inputData.input_password"/>
                    <small class="form-text text-muted">{{ errors[0] }}</small>
                  </ValidationProvider>
                </div>
              </div>
              <!--Field-->
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="password_confirm">Password confirmation</label>
                  <ValidationProvider
                      name="password confirmation"
                      rules="required"
                      v-slot="{ errors }">
                    <input type="text"
                           class="form-control"
                           id="password_confirm"
                           placeholder="Enter password confirm"
                           v-model="inputData.input_password_confirm"/>
                    <small class="form-text text-muted">{{ errors[0] }}</small>
                  </ValidationProvider>
                </div>
              </div>
              <!--Button event-->
              <div class="col-lg-12">
                <div class="button-event my-3 d-flex justify-content-between">
                  <button class="prev" @click.prevent="prev()">Previous</button>
                  <button class="submit" @click.prevent="submit()">Submit</button>
                </div>
              </div>
            </div>
            <!--Step 03-->
            <div class="row" v-if="step === 3">
              <div class="col-lg-12">
                <div class="submission d-flex justify-content-center">
                  <div class="content text-center">
                    <img src="../../assets/images/submission.png" alt="submission">
                    <h4>Submission</h4>
                  </div>
                </div>
              </div>
            </div>
          </ValidationObserver>
        </div>
      </div>
    </div>
    <!--Submit and back-->
    <div class="col-lg-3">
      <div class="card mb-4 py-3 border-top-primary">
        <div class="card-body">
          <button type="button" @click="$router.go(-1)" class="btn btn-secondary w-100"><i
              class="fas fa-long-arrow-alt-left"></i>
            Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Form',

    data () {
      return {
        step: 1,
        canNext: false,
        inputData: {
          input_first_name: '',
          input_last_name: '',
          input_username: '',
          input_email: '',
          input_password:'',
          input_password_confirm:''
        }
      }
    },

    watch: {
      inputData :{
        handler () {
          console.log(this.$refs.formAccount.ctx)
          if (this.$refs.formAccount.ctx.invalid) {
            this.canNext = false;
          }else {
            this.canNext = true;
          }
        },

        deep:true
      }
    },

    methods: {
      next () {
        this.step++;
      },

      prev () {
        this.step--;
      },

      submit () {
        this.step++;
      }
    },
  }
</script>
