//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "true";
global.video = "true";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "255620814108,255764182801,255776663848";
global.sudo = process.env.SUDO || "255620814108,255764182801,255776663848";
global.owner = process.env.OWNER_NUMBER || "255620814108,255764182801,255776663848";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01hekZrV05pTGkyOGFENTIwa1I4aS95N0QyRFo1YXZwQ1pYMmNlUEJWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2xZL01VUStMRDE3aFplazExOE1XSmIwNWRpNkNlcWtva0xMbEFqbVJYND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TWJCaVlRa3NZY2psNFduMTI4cTRtNnBaRUY0ekxjTTJ3WlhmMVBTRzFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaaVlDdmRXeWJ0T3JsRVRSVGtrTkJTK1VsOHhNUVB4dE5KbFhUSm5MOERrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFCclVXUC9VZUE1ejVCYWgxcEJPY2k2YmtvZ0l1SkorRXRsTmVvdjFDR2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd2TDlEYjlzU3hIdWlaRUk1OVM3cXF5dDYweXB3cHBhWDYyNUhJb2dIMnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0hpMERZZWJsTWp1YlJxSHRDV2U4UWFnRVNCOCttL3UzR0dPTWg0RVQxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFNGRjdjZGhSWVEyQnNGWmZxcWVQcHdyVXo3clJtRktyRkUrRjAxTEswOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpDYk1yb2NISVdqT1ZBdVBlc25qTXo0T085alZocTd4QUFHZHFvRzFUQ1NvTkpwck0vTncwRVUrMThUeTZPVHlxQXd6VFI0Z3lRU0FjaVNvSk9yY2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiJMNjhTU1JIMmQvMmRSMUVTdW53WFpaVHhoRUZTTjZjc2Q3ZjBPazBLTHQ4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTY4MzM3MjI1MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEMjJDNkE5OEZBMTUyMDc1MzAzRTUyMTIzNTE3MDY0RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMjYxNDMxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3YUp4bVpUZVJfU1AxbmQ2YUJEQWhBIiwicGhvbmVJZCI6IjFiZDZjM2Y5LWIzMDUtNDUwNy04NDY4LWU5YWJiNWVmMmM4MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTDJaQWgycmVJUUxSSnRmaHZDbjJyUXdEWm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVNnRkllQ1FHUUt1Z0tuYWNoRWd2YUhBc2lJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlE2QUpMUlA0IiwibWUiOnsiaWQiOiIyNTU2ODMzNzIyNTA6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTXIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lLOXlhWUZFS2UvbnJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImhNVk1mdEwrU1FEVjNvbXJuVzdKc3Z5cExKWVpwdU5pVytlNXZQZ1ZHMm89IiwiYWNjb3VudFNpZ25hdHVyZSI6InpvVmdzdWQwcE1la3FUdm8xem1rVGF0cUVsWkE0dC9wdXNwaitiQUZGK2pWV1JCTStmYjQxY2xBY20wbnMvcHUwcG9Kd2VlbmdlaGJNTW43aG1QTkFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJoNWpjS2c1UlYrZWtkaHVJUHYrWWhQdkVFOHVKM3RrZVhlZ1ZYVzZKT2lyWW1LelBINkluR2JCblJMeDN1bUpyZGNnZEtwc2dxRjdid0FSWjN2aG5ndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY4MzM3MjI1MDoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZVEZUSDdTL2trQTFkNkpxNTF1eWJMOHFTeVdHYWJqWWx2bnViejRGUnRxIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMjYxNDI4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVteSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐅𝚪𝚵𝐂𝐘𝚩𝚵𝚪 𝚳𝐃",
  author: process.env.PACK_AUTHER || "FRECYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FRECYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "FRECYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
