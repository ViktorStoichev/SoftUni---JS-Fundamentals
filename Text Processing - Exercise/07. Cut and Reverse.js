function cutAndReverse(string) {
  let center = string.length / 2;
  let [first, second] = [string.slice(0, center), string.slice(center, string.length)]
  first = first.split("").reverse().join("");
  second = second.split("").reverse().join("");
  console.log(first);
  console.log(second);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')