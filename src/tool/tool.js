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
  let timer=setTimeout(() => {
    // clearTimeout(timer);
    // _this.$router.push(url)
  },10000)
}
