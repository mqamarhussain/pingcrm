<template>
  <div>
    <Head title="Create User" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" href="/users">Users</Link>
      <span class="text-indigo-400 font-medium">/</span> Create
    </h1>
    <div class="max-w-3xl mx-auto bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="store">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <text-input
            v-model="form.first_name"
            :error="form.errors.first_name"
            class="pb-8 pr-6 w-full lg:w-1/2"
            label="First name"
          />
          <text-input
            v-model="form.last_name"
            :error="form.errors.last_name"
            class="pb-8 pr-6 w-full lg:w-1/2"
            label="Last name"
          />
          <text-input
            v-model="form.email"
            :error="form.errors.email"
            class="pb-8 pr-6 w-full lg:w-1/2"
            label="Email"
          />
          <text-input
            v-model="form.password"
            :error="form.errors.password"
            class="pb-8 pr-6 w-full lg:w-1/2"
            type="password"
            autocomplete="new-password"
            label="Password"
          />
          <file-input
            v-model="form.photo"
            :error="form.errors.photo"
            class="pb-8 pr-6 w-full lg:w-1/2"
            type="file"
            accept="image/*"
            label="Photo"
          />
          <v-select-input
            :options="roles"
            :reduce="(role) => role.id"
            v-model="form.roles"
            :error="form.errors.roles"
            class="pb-8 pr-6 w-full lg:w-1/2"
            label="Roles"
            vlabel="name"
            multiple
            style="z-index: 999"
          />
        </div>
        <div
          class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100"
        >
          <loading-button :loading="form.processing" class="btn-indigo" type="submit"
            >Create User</loading-button
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Head, Link } from "@inertiajs/vue3";
import Layout from "@/Shared/Layout.vue";
import FileInput from "@/Shared/FileInput.vue";
import TextInput from "@/Shared/TextInput.vue";
import SelectInput from "@/Shared/SelectInput.vue";
import VSelectInput from "@/Shared/VSelectInput.vue";
import LoadingButton from "@/Shared/LoadingButton.vue";

export default {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    VSelectInput,
  },
  layout: Layout,
  remember: "form",
  props: {
    roles: Object,
  },
  data() {
    return {
      form: this.$inertia.form({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        roles: [],
        photo: null,
      }),
    };
  },
  methods: {
    store() {
      this.form.post(route("users.store"));
    },
  },
};
</script>
