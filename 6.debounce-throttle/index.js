 //防抖
 const debounce = (fn, delay) => {
    let timeout = null;
    return function (args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
        fn.call(this, args);
        }, delay);
    };
};
//节流
// const throttle = (fn, delay)=>{
//     let startTime = Date.parse(new Date());
//     return function(args){
//         if(startTime + delay < Date.parse(new Date())){
//             fn.call(this,args);
//             startTime = Date.parse(new Date())
//         }
//     }
// }
const throttle = (fn, delay)=>{
    let flag = true;
    return function(args){
        if (!flag) return;
        flag = false; 
        setTimeout(()=>{
            fn.call(this,args);
            flag = true;
        },delay)
    }
}
window.onscroll = throttle(function () {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log('滚动条位置：' + scrollTop);
},2000)