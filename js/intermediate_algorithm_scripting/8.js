function pairElement(str) {
    const matchWithBasePair = function (char) {
        switch (char) {
            case 'A':
                return ['A', 'T'];
            case 'T':
                return ['T', 'A'];
            case 'C':
                return ['C', 'G'];
            case 'G':
                return ['G', 'C'];
        }
    };

    // Find pair for every character in the string
    const pairs = [];
    for (let i = 0; i < str.length; i++) {
        pairs.push(matchWithBasePair(str[i]));
    }

    return pairs;
}

pairElement('GCG');