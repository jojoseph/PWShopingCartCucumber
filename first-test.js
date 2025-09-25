const {chromium} = require('playwright');
(async () => {
  const browser = await chromium.launch( { headless: false } );
  try{
  const page = await browser.newPage();
  await page.goto('https://marmelab.com/react-admin-demo/'); 
  await page.getByText('Dashboard').click();
  await page.waitForSelector( 'text = Monthly Revenue')
  console.log('Dashboard Loaded'); 
  }catch (error) {
  console.error('Error occurred:', error);
    }   finally {
  await browser.close();    
    }
  })();