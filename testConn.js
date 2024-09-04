const { connectToDatabase, executeQuery } = require('./dbConfig.js');

const testDbFunctions = async () => {
    try {
        // Step 1: Establish a connection
        await connectToDatabase();

        // Step 2: Run a test query, e.g., selecting from a known table
        const result = await executeQuery('SELECT name FROM sys.databases');
        console.log('Databases:', result);

        // Optional: You can also test other queries
        // const users = await executeQuery('SELECT * FROM Users');
        // console.log('Users:', users);
    } catch (error) {
        console.error('Error during test:', error);
    }
};

// Run the test function
testDbFunctions();
