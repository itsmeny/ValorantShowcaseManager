<script setup>
import { onBeforeMount, ref } from 'vue';
import { useWeapons } from '../stores/Weapons.js';

const weaponStore = useWeapons();

const showWeapons = ref(false);

onBeforeMount(async () => {
    await weaponStore.getWeapons();
});

</script>

<template>
    <div>
        <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                <a href="#" class="flex items-center">
                    <img src="/favicon.png" class="mr-3 h-6 sm:h-9" alt="Valorant Showcase Manager" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Valorant Showcase
                        Manager</span>
                </a>
                <button data-collapse-toggle="mega-menu-full" type="button"
                    class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mega-menu-full" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
                <div id="mega-menu-full"
                    class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
                    <ul
                        class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a @click="showWeapons = false"
                                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                                aria-current="page">

                                <router-link to="/">Home</router-link>
                            </a>
                        </li>
                        <li>
                            <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown"
                                @click="showWeapons = !showWeapons"
                                class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Weapons

                                <svg class="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>

                                </svg></button>
                        </li>
                        <li>
                            <a @click="showWeapons = false"
                                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                <router-link to="/about">About Us</router-link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-show="showWeapons"
                class="mt-1 bg-gray-50 border-gray-200 shadow-sm md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
                <div
                    class="grid py-5 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white sm:grid-cols-3 md:px-1">
                    <ul v-for="(weapon,index) in weaponStore.weapons.data" :key="index">
                        <li
                            @click="showWeapons = false ; weaponStore.selectedWeapons = weaponStore.weapons.data[index]">
                            <router-link to="Skins">
                                <a class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <div class="font-semibold">{{weapon.displayName}}</div>
                                    <span class="text-sm font-light text-gray-500 dark:text-gray-400"><img
                                            :src="weapon.displayIcon" style="width:250px" /></span>
                                </a>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>

</style>