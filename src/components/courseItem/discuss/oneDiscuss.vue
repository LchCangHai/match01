<template>
  <div id="oneDiscuss">
    <div id="fo1nav" @click="toBack()">
      <div class="fo1Navicon">
        <v-icon type="left"></v-icon>
      </div>
      <div class="fo1Navtitle"><div>返回</div></div>
    </div>
    <div id="focTitle">
      <div class="onetitle">
        <div>{{courseDiscussone.content}}</div>
      </div>
      <div class="oneUser">
        <div class="oneUserAvatar">
          <img :src="courseDiscussone.user.avatar">
        </div>
        <div class="oneUserInfo">
          <div>{{courseDiscussone.user.nickname}}</div>
          <div>{{courseDiscussone.user.school}}</div>
        </div>
      </div>
      <div class="oneTips">
<!--        <div class="oneleft">-->
<!--          <div><span>434</span> 人围观</div>-->
<!--          <div><span>999+</span> 回答</div>-->
<!--          <div>03月06日</div>-->
<!--        </div>-->
<!--        <div class="oneright">-->
<!--          <div class="Btn01" v-show="!isweig">-->
<!--            <div>围观</div>-->
<!--          </div>-->
<!--          <div class="Btn01-1" v-show="isweig">-->
<!--            <div>已围观</div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
    <div id="four4">
      <div id="four04Title">
        <div>发布评论</div>
      </div>
      <div id="four04Input">
        <v-input class="InArea" type="textarea" v-model="content"></v-input>
      </div>
      <div id="BtnBox">
        <div @click="publishDiscuss()">
          <div>发布</div>
        </div>
      </div>
    </div>
    <div id="focNum">
      <div>回答</div>
    </div>
    <div id="focReply">
      <div class="focRitem01">
        <div class="focMain">
          <div class="foc01Top">
            <div class="two01UserAvatar">
              <img src="../../../assets/avatar02.png">
            </div>
            <div class="two01Name">你芃妹妹</div>
            <div class="two01School">福州大学</div>
            <div class="two01Time">6月7日</div>
          </div>
          <div class="two01Info">
            <div>大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。</div>
          </div>
          <div class="two01handle">
            <div class="two01zan">
              <div class="frontIcon" v-show="true">
                <span class="iconfont icon-dianzan11"></span>
              </div>
              <div class="frontIcon" v-show="false">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dianzan11"></use>
                </svg>
              </div>
              <div>0个赞</div>
            </div>
            <div class="two01pinglun"
            @click="chooseComment('one')">
              <div class="frontIcon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-pingjia"></use>
                </svg>
              </div>
              <div>0条评论</div>
              <div class="chooseIcon" v-show="chooseItem === 'one' ? false : true">
                <v-icon type="caret-up"></v-icon>
              </div>
              <div class="chooseIcon" v-show="chooseItem === 'one' ? true : false">
                <v-icon type="caret-down"></v-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="focChild" v-show="chooseItem === 'one' ? true : false">
          <div class="focChildTop">
            <div class="commitNum">
              <span>0</span>条评论
            </div>
            <div class="commitInBox" @click="openCommit()">
              <div class="bcText" v-show="!isCommit">发表评论。。</div>
              <v-input type="textarea" class="inCommit" v-model="commitText" v-show="isCommit" placeholder="发表评论。。"></v-input>
<!--              <textarea class="inCommit" v-show="isCommit" placeholder="发表评论。。" autofocus></textarea>-->
            </div>
            <div class="commitHandle" v-show="isCommit">
              <div class="Btn03" @click="closeCommit()">
                <div>取消</div>
              </div>
              <div class="Btn03" @click="commit()">
                <div>评论</div>
              </div>
            </div>
          </div>
          <div class="focChildContent">
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="focRitem01">
        <div class="focMain">
          <div class="foc01Top">
            <div class="two01UserAvatar">
              <img src="../../../assets/avatar02.png">
            </div>
            <div class="two01Name">你芃妹妹</div>
            <div class="two01School">福州大学</div>
            <div class="two01Time">6月7日</div>
          </div>
          <div class="two01Info">
            <div>大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。</div>
          </div>
          <div class="two01handle">
            <div class="two01zan">
              <div class="frontIcon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dianzan11"></use>
                </svg>
              </div>
              <div>0个赞</div>
            </div>
            <div class="two01pinglun"
                 @click="chooseComment('two')">
              <div class="frontIcon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-pingjia"></use>
                </svg>
              </div>
              <div>0条评论</div>
              <div class="chooseIcon" v-show="chooseItem === 'two' ? false : true">
                <v-icon type="caret-up"></v-icon>
              </div>
              <div class="chooseIcon" v-show="chooseItem === 'two' ? true : false">
                <v-icon type="caret-down"></v-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="focChild" v-show="chooseItem === 'two' ? true : false">
          <div class="focChildTop">
            <div class="commitNum">
              <span>0</span>条评论
            </div>
            <div class="commitInBox" @click="openCommit()">
              <div class="bcText" v-show="!isCommit">发表评论。。</div>
              <v-input type="textarea" class="inCommit" v-model="commitText" v-show="isCommit" placeholder="发表评论。。"></v-input>
              <!--              <textarea class="inCommit" v-show="isCommit" placeholder="发表评论。。" autofocus></textarea>-->
            </div>
            <div class="commitHandle" v-show="isCommit">
              <div class="Btn03" @click="closeCommit()">
                <div>取消</div>
              </div>
              <div class="Btn03" @click="commit()">
                <div>评论</div>
              </div>
            </div>
          </div>
          <div class="focChildContent">
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="focRitem01">
        <div class="focMain">
          <div class="foc01Top">
            <div class="two01UserAvatar">
              <img src="../../../assets/avatar02.png">
            </div>
            <div class="two01Name">你芃妹妹</div>
            <div class="two01School">福州大学</div>
            <div class="two01Time">6月7日</div>
          </div>
          <div class="two01Info">
            <div>大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。</div>
          </div>
          <div class="two01handle">
            <div class="two01zan">
              <div class="frontIcon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dianzan11"></use>
                </svg>
              </div>
              <div>0个赞</div>
            </div>
            <div class="two01pinglun"
                 @click="chooseComment('three')">
              <div class="frontIcon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-pingjia"></use>
                </svg>
              </div>
              <div>0条评论</div>
              <div class="chooseIcon" v-show="chooseItem === 'three' ? false : true">
                <v-icon type="caret-up"></v-icon>
              </div>
              <div class="chooseIcon" v-show="chooseItem === 'three' ? true : false">
                <v-icon type="caret-down"></v-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="focChild" v-show="chooseItem === 'three' ? true : false">
          <div class="focChildTop">
            <div class="commitNum">
              <span>0</span>条评论
            </div>
            <div class="commitInBox" @click="openCommit()">
              <div class="bcText" v-show="!isCommit">发表评论。。</div>
              <v-input type="textarea" class="inCommit" v-model="commitText" v-show="isCommit" placeholder="发表评论。。"></v-input>
              <!--              <textarea class="inCommit" v-show="isCommit" placeholder="发表评论。。" autofocus></textarea>-->
            </div>
            <div class="commitHandle" v-show="isCommit">
              <div class="Btn03" @click="closeCommit()">
                <div>取消</div>
              </div>
              <div class="Btn03" @click="commit()">
                <div>评论</div>
              </div>
            </div>
          </div>
          <div class="focChildContent">
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="focRitem01">
        <div class="focMain">
          <div class="foc01Top">
            <div class="two01UserAvatar">
              <img src="../../../assets/avatar02.png">
            </div>
            <div class="two01Name">你芃妹妹</div>
            <div class="two01School">福州大学</div>
            <div class="two01Time">6月7日</div>
          </div>
          <div class="two01Info">
            <div>大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。</div>
          </div>
          <div class="two01handle">
            <div class="two01zan">
              <div class="frontIcon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dianzan11"></use>
                </svg>
              </div>
              <div>0个赞</div>
            </div>
            <div class="two01pinglun"
                 @click="chooseComment('four')">
              <div class="frontIcon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-pingjia"></use>
                </svg>
              </div>
              <div>0条评论</div>
              <div class="chooseIcon" v-show="chooseItem === 'four' ? false : true">
                <v-icon type="caret-up"></v-icon>
              </div>
              <div class="chooseIcon" v-show="chooseItem === 'four' ? true : false">
                <v-icon type="caret-down"></v-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="focChild" v-show="chooseItem === 'four' ? true : false">
          <div class="focChildTop">
            <div class="commitNum">
              <span>0</span>条评论
            </div>
            <div class="commitInBox" @click="openCommit()">
              <div class="bcText" v-show="!isCommit">发表评论。。</div>
              <v-input type="textarea" class="inCommit" v-model="commitText" v-show="isCommit" placeholder="发表评论。。"></v-input>
              <!--              <textarea class="inCommit" v-show="isCommit" placeholder="发表评论。。" autofocus></textarea>-->
            </div>
            <div class="commitHandle" v-show="isCommit">
              <div class="Btn03" @click="closeCommit()">
                <div>取消</div>
              </div>
              <div class="Btn03" @click="commit()">
                <div>评论</div>
              </div>
            </div>
          </div>
          <div class="focChildContent">
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="focRitem01">
        <div class="focMain">
          <div class="foc01Top">
            <div class="two01UserAvatar">
              <img src="../../../assets/avatar02.png">
            </div>
            <div class="two01Name">你芃妹妹</div>
            <div class="two01School">福州大学</div>
            <div class="two01Time">6月7日</div>
          </div>
          <div class="two01Info">
            <div>大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。大概是把夜给熬透了，人太强大了，海带结和芝麻糊失效了。</div>
          </div>
          <div class="two01handle">
            <div class="two01zan">
              <div class="frontIcon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dianzan11"></use>
                </svg>
              </div>
              <div>0个赞</div>
            </div>
            <div class="two01pinglun"
                 @click="chooseComment('five')">
              <div class="frontIcon">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-pingjia"></use>
                </svg>
              </div>
              <div>0条评论</div>
              <div class="chooseIcon" v-show="chooseItem === 'five' ? false : true">
                <v-icon type="caret-up"></v-icon>
              </div>
              <div class="chooseIcon" v-show="chooseItem === 'five' ? true : false">
                <v-icon type="caret-down"></v-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="focChild" v-show="chooseItem === 'five' ? true : false">
          <div class="focChildTop">
            <div class="commitNum">
              <span>0</span>条评论
            </div>
            <div class="commitInBox" @click="openCommit()">
              <div class="bcText" v-show="!isCommit">发表评论。。</div>
              <v-input type="textarea" class="inCommit" v-model="commitText" v-show="isCommit" placeholder="发表评论。。"></v-input>
              <!--              <textarea class="inCommit" v-show="isCommit" placeholder="发表评论。。" autofocus></textarea>-->
            </div>
            <div class="commitHandle" v-show="isCommit">
              <div class="Btn03" @click="closeCommit()">
                <div>取消</div>
              </div>
              <div class="Btn03" @click="commit()">
                <div>评论</div>
              </div>
            </div>
          </div>
          <div class="focChildContent">
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
            <div class="focRitem02">
              <div class="foc02Top">
                <div class="foc02Avatar">
                  <img src="../../../assets/avatar02.png">
                </div>
                <div class="foc02Name">炜炜</div>
                <div class="foc02Time">6月13日</div>
              </div>
              <div class="foc02Content">
                <div>去死去死去死去死去死去死去死去死去死去死去死去死去死去死去死啊啊啊啊啊啊啊啊啊啊啊</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="loading" @click="Clickloading()">
      <div class="unLoading" v-show="!loading">
        <div v-show="!endLoading">点击加载更多</div>
        <div v-show="endLoading">已经到底啦！</div>
      </div>
      <div class="inLoading" v-show="loading">
        <div>
          <v-icon type="loading"></v-icon>
        </div>
        <div>正在加载中</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'oneDiscuss.vue',
  data () {
    return {
      isweig: true,
      chooseItem: '',
      isCommit: false,
      loading: false,
      endLoading: false,
      commitText: '',
      content: ''
    }
  },
  computed: {
    ...mapState([
      'courseDiscussone'
    ])
  },
  methods: {
    ...mapMutations([
      'setcourseDiscussone'
    ]),
    toBack () {
      this.$router.go(-1)
    },
    chooseComment (id) {
      this.closeCommit()
      if (this.chooseItem === id) {
        this.chooseItem = ''
      } else {
        this.chooseItem = id
      }
    },
    follow () {
    },
    openCommit () {
      this.isCommit = true
    },
    closeCommit () {
      this.isCommit = false
      this.commitText = ''
    },
    commit () {
      console.log(this.commitText)
    },
    fond () {
    },
    Clickloading () {
      if (this.loading === true) {
      } else if (this.endLoading === true) {
      } else {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 1000)
      }
    },
    publishDiscuss () {
      if (this.content === '') {
        this.$notification.warning({
          message: '警告',
          description: '请输入评论内容',
          duration: 2
        })
      } else {
        this.$axios.post('/api/course/' + this.currentCourse + '/discussions/' + this.courseDiscussID,
          {
            content: this.content
          }, {
            header: {
              'Content-Type': 'application/json' // 如果写成contentType会报错
            }
          }).then(res => {
          this.$notification.success({
            message: '成功',
            description: '发布评论内容',
            duration: 1
          })
        }).catch(error => {
          this.$message.error('发布评论内容失败')
          console.log(error)
        }).finally(() => {
          this.content = ''
        })
      }
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
  #oneDiscuss {
    /*margin: 20px 0;*/
    position: relative;
    /*height: 700px;*/
    width: 70%;
    min-width: 800px;
    max-width: 900px;
    left: 50%;
    transform: translate(-50%);
    margin-bottom: 50px;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  #fo1nav {
    cursor: pointer;
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding-top: 10px;
    .fo1Navicon {
      width: 30px;
      height: 30px;
      i {
        font-size: 30px;
        color: #1296db;
      }
    }
    .fo1Navtitle {
      margin-left: 5px;
      font-size: 16px;
      font-weight: 600;
    }
  }

  #focTitle{
    width: 100%;
    min-height: 150px;
    background-color: #f9f9f9;
    margin-top: 5px;
    /*border-radius: 4px;*/
    box-shadow: 3px 3px 5px 0px rgba(213,213,213,0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .onetitle {
    width: 90%;
    min-height: 50px;
    >div {
      font-size: 17px;
      font-weight: 500;
    }
  }
  #four4 {
    width: 100%;
    min-height: 350px;
    /*background-color: #83bafc;*/
    margin: 20px 0;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  #four04Title {
    width: 100%;
    height: 40px;
    background-color: #f4f4f4;
    box-shadow: 1px 1px 5px 1px rgba(150,150,150,0.2),
    -1px 1px 5px 1px rgba(150,150,150,0.2);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    >div {
      font-size: 14px;
      font-weight: 600;
      margin-left: 20px;
    }
  }
  #four04Input {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .InArea {
      width: 100%;
      height: 100%;
      resize: none;
    }
  }
  #BtnBox {
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    >div {
      cursor: pointer;
      width: 170px;
      height: 35px;
      border-radius: 40px;
      background-color: #81b8fa;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      box-shadow: 1px 1px 3px 1px rgba(150,150,150,0.2);
      >div {
        color: white;
        font-size: 15px;
      }
    }
    >div:hover {
      >div {
        font-size: 16px;
      }
    }
    >div:active {
      >div {
        font-size: 15px;
      }
      box-shadow: -1px -1px 3px 1px rgba(150,150,150,0.2);
    }
  }

  .oneUser {
    width: 90%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .oneUserAvatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
      }
    }
    .oneUserInfo {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-left: 5px;
      font-size: 13px;
      color: #777b80;
      >div {
        margin: 0 5px;
      }
      >div:first-child {
        font-size: 13px;
        font-weight: 600;
      }
    }
  }
  .oneTips {
    width: 90%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .oneleft {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      >div {
        color: #363532;
        margin: 0 10px;
        >span {
          font-weight: 600;
        }
      }
      >div:first-child {
        margin-left: 0;
      }
    }
    .oneright {
      .Btn01 {
        width: 80px;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /*border:#eeeeee solid 1px;*/
        border-bottom: solid 1px rgba(191,191,191,1);
        border-radius: 50px;
        color: #3d84ff;
        cursor: pointer;
        background-color: white;
        box-shadow: 1px 1px 5px 0px rgba(213,213,213,0.5);
      }
      .Btn01:hover {
        font-size: 13px;
      }
      .Btn01:active {
        background-color: #ebf2f2;
        border: #3d84ff solid 1px;
        box-shadow: -1px -1px 5px 0px rgba(213,213,213,0.5);
      }
      .Btn01-1 {
        width: 80px;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: #3d84ff;
        font-size: 13px;
        font-weight: 600;
        border-bottom: solid 1px rgba(191,191,191,1);
        border-radius: 50px;
        background-color: white}
    }
  }

  #focNum {
    margin-top: 30px;
    width: 100%;
    height: 60px;
    background-color: #f9f9f9;
    border-bottom: solid 1px rgba(191,191,191,0.61);
    box-shadow: 3px 0px 5px 0px rgba(213,213,213,0.5),
    -3px 0px 5px 0px rgba(213,213,213,0.5);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    >div {
      margin-left: 30px;
      font-size: 16px;
      font-weight: 600;
    }
  }

  #focReply {
    width: 100%;
    box-shadow: 3px 3px 5px 0px rgba(213,213,213,0.5),
    -3px 0px 5px 0px rgba(213,213,213,0.5);
  }
  .focRitem01 {
    width: 100%;
    background-color: #f9f9f9;
    border-bottom: solid 1px rgba(191,191,191,0.61);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .focMain {
    width: 90%;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 0;
  }
    .foc01Top {
      width: 100%;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      >div {
        margin-right: 10px;
      }
      .two01Name {
        font-size: 13px;
        font-weight: 600;
      }
      .two01Time {
        margin-left: 30px;
      }
      .two01UserAvatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        img {
          height: 100%;
          width: 100%;
          border-radius: 50%;
        }
      }
    }
    .two01Info {
      margin-left: 10px;
      width: 90%;
      min-height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin: 5px 0;
      >div{
        font-size: 14px;
        word-break: break-all;
        text-indent: 2em;
      }
    }
    .two01handle {
      margin-left: 10px;
      width: 90%;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .two01zan {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 90px;
        height: 30px;
        cursor: pointer;
        border-bottom: solid 1px rgba(191,191,191,1);
        border-radius: 4px;
        background-color: white;
        box-shadow: 1px 1px 5px 0px rgba(213,213,213,0.5);
      }
      .two01zan:active {
        box-shadow: -1px -1px 5px 0px rgba(213,213,213,0.5);
      }
      .two01pinglun {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 30px;
        cursor: pointer;
        border-bottom: solid 1px rgba(191,191,191,1);
        border-radius: 4px;
        background-color: white;
        box-shadow: 1px 1px 5px 0px rgba(213,213,213,0.5);
        position: relative;
        left: 20px;
      }
      .two01pinglun:active {
        box-shadow: -1px -1px 5px 0px rgba(213,213,213,0.5);
      }
      .frontIcon {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
        width: 20px;
        height: 20px;
        svg {
          height: 100%;
          width: 100%;
        }
        span {
          font-size: 18px;
          color: gray;
        }
      }
      .chooseIcon {
        position: relative;
        margin-left: 5px;
        /*top: 3px;*/
        i {
          font-size: 16px;
          color: darkgrey;
        }
      }
    }
  .focChild {
    width: 90%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 10px 0;
    border-top: 1px solid rgba(191,191,191,0.5);
  }
    .focChildTop {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .commitNum {
        font-size: 15px;
        margin: 5px 0;
        >span {
          margin-right: 5px;
          font-weight: 600;
        }
      }
      .commitInBox {
        cursor: pointer;
        width: 100%;
        height: 80px;
        background-color: #f5fdfb;
        margin-bottom: 5px;
        >textarea {
          z-index: 11;
          width: 100%;
          height: 100%;
          resize: none;
          font-size: 14px;
          background-color: white;
        }
        .bcText {
          z-index: 10;
          position: absolute;
          font-size: 14px;
          margin: 10px 10px;
          /*background-color: white;*/
        }
      }
      .commitHandle {
        width: 100%;
        min-height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        >div.Btn03 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          width: 80px;
          height: 30px;
          border-bottom: solid 1px rgba(191,191,191,1);
          border-radius: 40px;
          background-color: white;
          box-shadow: 1px 1px 5px 0px rgba(213,213,213,0.5);
          margin: 10px 10px;
        }
        >div:last-child {
          background-color: #bfbfbf;
          color: white;
        }
        >div:last-child:hover {
          background-color: #3d84ff;
        }
      }
    }
    .focChildContent {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .focRitem02 {
        width: 100%;
        min-height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 10px 0;
        padding-bottom: 20px;
        border-bottom: solid 1px rgba(191,191,191,0.61);
        .foc02Top {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          height: 40px;
          .foc02Avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            img {
              height: 100%;
              width: 100%;
              border-radius: 50%;
            }
          }
          .foc02Name {
            margin: 0 5px;
            font-size: 12px;
            font-weight: 600;
          }
          .foc02Time {
            margin: 0 10px;
            font-size: 11px;
          }
        }
        .foc02Content {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          min-height: 40px;
          >div {
            font-size: 13px;
            text-indent: 2em;
          }
        }
      }
      .focRitem02:last-child {
        margin-top: 10px;
        padding-bottom: 20px;
        border-bottom: none;
      }
    }

  #loading {
    cursor: pointer;
    width: 100%;
    height: 50px;
    box-shadow: 3px 3px 5px 0px rgba(213,213,213,0.5),
    -3px 0px 5px 0px rgba(213,213,213,0.5);
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #loading:hover {
    font-size: 16px;
    font-weight: 600;
  }
    .unLoading {
      >div {
        font-size: 15px;
      }
    }
    .inLoading {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      >div{
        margin: 0 5px;
      }
      >div:first-child {
        i{
          font-size: 16px;
        }
      }
    }
  img {
    object-fit: cover;
  }
</style>
