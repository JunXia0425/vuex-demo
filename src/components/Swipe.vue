<template>
    <div class="swipe" ref="root">
        <img :src="item" v-for="(item, index) in images" :key="index" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            images: [
                require('@/assets/img/u=1654317949,2302406594&fm=26&gp=0.jpg'),
                require('@/assets/img/u=2891173003,2665386216&fm=26&gp=0.jpg'),
                require('@/assets/img/u=3104162126,318055222&fm=26&gp=0.jpg'),
                require('@/assets/img/u=3207789083,432998702&fm=26&gp=0.jpg'),
                require('@/assets/img/u=3708451574,4143490021&fm=26&gp=0.jpg')
            ]
        }
    },
    mounted() {
        let root = this.$refs.root.children
        let wid = 60
        root[1].classList.add('active')
        let index = 1
        // setInterval(()=>{
            
        //     if (index !== root.length-1) {
        //         index++
                
        //     } else {
        //         index = 0
        //     }
        //     let next = index + 1 === root.length ? 0 : index + 1
        //     root[index].classList.remove('active')
        //     root[index].transform = `translate(${-wid}px)`
        //     root[next].transform = `translate(${-wid}px)`
        //     root[next].classList.add('active')
        //     console.log(index, next)

            
        // },2000)
        console.log(root)
        console.log(wid)
        
    }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}
.swipe {
    position: relative;
    width: 210px;
    height: 120px;
    overflow: hidden;
}
.swipe img {
    /* position: absolute; */
    width: 50px;
    margin: 5px;
    border-radius: 5px;
    margin: 5px;
    transition: 1s;
}
.active {
    transform: scale(1.1);
}
</style>