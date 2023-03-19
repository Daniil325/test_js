export function pow(x, n){
  var result = 1;
  for(let i = 0; i < n; i++){
    result *= x;
  }
  return result;
}
