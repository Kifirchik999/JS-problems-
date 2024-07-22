function InsertionSort (arr){
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        let j = i-1 ;
        while (j>=0 && arr[j]>arrElement){
            arr[j+1] = arr [j];
            j -=1 ;
        }
        arr[j+1] = arrElement;
    }
    return arr ;
}




let arr = [5,2,4,6,1,3];

console.log(InsertionSort(arr));