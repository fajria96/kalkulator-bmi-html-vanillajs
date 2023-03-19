// deklarasi variabel
var female = document.getElementById("f");
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");

// function untuk validasi apabila inputan kosong maka akan keluar jendela/popup data tidak boleh kosong
function calculate() {
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    (male.checked == false && female.checked == false)
  ) {
    modal.style.display = "block";
    modalText.innerHTML = `Harap isi semua data jangan ada data yang kosong!`;
  } else {
    countBmi();
  }
}
//function untuk menghitung BMI
function countBmi() {
  //inisialisasi variabel p bertipe array dengan nilai yg diambil dari properti value age, height, dan weight
  var p = [age.value, height.value, weight.value];
  //menentukan jenis kelamin
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }
  //menghitung bmi users dengan rumus bmi
  var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);

  // mengevaluasi nilai BMI dan menentukan kategori berat badan
  var result = "";
  if (bmi < 18.5) {
    result = "Kekurangan Berat Badan";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = "Normal (ideal)";
  } else if (25 <= bmi && bmi <= 29.9) {
    result = "Kelebihan Berat Badan";
  } else if (30 <= bmi && bmi <= 34.9) {
    result = "Kegemukan";
  }

  //hasil output
  resultArea.style.display = "block";
  document.querySelector(
    ".comment"
  ).innerHTML = `Kondisi berat badan anda saat ini <span id="comment">${result}</span>`;
  document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

// apabila user klik (x), tutup jendela modal
span.onclick = function () {
  modal.style.display = "none";
};
