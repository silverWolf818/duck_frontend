<style scoped>
.layout-app{
  position: absolute;
  width: 100%;
  height: 100%;
}
.layout-header{
  box-sizing: border-box;
  position: fixed;
  display: block;
  width: 100%;
  height: 100px;
  z-index: 20;
  box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);
  transition: padding .3s;
}
.layout-sider{
  height: 100%;
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 21;
  transition: width .3s;
  width: 200px;
  border-right: 1px solid #dddee1;
}
.layout-content{
  position: absolute;
  top: 100px;
  right: 0;
  bottom: 0;
  overflow: auto;
  background-color: #F0F0F0;
  z-index: 1;
  transition: left .3s;
  left: 200px;
  padding: 10px;
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.menu-icon{
  transition: all .3s;
}
.rotate-icon{
  transform: rotate(-90deg);
}
.menu-item span{
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}
.menu-item i{
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.layout-nav{
  margin-left: 200px;
}
.collapsed-menu span{
  width: 0;
  transition: width .2s ease;
}
.collapsed-menu i{
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
<template>
  <div class="layout-app">
    <div class="layout-header">
      <Menu ref="nav" @on-select="selection" mode="horizontal" theme="dark" :active-name="active">
        <div class="layout-logo"></div>
        <div class="layout-nav">
          <MenuItem v-for="item in menu" :name="item.menuCode" :key="item.menuCode">
          {{ item.menuName }}
          </MenuItem>
        </div>
      </Menu>
      <Breadcrumb :style="{margin: '12px'}">
        <BreadcrumbItem>{{ step1 }}</BreadcrumbItem>
        <BreadcrumbItem>{{ step2 }}</BreadcrumbItem>
        <BreadcrumbItem>{{ step3 }}</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="layout-sider">
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" :style="{background: '#fff'}">
      <Menu ref="sub" :active-name="subActive" theme="light" width="auto" :class="menuitemClasses" @on-select="selectItem" :open-names="[openName]">
      <Submenu v-for="sub in subMenu" :name="sub.menuCode" :key="sub.menuCode">
      <template slot="title">
      {{ sub.menuName }}
      </template>
      <MenuItem v-for="item in sub.subMenus" :name="item.menuCode" :key="item.menuCode">
      {{ item.menuName }}
      </MenuItem>
      </Submenu>
      </Menu>
      </Sider>
    </div>
    <div class="layout-content">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import { queryMenu } from "../service/api"
  export default {
    data () {
      return {
        isCollapsed: false,
        active:'',
        subActive:'',
        openName:'',
        menu:[],
        subMenu:[],
        step1:'',
        step2:'',
        step3:'',
      }
    },
    created() {
      this.initMenu();
    },
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      initMenu() {
        queryMenu({ method:'GET' }).then((res)=>{
          this.menu = res;
          this.initSubMenu();
          this.$nextTick(()=> {
            this.$refs.nav.updateActiveName();
          });
        });
      },
      collapsedSider () {
        this.$refs.side1.toggleCollapse();
      },
      initSubMenu(data) {
        this.active = this.menu[0].menuCode;
        let active = data ? data : this.active;
        this.subMenu = this.menu.filter(item => item.menuCode === active)[0].subMenus;
        this.step1 = this.menu.filter(item => item.menuCode === active)[0].menuName;
        this.openName = this.subMenu[0].menuCode;
        this.step2 = this.subMenu[0].menuName;
        this.subActive = this.subMenu[0].subMenus[0].menuCode;
        this.step3 = this.subMenu[0].subMenus[0].menuName;
        this.$nextTick(()=> {
          this.$refs.sub.updateOpened();
          this.$refs.sub.updateActiveName();
        });
      },
      selection(data){
        this.initSubMenu(data);
      },
      selectItem(active) {
        let id = '',
            data = [];
        this.subMenu.forEach((value)=>{
          data = value.subMenus.filter(item => item.menuCode === active)[0];
          if(data){
            this.step3 = data.menuName;
            id = data.parentId;
          }
          if(value.autoId === id){
            this.step2 = value.menuName;
          }
        });
        this.$router.push({
          name:active
        });
      }
    }
  }
</script>
