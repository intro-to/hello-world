const moment = require("moment");

router.get("/collection", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    try {
        let selectedDate = moment().format("YYYY-MM-DD");
        if (req.query.searchdate)
            selectedDate = moment(req.query.searchdate).format("YYYY-MM-DD");

        // Query for collection details matching the selected date
        let collectionDetails = await BabyModel.find({
            dateofPayment: selectedDate,
        });

        // Query for total revenue on a day
        let totalFeesCollection = await BabyModel.aggregate([
            { $match: { dateofPayment: new Date(selectedDate) } },
            {
                $group: {
                    _id: "$dateofPayment",
                    totalCollection: { $sum: "$fee" },
                },
            },
        ]);

        // Query for expenses matching the selected date
        let expenseDetails = await Purchase.find({
            dateofPurchase: selectedDate,
        });

        // Query for total expenses in a day
        let totalExpenses = await Purchase.aggregate([
            { $match: { dateofPurchase: new Date(selectedDate) } },
            {
                $group: {
                    _id: "$dateofPurchase",
                    totalExpenses: { $sum: "$amount" },
                },
            },
        ]);

        // Query for doll expenses matching the selected date
        let dollExpenseDetails = await DollModel.find({
            dateofPurchase: selectedDate,
        });

        // Query for total doll expenses in a day
        let dollTotalExpenses = await DollModel.aggregate([
            { $match: { dateofPurchase: new Date(selectedDate) } },
            {
                $group: {
                    _id: "$dateofPurchase",
                    totalDollExpenses: { $sum: "$amount" },
                },
            },
        ]);

        // Render the revenue report page with data
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
        res.send("Failed to retrieve collection details");
    }
});
