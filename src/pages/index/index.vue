<template>
  <Layout style="height: 100%">
    <Sider ref="side" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" :width="256">
      <div class="layout-logo">
        <p class="logo-title">Vue admin</p>
      </div>
      <Menu
            theme="dark" width="auto"
            ref="menu"
            :active-name="getActiveName"
            :open-names="[getOpenNames]"
            :class="menuitemClasses"
            :accordion="true"
            @on-select="select">
        <Submenu v-for="sub in getMenu" :name="sub.menuCode" :key="sub.menuCode">
          <template slot="title">
            <Icon :type="sub.menuIcon"></Icon>
            <span v-if="!isCollapsed">{{ sub.menuName }}</span>
          </template>
          <div v-if="!isCollapsed">
            <MenuItem v-for="item in sub.subMenus" :name="item.menuCode" :key="item.menuCode">
              {{ item.menuName }}
            </MenuItem>
          </div>
        </Submenu>
      </Menu>
    </Sider>
    <Layout>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
        <Crumbs :step="getCrumb"></Crumbs>
        <Avator v-bind="getUser"></Avator>
      </Header>
      <Tags v-bind="getTags" @linkTo="linkTo"></Tags>
      <Content style="overflow-x: hidden; height: 100%;padding: 14px 24px 0">
        <router-view />
      </Content>
    </Layout>
  </Layout>
</template>

<script>
  import './index.scss'
  import Avator from '../../components/avator'
  import Crumbs from '../../components/crumbs'
  import Tags from '../../components/tags'
  import { mapGetters,mapActions } from 'vuex'
  export default {
    components:{
      Avator,
      Crumbs,
      Tags
    },
    data () {
      return {
        isCollapsed: false,
      }
    },
    computed: {
      ...mapGetters([
        'getMenu',
        'getOpenNames',
        'getActiveName',
        'getUser',
        'getCrumb',
        'getTags'
      ]),
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
      ...mapActions([
        'initMenu',
        'crumbInfo',
        'userInfo'
      ]),
      linkTo(data){
        this.select(data);
      },
      collapsedSider () {
        this.$refs.side.toggleCollapse();
        this.$nextTick(()=> {
          this.$refs.menu.updateActiveName();
        });
      },
      select(data) {
        this.crumbInfo(data);
        if(data === 'home'){
          sessionStorage.setItem('activeName','home');
        }else{
          sessionStorage.setItem('activeName',data);
        }
        this.$router.push({
          name:data
        });
      }
    },
    created() {
      this.initMenu(this);
      this.userInfo();
    },
    updated(){
      this.$nextTick(() => {
        if (this.$refs.menu) {
          this.$refs.menu.updateOpened();
          this.$refs.menu.updateActiveName();
        }
      });
    }
  }
</script>

<style scoped>

</style>
