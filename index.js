const axios = require('axios')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function checkIp(ip) {
    let resp = await axios.get("https://www.abuseipdb.com/check/"+ip.trim());
    const dom = new JSDOM(resp.data);
    return parseInt((dom.window.document.querySelector('#report-wrapper > div:nth-child(1) > div:nth-child(1) > div > p:nth-child(2) > b:nth-child(2)').innerHTML).trim().replace("%", ""));
}
async function t() {
if(process.argv.slice(2).length > 0) {
let t = await checkIp(process.argv.slice(2)[0])
console.log("Fraud score of "+process.argv.slice(2)[0]+" is "+t+"%")
}else{
console.log("Specify an IP!")
}
}
