import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useWeapons = defineStore("weapons", () => {

    const weapons = ref({});
    const selectedWeapons = ref({});

    const getWeapons = async () => {
        const res = await fetch('https://valorant-api.com/v1/weapons');
        if (res.status == 200) {
            weapons.value = await res.json();

            // Remove Random Weapon
            for (let i = 0; i < weapons.value.data.length; i++) {
                for (let j = 0; j < weapons.value.data[i].skins.length; j++) {
                    if (weapons.value.data[i].skins[j].displayName.includes("Random")) {
                        weapons.value.data[i].skins.splice(j, 1);
                    }
                }
            }

            // // Remove Standard Weapon
            for (let i = 0; i < weapons.value.data.length; i++) {
                for (let j = 0; j < weapons.value.data[i].skins.length; j++) {
                    if (weapons.value.data[i].skins[j].displayName.includes("Standard")) {
                        weapons.value.data[i].skins.splice(j, 1);
                    }
                }
            }
        } else {
            alert('Error while getting weapons');
        }
    }
    return {
        weapons,
        getWeapons,
        selectedWeapons,
    };
});

if (
    import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useWeapons,
        import.meta.hot));
}