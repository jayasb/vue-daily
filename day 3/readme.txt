Day 3

Today we are going to add sorting feature
We are going to sort the data on the client side.

You can click on any column header to sort in accending/decending order

Following lines were added/modified

added 2 properties
ascending: false,
sortColumn: '',

New method to sort the data on client side.
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
