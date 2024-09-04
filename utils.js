// Utility function to convert a JavaScript Date to SQL-compatible format (YYYY-MM-DD)
const convertToSQLDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // YYYY-MM-DD format
};
module.exports = { convertToSQLDate };