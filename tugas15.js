const SegitigaSiku = () => {
  console.log("Nilai AB : 8");
  console.log("Nilai BC : 6");
  var ab = 8;
  var bc = 6;
  ab2 = Math.pow(ab, 2);
  bc2 = Math.pow(bc, 2);
  a = ab2 + bc2;
  x = Math.sqrt(a);
  console.log(
    "panjang sisi AC pada segitiga siku-siku tersebut adalah:",
    x,
    "cm"
  );
};
SegitigaSiku();
