const t = String.fromCharCode
const s = ["const t = String.fromCharCode", "const s = [", " ", "]", "console.log()", "console.log(s.slice(0, 2).join(t(10)) + s.map(x => t(34) + x + t(34)).join(', ') + ']')", "console.log(s.slice(5).join(t(10)))"]
console.log(s.slice(0, 2).join(t(10)) + s.map(x => t(34) + x + t(34)).join(', ') + ']')
console.log(s.slice(5).join(t(10)))
