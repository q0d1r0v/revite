<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()

function goHome() {
    router.push("/")
}
</script>

<template>
    <div class="not-found">
        <div>
            <div class="txt">
                404 Not found
            </div>
            <button class="home" @click="goHome()">HOME</button>
        </div>
    </div>
</template>

<style scoped>
.not-found {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.txt {
    font-size: 30px;
    font-weight: bold;
}

.home {
    width: 200px;
    min-height: 30px;
    transition: all 0.3s;
    border: none;
    background: lightgreen;
    color: #fff;
    font-size: 25px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}

.home:hover {
    background: rgba(144, 238, 144, 0.685);
}

.home:active {
    background: rgba(144, 238, 144, 0.514);
}
</style>
