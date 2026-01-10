# Vercel Deployment Guide

## Required Environment Variables

For Vercel deployment, you need to add the following environment variables in your Vercel project settings:

### 1. GOOGLE_SHEET_ID (Required)
Your Google Sheet ID from the URL:
- URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`
- The `SHEET_ID` is the long string between `/d/` and `/edit`

**Example:**
```
GOOGLE_SHEET_ID=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t
```

### 2. GOOGLE_SERVICE_ACCOUNT_EMAIL (Required for Vercel)
The service account email from your `service_account.json` file (the `client_email` field).

**Example:**
```
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
```

### 3. GOOGLE_PRIVATE_KEY (Required for Vercel)
The private key from your `service_account.json` file (the `private_key` field).

**Important:** 
- Copy the ENTIRE private key including the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` lines
- Keep all the `\n` characters as they are (Vercel will handle them)
- The private key should be on a single line in Vercel's environment variable input

**Example format:**
```
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCLuJsDQchINpha...\n-----END PRIVATE KEY-----\n
```

## How to Add Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:
   - **Name**: The variable name (e.g., `GOOGLE_SHEET_ID`)
   - **Value**: The actual value
   - **Environment**: Select all environments (Production, Preview, Development) or just Production
4. Click **Save**

## Getting Your Service Account Credentials

If you need to extract the credentials from your `service_account.json` file:

1. Open `service_account.json` in your project
2. Copy the value of `client_email` → This is your `GOOGLE_SERVICE_ACCOUNT_EMAIL`
3. Copy the value of `private_key` → This is your `GOOGLE_PRIVATE_KEY`
   - Make sure to include the entire key with `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
   - Keep the `\n` characters

## Important Notes

- **Never commit `service_account.json` to your repository** (it's already in `.gitignore`)
- The `service_account.json` file won't be available in Vercel, so you **must** use environment variables
- After adding environment variables, you may need to redeploy your application
- Make sure your Google Sheet is shared with the service account email (from `client_email`)

## Testing

After deployment, test that:
1. The home page loads beverages from Google Sheets
2. Clicking the refresh button updates the data
3. Beverage detail pages load correctly

## Troubleshooting

If you get authentication errors:
- Verify the `GOOGLE_SERVICE_ACCOUNT_EMAIL` matches the `client_email` in your service account
- Verify the `GOOGLE_PRIVATE_KEY` includes the full key with BEGIN/END markers
- Check that the service account has access to your Google Sheet
- Ensure the Google Sheets API is enabled in your Google Cloud project
