(function () {
	"use strict";

	S.grid.prototype.initMouseEvents = function () {
		var grid = this;
		S.attach(grid.panel, "mousedown", function (e) {
			var cell = grid.getCellAtEvent(e);
			if (cell != null) {
				if (!e.ctrlKey) {
					grid.setFocus(cell.rowIndex, cell.columnIndex, false);
				} else {
					grid.setFocus(cell.rowIndex, cell.columnIndex, true);
				}
			}
		});
		S.attach(grid.headerPanel, "mousedown", function (e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			var columnIndex = target.className.split(' ')[2];

			// sort columnIndex
			var newvalues = grid.values.sort(function (a, b) {
				if (a[columnIndex] === b[columnIndex]) {
					return 0;
				} else {
					return (a[columnIndex] < b[columnIndex]) ? -1 : 1;
				}
			});
			grid.setValues(newvalues);
		}, false);
	};
})();