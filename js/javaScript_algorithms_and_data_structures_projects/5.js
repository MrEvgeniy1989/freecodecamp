function checkCashRegister(price, cash, cid) {
    const DENOMINATIONS = {
        PENNY: 0.01,
        NICKEL: 0.05,
        DIME: 0.10,
        QUARTER: 0.25,
        ONE: 1,
        FIVE: 5,
        TEN: 10,
        TWENTY: 20,
        'ONE HUNDRED': 100
    };

    let drawerTotal = cid.reduce((acc, curr) => acc + curr[1], 0);
    let changeNeeded = cash - price;

    if (changeNeeded > drawerTotal) {
        return {status: 'INSUFFICIENT_FUNDS', change: []};
    }

    if (changeNeeded === drawerTotal) {
        return {status: 'CLOSED', change: cid};
    }

    let changeArr = [];
    for (let i = cid.length - 1; i >= 0; i--) {
        let currencyName = cid[i][0];
        let currencyTotal = cid[i][1];
        let currencyValue = DENOMINATIONS[currencyName];
        let currencyAmount = (currencyTotal / currencyValue).toFixed(2);
        let currencyToReturn = 0;

        while (changeNeeded >= currencyValue && currencyAmount > 0) {
            changeNeeded -= currencyValue;
            changeNeeded = Math.round(changeNeeded * 100) / 100;
            currencyAmount--;
            currencyToReturn++;
        }

        if (currencyToReturn > 0) {
            changeArr.push([currencyName, currencyValue * currencyToReturn]);
        }
    }

    if (changeNeeded > 0) {
        return {status: 'INSUFFICIENT_FUNDS', change: []};
    }

    return {status: 'OPEN', change: changeArr};
}
