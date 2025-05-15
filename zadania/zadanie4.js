class AgeCategorizator{
  constructor(arrWithAge){
    this.arrWithAge=arrWithAge;
  }
  analyse(){
    let result = {
      children: 0,
      teens: 0,
      adults: 0,
      seniors: 0
      
    }
    for (let i=0; i<this.arrWithAge.length; i++){
      if (this.arrWithAge[i] >=0 && this.arrWithAge[i]<=12){
        result.children++;
      } else if (this.arrWithAge[i] >=13 && this.arrWithAge[i]<=19){
        result.teens++;
      } else if (this.arrWithAge[i] >=20 && this.arrWithAge[i]<=64){
        result.adults++;
      } else if (this.arrWithAge[i]>=65){
        result.seniors++;
      }
    }
    return result;
  }
}
const sampleAges = [3, 12, 13, 17, 19, 20, 34, 64, 65, 80, -1, 100];
const categ = new AgeCategorizator(sampleAges);
const breakdown = categ.analyse();

console.log("Podział wiekowy:", breakdown);
