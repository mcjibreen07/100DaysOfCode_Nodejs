 function delaysmall(n,callback){
    setTimeout(callback, n);
 }

 delaysmall(3000,()=>{
    console.log('3sec delay');
 });