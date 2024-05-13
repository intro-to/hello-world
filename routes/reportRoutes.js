router.get("/collection", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    try {
    let selectedDate = moment().format("YYYY-MM-DD");
    if (req.query.searchdate)
    selectedDate = moment(req.query.searchdate).format("YYYY-MM-DD"); 
    
    // set the selected date to match the payment date
    let collectionDetails = await BabyModel.find({
    dateofPayment: selectedDate,
    });
    // query for total revenue on a day
    let totalFeesCollection = await BabyModel.aggregate([
    { $match: { dateofPayment: new Date(selectedDate) } },
    {
    $group: { _id: "$dateofPayment", totalCollection: { $sum: "$fee" } },
    },
     ]);
    totalFeesCollection.length > 0 ? totalFeesCollection : 0;
    
    // set the selected date to match the purchase date
    let expenseDetails = await Purchase.find({
    dateofPurchase: selectedDate,
    });
    // query for total expenses in a day
    let totalExpenses = await Purchase.aggregate([
    { $match: { dateofPurchase: new Date(selectedDate) } },
    {
    $group: {
    _id: "$dateofPurchase",
    totalGExpenses: { $sum: "$amount" },
    },
    },
    ]);
    totalExpenses.length > 0 ? totalExpenses : 0;
    
    // set the selected date to match the purchase date
    let dollExpenseDetails = await DollModel.find({
    dateofPurchase: selectedDate,
    });
    // query for total expenses in a day on dolls
    let dollTotalExpenses = await DollModel.aggregate([
    { $match: { dateofPurchase: new Date(selectedDate) } },
    {
    $group: {
    _id: "$dateofPurchase",
    totalDExpenses: { $sum: "$amount" },
    },
    },
    ]);
    dollTotalExpenses.length > 0 ? dollTotalExpenses : 0;
    
    res.render("revenue_report", {
    collections: collectionDetails,
    expenses: expenseDetails,
    dollExpenseDetails: dollExpenseDetails,
    totalFees: totalFeesCollection[0],
    totalExpenses: totalExpenses[0],
    dollTotalExpenses: dollTotalExpenses[0],
    defaultDate: selectedDate,
    title: "Revenue",
    });
    } catch (err) {
    console.log(err);
    res.send("Failed to retrive collections details");
    }
    }
    );