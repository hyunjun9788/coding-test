function solution(numlist, n) {
  let abs = numlist.map((num) => Math.abs(num - n));
  let sortedList = [...numlist].sort((a, b) => {
    const distanceA = Math.abs(a - n);
      console.log(distanceA)
    const distanceB = Math.abs(b - n);
          console.log(distanceB) 
    if (distanceA === distanceB) {
        console.log(b-a)
      return b - a; 
    }
    return distanceA - distanceB; 
  });
  return sortedList;
}
