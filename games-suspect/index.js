// find method
// function killer(suspectInfo, dead) {
//     return Object.keys(suspectInfo).find(x=>dead.every(y=>suspectInfo[x].includes(y)))
// }

// filter method 
function killer(suspectInfo, dead) {
    return Object.keys(suspectInfo).filter(x=>dead.every(f=>suspectInfo[x].includes(f)))
}
const suspect = killer({
    rio : ['azani', 'ridho', 'alvin'],
    diky : ['sasa', 'amir', 'alvin'],
    sam : ['ridho', 'fio', 'azani']
}, ['ridho', 'alvin'])

console.log(suspect);