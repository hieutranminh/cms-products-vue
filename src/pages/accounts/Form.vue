<template>
  <form class="form-custom">
    <div class="row">
      <!--Form input-->
      <div class="col-lg-9">
        <div class="card mb-4 py-3 border-top-primary">
          <horizontal-stepper :steps="accountSteps"
                              @completed-step="completeStep"
                              @active-step="isStepActive"
                              @stepper-finished="alert">
          </horizontal-stepper>
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
  </form>
</template>

<script>
  import HorizontalStepper from 'vue-stepper';

  // This components will have the content for each stepper step.
  import StepOne from './StepOne.vue';
  import StepTwo from './StepTwo.vue';
  import StepThree from './StepThree.vue';

  export default {
    name: 'Form',

    components: {
      HorizontalStepper
    },

    data(){
      return {
        accountSteps: [
          {
            icon: 'info',
            name: 'first',
            title: 'Information',
            subtitle: '4 Field',
            component: StepOne,
            completed: false

          },
          {
            icon: 'lock',
            name: 'second',
            title: 'Passwords',
            subtitle: '2 Fields',
            component: StepTwo,
            completed: false
          },
          {
            icon: 'done_outline',
            name: 'second',
            title: 'Submission',
            subtitle: 'Done',
            component: StepThree,
            completed: false
          }
        ],
        canContinue: false,
      }
    },

    methods: {
      // Executed when @completed-step event is triggered
      completeStep(payload) {
        this.accountSteps.forEach((step) => {
          if (step.name === payload.name) {
            step.completed = true;
          }
        })
      },
      // Executed when @active-step event is triggered
      isStepActive(payload) {
        this.accountSteps.forEach((step) => {
          if (step.name === payload.name) {
            if(step.completed === true) {
              step.completed = false;
            }
          }
        })
      },
      // Executed when @stepper-finished event is triggered
      alert(payload) {
        alert('end')
      }
    }
  }
</script>
