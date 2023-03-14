function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    function calcOrbPeriod(avgAlt) {
        const a = earthRadius + avgAlt;
        const T = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM);
        return Math.round(T);
    }

    return arr.map(({name, avgAlt}) => ({name, orbitalPeriod: calcOrbPeriod(avgAlt)}));
}

console.log(orbitalPeriod([{name: 'sputnik', avgAlt: 35873.5553}]));