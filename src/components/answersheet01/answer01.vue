<template>
  <div id="answer">
    <div class="none">
      <input
        type="file"
        ref="upload_file"
        @change="handleFileChange">
    </div>
    <div id="Nav">
      <my-nav :type="1"></my-nav>
    </div>
    <div class="header01">
      <div>
        <div class="name1">{{taskDATA.task_name}}</div>
        <div class="toggleBtn" @click="changeToggle()">答题情况</div>
      </div>
      <div class="timer">
        <div><span>{{timeCnt.h}}</span>:<span>{{timeCnt.m}}</span>:<span>{{timeCnt.s}}</span></div>
      </div>
      <div id="toggle" v-show="toggle1" @mouseleave="closeToggle()">
        <div class="showBtn"
             v-for="(item, index) in taskDATA.problems"
             :key="item.order"
             :class="{actived: finished[index] === 1}"
             @click="toText(item.order)">第{{item.order}}题</div>
      </div>
    </div>
    <div class="body01">
      <div class="Item">
        <div class="select item" v-if=" taskDATA.problems[showOrder-1].type === 'select' ? true : false">
          <div class="qText">
            <div class="type">
              <span>{{taskDATA.problems[showOrder-1].order}}. </span>[<span>单选题</span>](<span>{{taskDATA.problems[showOrder-1].max_score}}分</span>)
            </div>
            <div class="text" v-show="taskDATA.problems[showOrder-1].medias.length === 0">{{taskDATA.problems[showOrder-1].content.text}}</div>
            <img :src="taskDATA.problems[showOrder-1].medias[0].url" @error="imgerror(taskDATA.problems[showOrder-1])" v-if="taskDATA.problems[showOrder-1].medias.length !== 0">
          </div>
          <div class="answerSheet">
            <el-radio-group v-model="tempContent" class="input1">
              <el-radio v-for="(option, index) in taskDATA.problems[showOrder-1].content.options"
                        class="radio"
                        :label="result[index]"
                        :key="index">
                <span></span>{{result[index]}}.{{option}}
              </el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="mselect item" v-if=" taskDATA.problems[showOrder-1].type === 'mselect' ? true : false">
          <div class="qText">
            <div class="type">
              <span>{{taskDATA.problems[showOrder-1].order}}. </span>[<span>多选题</span>](<span>{{taskDATA.problems[showOrder-1].max_score}}分</span>)
            </div>
            <div class="text" v-show="taskDATA.problems[showOrder-1].medias.length === 0">{{taskDATA.problems[showOrder-1].content.text}}</div>
            <img :src="taskDATA.problems[showOrder-1].medias[0].url" @error="imgerror(taskDATA.problems[showOrder-1])" v-if="taskDATA.problems[showOrder-1].medias.length !== 0">
          </div>
          <div class="answerSheet">
            <el-checkbox-group v-model="tempContent1" class="input1">
              <el-checkbox class="checkbox"
                           v-for="(option, index) in taskDATA.problems[showOrder-1].content.options"
                           :label="result[index]"
                           :key="index">
                <span></span>{{result[index]}}.{{option}}
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="judge item" v-if=" taskDATA.problems[showOrder-1].type === 'judge' ? true : false">
          <div class="qText">
            <div class="type">
              <span>{{taskDATA.problems[showOrder-1].order}}. </span>[<span>判断题</span>](<span>{{taskDATA.problems[showOrder-1].max_score}}分</span>)
            </div>
            <div class="text" v-show="taskDATA.problems[showOrder-1].medias.length === 0">{{taskDATA.problems[showOrder-1].content.text}}</div>
            <img :src="taskDATA.problems[showOrder-1].medias[0].url" @error="imgerror(taskDATA.problems[showOrder-1])" v-if="taskDATA.problems[showOrder-1].medias.length !== 0">
          </div>
          <div class="answerSheet">
            <el-radio-group v-model="tempContent" class="input1">
              <el-radio class="radio"
                        v-for="(option, index) in taskDATA.problems[showOrder-1].content.options"
                        :label="result[index]"
                        :key="index">
                <span></span>{{result[index]}}.{{option}}
              </el-radio>
            </el-radio-group>

          </div>
        </div>
        <div class="blank item" v-if=" taskDATA.problems[showOrder-1].type === 'blank' ? true : false">
          <div class="qText">
            <div class="type">
              <span>{{taskDATA.problems[showOrder-1].order}}. </span>[<span>填空题</span>](<span>{{taskDATA.problems[showOrder-1].max_score}}分</span>)
            </div>
            <div class="text" v-show="taskDATA.problems[showOrder-1].medias.length === 0">{{taskDATA.problems[showOrder-1].content.text}}</div>
            <img :src="taskDATA.problems[showOrder-1].medias[0].url" @error="imgerror(taskDATA.problems[showOrder-1])" v-if="taskDATA.problems[showOrder-1].medias.length !== 0">
          </div>
          <div class="answerSheet">
            <div class="upLoad">
              <div class="handleIcon">
                <div class="uploadIcon" @click="clickUpLoad()">
                  <svg t="1596101397839" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4287"><path d="M954.5 632.7c-10.5-82-84.4-141.4-167.1-141.4h-42.8V451c0-124.1-93.4-232.6-217.2-240.9-135.8-9.1-249.2 98.8-249.2 232.7v48.5h-42.8c-82.7 0-156.5 59.3-167.1 141.4-12.8 99.3 64.5 184.2 161.3 184.2h563.5c96.8 0 174.1-84.9 161.4-184.2z m-324-68.7l-5.7 5.7c-11.3 11.3-29.6 11.3-40.8 0l-39.2-39.2v165.3c0 18.3-14.8 33.2-33.2 33.2h-0.5c-18.3 0-33.2-14.8-33.2-33.2V530.5l-39.2 39.2c-11.3 11.3-29.6 11.3-40.8 0l-5.7-5.7c-11.3-11.3-11.3-29.6 0-40.8l97.5-97.5c5.9-5.9 13.8-8.8 21.6-8.4 7.8-0.3 15.7 2.5 21.6 8.4l97.5 97.5c11.4 11.2 11.4 29.5 0.1 40.8z" fill="#3259CE" p-id="4288"></path></svg>
                </div>
                <div class="uploadIcon" @click="deleteUpload()" v-if="formdata1.has(('answer' + showOrder))">
                  <svg t="1596102705938" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1983"><path d="M732.3 939H255.2c-30.1 0-54.5-24.5-54.5-54.5V420.9h65.4v452.6h455.3V421h65.4v463.5c0 30-24.4 54.5-54.5 54.5z" fill="#4A5FE2" p-id="1984"></path><path d="M699.3 247.4h-65.4v-55c0-12.9-10.5-23.4-23.4-23.4H376.9c-12.9 0-23.4 10.5-23.4 23.4V247h-65.4V142.4c0-19.3 16.2-38.9 47.2-38.9h316.8c31 0 47.2 19.5 47.2 38.9v105z" fill="#A1AFFF" p-id="1985"></path><path d="M807.3 362.3H180.2c-18 0-32.7-14.7-32.7-32.7 0-18 14.7-32.7 32.7-32.7h627.1c18 0 32.7 14.7 32.7 32.7 0 18-14.7 32.7-32.7 32.7z" fill="#4A5FE2" p-id="1986"></path><path d="M406.5 757.2c-18 0-32.7-14.7-32.7-32.7V497.3c0-18 14.7-32.7 32.7-32.7 18 0 32.7 14.7 32.7 32.7v227.2c0 18-14.7 32.7-32.7 32.7zM581 757.2c-18 0-32.7-14.7-32.7-32.7V497.3c0-18 14.7-32.7 32.7-32.7 18 0 32.7 14.7 32.7 32.7v227.2c0 18-14.7 32.7-32.7 32.7z" fill="#A1AFFF" p-id="1987"></path></svg>
                </div>
              </div>
              <div v-if="formdata1.has(('answer' + showOrder))"
                   class="fileName">{{formdata1.get(('answer' + showOrder)).name}}</div>
            </div>
            <div class="replyArea">
              <v-input class="blankArea Area input1"
                       type="textarea"
                       v-model="tempContent"></v-input>
              <img :src="taskDATA.problems[showOrder-1].medias[0].url" @error="imgerror(taskDATA.problems[showOrder-1])" v-if="taskDATA.problems[showOrder-1].medias.length !== 0">
            </div>
          </div>
        </div>
        <div class="question item" v-if=" taskDATA.problems[showOrder-1].type === 'subjective' ? true : false">
          <div class="qText">
            <div class="type">
              <span>{{taskDATA.problems[showOrder-1].order}}. </span>[<span>论述题</span>](<span>{{taskDATA.problems[showOrder-1].max_score}}分</span>)
            </div>
            <div class="text" v-show="taskDATA.problems[showOrder-1].medias.length === 0">{{taskDATA.problems[showOrder-1].content.text}}</div>
            <img :src="taskDATA.problems[showOrder-1].medias[0].url" @error="imgerror(taskDATA.problems[showOrder-1])" v-if="taskDATA.problems[showOrder-1].medias.length !== 0">
          </div>
          <div class="answerSheet">
            <div class="upLoad">
              <div class="handleIcon">
                <div class="uploadIcon" @click="clickUpLoad()">
                  <svg t="1596101397839" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4287"><path d="M954.5 632.7c-10.5-82-84.4-141.4-167.1-141.4h-42.8V451c0-124.1-93.4-232.6-217.2-240.9-135.8-9.1-249.2 98.8-249.2 232.7v48.5h-42.8c-82.7 0-156.5 59.3-167.1 141.4-12.8 99.3 64.5 184.2 161.3 184.2h563.5c96.8 0 174.1-84.9 161.4-184.2z m-324-68.7l-5.7 5.7c-11.3 11.3-29.6 11.3-40.8 0l-39.2-39.2v165.3c0 18.3-14.8 33.2-33.2 33.2h-0.5c-18.3 0-33.2-14.8-33.2-33.2V530.5l-39.2 39.2c-11.3 11.3-29.6 11.3-40.8 0l-5.7-5.7c-11.3-11.3-11.3-29.6 0-40.8l97.5-97.5c5.9-5.9 13.8-8.8 21.6-8.4 7.8-0.3 15.7 2.5 21.6 8.4l97.5 97.5c11.4 11.2 11.4 29.5 0.1 40.8z" fill="#3259CE" p-id="4288"></path></svg>
                </div>
                <div class="uploadIcon" @click="deleteUpload()" v-if="formdata1.has(('answer' + showOrder))">
                  <svg t="1596102705938" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1983"><path d="M732.3 939H255.2c-30.1 0-54.5-24.5-54.5-54.5V420.9h65.4v452.6h455.3V421h65.4v463.5c0 30-24.4 54.5-54.5 54.5z" fill="#4A5FE2" p-id="1984"></path><path d="M699.3 247.4h-65.4v-55c0-12.9-10.5-23.4-23.4-23.4H376.9c-12.9 0-23.4 10.5-23.4 23.4V247h-65.4V142.4c0-19.3 16.2-38.9 47.2-38.9h316.8c31 0 47.2 19.5 47.2 38.9v105z" fill="#A1AFFF" p-id="1985"></path><path d="M807.3 362.3H180.2c-18 0-32.7-14.7-32.7-32.7 0-18 14.7-32.7 32.7-32.7h627.1c18 0 32.7 14.7 32.7 32.7 0 18-14.7 32.7-32.7 32.7z" fill="#4A5FE2" p-id="1986"></path><path d="M406.5 757.2c-18 0-32.7-14.7-32.7-32.7V497.3c0-18 14.7-32.7 32.7-32.7 18 0 32.7 14.7 32.7 32.7v227.2c0 18-14.7 32.7-32.7 32.7zM581 757.2c-18 0-32.7-14.7-32.7-32.7V497.3c0-18 14.7-32.7 32.7-32.7 18 0 32.7 14.7 32.7 32.7v227.2c0 18-14.7 32.7-32.7 32.7z" fill="#A1AFFF" p-id="1987"></path></svg>
                </div>
              </div>
              <div v-if="formdata1.has(('answer' + showOrder))"
                   class="fileName">{{formdata1.get(('answer' + showOrder)).name}}</div>
            </div>
            <div class="replyArea Area">
              <v-input class="questionArea Area input1"
                       type="textarea"
                       v-model="tempContent"></v-input>
              <img :src="taskDATA.problems[showOrder-1].medias[0].url" @error="imgerror(taskDATA.problems[showOrder-1])" v-if="taskDATA.problems[showOrder-1].medias.length !== 0">
            </div>
          </div>
        </div>
      </div>
      <div v-if="false">
<!--        <div class="Item"-->
<!--             v-for="(item, index) in taskDATA.problems"-->
<!--             :key="item.order" v-show="item.order === showOrder">-->
<!--          <div class="select item" v-if=" item.type === 'select' ? true : false">-->
<!--            <div class="qText">-->
<!--              <div class="type">-->
<!--                <span>{{index + 1}}. </span>[<span>单选题</span>](<span>{{item.max_score}}分</span>)-->
<!--              </div>-->
<!--              <div class="text" v-show="item.medias.length === 0">{{item.content.text}}</div>-->
<!--              <img :src="item.medias[0].url" @error="imgerror(item)" v-if="item.medias.length !== 0">-->
<!--            </div>-->
<!--            <div class="answerSheet">-->
<!--              <el-radio-group v-model="content[index]" class="input1">-->
<!--                <el-radio v-for="(option, index) in item.content.options"-->
<!--                          class="radio"-->
<!--                          :label="result[index]"-->
<!--                          :key="index">-->
<!--                  <span></span>{{result[index]}}.{{option}}-->
<!--                </el-radio>-->
<!--              </el-radio-group>-->

<!--            </div>-->
<!--          </div>-->
<!--          <div class="mselect item" v-if=" item.type === 'mselect' ? true : false">-->
<!--            <div class="qText">-->
<!--              <div class="type">-->
<!--                <span>{{index + 1}}. </span>[<span>多选题</span>](<span>{{item.max_score}}分</span>)-->
<!--              </div>-->
<!--              <div class="text" v-show="item.medias.length === 0">{{item.content.text}}</div>-->
<!--              <img :src="item.medias[0].url" @error="imgerror(item)" v-if="item.medias.length !== 0">-->
<!--            </div>-->
<!--            <div class="answerSheet">-->
<!--              <el-checkbox-group v-model="checkList" class="input1">-->
<!--                <el-checkbox class="checkbox"-->
<!--                             v-for="(option, index) in item.content.options"-->
<!--                             :label="result[index]"-->
<!--                             :key="index">-->
<!--                  <span></span>{{result[index]}}.{{option}}-->
<!--                </el-checkbox>-->
<!--              </el-checkbox-group>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="judge item" v-if=" item.type === 'judge' ? true : false">-->
<!--            <div class="qText">-->
<!--              <div class="type">-->
<!--                <span>{{index + 1}}. </span>[<span>判断题</span>](<span>{{item.max_score}}分</span>)-->
<!--              </div>-->
<!--              <div class="text" v-show="item.medias.length === 0">{{item.content.text}}</div>-->
<!--              <img :src="item.medias[0].url" @error="imgerror(item)" v-if="item.medias.length !== 0">-->
<!--            </div>-->
<!--            <div class="answerSheet">-->
<!--              <el-radio-group v-model="content[index]" class="input1">-->
<!--                <el-radio class="radio"-->
<!--                          v-for="(option, index) in item.content.options"-->
<!--                          :label="result[index]"-->
<!--                          :key="index">-->
<!--                  <span></span>{{result[index]}}.{{option}}-->
<!--                </el-radio>-->
<!--              </el-radio-group>-->

<!--            </div>-->
<!--          </div>-->
<!--          <div class="blank item" v-if=" item.type === 'blank' ? true : false">-->
<!--            <div class="qText">-->
<!--              <div class="type">-->
<!--                <span>{{index + 1}}. </span>[<span>填空题</span>](<span>{{item.max_score}}分</span>)-->
<!--              </div>-->
<!--              <div class="text" v-show="item.medias.length === 0">{{item.content.text}}</div>-->
<!--              <img :src="item.medias[0].url" @error="imgerror(item)" v-if="item.medias.length !== 0">-->
<!--            </div>-->
<!--            <div class="answerSheet">-->
<!--              &lt;!&ndash;              <div class="uploadIcon" @click="clickUpLoad(item.order)">&ndash;&gt;-->
<!--              &lt;!&ndash;                <svg class="icon" aria-hidden="true">&ndash;&gt;-->
<!--              &lt;!&ndash;                  <use xlink:href="#icon-fujian"></use>&ndash;&gt;-->
<!--              &lt;!&ndash;                </svg>&ndash;&gt;-->
<!--              &lt;!&ndash;              </div>&ndash;&gt;-->
<!--              <div class="replyArea">-->
<!--                <v-input class="blankArea Area input1"-->
<!--                         type="textarea"-->
<!--                         v-show="item.medias.length === 0"-->
<!--                         v-model="content[index]"></v-input>-->
<!--                <img :src="item.medias[0].url" @error="imgerror(item)" v-if="item.medias.length !== 0">-->
<!--              </div>-->
<!--              <div class="fileName">文件名</div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="question item" v-if=" item.type === 'subjective' ? true : false">-->
<!--            <div class="qText">-->
<!--              <div class="type">-->
<!--                <span>{{index + 1}}. </span>[<span>论述题</span>](<span>{{item.max_score}}分</span>)-->
<!--              </div>-->
<!--              <div class="text" v-show="item.medias.length === 0">{{item.content.text}}</div>-->
<!--              <img :src="item.medias[0].url" @error="imgerror(item)" v-if="item.medias.length !== 0">-->
<!--            </div>-->
<!--            <div class="answerSheet">-->
<!--              &lt;!&ndash;              <div class="uploadIcon" @click="clickUpLoad(item.order)">&ndash;&gt;-->
<!--              &lt;!&ndash;                <svg class="icon" aria-hidden="true">&ndash;&gt;-->
<!--              &lt;!&ndash;                  <use xlink:href="#icon-fujian"></use>&ndash;&gt;-->
<!--              &lt;!&ndash;                </svg>&ndash;&gt;-->
<!--              &lt;!&ndash;              </div>&ndash;&gt;-->
<!--              <div class="replyArea Area">-->
<!--                <v-input class="questionArea Area input1"-->
<!--                         type="textarea"  v-show="item.medias.length === 0"-->
<!--                         v-model="content[index]"></v-input>-->
<!--                <img :src="item.medias[0].url" @error="imgerror(item)" v-if="item.medias.length !== 0">-->
<!--              </div>-->
<!--              <div class="fileName">文件名</div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
      <div class="pageBtn">
        <el-button-group>
          <el-button type="primary" plain icon="el-icon-arrow-left" :disabled="showOrder === 1" @click="backText()">上一题</el-button>
          <el-button type="primary" plain v-show="showOrder !== taskDATA.problems.length" @click="nextText()">下一题<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          <el-button type="primary" plain v-show="showOrder === taskDATA.problems.length" @click="submit001()">提交</el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

import myNav from '../../views/navs/s_nav1.vue'

// eslint-disable-next-line
  let formdata1 = new FormData()
export default {
  name: 'answer.vue',
  components: {
    'my-nav': myNav
  },
  data () {
    return {
      result: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'],
      finished: [],
      showOrder: 1,
      toggle1: false,
      taskID: this.$route.params.id,
      taskDATA: {
        task_name: '01haozuoyegdgsadg',
        type: 'test',
        problems: [
          {
            medias: [],
            answer: 'B',
            answer_detail: '额我热我热热望热热问题高房额我' +
              '热我热热望热热问题高房额我热我热热望热热问题高房额我热我热热望热热问题高房',
            content: {
              options: [
                '额我热我热热望热热问题高房价获得胜利后的发动机放假啊多发点',
                '额我热我热热望热热问题高房',
                '热热望热热问题高房价获得胜利后的发动机放假啊多发点',
                '额我热我热热望热热问题高房额我热我热热望热热问题高房'],
              text: '01号题目 二恶热热我热热望热望'
            },
            max_score: '5',
            order: 1,
            type: 'select'
          },
          {
            medias: [],
            answer: ['B', 'C'],
            answer_detail: '额我热我热热望热热问题高房额我' +
              '热我热热望热热问题高房额我热我热热望热热问题高房额我热我热热望热热问题高房',
            content: {
              options: [
                '打发打发大沙发阿迪斯发士大夫发打发打发11',
                '打发打发打发打发大沙发阿迪斯发士大夫发打发打发大沙发阿迪斯发士打发打发大沙发阿迪斯发士大夫发打发打发打发打发',
                '打发打发大沙发阿迪斯发士大夫发打发打发',
                '打发打发大沙发阿迪斯发士大夫发打发打发',
                '打发打发大沙发阿迪斯发士大夫发打发打发'],
              text: '打发打发但是公司根深蒂固'
            },
            max_score: '5',
            order: 2,
            type: 'mselect'
          },
          {
            medias: [],
            answer: '和广泛大锅饭刚刚发广告风格非官方大哥' +
              '的风格和共和党国会的规划和广泛大锅饭刚刚发广告风' +
              '格非官方大哥的风格和共和党国会的规划和广泛大锅饭刚刚发' +
              '广告风格非官方大哥的风格和共和党国会的规划和广泛大锅饭刚' +
              '刚发广告风格非官方大哥的风格和共和党国会的规划',
            answer_detail: '和广泛大锅饭刚刚发广告风格非官方' +
              '大哥的风格和共和党国会的规划和广泛大锅饭刚刚' +
              '发广告风格非官方大哥的风格和共和党国会的规划和广泛大' +
              '锅饭刚刚发广告风格非官方大哥的风格和共和党国会的规划',
            content: {
              options: '',
              text: '和广泛大锅饭刚刚发广告风格非官方大哥' +
                '的风格和共和党国会的规划和广泛大锅饭刚刚发广告风' +
                '格非官方大哥的风格和共和党国会的规划和广泛大锅饭刚刚发' +
                '广告风格非官方大哥的风格和共和党国会的规划和广泛大锅饭刚' +
                '刚发广告风格非官方大哥的风格和共和党国会的规划'
            },
            max_score: '10',
            order: 3,
            type: 'blank'
          }
        ]
      },
      radio: '',
      radio01: '',
      checkList: [],
      answers: [],
      content: [],
      timeCnt: {
        d: '',
        h: '01',
        m: '03',
        s: '05'
      },
      errorImg: require('../../assets/imgError03.jpg'),
      tempContent: '',
      tempContent1: [],
      allAnswers: [],
      formdata1
    }
  },
  computed: {
    ...mapState([
    ])
  },
  methods: {
    ...mapMutations([
    ]),
    changeToggle () {
      this.toggle1 = !this.toggle1
    },
    closeToggle () {
      this.toggle1 = false
    },
    toText (order) {
      const tempAnswer = {
        content: '',
        order: ''
      }
      if (this.showOrder === order) {
        return
      }
      if (this.taskDATA.problems[(this.showOrder - 1)].type === 'mselect') {
        tempAnswer.content = this.tempContent1
        if (this.tempContent1.length === 0) {
          this.finished[(this.showOrder - 1)] = 0
        } else {
          this.finished[(this.showOrder - 1)] = 1
        }
      } else {
        tempAnswer.content = this.tempContent
        if (this.tempContent !== '') {
          this.finished[(this.showOrder - 1)] = 1
        } else {
          if (this.formdata1.has(('answer' + this.showOrder))) {
            this.finished[(this.showOrder - 1)] = 1
          } else {
            this.finished[(this.showOrder - 1)] = 0
          }
        }
      }
      tempAnswer.order = this.showOrder
      this.allAnswers[(this.showOrder - 1)] = tempAnswer
      // console.log(this.allAnswers)
      if (this.finished[(order - 1)] === 1) {
        if (this.taskDATA.problems[order].type === 'mselect') {
          this.tempContent1 = this.allAnswers[(order - 1)].content
        } else {
          this.tempContent = this.allAnswers[(order - 1)].content
        }
      } else {
        this.tempContent = ''
        this.tempContent1 = []
      }
      this.showOrder = order
    },
    nextText () {
      const tempAnswer = {
        content: '',
        order: ''
      }
      if (this.taskDATA.problems[(this.showOrder - 1)].type === 'mselect') {
        tempAnswer.content = this.tempContent1
        if (this.tempContent1.length === 0) {
          this.finished[(this.showOrder - 1)] = 0
        } else {
          this.finished[(this.showOrder - 1)] = 1
        }
      } else {
        tempAnswer.content = this.tempContent
        if (this.tempContent !== '') {
          this.finished[(this.showOrder - 1)] = 1
        } else {
          if (this.formdata1.has(('answer' + this.showOrder))) {
            this.finished[(this.showOrder - 1)] = 1
          } else {
            this.finished[(this.showOrder - 1)] = 0
          }
        }
      }
      tempAnswer.order = this.showOrder
      this.allAnswers[(this.showOrder - 1)] = tempAnswer
      // console.log(this.allAnswers)
      if (this.showOrder < (this.taskDATA.problems.length + 1)) {
        if (this.finished[(this.showOrder)] === 1) {
          if (this.taskDATA.problems[(this.showOrder)].type === 'mselect') {
            this.tempContent1 = this.allAnswers[(this.showOrder)].content
          } else {
            this.tempContent = this.allAnswers[(this.showOrder)].content
          }
        } else {
          this.tempContent = ''
          this.tempContent1 = []
        }
        this.showOrder++
      }
    },
    backText () {
      const tempAnswer = {
        content: '',
        order: ''
      }
      if (this.taskDATA.problems[(this.showOrder - 1)].type === 'mselect') {
        tempAnswer.content = this.tempContent1
        if (this.tempContent1.length === 0) {
          this.finished[(this.showOrder - 1)] = 0
        } else {
          this.finished[(this.showOrder - 1)] = 1
        }
      } else {
        tempAnswer.content = this.tempContent
        if (this.tempContent !== '') {
          this.finished[(this.showOrder - 1)] = 1
        } else {
          if (this.formdata1.has(('answer' + this.showOrder))) {
            this.finished[(this.showOrder - 1)] = 1
          } else {
            this.finished[(this.showOrder - 1)] = 0
          }
        }
      }
      tempAnswer.order = this.showOrder
      this.allAnswers[(this.showOrder - 1)] = tempAnswer
      // console.log(this.allAnswers)
      if (this.showOrder > 1) {
        if (this.finished[(this.showOrder - 2)] === 1) {
          if (this.taskDATA.problems[(this.showOrder - 2)].type === 'mselect') {
            this.tempContent1 = this.allAnswers[(this.showOrder - 2)].content
          } else {
            this.tempContent = this.allAnswers[(this.showOrder - 2)].content
          }
        } else {
          this.tempContent = ''
          this.tempContent1 = []
        }
        this.showOrder--
      }
    },
    submit001 () {
      const tempAnswer = {
        content: '',
        order: ''
      }
      if (this.taskDATA.problems[(this.showOrder - 1)].type === 'mselect') {
        tempAnswer.content = this.tempContent1
        if (this.tempContent1.length === 0) {
          this.finished[(this.showOrder - 1)] = 0
        } else {
          this.finished[(this.showOrder - 1)] = 1
        }
      } else {
        tempAnswer.content = this.tempContent
        if (this.tempContent !== '') {
          this.finished[(this.showOrder - 1)] = 1
        } else {
          if (this.formdata1.has(('answer' + this.showOrder))) {
            this.finished[(this.showOrder - 1)] = 1
          } else {
            this.finished[(this.showOrder - 1)] = 0
          }
        }
      }
      tempAnswer.order = this.showOrder
      this.allAnswers[(this.showOrder - 1)] = tempAnswer
      console.log(this.allAnswers)
      const num = this.taskDATA.problems.length
      let tempConfirm = true
      // console.log(num)
      for (let i = 0; i < num; i++) {
        // console.log(this.finished)
        if (this.finished[i] !== 1) {
          tempConfirm = false
        }
      }
      if (tempConfirm === false) {
        this.$confirm('还有题目未完成, 是否提交?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '开始提交'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消提交'
          })
        })
      } else {
        this.$confirm('提交后将不能再修改, 是否提交?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '开始提交'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消提交'
          })
        })
      }
    },
    toPCBtn () {
      this.$router.push('/pCenter')
    },
    deleteUpload () {
      this.formdata1.delete(('answer' + this.showOrder))
    },
    exit () {
      window.localStorage.setItem('access_token', null)
      this.$router.push('/unindex')
    },
    itemClick (data) {
      console.log(data)
    },
    clickUpLoad () {
      this.$refs.upload_file.click()
    },
    handleFileChange () {
      const inputDOM = this.$refs.upload_file
      const files = inputDOM.files
      this.uploadFile(files)
    },
    uploadFile: function (files) {
      if (files.length !== 1) {
        this.message.warning('数量错误')
      } else {
        const file = files[0]
        formdata1.set('answer' + this.showOrder, file)
        // this.tempContent = file.name
      }
    },
    addZero (i) {
      return i < 10 ? '0' + i : i + ''
    },
    imgerror (item) {
      // item.medias[0].url = this.errorImg
    },
    countTime (time = '2020/07/31 18:00:00') {
      const nowtime = new Date()
      const endtime = new Date(time)
      const lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000)
      this.timeCnt.d = parseInt(lefttime / (24 * 60 * 60))
      this.timeCnt.h = parseInt(lefttime / (60 * 60) % 24)
      this.timeCnt.m = parseInt(lefttime / 60 % 60)
      this.timeCnt.s = parseInt(lefttime % 60)
      this.timeCnt.d = this.addZero(this.timeCnt.d)
      this.timeCnt.h = this.addZero(this.timeCnt.h)
      this.timeCnt.m = this.addZero(this.timeCnt.m)
      this.timeCnt.s = this.addZero(this.timeCnt.s)
      setTimeout(() => {
        this.countTime(time)
      }, 1000)
    },
    getTaskData () {
      this.$axios.get('/api/task/' + this.taskID)
        .then(res => {
          this.taskDATA = res.data.data
          console.log('获取考试数据成功')
          this.content = new Array(res.data.data.problems.length)
          if (res.data.data.type === 'exam') {
            this.countTime(res.data.data.exam_end)
          }
        }).catch(error => {
          console.log(error)
          this.$message.error('获取考试数据失败')
        })
    },
    submit01 () {
      this.answers = []
      for (let i = 0; i < this.taskDATA.problems.length; i++) {
        const temp = {
          content: '',
          order: ''
        }
        if (this.taskDATA.problems[i].type === 'mselect') {
          temp.content = this.checkList
        } else {
          temp.content = this.content[i]
        }
        temp.order = this.taskDATA.problems[i].order
        this.answers.push(temp)
      }
      console.log(this.answers)
      // console.log(this.checkList)
      this.$axios.post('/api/task/' + this.$route.params.id + '/submit', {
        answers: this.answers
      }, {
        header: {
          'Content-Type': 'application/json' // 如果写成contentType会报错
        }
      }).then(res => {
        console.log(res.data)
      })
    }
  },
  watch: {
    // checkList (val) {
    //   console.log('checkList')
    //   console.log(val)
    // }
  },
  mounted () {
    // this.getTaskData()
    this.countTime()
  }
}
</script>

<style scoped lang="less">
  #answer {
    color: black;
    min-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .none {
    display: none;
  }

  #Nav {
    position: relative;
    top: 0;
    left:0;
    width:100%;
    min-width: 1000px;
    height: 60px;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid lightgrey;
    box-shadow: 1px 0px 10px 1px rgba(213,213,213,0.6);
    background-color: white;
    z-index: 20;
  }

  .header01 {
    position: relative;
    width: 75%;
    min-width: 800px;
    height: 60px;
    border-bottom: 1px solid #d4d4d4;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    >div:first-child {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
    }
    #toggle {
      position: absolute;
      width: 90%;
      min-height: 200px;
      padding: 10px 20px;
      top: 60px;
      background-color: white;
      border: 1px solid #d4d4d4;
      z-index: 20;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      box-shadow: -1px -1px 3px 1px rgba(2, 2, 2, 0.1), 1px 1px 3px 1px rgba(2, 2, 2, 0.1);
    }
    .name1 {
      max-width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      white-space:nowrap;
      font-size: 15px;
      font-weight: 600;
      font-family: longmenshibei;
    }
    .toggleBtn {
      cursor: pointer;
      margin: 0 20px;
      padding: 2px;
      width: 70px;
      height: 30px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border: 1px solid #108de7;
      font-size: 13px;
      border-radius: 30px;
    }
    .toggleBtn:hover {
      border: 1px solid #48a8ec;
    }
    .toggleBtn:active {
      font-size: 14px;
    }
    .timer {
      width: 80px;
      height: 30px;
      font-size: 13px;
      border-radius: 30px;
      border: 1px solid #e6a23c;
      box-shadow: inset 1px 1px 7px 1px rgba(230,162,60,0.4), inset -1px -1px 7px 1px rgba(230,162,60,0.4);
      font-weight: 600;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
  .showBtn {
    cursor: pointer;
    width: 70px;
    height: 30px;
    border: 1px solid #d4d4d4;
    border-radius: 20px;
    font-size: 14px;
    font-family: longmenshibei;
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 2px 1px rgba(2, 2, 2, 0.1);
  }
  .actived {
    background-color: #1d78f4;
    color: white;
    border: 1px solid #108ee9;
  }
  .showBtn:active {
    box-shadow: -1px -1px 2px 1px rgba(2, 2, 2, 0.1);
  }
  .showBtn:hover {
    text-decoration: underline;
  }

  #answer01 {
    position: relative;
    width: 75%;
    min-width: 800px;
    /*max-width: 950px;*/
    /*left: 50%;*/
    /*transform: translate(-50%);*/
    /*background-color: #3d84ff;*/
    margin-bottom: 50px;
  }

  .time {
    position: relative;
    top: 60px;
    box-shadow: 1px 3px 5px 1px rgba(213,213,213,0.6);
    width: 80px;
    height: 30px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >div {
      font-size: 14px;
      font-weight: 600;
    }
  }

.body01 {
  width: 75%;
  min-width: 800px;
  min-height: 500px;
  box-shadow: -1px -1px 3px 1px #f6f6f6, 1px 1px 3px 1px #f6f6f6;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 200px;
  .Item {
    margin: 10px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
}
.pageBtn {
  position: relative;
  bottom: 10px;
  left: 50%;
  transform: translateX(-70%);
  margin-top: 20px;
}

  #Content {
    width: 100%;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .Item {
      margin: 10px 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    }
  }
  .item {
    width: 95%;
    .qText {
      width: 100%;
      min-height: 30px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 5px 0;
      .type {
        font-size: 14px;
        /*font-weight: 600;*/
        span:first-child {
          font-size: 16px;
          margin-right: 5px;
          font-weight: 600;
        }
      }
      .text {
        font-size: 15px;
        text-indent: 2em;
        margin-top: 5px;
        font-weight: 600;
        font-family: longmenshibei;
      }
      img {
        max-width: 90%;
        max-height: 100px;
      }
    }
  }
  .answerSheet {
    /*font-family: kaiti;*/
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  /*.el-radio, .radio {*/
  /*  margin: 5px 0;*/
  /*  font-size: 14px;*/
  /*}*/
  .select .radio {
    /*display: block;*/
    margin: 15px 0 0 30px;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    span {
      margin: 0 5px;
    }
  }
  .judge .radio {
    /*display: block;*/
    margin: 10px 0 0 30px;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    span {
      margin: 0 5px;
    }
  }
  .mselect .checkbox {
    /*display: block;*/
    margin: 10px 0 0 30px;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    span {
      margin: 0 5px;
    }
  }
  .replyArea {
    width: 100%;
    height: 150px;
    .Area {
      width: 100%;
      height: 100%;
      resize: none;
    }
  }
  .upLoad {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    .handleIcon {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  }
  .uploadIcon {
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .fileName {
    width: 90%;
    font-size: 13px;
    margin: 5px 0;
  }
  .Btn01 {
    width: 130px;
    height: 40px;
    border-radius: 50px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 20px 0;
  }
  img {
    object-fit: cover;
  }
</style>
