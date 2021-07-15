// Create a function that receives an unknown number of arrays, and prints out all permutations.
// ex: [a, b], [c, d] [e, f] => // ace, acf, bce, bcf, bde, bdf

function permutate(...arg) {
    const arr = [...arg];

    const indexes = [];

    for(i = 0; i < arr.length; i++) {
        indexes.push(0);
    }

    for (i = 0; i < indexes.length; i++) {
        let print = [];

        let ind = indexes[i];

        // console.log(arr[i][ind]);
    }
}
///

permutate(["a", "b", "c"],["d", "e", "f"], ["g", "h", "i"]);

console.log(912 / 100%2);

   