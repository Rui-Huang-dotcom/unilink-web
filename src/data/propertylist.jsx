import Papa from "papaparse";

// Fetch and parse the CSV from Google Sheets
export const getParsedProperties = async () => {
  const response = await fetch(
    "https://docs.google.com/spreadsheets/d/1ArfmvCnjPckMWwaZ7Mb0V0_ZIBON6q53UHI0hyUYlEM/edit?pli=1&gid=0#gid=0"
  );
  const csvData = await response.text();

  // Use PapaParse to parse the CSV data
  const parsedData = Papa.parse(csvData, {
    header: true, // Automatically use the first row as header names
    skipEmptyLines: true, // Skip empty lines
  });

  return parsedData.data; // Return the parsed properties data as an array
};
