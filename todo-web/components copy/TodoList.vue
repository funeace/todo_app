<template>
  <v-card>
    <v-card-title>
      TodoList
    </v-card-title>
    <v-spacer></v-spacer>
    <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    <v-data-table :headers="headers" :items="todos" :search="search"></v-data-table>
  </v-card>
</template>

<script>
export default {
  // 親から渡されたtodosを表示
  props: ["todos"],
  data() {
    return {
      search: "",
      headers: [
        {
          text: "タイトル",
          align: "left",
          sortable: false,
          value: "title"
        },
        {text: "ユーザー名", value: "username" }
      ]
    }
  }
}
</script>