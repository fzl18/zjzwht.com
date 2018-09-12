<template>
    <section>
        <nav>菜单</nav>
        <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-center"
        >
            <div>222222222</div> 
        </div>    
    </section>  
</template>

<script>
export default {
    data () {

    },    
    mounted () {
        AOS.init()
    },
    // render (h) {
    //     return (
    //         <div class="mainbox">
    //             <div
    //                 data-aos="fade-up"
    //                 data-aos-duration="1000"
    //                 data-aos-delay="50"
    //                 data-aos-easing="ease-in-out"
    //                 data-aos-anchor-placement="top-center"
    //             >
    //                 <div>111111111111</div> 
    //             </div>    
    //         </div>            
    //     )
    // }
}
</script>

<style lang="less" scoped>
	div{color:red;text-align: center;}
</style>

