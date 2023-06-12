//Mini Project using JS

const Grid = require('./grid').gridClass;

class MazeSolver extends Grid{

    constructor(arr){
        super(arr); // initialize the grid
    }

    canTraverse(x,y){
        // check if index is traversable
        if (x<this.grid.length && x>=0){
            if (y<this.grid[x].length  && y>=0){
                if (this.grid[x][y]===1){
                    return true;
                }
            }
        }

        return false;
        
    }

    getNeighbours(x,y){
        // return array of traversable neighbours
        var neighbours = [];
        // up
        if(this.canTraverse(x-1, y))
            neighbours.push([x-1,y]);
        // down
        if(this.canTraverse(x+1, y))
            neighbours.push([x+1,y]);
        // left
        if(this.canTraverse(x, y-1))
            neighbours.push([x,y-1]);
        // right
        if(this.canTraverse(x, y+1))
            neighbours.push([x,y+1]);
        return neighbours;
    }
    
    checkVisited(x,y,visited){
        // checks if x & y is an already visited pair
        for(var i= 0; i< visited.length; i++){
        	if(visited[i][0]=== x && visited[i][1]===y){
                return true;
            }
        }
        return false;
    }
    solve(x1,y1, x2, y2){

        // from coordinates (x1, y1) check if (x2, y2) are traversable
        
        var stack = [];
        var visited = [];

        if (this.canTraverse(x1,y1)){
            stack.push([x1,y1]);
            visited.push([x1,y1]);
        }

        var found=false;
        while(stack.length > 0){
            var position = stack.pop();
            if(position[0] === x2 && position[1] === y2){
                // target found and so exit loop
                found = true;
                break;
            }
            // target not found and so traverse neighbours
            var neighbours = this.getNeighbours(position[0], position[1]);
            for(var i = 0; i < neighbours.length; i++){
                if (this.checkVisited(neighbours[i][0],neighbours[i][1],visited)===false){
                    visited.push([neighbours[i][0],neighbours[i][1]]);
                    stack.push([neighbours[i][0],neighbours[i][1]]);
                }
            }
        }
        return found;
    }
}
