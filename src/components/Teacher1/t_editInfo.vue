<template>
  <div id="studentInfo">
    <div id="Nav">
      <my-nav :type="1"></my-nav>
    </div>
    <div id="Content01">
      <div id="lefttype">
        <div class="fo1nav" :class="{activeItem: type === 1}" @click="changeType(1)">
          <div class="fo1Navicon">
            <svg t="1593389599222" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5497" width="200" height="200"><path d="M484.751579 529.237872c4.782757 0 9.621781 0.393874 14.517074 0.393874a264.795926 264.795926 0 1 0-145.227005-43.607489 471.861163 471.861163 0 0 0-172.404317 106.627344C95.435172 675.927837 38.661035 789.869986 21.724449 914.109128a99.593878 99.593878 0 0 0 23.238572 78.774819 88.509135 88.509135 0 0 0 66.452186 30.834714h345.315044a33.760637 33.760637 0 0 0 0-67.521273H111.358939a21.156666 21.156666 0 0 1-15.58616-7.708678 32.128872 32.128872 0 0 1-7.202269-25.545549c29.934431-219.162799 198.906417-385.884076 396.181069-393.705289zM303.850835 265.173426A195.474086 195.474086 0 1 1 499.043582 460.647512 195.699156 195.699156 0 0 1 303.850835 265.173426z" fill="#467CFD" p-id="5498"></path><path d="M991.83634 613.47066l-34.15451-34.041975a36.348952 36.348952 0 0 0-51.2599 0l-42.763473 42.538402 85.526946 85.133071 42.707205-42.482134a35.955078 35.955078 0 0 0-0.056268-51.147364zM615.292707 869.151214l85.526946 85.133072 232.385715-229.516061-85.470678-85.133072-232.441983 229.516061zM546.758615 1023.831197v0.168803l136.67431-53.848215-84.739197-84.345324-51.935113 138.024736z" fill="#8BAEF7" p-id="5499"></path></svg>
          </div>
          <div class="fo1Navtitle"><div>修改资料</div></div>
        </div>
        <div class="fo1nav" :class="{activeItem: type === 2}" @click="changeType(2)">
          <div class="fo1Navicon">
            <svg t="1593391439139" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8642" width="200" height="200"><path d="M378.179968 187.543402A86.282989 86.282989 0 0 1 468.695707 106.469952H569.630525a86.282989 86.282989 0 0 1 90.515739 81.07345v197.311288h117.865819V187.543402C778.012083 84.003816 684.565978 0 569.630525 0H468.695707C353.109062 0 259.662957 84.003816 259.662957 187.543402v91.166932h118.517011z" fill="#4E8CEE" p-id="8643"></path><path d="M146.355485 441.834022v297.594913c0 157.262957 141.959936 284.571065 316.805087 284.571065h97.678856c175.170747 0 316.805087-127.308108 316.805087-284.571065v-297.594913z" fill="#A6C5F6" p-id="8644"></path><path d="M565.072178 706.869316v177.449921a39.397138 39.397138 0 0 1-78.794277 0v-177.449921a100.609221 100.609221 0 0 1-63.491256-92.794912 103.21399 103.21399 0 0 1 206.102385 0 100.283625 100.283625 0 0 1-65.119237 92.794912z" fill="#4E8CEE" p-id="8645"></path><path d="M525.67504 939.019396a55.351351 55.351351 0 0 1-55.676948-54.700159V716.311606A115.912242 115.912242 0 0 1 406.832432 614.074404a119.4938 119.4938 0 0 1 238.662004 0 115.586645 115.586645 0 0 1-65.119237 103.21399v167.030843a55.351351 55.351351 0 0 1-54.700159 54.700159z m0-409.274404A85.631797 85.631797 0 0 0 439.392051 614.074404a84.003816 84.003816 0 0 0 53.397774 77.817488l10.093482 4.23275v188.194595a23.117329 23.117329 0 0 0 46.234658 0v-188.194595l10.419078-4.23275a84.329412 84.329412 0 0 0 53.397774-77.817488 85.631797 85.631797 0 0 0-87.259777-84.329412z" fill="#FFFFFF" p-id="8646"></path></svg>
          </div>
          <div class="fo1Navtitle"><div>修改密码</div></div>
        </div>
        <div class="fo1nav" :class="{activeItem: type === 3}" @click="changeType(3)">
          <div class="fo1Navicon">
            <svg t="1593392707060" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9545" width="200" height="200"><path d="M777 110.382C777 102.991 771.009 97 763.618 97H292.382C284.991 97 279 102.991 279 110.382v802.236c0 7.391 5.991 13.382 13.382 13.382h471.236c7.391 0 13.382-5.991 13.382-13.382V110.382zM498.03 131h143.857c8.315 0 15.055 6.685 15.055 15s-6.74 15-15.055 15H498.03c-8.315 0-15.055-6.685-15.055-15s6.74-15 15.055-15z m-60.219 1.583c8.315 0 15.055 6.74 15.055 15.055s-6.74 15.055-15.055 15.055-15.055-6.74-15.055-15.055 6.74-15.055 15.055-15.055z m89.91 771.98c-25.406 0-46.001-20.595-46.001-46.001s20.595-46.001 46.001-46.001 46.001 20.595 46.001 46.001c0 25.405-20.595 46.001-46.001 46.001zM731 788H323V206h408v582z" fill="#53AFFD" p-id="9546"></path><path d="M810 110.837C810 84.97 789.03 64 763.163 64H291.837C265.97 64 245 84.97 245 110.837v802.325C245 939.03 265.97 960 291.837 960h471.325C789.03 960 810 939.03 810 913.163V110.837z m-33 801.781c0 7.391-5.991 13.382-13.382 13.382H292.382c-7.391 0-13.382-5.991-13.382-13.382V110.382C279 102.991 284.991 97 292.382 97h471.236c7.391 0 13.382 5.991 13.382 13.382v802.236z" fill="" p-id="9547"></path><path d="M323 206h408v582H323z" fill="#FFFFFF" p-id="9548"></path><path d="M527.721 858.562m-46.001 0a46.001 46.001 0 1 0 92.002 0 46.001 46.001 0 1 0-92.002 0Z" fill="#FFFFFF" p-id="9549"></path><path d="M437.811 147.638m-15.055 0a15.055 15.055 0 1 0 30.11 0 15.055 15.055 0 1 0-30.11 0Z" fill="#FFFFFF" p-id="9550"></path><path d="M498.03 161h143.857c8.315 0 15.055-6.685 15.055-15s-6.74-15-15.055-15H498.03c-8.315 0-15.055 6.685-15.055 15s6.74 15 15.055 15z" fill="#FFFFFF" p-id="9551"></path></svg>
          </div>
          <div class="fo1Navtitle"><div>更改手机</div></div>
        </div>
        <div class="fo1nav" :class="{activeItem: type === 4}" @click="changeType(4)">
          <div class="fo1Navicon">
            <svg t="1593392752996" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10446" width="200" height="200"><path d="M186.2 214.5c-10.4 3.7-18.8 15.7-18.8 26.7v375.5c0 11 4.2 28 9.3 37.7 0 0 30.4 57.5 117.3 144.5 97.4 97.4 199.6 124.2 199.6 124.2 10.6 2.8 27.8 2 38.1-1.8 0 0 122.6-44.7 200.9-123 73.5-73.5 113.7-144 113.7-144 5.4-9.6 9.9-26.4 9.9-37.4l0.3-376.5c0-11-8.5-23-18.8-26.7L531.3 104.9c-10.4-3.7-27.3-3.7-37.7 0L186.2 214.5z m615.4 379.4c0 11-4.3 27.9-9.7 37.5 0 0-36.8 66.8-100.1 130.1C617.5 835.8 531.3 867 531.3 867c-10.3 3.8-27.5 4.4-38.1 1.5 0 0-71.4-19.7-160.7-109-63.3-63.3-100.3-129.3-100.3-129.3-5.4-9.6-9.8-26.4-9.8-37.4v-314c0-11 8.5-23 18.9-26.6l252.3-87.8c10.4-3.6 27.4-3.6 37.8 0l251.3 87.2c10.4 3.6 18.9 15.6 18.9 26.6v315.7z" fill="#2680F0" p-id="10447"></path><path d="M325.2 528c-8.1-7.4-8.8-20.1-1.4-28.3l10.1-11.1c7.4-8.1 20.1-8.7 28.2-1.3l93.8 85.4c8.1 7.4 20.8 6.8 28.2-1.3l176.2-194c7.4-8.1 20.1-8.8 28.3-1.4l11.1 10.1c8.1 7.4 8.8 20.1 1.4 28.3l-213 234.7c-7.4 8.1-20.1 8.8-28.2 1.4L325.2 528z" fill="#2680F0" p-id="10448"></path></svg>
          </div>
          <div class="fo1Navtitle"><div>学校认证</div></div>
        </div>
      </div>
      <div id="righttype">
        <my-setinfo v-show="type === 1"></my-setinfo>
        <my-password v-show="type === 2"></my-password>
        <my-tel v-show="type === 3"></my-tel>
        <my-confirm v-show="type === 4"></my-confirm>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import myNav from '../../views/navs/t_nav4.vue'
import setInfo from './t_info/t_setInfo.vue'
import confirm from './t_info/t_confirm.vue'
import password from './t_info/t_setPassword.vue'
import tel from './t_info/t_changeTel.vue'

export default {
  name: 'studentInfo.vue',
  data () {
    return {
      type: 1
    }
  },
  computed: {
    ...mapState([
      'currentUser'
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentUser'
    ]),
    changeType (id) {
      this.type = id
    }
  },
  watch: {
  },
  mounted () {
  },
  components: {
    'my-nav': myNav,
    'my-setinfo': setInfo,
    'my-confirm': confirm,
    'my-password': password,
    'my-tel': tel
  }
}
</script>

<style scoped lang="less">
  #studentInfo {
    width: 100%;
    min-width: 1050px;
    min-height: 400px;
    min-height: 600px;
    /*background: url("../assets/headImg.png");*/
    /*background-repeat: repeat-x;*/
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /*background-color: #f6f6f6;*/
    background-color: white;
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

  #Content01 {
    width: 70%;
    min-width: 770px;
    /*max-width: 00px;*/
    min-height: 700px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    #lefttype {
      width: 150px;
      height: 500px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-top: 20px;
      /*border: 1px solid #d3d3d3;*/
      border-radius: 4px;
      box-shadow: 1px 1px 5px 1px rgba(150,150,150,0.2);
    }
    #righttype {
      width: 600px;
      min-height: 600px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-top: 20px;
    }
  }
  .fo1nav {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #f8f8f8;
    cursor: pointer;
    .fo1Navicon {
      width: 30px;
      height: 30px;
      svg {
        height: 100%;
        width: 100%;
      }
    }
    .fo1Navtitle {
      margin-left: 10px;
      font-size: 15px;
      font-weight: 600;
    }
  }
  .fo1nav:hover {
    font-size: 16px;
  }
  .fo1nav:active {
    font-size: 15px;
  }
  .activeItem {
    background-color: #f8f8f8;
  }

  img {
    object-fit: cover;
  }

</style>
