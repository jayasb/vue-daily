<template>
    <div>
        <b-table
                selectable
                select-mode="multi"
                :items="myProvider"
                :fields="fields"
                @row-selected="onRowSelected"></b-table>
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
            }
        }
    }
</script>