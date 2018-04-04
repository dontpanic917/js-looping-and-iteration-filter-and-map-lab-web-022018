// Code your solution here:
function driversWithRevenueOver(driverObjArray, revenue){
  let returnArray = []
  for (const driver of driverObjArray){
    if (driver[`revenue`] > revenue){
      returnArray.push(driver)}}return returnArray}
function driverNamesWithRevenueOver(driverObjArray, revenue){
  let returnArray = []
  for (const driver of driverObjArray){
    if (driver[`revenue`] > revenue){
      returnArray.push(driver[`name`])}}return returnArray}
function exactMatch(driverObjArray, matchObj){
  let returnArray = []
  for (const driver of driverObjArray){
    if (driver[Object.keys(matchObj)] === Object.values(matchObj)[0]){
      returnArray.push(driver)}}return returnArray}
function exactMatchToList(driverObjArray, matchObj){
  let returnArray = []
  for (const driver of driverObjArray){
    if (driver[Object.keys(matchObj)] === Object.values(matchObj)[0]){
      returnArray.push(driver['name'])}}return returnArray}
