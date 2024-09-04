const stockService = require('./service');

// Controller function to handle fetching stock data for a line graph
exports.getStockData = async (req, res) => {
    const { symbol, startDate, endDate } = req.query;

    try {
        const data = await stockService.fetchStockData(symbol, startDate, endDate);
        res.json(data);
    } catch (err) {
        res.status(500).send({ message: 'Error fetching stock data', error: err.message });
    }
};

// Controller function to handle fetching moving averages for overlay visualization
exports.getMovingAverages = async (req, res) => {
    const { symbol, startDate, endDate } = req.query;

    try {
        const data = await stockService.fetchMovingAverages(symbol, startDate, endDate);
        res.json(data);
    } catch (err) {
        res.status(500).send({ message: 'Error fetching moving averages', error: err.message });
    }
};

// Controller function to handle fetching RSI and MACD indicators
exports.getIndicators = async (req, res) => {
    const { symbol, startDate, endDate } = req.query;

    try {
        const data = await stockService.fetchIndicators(symbol, startDate, endDate);
        res.json(data);
    } catch (err) {
        res.status(500).send({ message: 'Error fetching indicators', error: err.message });
    }
};

// Controller function to handle fetching Bollinger Bands data
exports.getBollingerBands = async (req, res) => {
    const { symbol, startDate, endDate } = req.query;

    try {
        const data = await stockService.fetchBollingerBands(symbol, startDate, endDate);
        res.json(data);
    } catch (err) {
        res.status(500).send({ message: 'Error fetching Bollinger Bands', error: err.message });
    }
};
