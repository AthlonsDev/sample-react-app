import algosdk from "algosdk"; 

const Account_Address = B3KSSI5GHHLVRSIZEBSY7JVMBBEZG7MMYKN5M6DOXFPAK2FHQFWDNKVJIY
const Account_Mnemonic = "neck palm together chat intact replace confirm enable announce goat sick sunset admit winter dry seed emotion cargo loud view smart joy absorb jacket"
const myaccount = algosdk.generateAccount();
console.log("Account created. Save address & Mnemonic!");
console.log("Account Address = " + myaccount.addr);
let account_mnemonic = algosdk.secretKeyToMnemonic(myaccount.sk);
console.log("Account Mnemonic = " + account_mnemonic);
 
export { myaccount, account_mnemonic };