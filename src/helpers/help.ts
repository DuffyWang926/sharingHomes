export const getExclamationMarks = function(numChars:number){
    return Array(numChars + 1).join('!');
}
export const clearTag = (str:string):string =>{
    let reg = /<[^<>]+>/g
    let res = str.replace(reg,'')
    return res
  }
export const  debounce = function(method:any,context:object, delay:number){
    let timer:any = null;
    console.log(method)
    // let args = method.arguments
    return function() {
    let self = context;
    clearTimeout(timer);
        timer = setTimeout(function() {
            method.apply(self);
        }, delay);
    }
}
  