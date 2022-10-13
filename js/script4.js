const arr1 = ['ciao', 'ciao', 'p', 'a'];
const arr2 = ['ciao', 'ciao'];


if(arr1.length > arr2.length) {
    const elementiDaAgg = arr1.length - arr2.length;
    console.log(elementiDaAgg);
    for(let i = 0; i < elementiDaAgg; i++) {
        arr2.push(i);
    }
    console.log(arr2);
} else if(arr2.lenght > arr1.length) {
    const elementiDaAgg = arr2.length - arr1.length;
    console.log(elementiDaAgg);
    for(let i = 0; i < elementiDaAgg; i++) {
        arr1.push(i);
    }
    console.log(arr1);
} else {
    console.log('sono uguali');
}