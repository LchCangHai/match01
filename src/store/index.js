import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showPopUp: false, // 未登录主页的弹窗
    popUpType: 1, // 未登录主页弹窗类型
    showPopUp01: false, // 学生编辑资料弹窗
    showPopUp02: false, // 学生学校认证弹窗
    coursePop: false, // 课程界面弹窗
    coursePopType: 1, // 课程界面弹窗类型
    addTEPop: false, // 教师添加作业，考试弹窗
    TEPopType: 1, // 教师添加作业 弹窗类型
    leftSiderActive: 1, // 教师界面左侧边栏选中项目
    currentUser: { // 当前登录的用户信息
      avatarURL: ''
    },
    courseInfo: { // 学生所选的课程信息
    },
    informs: { // 通知信息
    },
    currentDiscuss: { // 现在选中展示的讨论内容 ****需在action中获得
      id: '',
      name: ''
    },
    currentEditTaskExam: {}
  },
  mutations: {
    openLogin (state) {
      state.showPopUp = true
    },
    closeLogin (state) {
      state.showPopUp = false
    },
    loginPop (state) {
      state.popUpType = 1
    },
    signUpPop (state) {
      state.popUpType = 2
    },
    retrievePop (state) {
      state.popUpType = 3
    },
    otherWayPop (state) {
      state.popUpType = 4
    },
    setCourseInfo (state, val) {
      state.courseInfo = val
    },
    openPop01 (state) {
      state.showPopUp01 = true
    },
    closePop01 (state) {
      state.showPopUp01 = false
    },
    openPop02 (state) {
      state.showPopUp02 = true
    },
    closePop02 (state) {
      state.showPopUp02 = false
    },
    openCoursePop (state) {
      state.coursePop = true
    },
    closeCoursePop (state) {
      state.coursePop = false
    },
    openAddTEPop (state) {
      state.addTEPop = true
    },
    closeAddTEPop (state) {
      state.addTEPop = false
    },
    chooseTEPop (state, type) {
      state.TEPopType = type
    },
    chooseCourseType (state, type) {
      state.coursePopType = type
    },
    setLeftSider (state, item) {
      state.leftSiderActive = item
    }
  },
  actions: {
  },
  modules: {
  }
})
