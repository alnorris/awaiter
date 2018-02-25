

// return null
exports.silentCatch = (arr) => {
  // arrProm.map(prom => (prom.catch(e) => null)))

  // return Promise.all(arrProm)
  //   .then(vals => vals.filter(val => val !== null));

}


exports.retry = (times, internal, prom) => {
  // arrProm.map(prom => (prom.catch(e) => null)))

  // return Promise.all(arrProm)
  //   .then(vals => vals.filter(val => val !== null));

}



https://github.com/sindresorhus/p-props
export.mapObjAll = (obj) => {

}




export.mapObjRace = (obj) => {

}


exports.silentCatchAll = (arrProm) => {
  // arrProm.map(prom => (prom.catch(e) => null)))

  // return Promise.all(arrProm)
  //   .then(vals => vals.filter(val => val !== null));

}

exports.silentCatchAll = (arrProm) => {
  // arrProm.map(prom => (prom.catch(e) => null)))

  // return Promise.all(arrProm)
  //   .then(vals => vals.filter(val => val !== null));

}


// give you back the error message
exports.returnCatchAll = (arrProm) => {
  arrProm.map(prom => (prom.catch(e) => e)))
  return Promise.all(arrProm);

}

// give you back a null for any 
exports.nullCatchAll = (arrProm) => {
  arrProm.map(prom => (prom.catch(e) => e)))

  return Promise.all(arrProm);

}

/*
Limit concurrency of Promise.all
*/
exports.limitAll = (limit, arrProm) => {


}


const timeOutPromise = ms => {
  return new Promise((resolve, reject) => setTimeout(reject, ms))
}


//rject indivudal promise after
exports.timeOut = (ms, promise) => {
  return Promise.race([timeOutPromise(ms), promise])
}



const user = await timeOut(4000, getUser(id))


https://github.com/sindresorhus/p-throttle
export.throttle = (ms, prom) => {

}


// reject promise.all after
export.timeOutAll => {

}


// reject promise.race after
export.timeOutRace = (ms, arrProm) => {

}
https://github.com/sindresorhus/p-event

https://github.com/sindresorhus/p-queue

https://github.com/sindresorhus/p-all
export.

http://bluebirdjs.com/docs/api/promise.some.html

https://github.com/sindresorhus/p-map

exports.Promisify

export.delay = (ms, value) => {
  new Promise(res => setTimeout(() => res, ms));
}

https://github.com/sindresorhus/p-reflect


https://github.com/sindresorhus/p-locate


https://github.com/sindresorhus/p-time

