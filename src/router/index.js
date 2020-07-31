import Vue from 'vue'
import VueRouter from 'vue-router'
// 未登录
import unHomePage from '../components/homePage_unlogin'

// 学生
import homepage from '../components/s_homePage.vue'
import personalCenter from '../components/personalCenter'
/* 答题卡 */
import Answer from '../components/answersheet/answer.vue'
import Answered from '../components/answersheet/answered.vue'
import coursePage from '../components/coursePage.vue'
import Video from '../components/video.vue'
/* 课程选项 */
import Home from '../components/courseItem/home.vue'
import Study from '../components/courseItem/study.vue'
import Exam from '../components/courseItem/exam.vue'
import Discuss from '../components/courseItem/discuss.vue'
import Sourse from '../components/courseItem/sourse.vue'
import OneDiscuss from '../components/courseItem/discuss/oneDiscuss.vue'

// 教师1
import Tindex from '../components/Teacher/Tindex.vue'
import CourseManage from '../components/Teacher/courseManage.vue'
import CourseWare from '../components/Teacher/courseWare.vue'
import CourseVideo from '../components/Teacher/courseVideo.vue'
import CourseDiscuss from '../components/Teacher/courseDiscuss.vue'
import CourseSignIn from '../components/Teacher/courseSignIn.vue'
import StudentManage from '../components/Teacher/studentManage.vue'
import TaskExam from '../components/Teacher/taskExam.vue'
import DataCenter from '../components/Teacher/dataCenter.vue'
import addExam01 from '../components/Teacher/task/addExam01.vue'
import addTask01 from '../components/Teacher/task/addTask01.vue'
import studentInfo from '../components/studentInfo.vue'

// 教师2
import indext from '../components/Teacher1/t_homepage.vue'
import createCourse from '../components/Teacher1/createCourse.vue'
import setCourse from '../components/Teacher1/t_setCourse.vue'
import tCourseManage from '../components/Teacher1/setCourse/t_coursemanage.vue'
import tCourseWare from '../components/Teacher1/setCourse/t_courseware.vue'
import tCourseVideo from '../components/Teacher1/setCourse/t_coursevideo.vue'
import tCourseDiscuss from '../components/Teacher1/setCourse/t_courseDiscuss.vue'
import tCourseExam from '../components/Teacher1/setCourse/t_taskexam.vue'
import tStartExam from '../components/Teacher1/setCourse/t_startexam.vue'
import tCourseStudent from '../components/Teacher1/setCourse/t_courseStudent.vue'
import teditInfo from '../components/Teacher1/t_editInfo.vue'

// 管理员

// 答题卡
import answer01 from '../components/answersheet01/answer01.vue'

// import

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/pCenter'
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
    path: '/video/:id?',
    component: Video
  },
  {
    path: '/answer/:id?',
    component: Answer
  },
  {
    path: '/answered',
    component: Answered
  },
  {
    path: '/studentInfo',
    component: studentInfo
  },
  // 课程界面
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
  // 教师界面
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
    path: '/dataCenter',
    component: DataCenter
  },
  {
    path: '/addexam',
    component: addExam01
  },
  {
    path: '/addtask',
    component: addTask01
  },
  // 教师界面2
  {
    path: '/indext',
    component: indext
  },
  {
    path: '/createCourse',
    component: createCourse
  },
  {
    path: '/editInfo',
    component: teditInfo
  },
  {
    path: '/setCourse',
    component: setCourse,
    redirect: '/setCourse/courseManage',
    children: [
      {
        path: 'courseManage',
        component: tCourseManage
      },
      {
        path: 'courseWare',
        component: tCourseWare
      },
      {
        path: 'courseVideo',
        component: tCourseVideo
      },
      {
        path: 'courseDiscuss',
        component: tCourseDiscuss
      },
      {
        path: 'courseExam',
        component: tCourseExam
      },
      {
        path: 'startExam',
        component: tStartExam
      },
      {
        path: 'courseStudent',
        component: tCourseStudent
      }
    ]
  },
  // 答题卡
  {
    path: '/answer01',
    component: answer01
  }
]

const router = new VueRouter({
  routes
})

export default router
