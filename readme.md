Javascript Virtual Grid
===========================

    * Handles millions of rows fast and efficiently.
    * No dependencies.
	* Column Sorting
	* Row Select
	* Multi Cell Select

[Demo](http://llamanl.github.io/VirtualGrid)

Usage:

```javascript
	var columns = [ 
		{ text: 'A', width: 150 }, 
		{ text: 'B', width: 250 }, 
		{ text: 'C', width: 250 }
	];

	var values = [
		[ 1, 3, 5 ],
		[ 8, 6, 9 ],
		[ 8, 6, 9 ]
	];

	var grid = new S.grid("grid1");
	grid.columns = columns;
	grid.setValues(values, true);
```
