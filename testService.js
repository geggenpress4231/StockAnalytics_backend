const service = require('./service.js'); // Replace with the actual path to your service module

const testServices = async () => {
    try {
        const symbol = 'IBM';
        const startDate = '2024-08-20 09:00:00';
        const endDate = '2024-08-20 21:55:00';

        // Test fetching stock data
        const stockData = await service.fetchStockData(symbol, startDate, endDate);
        console.log('Stock Data:', stockData);

        // Test fetching moving averages
        const movingAverages = await service.fetchMovingAverages(symbol, startDate, endDate);
        //console.log('Moving Averages:', movingAverages);

        // Test fetching RSI and MACD indicators
        const indicators = await service.fetchIndicators(symbol, startDate, endDate);
        //console.log('Indicators:', indicators);

        // Test fetching Bollinger Bands
        const bollingerBands = await service.fetchBollingerBands(symbol, startDate, endDate);
        //console.log('Bollinger Bands:', bollingerBands);
    } catch (error) {
        console.error('Error during service test:', error.message);
    }
};

testServices();
