/**
 * Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
Example 2:

[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
Note: The length of each dimension in the given grid does not exceed 50.
 /**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    //DFS, use a queue
    let result = 0;
    //mutate grid to zeros to not repeat
    for(let i=0; i<grid.length; i++){
        //iter rows
        for(let j=0; j<grid[0].length; j++) {
            //iter cols
            // let el = grid[i][j];
            let area51 = processIsland(grid, i, j);
            
                result = Math.max(area51,result);
            
        }
    }
    
    return result;
};


//if count > 4 vertical or horizontally, DFC then we can return true
var processIsland = function(grid, i, j) {
    let area51 = 0;
    
    
    if(!grid || grid.length===0 || i<0 || j<0 || i>=grid.length || j>=grid[0].length){
        return 0; //0 is also false
    }
    else{
        let el = grid[i][j];
        if(el===1){
            area51++;
            grid[i][j]=0;
            area51+=processIsland(grid, i+1,j);
            area51+=processIsland(grid, i-1,j);
            area51+=processIsland(grid, i,j+1);
            area51+=processIsland(grid, i, j-1); //not diagonals, i-1 j-1, 
        }
        
    }
    return area51;
}