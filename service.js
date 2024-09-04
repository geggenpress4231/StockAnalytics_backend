const { executeQuery } = require('./dbConfig');
const { convertToSQLDate } = require('./utils'); // Assuming you put the function in a utils file

// Function to fetch stock data for a line graph
exports.fetchStockData = async (symbol, startDate, endDate) => {
    const query = `
        SELECT * FROM Stock
        WHERE symbol = ? AND timestamp BETWEEN ? AND ?
        ORDER BY timestamp ASC
    `;
    
    const params = [
        symbol,
        convertToSQLDate(startDate),
        convertToSQLDate(endDate)
    ];
    
    try {
        const result = await executeQuery(query, params);

        // Convert the timestamp strings to Date objects
        const formattedResult = result.map(row => ({
            ...row,
            timestamp: new Date(row.timestamp)
        }));

        return formattedResult;
    } catch (err) {
        throw new Error('Error fetching stock data: ' + err.message);
    }
};

// Function to fetch moving averages for overlay visualization
exports.fetchMovingAverages = async (symbol, startDate, endDate) => {
    const query = `
        SELECT SP.moving_average_5, SP.moving_average_10, S.timestamp
        FROM StockParameters SP
        JOIN Stock S ON SP.stock_id = S.id
        WHERE S.symbol = ? AND S.timestamp BETWEEN ? AND ?
        ORDER BY S.timestamp ASC
    `;
    
    const params = [
        symbol,
        convertToSQLDate(startDate),
        convertToSQLDate(endDate)
    ];
    
    try {
        const result = await executeQuery(query, params);
        return result;
    } catch (err) {
        throw new Error('Error fetching moving averages: ' + err.message);
    }
};

// Function to fetch RSI and MACD indicators
exports.fetchIndicators = async (symbol, startDate, endDate) => {
    const query = `
        SELECT SP.rsi, SP.macd, S.timestamp
        FROM StockParameters SP
        JOIN Stock S ON SP.stock_id = S.id
        WHERE S.symbol = ? AND S.timestamp BETWEEN ? AND ?
        ORDER BY S.timestamp ASC
    `;
    
    const params = [
        symbol,
        convertToSQLDate(startDate),
        convertToSQLDate(endDate)
    ];
    
    try {
        const result = await executeQuery(query, params);
        return result;
    } catch (err) {
        throw new Error('Error fetching indicators: ' + err.message);
    }
};

// Function to fetch Bollinger Bands data
exports.fetchBollingerBands = async (symbol, startDate, endDate) => {
    const query = `
        SELECT SP.bollinger_upper, SP.bollinger_lower, S.timestamp
        FROM StockParameters SP
        JOIN Stock S ON SP.stock_id = S.id
        WHERE S.symbol = ? AND S.timestamp BETWEEN ? AND ?
        ORDER BY S.timestamp ASC
    `;
    
    const params = [
        symbol,
        convertToSQLDate(startDate),
        convertToSQLDate(endDate)
    ];
    
    try {
        const result = await executeQuery(query, params);
        return result;
    } catch (err) {
        throw new Error('Error fetching Bollinger Bands: ' + err.message);
    }
};
