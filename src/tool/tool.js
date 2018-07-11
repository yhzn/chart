export let random = (max , min) =>{
  return Math.floor(Math.random()*(max-min+1))+min
}

export let isBasic = (it) => {
  return it === null || ( typeof it !== 'object' && typeof it !== 'array' );
}

export let clone = function (it) {
  if (isBasic(it)) {
    return it;
  }
  let result = Array.isArray(it) ? [] : {};
  for (let i in it) {
    result[i] = clone(it[i]);
  }
  return result;
}

export let router = (url,_this,timers) => {
   // let timer=setTimeout(() => {
    //
    // clearTimeout(timer);
    // _this.$router.push(url)

  // },10000)
}

// 页面暂停
export let pause = (_this) =>{
  if(_this.show){
    return false
  }
  clearInterval(_this.timer);
  _this.flag=!_this.flag;
  _this.show=true;
  _this.showTimer=setTimeout(()=>{
    clearTimeout(_this.showTimer);
    _this.show=false;
  },1500);

}

// 页面运行
export let run = (_this,url) =>{
  if(!_this.timer){
    clearInterval(_this.timer);
  }
  _this.timer=setInterval(()=>{
    _this.timeCount++;
    if(_this.timeCount>=10){
      clearInterval(_this.timer);
      _this.$router.push(url)
    }
  },1000)
}

// 页面继续运行
export let start = (_this,url) =>{
  if(_this.show){
    return false
  }
  _this.flag=!_this.flag;
  _this.show=true;
  _this.showTimer=setTimeout(()=>{
    clearTimeout(_this.showTimer);
    _this.show=false;
  },1500);
  run(_this,url)
}
