<script setup>
import { useWeapons } from '../stores/Weapons.js';

const weaponStore = useWeapons();

</script>

<template>
    <div>
        <div v-if="JSON.stringify(weaponStore.selectedWeapons) !== '{}'"
            class="mt-1 bg-gray-50 border-gray-200 shadow-sm md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
            <div class="grid py-5 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white sm:grid-cols-3 md:px-1">
                <ul v-for="weapon in weaponStore.selectedWeapons.skins">
                    <li>
                        <a class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                            <div class="font-semibold">{{ weapon.displayName }}</div>
                            <span class="text-sm font-light text-gray-500 dark:text-gray-400"><img
                                    :src="weapon.displayIcon == null ? '/no_img.png' : weapon.displayIcon"
                                    style="width:250px" /></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div v-else>
            Please select weapon again!
        </div>
    </div>
</template>

<style scoped>

</style>