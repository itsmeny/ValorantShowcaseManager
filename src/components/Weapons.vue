<script setup>
import { onBeforeMount, ref } from "vue";

const weapons = ref({});

const getWeapons = async () => {
    const res = await fetch('https://valorant-api.com/v1/weapons');
    if (res.status == 200) {
        return res.json();
    } else {
        alert('Error while getting weapons');
    }
    return null;
}

onBeforeMount(async () => {
    weapons.value = await getWeapons();

    // Remove Random Weapon
    for (let i = 0; i < weapons.value.data.length; i++) {
        for (let j = 0; j < weapons.value.data[i].skins.length; j++) {
            if (weapons.value.data[i].skins[j].displayName.includes("Random")) {
                weapons.value.data[i].skins.splice(j, 1);
            }
        }
    }

    // Remove Standard Weapon
    for (let i = 0; i < weapons.value.data.length; i++) {
        for (let j = 0; j < weapons.value.data[i].skins.length; j++) {
            if (weapons.value.data[i].skins[j].displayName.includes("Standard")) {
                weapons.value.data[i].skins.splice(j, 1);
            }
        }
    }
});

</script>

<template>
    <div>

        <!-- <div v-for="weapon in weapons.data">
            <table class="table-auto">
                <thead>
                    <tr>
                        <th colspan="100%">{{weapon.displayName}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="weaponSkins in weapon.skins">
                        <td> {{weaponSkins.displayName}}</td>
                    </tr>
                </tbody>
            </table>
        </div> -->
    </div>
</template>

<style scoped>
table,
th,
td {
    border: 1px solid black;
}
</style>