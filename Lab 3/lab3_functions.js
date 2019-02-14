var sp = []; //salesperson

function commissionCalc(sp) // Part A
{
    var com = []; //commission amount

    for (var i = 0; i < sp.length; i++)
    {
        if (sp[i] >= 0 && sp[i] <= 5000)
            com.push(sp[i] * .01);
        if (sp[i] >= 5001 && sp[i] <= 10000)
            com.push(sp[i] * .02);
        if (sp[i] >= 10001 && sp[i] <= 15000)
            com.push(sp[i] * .03);
        if (sp[i] >= 15001 && sp[i] <= 30000)
            com.push(sp[i] * .05);
        if (sp[i] >= 30001)
            com.push(sp[i] * .08);
        if (sp[i] < 0)
            com.push(0);
    }
    return com;
}

function totalCommissionCalc(sp) // Part B/C
{
    var sumcom = 0; //commission sum

    for (var i = 0; i < commissionCalc(sp).length; i++)
    {
        sumcom = sumcom + commissionCalc(sp)[i];
    }

    return sumcom.toFixed(2);
}

function avgCommissionCalc(sp) // Part B
{
    var avgcom = 0; //average commission

    avgcom = totalCommissionCalc(sp) / sp.length;
    
    return avgcom.toFixed(2);
}

function topSalesperson() // Part C
{
    var topsp = 0; //top salesperson
    var spcom = [
        ["Brad", totalCommissionCalc(Brad)],
        ["Nila", totalCommissionCalc(Nila)],
        ["Joseph", totalCommissionCalc(Joseph)],
        ["Kesh", totalCommissionCalc(Kesh)],
        ["Lydia", totalCommissionCalc(Lydia)],
        ["Devon", totalCommissionCalc(Devon)],
        ["Miller", totalCommissionCalc(Miller)]
    ];

    for (var i = 0; i < spcom.length; i++)
    {
        if (i == 0)
            topsp = i;
        if (parseFloat(spcom[i][1]) > parseFloat(spcom[topsp][1]))
            topsp = i;
    }
    return spcom[topsp][0] + " | $" + spcom[topsp][1];
}