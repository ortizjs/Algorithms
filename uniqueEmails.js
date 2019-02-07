/*Input: ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
*/

var helper = function (email) {
    let names = email.split("@")
    let domain = names[0];
    let newDomain = "";

    names2 = domain.split("+");
    let i = 0;
    while (i < names2[0].length) {
        if (names2[0][i] !== ".") {
            newDomain += names2[0][i]
        }
        i++;
    }
    names[0] = newDomain;
    return names.join("@");
}


var numUniqueEmails = function (emails) {
    let uniqueEmails = [];
    let i = 0;
    while (i < emails.length) {
        let email = emails[i];
        if (!uniqueEmails.includes(helper(email))) {
            uniqueEmails.push(helper(email));
        }
        i++;
    }
    return uniqueEmails.length;
};