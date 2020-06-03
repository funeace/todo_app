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
  data() {
    return {
      todos: [
        {
          title: "test",
          username: "太郎"
        }
      ],
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