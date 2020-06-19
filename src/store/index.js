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
    currentUser: {}, // 当前登录的用户信息
    currentTask: '',
    currentCourse: 2,
    courseInfo: { // 学生所选的课程信息
    },
    courseInform: { // 当前课程公告
    },
    courseFile: { // 当前课程章节 文件
    },
    courseVideo: { // 当前课程 章节 视频
    },
    courseDiscuss: { // 当前课程 讨论列表
    },
    courseDiscussID: '', // 当前选中的讨论的id
    informs: { // 通知信息
    },
    currentDiscuss: { // 现在选中展示的讨论内容 ****需在action中获得
      id: '',
      name: ''
    },
    currentEditTaskExam: {
      type: 'exam',
      t_begin: '',
      t_end: '',
      name: '这是作业的名字XXX',
      ans_visible: '',
      problems: [
        // {
        //   type: 'select',
        //   content: {
        //     text: '题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容',
        //     options: ['选项a', '选项b', '选项c']
        //   },
        //   order: 1,
        //   answer: 'a',
        //   answer_detail: '可为空',
        //   max_score: 5
        // },
        // {
        //   type: 'mselect',
        //   content: {
        //     text: '题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容',
        //     options: ['选项a', '选项b', '选项c', '选项d']
        //   },
        //   order: 2,
        //   answer: 'a',
        //   answer_detail: '可为空',
        //   max_score: 5
        // },
        // {
        //   type: 'judge',
        //   content: {
        //     text: '题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容',
        //     options: ['对', '错']
        //   },
        //   order: 3,
        //   answer: 'a',
        //   answer_detail: '可为空',
        //   max_score: 5
        // },
        // {
        //   type: 'blank',
        //   content: {
        //     text: '题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容',
        //     options: ['选项a', '选项b', '选项c']
        //   },
        //   order: 4,
        //   answer: 'a',
        //   answer_detail: '可为空',
        //   max_score: 5
        // },
        // {
        //   type: 'subjective',
        //   content: {
        //     text: '题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容题目内容',
        //     options: ['选项a', '选项b', '选项c']
        //   },
        //   order: 5,
        //   answer: 'a',
        //   answer_detail: '可为空',
        //   max_score: 5
        // }
      ],
      answerFile: new FormData(),
      start: '2020/2/3 23:12:12',
      end: '2020/5/3 23:12:12'
    }
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
    setcourseInfo (state, val) {
      state.courseInfo = val
    },
    setcourseInform (state, val) {
      state.courseInform = val
    },
    setcourseFile (state, val) {
      state.courseFile = val
    },
    setcourseVideo (state, val) {
      state.courseVideo = val
    },
    setcourseDiscuss (state, val) {
      state.courseDiscuss = val
    },
    setcourseDiscussID (state, val) {
      state.courseDiscussID = val
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
    },
    addTasks (state, info) { // 添加作业
      state.currentEditTaskExam.type = info.type
      state.currentEditTaskExam.t_begin = info.start
      state.currentEditTaskExam.t_end = info.end
      state.currentEditTaskExam.name = info.name
      state.currentEditTaskExam.start = info.startS
      state.currentEditTaskExam.end = info.endS
      state.currentEditTaskExam.ans_visible = 1
    },
    addTask (state, info) { // 添加作业题目
      // this.currentEditTaskExam.problem.push(info.)
    },
    setCurrentUser (state, info) {
      state.currentUser = info
    },
    setcurrentTask (state, id) {
      state.currentTask = id
    },
    setcurrentCourse (state, id) {
      state.currentCourse = id
    }
  },
  actions: {
  },
  modules: {
  }
})
