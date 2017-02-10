// sudoku class
function Sudoku(input) {

    var inputs = input.split(';'),
        allNumbers = inputs[1].split(',');

    this.grid = +inputs[0];
    this.arr = [];

    for (var i = 0; i < this.grid; i++) {

        this.arr.push(allNumbers.slice(i * this.grid, (i * this.grid) + this.grid));

    }

    this.isValid = function() {

        console.log(_hasValidRows.call(this) && _hasValidColumnss.call(this) && _hasValidGrids.call(this));

    }

    function _hasValidRows(gridArr) {

        var arr = gridArr || this.arr,
            isValid = true;

        for (var i = 0; i < arr.length; i++) {

            if (_hasDuplicate(arr[i].concat())) {
                isValid = false;
                break;
            }

        }

        return isValid;
    }

    function _hasValidColumnss() {

        var isValid = true,
            arr = this.arr,
            grid = this.grid;

        for (var i = 0; i < grid; i++) {

            var column = [];

            for (var j = 0; j < grid; j++) {
                column.push(arr[j][i]);
            }

            if (_hasDuplicate(column.concat())) {
                isValid = false;
                break;
            }

        }

        return isValid;

    }

    function _hasValidGrids(arr) {

        var arr = this.arr || arr,
            grid = this.grid,
            gridSize = Math.sqrt(grid); // 



        var tempArr = [];
        var gridArr = [];
        var rowSkip = 0;
        var colSkip = 0;

        for (var i = 0; i < grid; i++) {

            for (var j = 0; j < gridSize; j++) {

                for (var k = 0; k < gridSize; k++) {

                    tempArr.push(arr[j + rowSkip][k + colSkip]);

                }

                if ((j + 1) % gridSize == 0) {
                    gridArr.push(tempArr);
                    tempArr = [];
                }
            }

            if ((i + 1) % gridSize == 0) {
                rowSkip = rowSkip + gridSize;
                colSkip = 0;
            } else {
                colSkip = colSkip + gridSize;
            }
        }

        return _hasValidRows(gridArr);

    }

    function _hasDuplicate(arr) {

        var hasDuplicate = false;

        arr.sort();

        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] == arr[i + 1]) {
                hasDuplicate = true;
                break;
            }
        }

        return hasDuplicate;
    }

};


var correct = new Sudoku('4;1,4,2,3,2,3,1,4,4,2,3,1,3,1,4,2');
correct.isValid();

var wrong = new Sudoku('4;2,1,3,2,3,2,1,4,1,4,2,3,2,3,4,1');
wrong.isValid();

/*
Other test cases

var goodSudoku = [
    [7, 8, 4,    1, 5, 9,     3, 2, 6],
    [5, 3, 9,    6, 7, 2,     8, 4, 1],
    [6, 1, 2,    4, 3, 8,     7, 5, 9],
       
    [9, 2, 8,    7, 1, 5,     4, 6, 3],
    [3, 5, 7,    8, 4, 6,     1, 9, 2],
    [4, 6, 1,    9, 2, 3,     5, 8, 7],
       
    [8, 7, 6,    3, 9, 4,     2, 1, 5],
    [2, 4, 3,    5, 6, 1,     9, 7, 8],
    [1, 9, 5,    2, 8, 7,     6, 3, 4]
];   

var badSudoku = [
    [1, 1, 1,    1, 1, 1,     2, 2, 2],
    [5, 3, 9,    6, 7, 2,     8, 4, 1],
    [6, 1, 2,    4, 3, 8,     7, 5, 9],
       
    [9, 2, 8,    7, 1, 5,     4, 6, 3],
    [3, 5, 7,    8, 4, 6,     1, 9, 2],
    [4, 6, 1,    9, 2, 3,     5, 8, 7],
       
    [8, 7, 6,    3, 9, 4,     2, 1, 5],
    [2, 4, 3,    5, 6, 1,     9, 7, 8],
    [1, 9, 5,    2, 8, 7,     6, 3, 4]
];

 */
