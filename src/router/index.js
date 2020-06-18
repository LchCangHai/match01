import Vue from 'vue'
import VueRouter from 'vue-router'
import unHomePage from '../components/homePage_unlogin'
import homepage from '../components/homePage.vue'
import personalCenter from '../components/personalCenter'
import coursePage from '../components/coursePage.vue'
import Video from '../components/video.vue'
import Answer from '../components/answer.vue'
import Answered from '../components/answered.vue'
import Home from '../components/courseItem/home.vue'
import Study from '../components/courseItem/study.vue'
import Exam from '../components/courseItem/exam.vue'
import Discuss from '../components/courseItem/discuss.vue'
import Sourse from '../components/courseItem/sourse.vue'
import OneDiscuss from '../components/courseItem/discuss/oneDiscuss.vue'

import Tindex from '../components/Teacher/Tindex.vue'
import CourseManage from '../components/Teacher/courseManage.vue'
import CourseWare from '../components/Teacher/courseWare.vue'
import CourseVideo from '../components/Teacher/courseVideo.vue'
import CourseDiscuss from '../components/Teacher/courseDiscuss.vue'
import CourseSignIn from '../components/Teacher/courseSignIn.vue'
import StudentManage from '../components/Teacher/studentManage.vue'
import TaskExam from '../components/Teacher/taskExam.vue'
import DataManage from '../components/Teacher/dataManage.vue'
import addExam01 from '../components/Teacher/task/addExam01.vue'
import addTask01 from '../components/Teacher/task/addTask01.vue'
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
    path: '/answered',
    component: Answered
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
  },
  {
    path: '/tindex',
    component: Tindex
  },
  {
    path: '/courseManage',
    component: CourseManage
  },
  {
    path: '/courseWare',
    component: CourseWare
  },
  {
    path: '/courseVideo',
    component: CourseVideo
  },
  {
    path: '/courseDiscuss',
    component: CourseDiscuss
  },
  {
    path: '/courseSignIn',
    component: CourseSignIn
  },
  {
    path: '/studentManage',
    component: StudentManage
  },
  {
    path: '/taskExam',
    component: TaskExam
  },
  {
    path: '/dataManage',
    component: DataManage
  },
  {
    path: '/addexam',
    component: addExam01
  },
  {
    path: '/addtask',
    component: addTask01
  }
]

const router = new VueRouter({
  routes
})

export default router
