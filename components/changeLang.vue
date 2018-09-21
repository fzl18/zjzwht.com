<template>
    <Dropdown trigger="click" @on-click="changeLang">
        <a href="javascript:void(0)">
            <template v-for=" curlang in lang.type">
                {{local == curlang.val ? curlang.title : null }}
            </template>
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <template v-for=" curlang in lang.type">
                <DropdownItem :name="curlang.val">{{curlang.title}}</DropdownItem>
            </template>
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
                this.$store.commit('changeLang', lang)
                // document.title = this.lang[this.local].htmlTitle || ''
            },
            
        }
    }
</script>

<style lang="less" scoped>

</style>


