const ErrorResponse = require('../utils/errorResponse');

// @desc    Get Cluster Api
// @route   GET /api/v1/cluster/check
// @access  Public
// npx loadtest -n 1000 -c 200 -k http://localhost:5000/api/v1/cluster/check
exports.getClusterCheck = async (req, res, next) => {
    try {
        let total = 0;
        for (let i = 0; i< 50_000_000; i++){
            total++;
        }
        res.status(200).json({ success: true, data: `Hello from express server: ${process.pid},\n total: ${total}` });
    } catch (err) {
        res.status(400).json({ success: false });
    }
}

