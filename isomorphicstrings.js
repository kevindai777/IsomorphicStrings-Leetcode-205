//Objective is to see whether two strings are isomorphic

let s = 'egg', t = 'add'


//O(n) solution that uses a hashmap to map out the respective matching
//letters in each string

if (s.length != t.length) {
    return false
}

let map = new Map()

//Map out the respective matching characters in both strings
for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
        map.set(s[i], t[i])    
    } else {
        
        //If they don't match, return false
        if (map.get(s[i]) != t[i]) {
            return false
        }
    }
}

//See if they share the same number of unique letters
//Case: 'ab' 'aa'
return new Set([...map.values()]).size == map.size