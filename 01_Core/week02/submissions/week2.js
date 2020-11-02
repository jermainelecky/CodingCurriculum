let names = ['Peter Parker', 'Bruce Wayne', 'Clark Kent', 'Oliver Queen', 'Diana Prince']

if (String.prototype.splice === undefined) {
    /**
     * Splices text within a string.
     * @param {int} offset The position to insert the text at (before)
     * @param {string} text The text to insert
     * @param {int} [removeCount=0] An optional number of characters to overwrite
     * @returns {string} A modified string containing the spliced text.
     */
    String.prototype.splice = function(offset, text, removeCount=0) {
      let calculatedOffset = offset < 0 ? this.length + offset : offset;
      return this.substring(0, calculatedOffset) +
        text + this.substring(calculatedOffset + removeCount);
    };
}
function addDiv () {
    names[0] = names[0].splice(6, " <div class='lastname'>")
    names[1] = names[1].splice(6, " <div class='lastname'>")
    names[2] = names[2].splice(6, " <div class='lastname'>")
    names[3] = names[3].splice(7, " <div class='lastname'>")
    names[4] = names[4].splice(6, " <div class='lastname'>")
}
addDiv();

  

function compare(a,b) {
    let splitA = a.split(" ");
    let splitB = b.split(" ");
    let lastA = splitA[splitA.length - 1];
    let lastB = splitB[splitB.length - 1];

    if (lastA < lastB) {
        return -1;
    } else if (lastA > lastB) {
        return 1;
    } else {
        return 0;
    }
}

let sorted = names.sort(compare);

names.forEach(function (item) {
    let li = document.createElement('li');
    document.getElementById('names').appendChild(li);
    li.innerHTML += item;
});