const exampleSet = new Set([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2])


exampleSet.add(5);
exampleSet.add(5).add(17);

console.log(exampleSet.size);

console.log(exampleSet.has(5));
console.log(exampleSet.delete(5));
console.log(exampleSet.has(5));

exampleSet.clear();

console.log(exampleSet.size);