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
            @on-select="select"
            @on-open-change="change">
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
        <Avator v-bind="getUser"></Avator>
      </Header>
      <Content style="margin: 24px 24px 0;">
        <router-view />
      </Content>
    </Layout>
  </Layout>
</template>

<script>
  import './index.scss'
  import Avator from '../../components/avator'
  import { mapGetters,mapActions } from 'vuex'
  export default {
    components:{
      Avator
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
        'getUser'
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
        'userInfo'
      ]),
      collapsedSider () {
        this.$refs.side.toggleCollapse();
        this.$nextTick(()=> {
          this.$refs.menu.updateActiveName();
        });
      },
      change(data) {
        sessionStorage.setItem('openNames',data);
      },
      select(data) {
        sessionStorage.setItem('activeName',data);
        this.$router.push({
          name:data
        });
      }
    },
    created() {
      this.initMenu(this);
      this.userInfo();
    }
  }
</script>

<style scoped>

</style>
