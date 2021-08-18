Steps to reproduce the issue

- `npm install`
- unzip and install manually webextension to Safari - WebDriver_cookies_test.app.zip
- `npm run start` - to start server
- `npm run test` - after start, and localhost page opened, click on webextension -> 
  then click "Stop session", click "Get cookies" on webextension. Refresh page few times and 
  compare SID cookie set by page and SID cookie returned by clicking on icon's "Get cookies".
  Results are different, webextension cannot pick up new cookies. 
