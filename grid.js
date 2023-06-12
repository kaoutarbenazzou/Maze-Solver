class Grid{
    constructor(arr){

      // create copy if arr is not undefined
      
        this.grid = null;
        if(arr !== undefined){
            this.grid = new Array(arr.length)
            for (var i = 0; i < arr.length; i++){
                // copy array elements
                this.grid[i] = arr[i].slice();
            }
        }
        else {
           var temp = new Array(6); 
            for (var i = 0; i < 6; i++){
                temp[i] = new Array(6); // Create a new row
                for (let j = 0; j < 6; j++) {
                   const randomNumber = Math.floor(Math.random() * 2);
                    temp[i][j] = randomNumber;
            }  
        }
        this.grid=temp;
    }
    }
  
  
    // Helper function to print the grid
    printArray(){
        // Iterate the grid
        for(var i = 0; i < this.grid.length; i++){
            for(var j =0; j < this.grid[i].length; j++){
                // Print X or O
                if(this.grid[i][j] === 0)
                    process.stdout.write(`X `);
                else
                    process.stdout.write(`O `);
            }
            console.log('');
        }
    }
}
