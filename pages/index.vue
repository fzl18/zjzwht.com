<template>
    <section>        
        <section id="index" style="height:100vh">
            <div
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="1150"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top-center"
            >
                首页动画
            </div>
        </section>
        <main>
            <section id="part-1" style="height:100vh">
                <Menu />
                <!-- part1 -->
                <div class="mainbox">
                    <div
                        data-aos="fade-left"
                        data-aos-delay="500"
                        data-aos-easing="ease-in-out"
                        data-aos-anchor-placement="top-center"
                    >
                        11111111111111111
                    </div>
                </div>
            </section>
            <section id="part-2" style="height:100vh">
                <!-- part2 -->                
                <div class="mainbox">
                    <div
                        data-aos="fade-right"
                        data-aos-delay="500"
                        data-aos-easing="ease-in-out"
                        data-aos-anchor-placement="top-center"
                    >
                        22222222222222222222
                    </div>
                </div>
            </section>
            <section id="part-3" style="height:100vh">
                <!-- part3 -->
                <div class="mainbox">
                    <div
                        data-aos="fade-down"
                        data-aos-delay="500"
                        data-aos-easing="ease-in-out"
                        data-aos-anchor-placement="top-center"
                    >
                        33333333333333333333
                    </div>
                </div>
            </section>
            <section id="part-4" style="height:100vh">
                <!-- part3 -->
                <div class="mainbox">
                    <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-easing="ease-in-out"
                        data-aos-anchor-placement="top-center"
                    >
                        4444444444444444444
                    </div>
                </div>
            </section>
            <section id="part-5" style="height:100vh">
                <!-- part3 -->
                <div class="mainbox">
                    55555555555555555555
                </div>
            </section>
            <section id="part-6" style="height:100vh">
                <!-- part3 -->
                <div class="mainbox">
                    6666666666666666666
                </div>
            </section>
            <section id="part-7" style="height:100vh">
                <!-- part3 -->
                <div class="mainbox">
                    777777777777777777
                </div>
            </section>
            <section id="part-8" style="height:100vh">
                <!-- part3 -->
                <div class="mainbox">
                    88888888888888888
                </div>
            </section>
        </main>
        <footer>sdfsdfwefewef</footer>
        <!-- other -->
        <Topblock v-model="$store.state.topShow" />
        <LeftSide v-model="$store.state.leftShow"/>
    </section>  
</template>

<script>
import Menu from '../components/menu'
import LeftSide from '../components/leftSide'
import Topblock from '../components/topblock'
export default {
    components:{
        Menu,LeftSide,Topblock,
    },
    data () {
        return{

        }
    },
    // computed:mapState(['topShow','leftShow']),
    mounted () {
        const AOS = require('aos')
        AOS.init()
    },
    methods:{

    }
    // render (h) {
    //     return (
    //     )
    // }
}
</script>

<style lang="less" scoped>

</style>

