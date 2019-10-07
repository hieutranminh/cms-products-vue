// import components
import Products from '../../pages/products/Products'
import Create from '../../pages/products/Create'
import Edit from '../../pages/products/Edit'

export default [
  {
    path: 'products',
    name: 'Products',
    component: Products,
    meta: {
      title: 'Products'
    }
  },
  {
    path: 'products/create',
    name: 'ProductsCreate',
    component: Create,
    meta: {
      title: 'Products Create'
    }
  },
  {
    path: 'products/edit/:id',
    name: 'ProductsEdit',
    component: Edit,
    meta: {
      title: 'Products Edit'
    }
  }
]
