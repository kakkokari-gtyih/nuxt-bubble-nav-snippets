<template>
    <div :class="['fixed flex items-center z-[9999] left-0 top-0 w-screen h-screen', { 'pointer-events-none': !isOpen }, { 'nav-open': isOpen}]">
        <!-- 背景の広がる丸（メニューボタンの裏側に、2pxずつ余裕を持たせて配置） -->
        <div :class="['absolute z-0 bg top-[34px] left-[34px] md:top-[66px] md:left-[66px] transition-transform rounded-full bg-secondary-500 h-[34px] w-[34px]', {'scale-[150]': isOpen}, {'scale-100': !isOpen}]"></div>
        
        <!-- 常に表示される部分 -->
        <div class="absolute top-8 left-8 md:top-16 md:left-16 flex items-start space-x-2">

            <!-- メニューボタン（これの裏に背景の丸が来る） -->
            <button @click="toggleNav()" aria-controls="mainNavigation" :aria-expanded="isOpen" :class="['group transition rounded-full p-2 border-2 pointer-events-auto', {'bg-white hover:bg-secondary-500 text-black border-secondary-500': !isOpen}, {'bg-white hover:bg-secondary-100 text-black border-black': isOpen}]">
                <CloseIco v-if="isOpen" class="block h-6 w-6" />
                <MenuIco v-else class="block h-6 w-6" />
                <span class="sr-only">メニューを開く / 閉じる</span>
            </button>

            <!-- ロゴ（トップページ以外ではトップページに戻るボタンとして表示） -->
            <NuxtLink v-if="route.path != '/'" class="relative -z-30 pointer-events-auto" to="/"><img alt="大阪府立富田林中学校・高等学校とんこう地域フォーラム2024" :src="Logo" :class="['h-11 w-auto transition-opacity hero-logo', {'md:h-20': !route.path.includes('/events/day')}]" /><span class="sr-only">大阪府立富田林中学校・高等学校とんこう地域フォーラム2024</span></NuxtLink>
        </div>

        <!-- メニュー本体 -->
        <nav id="mainNavigation" :aria-hidden="!isOpen" :class="['relative z-10 px-8 md:pl-16 md:pr-0 text-black transition duration-300 delay-100 max-w-full md:max-w-screen-md', {'opacity-0 translate-y-10 pointer-events-none': !isOpen}, {'opacity-100 translate-y-0 pointer-events-auto': isOpen}]">
            <NuxtLink :tabindex="isOpen ? 0 : -1" @click.native="toggleNav()" to="/"><img alt="大阪府立富田林中学校・高等学校とんこう地域フォーラム2024" :src="MenuLogo" class="w-full h-auto mb-4" /><span class="sr-only">大阪府立富田林中学校・高等学校とんこう地域フォーラム2024</span></NuxtLink>
            <div >
            </div>
            <ul class="text-2xl space-y-2 font-bold">
                <li><NuxtLink class="relative before:absolute before:-bottom-0.5 before:h-0.5 before:w-full before:scale-x-0 before:origin-left hover:before:scale-x-100 before:bg-black before:transition" :tabindex="isOpen ? 0 : -1" @click.native="toggleNav()" to="/">トップ</NuxtLink></li>
                <li><NuxtLink class="relative before:absolute before:-bottom-0.5 before:h-0.5 before:w-full before:scale-x-0 before:origin-left hover:before:scale-x-100 before:bg-black before:transition" :tabindex="isOpen ? 0 : -1" @click.native="toggleNav()" to="/about/">本イベントについて</NuxtLink></li>
                <li><NuxtLink class="relative before:absolute before:-bottom-0.5 before:h-0.5 before:w-full before:scale-x-0 before:origin-left hover:before:scale-x-100 before:bg-black before:transition" :tabindex="isOpen ? 0 : -1" @click.native="toggleNav()" to="/access/">アクセス</NuxtLink></li>
                <li class="pt-2 pb-6">
                    <NuxtLink to="https://google.com" class="bg-white py-2 px-4 font-bold text-xl border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors group" :tabindex="isOpen ? 0 : -1" @click.native="toggleNav()">
                        参加申し込み<ArrowIco class="ml-1 arrow-anim" />
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="relative before:absolute before:-bottom-0.5 before:h-px before:w-full before:scale-x-0 before:origin-left hover:before:scale-x-100 before:bg-black before:transition font-normal text-base" :tabindex="isOpen ? 0 : -1" @click.native="toggleNav()" to="/past-events/">過去のとんこう地域フォーラム</NuxtLink><br>
                    <NuxtLink class="relative before:absolute before:-bottom-0.5 before:h-px before:w-full before:scale-x-0 before:origin-left hover:before:scale-x-100 before:bg-black before:transition font-normal text-base" :tabindex="isOpen ? 0 : -1" @click.native="toggleNav()" to="/privacy-policy/">プライバシーポリシー</NuxtLink><br>
                    <a class="relative before:absolute before:-bottom-0.5 before:h-px before:w-full before:scale-x-0 before:origin-left hover:before:scale-x-100 before:bg-black before:transition font-normal text-base" href="https://tonko.ed.jp/" target="_blank" :tabindex="isOpen ? 0 : -1" @click.native="toggleNav()">富田林中学校・高校HP<ExtIco class="ml-1" /></a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import MenuIco from 'bi/list.svg';
import CloseIco from 'bi/x.svg';
import ExtIco from 'bi/box-arrow-up-right.svg';
import ArrowIco from 'bi/arrow-up-right.svg';
import Logo from '@/assets/svg/forum_logo_24.svg?url';
import MenuLogo from '@/assets/svg/forum_logo_mono_24.svg?url';

const { isOpen } = defineProps<{
    isOpen: boolean;
}>();

const emit = defineEmits<{
    (e: 'toggleNav'): void;
}>();

const toggleNav = () => {
    emit('toggleNav');
};

const route = useRoute();
</script>

<style scoped>
.bg {
    @apply duration-500;
    transform-origin: center;
}
.hero-logo {
    filter: drop-shadow(0 0 3px #fff) drop-shadow(0 0 3px #fff) drop-shadow(0 0 3px #fff) drop-shadow(0 0 3px #fff);
}
.group:hover .arrow-anim {
    animation: arrow-anim .5s ease;
}
@keyframes arrow-anim {
    0% {
        opacity: 1;
        transform: translateX(0) translateY(0);
    }
    50% {
        opacity: .2;
        transform: translateX(.25em) translateY(-.25em);
    }
    50.5% {
        opacity: 0;
        transform: translateX(-.25em) translateY(.25em);
    }
    100% {
        opacity: 1;
        transform: translateX(0) translateY(0);
    }
}
</style>
