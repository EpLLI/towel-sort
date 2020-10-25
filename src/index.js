
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let m=matrix;
  let arr = [];
  let c=0;
  if (matrix===undefined)
  {return arr;}
  else {
  for(var i=0; i<matrix.length; i++){ 
    if (i%2===0)  {
    for(var j=0; j<matrix[i].length; j++){
      arr[c] = matrix[i][j];
      c++;
    }
    }
    if(i%2===1)
    {
      let z=matrix[i].length-1;
      for(var j=0; j<matrix[i].length; j++){
        arr[c] = matrix[i][z];
        c++;
        z--;
      }
      }
    }
  return arr;}
}

