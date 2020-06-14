import Vue from 'vue'
import VueRouter from 'vue-router'
import unHomePage from '../components/homePage_unlogin'
import homepage from '../components/homePage.vue'
import personalCenter from '../components/personalCenter'
import coursePage from '../components/coursePage.vue'
import Video from '../components/video.vue'
import Answer from '../components/answer.vue'
import Home from '../components/courseItem/home.vue'
import Study from '../components/courseItem/study.vue'
import Exam from '../components/courseItem/exam.vue'
import Discuss from '../components/courseItem/discuss.vue'
import Sourse from '../components/courseItem/sourse.vue'
import OneDiscuss from '../components/courseItem/discuss/oneDiscuss.vue'

// import

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: homepage
  },
  {
    path: '/unindex',
    component: unHomePage
  },
  {
    path: '/pCenter',
    component: personalCenter
  },
  {
    path: '/video',
    component: Video
  },
  {
    path: '/answer',
    component: Answer
  },
  {
    path: '/courses',
    component: coursePage,
    redirect: '/courses/home',
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'study',
        component: Study
      },
      {
        path: 'exam',
        component: Exam
      },
      {
        path: 'discuss',
        component: Discuss
      },
      {
        path: 'sourse',
        component: Sourse
      },
      {
        path: 'oneDiscuss',
        component: OneDiscuss
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
