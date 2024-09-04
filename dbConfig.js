const sql = require('msnodesqlv8');

// Define the connection string for your database
const connectionString = "server=MIREMS\\SQLEXPRESS;Database=StockAnalytics;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server}";

// Function to execute queries
const executeQuery = (query, params = []) => {
    return new Promise((resolve, reject) => {
        sql.query(connectionString, query, params, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

// Function to establish a connection and run a query
const connectToDatabase = async () => {
    try {
        const result = await executeQuery('SELECT 1 AS test'); // Simple query to ensure connection is established
        console.log('Connection has been established successfully.');
        return result;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error; // Re-throw the error after logging it
    }
};

// Export the functions for use in other parts of your application
module.exports = {
    executeQuery,
    connectToDatabase,
};
