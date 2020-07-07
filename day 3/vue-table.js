var vueTable = new Vue({
    el: '#vueTable',
    data: {
        ascending: false,
        sortColumn: '',
        rows: []
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            axios.get('https://reqres.in/api/users')
                .then(response => {
                    this.rows = response.data.data
                })
                .catch(error => console.error(error));
        },
        sortTable(col) {
            if (this.sortColumn === col) {
                this.ascending = !this.ascending;
            } else {
                this.ascending = true;
                this.sortColumn = col;
            }

            var ascending = this.ascending;

            this.rows.sort(function (a, b) {
                if (a[col] > b[col]) {
                    return ascending ? 1 : -1
                } else if (a[col] < b[col]) {
                    return ascending ? -1 : 1
                }
                return 0;
            })
        }
    },
    computed: {
        "columns": function columns() {
            if (this.rows.length === 0) {
                return [];
            }
            return Object.keys(this.rows[0])
        }
    },

});