// complete the given function

function palindrome(str){
	int i=0,j=str.length-1;
	while (i<=j) {
		if (str[i]!=str[j]) {
			return false;
		}
		i++;
		j--;
	}
	return true;
}
palindrome(abcabca)
module.exports = palindrome
