/*
    DESCRIPTION
    Write a function that when given a URL as a string, parses out just
    the domain name and returns it as a string. For example:

    domainName("http://github.com/carbonfive/raygun") == "github" 
    domainName("http://www.zombie-bites.com") == "zombie-bites"
    domainName("https://www.cnet.com") == "cnet"
 */

// brute force
function domainName(url) {	
	return url.split(/[./:]/).filter(el => {
		if (el == "www" || el == "http" || el == "https" || el == "") return false;
		return true;
	})[0];
}

function domainName_clever(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

 //tests
const Test = {
    assertEquals: (output, expected) => {
        return output === expected ?
        console.log('Test passed!') : console.log(`Test failed: ${output} should be ${expected}`);
    }
}

Test.assertEquals(domainName("http://google.com"), "google");
Test.assertEquals(domainName("http://google.co.jp"), "google");
Test.assertEquals(domainName("www.xakep.ru"), "xakep");
Test.assertEquals(domainName("https://youtube.com"), "youtube");
Test.assertEquals(domainName("https://www.codewars.com"), "codewars");
Test.assertEquals(domainName("http://google.com"), "google");

Test.assertEquals(domainName_clever("http://google.co.jp"), "google");
Test.assertEquals(domainName_clever("www.xakep.ru"), "xakep");
Test.assertEquals(domainName_clever("https://youtube.com"), "youtube");
Test.assertEquals(domainName_clever("https://www.codewars.com"), "codewars");