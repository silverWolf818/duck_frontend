<template>
    <div class="l-home">
      <UserInfo></UserInfo>
      <Row style="margin-top: 10px" :gutter="16">
        <Col span="12">
          <Card>
            <p slot="title" class="card-title">
              <Icon type="android-checkbox-outline"></Icon>
              待办事项
            </p>
            <a type="text" slot="extra">
              <Icon type="plus-round"></Icon>
            </a>
           <div class="to-do-list-con">
             <div v-for="(item, index) in toDoList" :key="'todo-item' + (toDoList.length - index)" class="to-do-item">
               <TodoList :content="item.title"></TodoList>
             </div>
           </div>
          </Card>
        </Col>
        <Col span="12">
          <Row>
            <Col span="12">
              <Card :padding="0">
                <div class="info-card u-flex">
                  <div class="s-icon blue">
                    <div class="u-flex row-flex flex-center flex-middle" style="height: 100%">
                      <Icon type="person-add" :size="50"></Icon>
                    </div>
                  </div>
                  <div class="u-flex row-flex flex-center flex-middle s-info">
                    <div>
                      <i class="c-blue">496</i>
                      <p>今日新增用户</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span="12">
              <Card :padding="0">
                <div class="info-card u-flex">
                  <div class="s-icon green">
                    <div class="u-flex row-flex flex-center flex-middle" style="height: 100%">
                      <Icon type="upload" :size="50"></Icon>
                    </div>
                  </div>
                  <div class="u-flex row-flex flex-center flex-middle s-info">
                    <div>
                      <i class="c-green">496</i>
                      <p>今日浏览量</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <Row style="margin-top: 10px">
            <Col span="12">
              <Card :padding="0">
                <div class="info-card u-flex">
                  <div class="s-icon red">
                    <div class="u-flex row-flex flex-center flex-middle" style="height: 100%">
                      <Icon type="ios-eye" :size="50"></Icon>
                    </div>
                  </div>
                  <div class="u-flex row-flex flex-center flex-middle s-info">
                    <div>
                      <i class="c-red">3K+</i>
                      <p>今日数据采集量</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span="12">
              <Card :padding="0">
                <div class="info-card u-flex">
                  <div class="s-icon org">
                    <div class="u-flex row-flex flex-center flex-middle" style="height: 100%">
                      <Icon type="shuffle" :size="50"></Icon>
                    </div>
                  </div>
                  <div class="u-flex row-flex flex-center flex-middle s-info">
                    <div>
                      <i class="c-org">4M+</i>
                      <p>今日服务调用量</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style="margin-top:10px; margin-bottom: 10px" :gutter="16">
        <Col span="12">
          <Dynamic></Dynamic>
        </Col>
        <Col span="12">
          <Card>
            <p slot="title" class="card-title">
              <Icon type="ios-pulse-strong"></Icon>
              数据来源统计
            </p>
            <div class="data-source-row">
              <Charts></Charts>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
</template>

<script>
import './home.scss'
import UserInfo from '../../components/home/userInfo'
import TodoList from '../../components/home/todoList'
import Dynamic from '../../components/home/dynamic'
import Charts from '../../components/home/charts'
export default {
  components: {
    UserInfo,
    TodoList,
    Dynamic,
    Charts
  },
  data(){
    return {
      toDoList: [
        {
          title: '我们的征途是星辰和大海'
        },
        {
          title: '我们的征途是星辰和大海'
        },
        {
          title: '我们的征途是星辰和大海'
        },
        {
          title: '我们的征途是星辰和大海'
        },
        {
          title: '我们的征途是星辰和大海'
        },
        {
          title: '我们的征途是星辰和大海'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.to-do-list-con{
  height: 180px;
  overflow: auto;
}
.info-card{
  height: 120px;
  .s-icon{
    color: white;
    padding-left: 5px;
    padding-right: 5px;
    flex: 0 1 110px;
  }
  .s-info{
    flex: 1 1 auto;
    i{
      font-style: normal;
      display: block;
      text-align: center;
      font-size: 30px;
      font-weight: 700;
    }
    p{
      font-size: 12px;
      font-weight: 500;
      color: #C8C8C8;
    }
  }
  .c-blue {
    color: rgb(45, 140, 240);
  }
  .c-green{
    color: rgb(100, 213, 114);
  }
  .c-red{
    color: rgb(242, 94, 67);
  }
  .c-org{
    color: rgb(255, 213, 114);
  }
  .blue {
    background-color: rgb(45, 140, 240);
  }
  .green{
    background-color: rgb(100, 213, 114);
  }
  .red{
    background-color: rgb(242, 94, 67);
  }
  .org{
    background-color: rgb(255, 213, 114);
  }
}
  .data-source-row{
    height: 300px;
  }
</style>
