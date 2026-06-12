import{test,expect}from '@playwright/test'
test('Webtable',async({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/')
    const RowData = await page.locator('//table[@id="table02"]//tbody//tr[2]//td').allTextContents()
    console.log(RowData)
    await expect(RowData).toContain('Tokyo')
    await expect(RowData).toEqual([
  'Garrett Winters',
  'Accountant',
  'Tokyo',
  '63',
  '2011/07/25',
  '$170,750'
])
const ColumnData = await page.locator('//table[@id="table02"]//tbody//tr//td[3]').allTextContents()
console.log(ColumnData)
await expect(ColumnData).toContain('Singapore')
await expect(ColumnData).toEqual([
  'Edinburgh',     'Tokyo',         'San Francisco',
  'Edinburgh',     'Tokyo',         'New York',
  'San Francisco', 'Tokyo',         'San Francisco',
  'Edinburgh',     'London',        'Edinburgh',
  'San Francisco', 'London',        'London',
  'London',        'New York',      'New York',
  'London',        'Edinburgh',     'New York',
  'New York',      'New York',      'Sidney',
  'London',        'Edinburgh',     'Singapore',
  'San Francisco', 'San Francisco', 'Tokyo',
  'Sidney',        'London',        'London',
  'San Francisco', 'Edinburgh',     'San Francisco',
  'San Francisco', 'San Francisco', 'San Francisco',
  'London',        'New York',      'Singapore',
  'London',        'Tokyo',         'New York',
  'San Francisco', 'Singapore',     'New York',
  'San Francisco', 'Edinburgh',     'New York',
  'London',        'London',        'San Francisco',
  'Edinburgh'
])
    const SingleData  = await page.locator('//table[@id="table02"]//tbody//tr[6]//td[3]').textContent()
    console.log(SingleData)
    await expect(SingleData).toEqual('New York')
})

