function shuffleBlocks() {
    var blocks = document.getElementById('shuffleAndSortBlocks');
    var blockChild = blocks.children;
    var cloneArray = Array.prototype.slice.call(blockChild);
    var i = cloneArray.length;
    var randomBlock, temp;
    while (--i) {
        randomBlock = Math.floor(i * Math.random());
        if (randomBlock !== i) {
            temp = cloneArray[randomBlock];
            cloneArray[randomBlock] = cloneArray[i];
            cloneArray[i] = temp;
        }
    }
    while (i < cloneArray.length) {
        blocks.appendChild(cloneArray[i]);
        ++i;
    }
    // Only Sort when the Item is the blocks are suffled else the block list is sorted by default
    document.getElementById('sort').style.cursor = "initial";
    document.getElementById('sort').disabled = false;
}

function sortBlocks() {
    var blocks = document.getElementById('shuffleAndSortBlocks');
    var sortBlocks = true;
    var blockChild = blocks.children;
    var dataSort, i;
    while (sortBlocks) {
        sortBlocks = false;
        for (i = 0; i < blockChild.length - 1; i++) {
            dataSort = false;
            if (blockChild[i].innerHTML > blockChild[i + 1].innerHTML) {
                dataSort = true;
                break;
            }
        }
        if (dataSort) {
            blockChild[i].parentNode.insertBefore(blockChild[i + 1], blockChild[i]);
            sortBlocks = true;
        }
    }

    // Only Sort when the Item is the blocks are suffled else the block list is sorted by default
    document.getElementById('sort').style.cursor = "no-drop";
    document.getElementById('sort').disabled = true;
}