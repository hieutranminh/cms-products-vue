// import components
import Accounts from '../../pages/accounts/Accounts'
import Create from '../../pages/accounts/Create'
import Edit from '../../pages/accounts/Edit'

export default [
  {
    path: 'accounts',
    name: 'Accounts',
    component: Accounts,
    meta: {
      title: 'Accounts'
    }
  },
  {
    path: 'accounts/create',
    name: 'AccountsCreate',
    component: Create,
    meta: {
      title: 'Accounts Create'
    }
  },
  {
    path: 'accounts/edit/:id',
    name: 'AccountsEdit',
    component: Edit,
    meta: {
      title: 'Accounts Edit'
    }
  }
]
