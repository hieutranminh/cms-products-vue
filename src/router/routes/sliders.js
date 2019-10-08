// import components
import Sliders from '../../pages/sliders/Sliders'
import Create from '../../pages/sliders/Create'
import Edit from '../../pages/sliders/Edit'

export default [
  {
    path: 'sliders',
    name: 'Sliders',
    component: Sliders,
    meta: {
      title: 'Sliders'
    }
  },
  {
    path: 'sliders/create',
    name: 'SlidersCreate',
    component: Create,
    meta: {
      title: 'Sliders Create'
    }
  },
  {
    path: 'sliders/edit/:id',
    name: 'SlidersEdit',
    component: Edit,
    meta: {
      title: 'Sliders Edit'
    }
  }
]
