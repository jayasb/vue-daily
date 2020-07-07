var vueTable = new Vue({
  el: '#vueTable',
  data: {
    rows: []
  },
  mounted () {
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
  },
  computed: {
    "columns": function columns() {
      if (this.rows.length === 0) {
        return [];
      }
      return Object.keys(this.rows[0])
    }
  }
});