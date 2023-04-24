/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
//每次触发就重新计时
function debounce(func, wait) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer)
    //使用箭头函数，确保this指向
    timer = setTimeout(() => {
      func.call(this, ...args)
    }, wait)
  }
}

const input = document.getElementById('input');
const changeValue = (e)=> console.log(e);
input.addEventListener('input',debounce(changeValue,1000))