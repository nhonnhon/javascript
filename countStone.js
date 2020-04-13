function countStone(j, s) {
  const arrS = [...s]
  const sLen = s.length
  let count = 0
  
  for (let i=0; i<sLen; i++) {
    if (j.includes(arrS[i])) {
      count++;
    }
  }
  
  return count
}

console.log(countStone("aA","aAAbbbb"))
console.log(countStone("z","ZZ"))
console.log(countStone("Z","zz"))
