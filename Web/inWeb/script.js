console.log('log')
console.clear()
console.log('log')
console.error('error')
console.info('info')

let obj = {name : 'Reza', Lname : 'shahmorafi'}
let array = [1,2,3,4,5,6,7,8,9]
console.table(obj)
console.count(array)  /**شمارش دفعات اجرا */

console.time()
let sum = 0
for (let i = 0; i < 10000000; i++) {
    sum += i 
}
let time = console.timeEnd()
console.log(time)
// window.length returns number of iframe tags
// window.closed returns a bool that the window is close or not(future)

// navigator(find browser and version):
navigator.saysWho = (() => {
    const { userAgent } = navigator
    let match = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
    let temp
  
    if (/trident/i.test(match[1])) {
      temp = /\brv[ :]+(\d+)/g.exec(userAgent) || []
  
      return `IE ${temp[1] || ''}`
    }
  
    if (match[1] === 'Chrome') {
      temp = userAgent.match(/\b(OPR|Edge)\/(\d+)/)
  
      if (temp !== null) {
        return temp.slice(1).join(' ').replace('OPR', 'Opera')
      }
  
      temp = userAgent.match(/\b(Edg)\/(\d+)/)
  
      if (temp !== null) {
        return temp.slice(1).join(' ').replace('Edg', 'Edge (Chromium)')
      }
    }
  
    match = match[2] ? [ match[1], match[2] ] : [ navigator.appName, navigator.appVersion, '-?' ]
    temp = userAgent.match(/version\/(\d+)/i)
  
    if (temp !== null) {
      match.splice(1, 1, temp[1])
    }
  
    return match.join(' ')
  })()
  
  console.log(navigator.saysWho) // outputs: `Chrome 89`
// END

window.page
