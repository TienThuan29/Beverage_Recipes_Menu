# Google Sheets Integration Setup Guide

This guide will help you set up the connection between your Next.js app and Google Sheets.

## Prerequisites

1. A Google Cloud Project with the Google Sheets API enabled
2. A Service Account with access to your Google Sheet
3. A Google Sheet with the proper structure (see below)

## Step 1: Set Up Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Sheets API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

## Step 2: Create Service Account

1. In Google Cloud Console, go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details and create it
4. Click on the created service account
5. Go to the "Keys" tab
6. Click "Add Key" > "Create new key"
7. Choose "JSON" format and download the key file
8. Save this file as `service_account.json` in your project root (already done)

## Step 3: Share Your Google Sheet

1. Open your Google Sheet
2. Click the "Share" button
3. Add the service account email (found in `service_account.json` as `client_email`)
4. Give it "Viewer" permissions
5. Copy the Sheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`
   - The `SHEET_ID` is the long string between `/d/` and `/edit`

## Step 4: Configure Environment Variables

Create a `.env.local` file in your project root with the following:

```env
GOOGLE_SHEET_ID=your_sheet_id_here
```

**Optional:** If you prefer to use environment variables instead of the `service_account.json` file:

```env
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
```

## Step 5: Set Up Your Google Sheet Structure

Your Google Sheet should have the following structure in the first sheet. **No JSON formatting is required** - the parser automatically reads the natural column structure!

### Column Structure:

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H | Column I |
|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| Group ID | Group English Name | Group Vietnamese Name | Beverage Vietnamese Name | Beverage English Name | Ingredient Name | Units Of Measurement | Quantity | Instructions |

### Important Notes:

1. **Row 1**: Should contain headers (you can use any header names you like, they're ignored)
2. **Groups (Columns A, B, C)**: 
   - Group information appears in merged cells that span multiple rows
   - The Group ID, English Name, and Vietnamese Name should be in the first row of each group
   - Subsequent rows for beverages in the same group will have empty A, B, C cells (due to merging)
3. **Beverages (Columns D, E)**:
   - Beverage names appear only on the **first row** of each beverage
   - Column D: Vietnamese name
   - Column E: English name
   - Subsequent rows with ingredients for the same beverage will have empty D and E cells
4. **Ingredients (Columns F, G, H)**:
   - Each ingredient is on a separate row
   - Column F: Ingredient name
   - Column G: Units of measurement (e.g., "gr", "ml", "que", "cups")
   - Column H: Quantity (numeric value)
   - Multiple ingredients for the same beverage are listed in consecutive rows
5. **Instructions (Column I)**:
   - Instructions can span multiple rows
   - Each row can contain one step or part of a step
   - Empty cells are allowed (will be skipped)

### Example Structure:

```
Row 1: [Headers - any text, ignored by parser]
Row 2: [1 | Cà phê truyền thống | Vietnamese Coffee | cà phê đen | Black Coffee | Cà phê | gr | 18 | - Chiết xuất cà phê]
Row 3: [  |                    |                  |            |              | Đường que | que | 1 | - Phục vụ đường riêng]
Row 4: [  |                    |                  | Cà phê sữa | Milk Coffee | Cà phê | gr | 18 | - Chiết xuất cà phê]
Row 5: [  |                    |                  |            |              | Sữa đặc | ml | 20 | - Cho sữa đặc vào tách]
Row 6: [  |                    |                  |            |              | Nước sôi | ml | 50 | - Đổ nước sôi vào]
```

**Key Points:**
- Empty cells in columns A-C mean "continue using the previous group"
- Empty cells in columns D-E mean "continue adding to the previous beverage"
- The parser automatically aggregates ingredients and instructions across multiple rows
- No JSON or special formatting needed - just use normal spreadsheet cells!

## Step 6: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000`
3. The app should now load data from your Google Sheet

## Troubleshooting

### Error: "GOOGLE_SHEET_ID environment variable is not set"
- Make sure you've created a `.env.local` file with `GOOGLE_SHEET_ID`
- Restart your development server after adding environment variables

### Error: "Failed to fetch data" or "Permission denied"
- Make sure you've shared the Google Sheet with the service account email
- Verify the service account has "Viewer" permissions
- Check that the Google Sheets API is enabled in your Google Cloud project

### Error: "Invalid credentials"
- Verify your `service_account.json` file is correct
- If using environment variables, make sure `GOOGLE_PRIVATE_KEY` includes the full key with `\n` characters

### Data not showing up
- Check that your sheet structure matches the expected format
- Verify the sheet name is correct (defaults to the first sheet)
- Check the browser console and server logs for specific errors

## Notes

- The app will automatically refresh data when you reload the page
- Changes in Google Sheets will be reflected on the website after a page refresh
- For production, consider implementing caching to reduce API calls
- The service account file (`service_account.json`) should be kept secure and not committed to version control (it's already in `.gitignore`)
