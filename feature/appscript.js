const scriptProp = PropertiesService.getScriptProperties();
const sheetName = "Sheet1";

function initialSetup() {
  const sheetId = "YOUR_SHEET_ID"; // Replace with your actual Sheet ID
  scriptProp.setProperty("SHEET_ID", sheetId);
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.TEXT);
  }

  try {
    const sheetId = scriptProp.getProperty("SHEET_ID");
    if (!sheetId) throw new Error("Sheet ID not found. Run initialSetup().");

    const sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
    if (!sheet) throw new Error(`Sheet '${sheetName}' not found.`);

    const data = JSON.parse(e.postData.contents);
    const requiredFields = ["nama", "no_hp", "users", "perusahaan", "alamat", "hp_kantor", "email", "jabatan", "harga"];

    // Ensure all required fields exist
    const newRow = requiredFields.map(field => data?.[field] ?? ""); // Use nullish coalescing for safety
    newRow.unshift(new Date()); // Add timestamp

    sheet.appendRow(newRow);

    return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.TEXT); // Empty response
  } 
  catch (error) {
    return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.TEXT); // Empty response
  } 
  finally {
    lock.releaseLock();
  }
}


function doGet(e) {
  return ContentService.createTextOutput("Data Anda berhasil disimpan! Silakan tekan tombol kembali di browser Anda")
    .setMimeType(ContentService.MimeType.TEXT);
}