<template>
  <Sider hide-trigger collapsible :collapsed-width="78" :style="{background: '#fff'}">
    <Menu ref="sub" theme="light" width="auto" @on-select="selectItem">
      <Submenu v-for="sub in menu" :name="sub.menuCode" :key="sub.menuCode">
        <template slot="title">
          {{ sub.menuName }}
        </template>
        <MenuItem v-for="item in sub.subMenus" :name="item.menuCode" :key="item.menuCode">
          {{ item.menuName }}
        </MenuItem>
      </Submenu>
    </Menu>
  </Sider>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        props:{
          menu: {
            type: [Array],
            default() {
              return []
            }
          }
        },
        methods:{
          ...mapActions([
            'changeItem'
          ]),
          selectItem(data) {
            this.changeItem(data);
            this.$router.push({
              name:data
            });
          }
        }
    }
</script>

<style scoped>

</style>
