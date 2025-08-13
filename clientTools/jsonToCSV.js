/**
 * @name jsonToSCV
 * @desc A function that takes in a json file and converts the input into a CSV file 
 * @param jsonObj - The overall json object 
 * @return success or fail 
 */
const jsonToCSV = async (jsonArray, fileName) => {
    try {
        const fs = require("fs");
        const path = require("path");
        let filePath = `./csvFiles/${fileName}.csv`
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        if (!Array.isArray(jsonArray) || jsonArray.length === 0) {
            return "Not an array or array is empty"
        }
        const headers = Object.keys(jsonArray[0]);
        const csvRows = [headers.join(","), ...jsonArray.map((row) => headers.map((field) => JSON.stringify(row[field] ?? "")).join(",")),];
        let csvContent = csvRows.join("\n");
        await fs.writeFileSync(filePath, csvContent, { encoding: "utf-8" });
        return filePath;
    } catch (error) {
        console.error("Error Converting JSON to CSV: " + error.message);
        return error;
    }
}

module.exports = jsonToCSV;