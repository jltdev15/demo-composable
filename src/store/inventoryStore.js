import { reactive, toRefs } from "vue";
import inventoryServices from "@/services/inventoryServices";

const state = reactive({
  inventory: [],
  loading: false,
  error: null,
});

export default function useInventory() {
  const fetchInventory = async () => {
    // state.loading = true;
    // try {
    //   const response = await inventoryServices.getInventory();
    //   state.inventory = await response.data.productInfo;
    //   console.log(state.inventory);
    // } catch (error) {
    //   state.error = error;
    // } finally {
    //   state.loading = false;
    // }
  };
  const addInventory = async (item) => {
    console.log(item);
    state.inventory.push(item);
    // try {
    //   await inventoryServices.addInvetory(item);
    //   await fetchInventory();
    // } catch (err) {
    //   state.error = err;
    // }
  };
  return {
    ...toRefs(state),
    fetchInventory,
    addInventory,
  };
}
