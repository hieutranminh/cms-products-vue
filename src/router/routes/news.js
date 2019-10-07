// import components
import News from '../../pages/news/News'
import Create from '../../pages/news/Create'
import Edit from '../../pages/news/Edit'

export default [
  {
    path: 'news',
    name: 'News',
    component: News,
    meta: {
      title: 'News'
    }
  },
  {
    path: 'news/create',
    name: 'NewsCreate',
    component: Create,
    meta: {
      title: 'News Create'
    }
  },
  {
    path: 'news/edit/:id',
    name: 'NewsEdit',
    component: Edit,
    meta: {
      title: 'News Edit'
    }
  }
]
