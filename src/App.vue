<script setup>
import { ref, defineAsyncComponent, reactive } from "vue";
import Modal from "./components/Modal.vue";
import useInventory from "./store/inventoryStore";

// Composable
const { inventory, loading, error, fetchInventory, addInventory } = useInventory();
// const { inventory, addInventory } = useInventory();
const isAddModalShow = ref(false);
fetchInventory();
const newProduct = reactive({
  name: "",
  quantity: 0,
});
const addProductModal = () => {
  isAddModalShow.value = !isAddModalShow.value;
};

const closeModal = (payload) => {
  isAddModalShow.value = !payload;
};
</script>
<template>
  <div>
    <header class="p-6 text-3xl font-bold text-center bg-green-600 text-gray-50">
      <h1>Inventory Managment by Vue 3</h1>
    </header>
    <section class="w-3/6 p-6 mx-auto">
      <div class="flex items-center justify-between p-3">
        <h2 class="text-xl font-bold text-center">List of Products</h2>
        <button class="btn btn-accent" @click="addProductModal">New Product</button>
      </div>

      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <!-- head -->
          <thead class="text-lg bg-gray-200">
            <tr class="text-center">
              <th>Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody class="bg-gray-50">
            <tr v-for="item in inventory" :key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ item.quantity }}</td>
              <td class="flex gap-3 justify-center">
                <button class="btn btn-error text-gray-50">Remove</button>
                <button class="btn btn-primary">Update</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Modal :show="isAddModalShow" @toggleBackdrop="closeModal">
        <!-- First Slot -->
        <template #modal-header>
          <h3 class="text-lg font-bold">Add Product</h3>
        </template>

        <!-- Second Slot -->
        <template #modal-content>
          <label class="form-control w-full">
            <div class="label">
              <span class="label-text">Product name</span>
            </div>
            <input v-model="newProduct.name" type="text" placeholder="Type here" class="input input-bordered w-full" />
          </label>
          <label class="form-control w-full max-w-xs">
            <div class="label">
              <span class="label-text">Quantity</span>
            </div>
            <input v-model="newProduct.quantity" type="number" placeholder="Type here"
              class="input input-bordered w-full max-w-xs" />
          </label>
        </template>

        <!-- Last Slot Action -->
        <template #default>
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end gap-3">
            <button class="btn btn-outline w-3/12" @click="closeModal">Cancel</button>
            <button class="btn-primary btn" @click="addInventory(newProduct)">
              Add Product
            </button>
          </div>
        </template>
      </Modal>
    </section>
  </div>
</template>
