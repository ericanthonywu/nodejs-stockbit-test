// Words to match
const list = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']


// The output object
const anagrams = {};

// sorting words
const sortWord = (word) => word.split("").sort().join()

for (const i in list) {
    const word = list[i];

    // sort the word like you've already described
    const sorted = sortWord(word);

    // If the key already exists, we just push
    // the new word on the the array
    if (anagrams[sorted] != null) {
        anagrams[sorted].push(word);
    }

    // Otherwise we create an array with the word
    // and insert it into the object
    else {
        anagrams[sorted] = [word];
    }
}

// Output result
const result = []
for (var sorted in anagrams) {
    let words = anagrams[sorted];
    let sep = ",";
    let out = "";
    const tempRes = []
    for (const n in words) {
        out += sep + words[n];
        sep = "";
        out = out.substring(1)
        tempRes.push(out)
    }
    result.push(tempRes)
}
console.log(result)
