function isPalindrome(str) {
  if (typeof str !== "string") return "input must be a string";
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return "Not Palindrom";
    }
    left++;
    right--;
  }

  return "Palindrom";
}

function reverseWordOrder(str) {
  if (typeof str !== "string") return "input must be a string";
  let words = [];
  let currentWord = "";

  // Memisahkan kata-kata secara manual
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      words.push(currentWord); // Menyimpan kata yang sudah dibaca
      currentWord = ""; // Mereset kata saat ini
    } else {
      currentWord += str[i]; // Membangun kata saat ini
    }
  }
  words.push(currentWord); // Menambahkan kata terakhir

  // Membalikkan urutan kata secara manual
  let reversedSentence = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversedSentence += words[i];
    if (i > 0) reversedSentence += " "; // Menambahkan spasi antara kata
  }

  return reversedSentence;
}

export const runTask4 = () => {
  console.log(isPalindrome("malam"));
  console.log(reverseWordOrder("Saya Belajar Javascript"));
};
