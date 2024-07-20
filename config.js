const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_42_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxODksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMixcbiAgICAgICAgMTA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgODksXG4gICAgICAgIDU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODksXG4gICAgICAgIDM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICA5MixcbiAgICAgICAgMTUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDc5LFxuICAgICAgICA2OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDQ0LFxuICAgICAgICA1LFxuICAgICAgICA1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMixcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0LFxuICAgICAgICA5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAyLFxuICAgICAgICA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlo1YTc1ZWtVMXlDaUozU0tEUmsvbFZzK1RiVGtuWjNPRjRNamdJcXVuRDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0Nzk2NDY1MDIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEOTk2MzIyNDFEQTgzQ0ZCNDRBOTAxMThDODUxMjQ0OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0NzkzNTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3OTY0NjUwMjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRCNTA3NDk2MTIwQUM2MkU3RjVEOEQ2QURDMTUxOEZFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ3OTM1NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoYk5yalNVelNjNklzNmVLajlPWV9RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc1NTliZWMyLTY3MjQtNDVlOC1iMjQ1LTJjNWY0YTIxYTdlMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAxNTUsXG4gICAgICAyMzQsXG4gICAgICAxNTIsXG4gICAgICAyMTMsXG4gICAgICA3NCxcbiAgICAgIDE4MSxcbiAgICAgIDEyNixcbiAgICAgIDE3MCxcbiAgICAgIDk3LFxuICAgICAgMTk4LFxuICAgICAgMjM4LFxuICAgICAgMjA3LFxuICAgICAgMjIsXG4gICAgICAxMjQsXG4gICAgICAxOTIsXG4gICAgICA2LFxuICAgICAgMTAzLFxuICAgICAgODUsXG4gICAgICAyMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICAyMjUsXG4gICAgICAxNDgsXG4gICAgICAyNSxcbiAgICAgIDksXG4gICAgICAxMTQsXG4gICAgICAxMSxcbiAgICAgIDE4OSxcbiAgICAgIDIxNSxcbiAgICAgIDE2MixcbiAgICAgIDE5NCxcbiAgICAgIDEyMyxcbiAgICAgIDMyLFxuICAgICAgNzYsXG4gICAgICAxMTksXG4gICAgICAyMTksXG4gICAgICAzOCxcbiAgICAgIDExMyxcbiAgICAgIDcxLFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNIUjE2UlJEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTY0NjUwMjM6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMTAzMjM3MTc3Nzc5MToxMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLCsFEhz4BHwrBD4oiGQiHCsPCfjq7imaXvuI9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQT0h3NDRFRUxQaDdyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNER1RqdjM4Y2pFWjJBZmVKR2FOclpuR2pxMGRXbTA5RWJQNlRtdno2MUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL1R4b09VV0xLeHpxSWZVOHFOMnZKTWltZUd1dEpJd3ZSM1pvbzFrRTlzVWpkZmRybHlOYjM1eU4zbmZXd1NiaERyZkU2VnBBNVREZFBnSStyOUQ1QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYzdkcW0xQ2tEa3RDNE5TcjluTTNucEZKNml3VEpRdkxiZ2tORzE5MklqZ1Vic25yZmdFd0NGSDIvN0IwTWlyOHk2VkV0cVdIQTBzOUUvRG1ieS9yaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzk2NDY1MDIzOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0NzkzNTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMV0tcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxXSy5qc29uIjogIntcImtleURhdGFcIjpcIkMvdEgzWFZsMmRCZzBxVHFVd2pUWkZzN0ZBTHNRYzNNbUNWMzV1VWhkcWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEwNDIwMDY5MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDc5MzU0OTU2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
