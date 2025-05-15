class NumbersAnalyzer{
  constructor(arr){
    this.arr=arr;
  }
  
  getCounter(){
    return this.arr.length;
  }
  
  getSum(){
    return this.arr.reduce((acc,v) => acc+v,0);
  }
  getAverage(){
    const n = this.getCounter();
    if (n==0){
      return 0;
    }
    return this.getSum()/n;
  }
    
    getMin(){
      if (this.getCounter() === 0){
        return undefined;
      } 
      return Math.min(...this.arr);
    }
    
    getMax(){
      if (this.getCounter() === 0){
        return undefined;
      } 
      return Math.max(...this.arr); 
    }
    
    getHarmonicMean(){
      const n=this.getCounter();
      
      if (n === 0){
        return 0;
      }
      
      let sumRec=0;
      for (let x of this.arr){
        if (x===0){
          return 0;
        }
        sumRec+=1/x;
      }
      return n/sumRec;
    }
}

const data = [1, 2, 4, 8];
const na = new NumbersAnalyzer(data);

console.log("Tablica:", data);
console.log("Liczba elementów:", na.getCounter());          // 4
console.log("Suma:", na.getSum());                          // 15
console.log("Średnia arytmetyczna:", na.getAverage());      // 3.75
console.log("Min:", na.getMin());                           // 1
console.log("Max:", na.getMax());                           // 8
console.log("Średnia harmoniczna:", na.getHarmonicMean());  // ≈2.13333