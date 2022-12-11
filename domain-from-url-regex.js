/* write a function that given a URL as a string parses out just the domain name.
Return domain as string.
input: string (URL)
output: string 
*/

const returnDomain=(url)=>{
    let removeFirst = url.match(/(http:\/\/www.)|(http:\/\/)|(www.)/gi);
    let domainAndTLD= url.slice(removeFirst[0].length);
    let domain =domainAndTLD.split('.');
    return domain[0];
}

console.log(returnDomain('www.github.com'))
console.log(returnDomain('http://www.hacker-news.com'))
console.log(returnDomain('http://facebook.com'))