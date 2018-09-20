<template>
    <Dropdown trigger="click" @on-click="changeLang">
        <a href="javascript:void(0)">
            click 触发
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>
<script>
    import {mapState} from "vuex"
    export default {
        data(){
          return{
              
          }
        },
        computed:
          mapState(['lang','local'])
        ,
        mounted(){
            
        },
        methods:{
            changeLang(lang){
                this.$store.commit('changeLang', lang);
                document.title = this.lang[this.local].htmlTitle || ''
            },
            
        }
    }
</script>

<style lang="less" scoped>

</style>


