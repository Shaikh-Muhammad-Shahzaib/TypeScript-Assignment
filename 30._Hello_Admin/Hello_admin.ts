const userName :string[] = ['Admin', 'Sami', 'Ali', 'Usama', 'Taha'];
for(let i=0; i<userName.length; i++){
    if(userName[i] === 'Admin'){
        console.log('Hello Admin, Would you like to see a status report?')
    }
    else{
        console.log(`Hello ${userName[i]}, Thank you for Logging in again.`)
    }
}
