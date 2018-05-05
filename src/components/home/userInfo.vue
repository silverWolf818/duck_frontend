<template>
    <Card class="c-userInfo">
      <Row>
        <Col span="16">
          <div class="u-flex">
            <div class="s-avator">
              <img src="">
            </div>
            <div class="s-info">
              <h2>测试，祝你开心每一天！</h2>
              <div>前端工程师 | 某某某事业群－某某平台部－某某技术部－UED</div>
            </div>
          </div>
        </Col>
        <Col span="8">
          <div class="u-flex">
            <div class="s-item">
              <p>项目数</p>
              <i>56</i>
            </div>
            <div class="s-item">
              <p>贡献人数</p>
              <i>23</i>
            </div>
            <div class="s-item">
              <p>项目访问</p>
              <i>2333</i>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.c-userInfo{
  background: #fff;
  padding: 16px 32px;
  border-bottom: 1px solid #e8e8e8;
  .s-avator{
    flex: 0 1 72px;
    width: 72px;
    height: 72px;
    border-radius: 72px;
    background: #eee;
  }
  .s-info{
    flex: 1 1 auto;
    margin-left: 24px;
    h2{
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      color: rgba(0,0,0,.85);
      margin-bottom: 12px;
    }
  }
  .s-item{
    position: relative;
    padding: 0 32px;
    flex: 1 1 auto;
    text-align: right;
    p{
      color: rgba(0,0,0,.45);
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 4px;
    }
    i{
      display: block;
      font-style: normal;
      color: rgba(0,0,0,.85);
      font-size: 30px;
      line-height: 38px;
    }
    &:not(:last-child):after{
      background-color: #e8e8e8;
      position: absolute;
      top: 8px;
      right: 0;
      width: 1px;
      height: 40px;
      content: "";
    }
  }
}
</style>
