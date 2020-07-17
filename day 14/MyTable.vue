<template>
  <div>
    <b-button-toolbar key-nav>
      <b-button-group class="mx-1">
        <b-button @click="refreshGrid">Refresh</b-button>
      </b-button-group>
    </b-button-toolbar>

    <b-table
            class="mt-3"
            bordered
            selectable
            select-mode="multi"
            :items="myProvider"
            :fields="fields"
            @row-selected="onRowSelected">

      <!-- A custom column -->
      <template v-slot:cell(name)="data">
        {{ data.item.last_name }} {{ data.item.first_name }}
      </template>

      <template v-slot:table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        sortBy: 'age',
        sortDesc: false,
        fields: [
          {key: 'id', sortable: true},
          {key: 'last_name', sortable: true},
          {key: 'first_name', sortable: true},
          {key: 'name', label: 'Full Name', sortable: true },
          {key: 'email', sortable: true}
        ]
      }
    },
    methods: {
      myProvider() {
        let promise = axios.get('https://reqres.in/api/users')

        return promise.then((response) => {
          this.items = response.data.data
          return (this.items)
        }).catch(error => {
          console(error)
          return []
        })
      },
      onRowSelected(items) {
        console.log(items)
      },
      refreshGrid() {
        console.log('invoked refreshGrid');
        this.myProvider();
      }
    }
  }
</script>