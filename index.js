/**
 * Đầu vào
 * -- Điểm ưu tiên khu vực , điểm ưu tiên đồi tượng
 * 
 * Xử lý
 * -- tạo biến cho điểm 1,2,3
 * -- tạo biến cho điểm khu vực
 * -- tạo biến cho điểm đối tượng
 * -- tính tổng điểm 3 môn
 * -- kiểm tra thí sinh đậu hay rớt = tổng điểm 3 môn + khuVuc + doiTuong
 * 
 * Đầu ra
 * -- tổng số điểm thí sinh đạt được và đậu hay rớt
 */

function khuVuc (maKhuVuc) {
  switch (maKhuVuc) {
    case "A":
      return 2
    case "B":
      return 1
    case "C":
      return 0.5
    case "X":
      return 0
    default:
      return 0
  }
}

function doiTuong (maDoiTuong) {
  switch (maDoiTuong) {
    case '0':
      return 0
    case '1':
      return 2.5
    case '2':
      return 1.5
    case '3':
      return 1
    default:
        return 0
  }
}

function domID(id){
  return document.getElementById(id)
}

domID("tinhKQ").onclick = function(){
  let diemChuan = domID("diemChuan").value;
  let diem1 = domID("diem1").value;
  let diem2 = domID("diem2").value;
  let diem3 = domID("diem3").value;
  let maKhuVuc = domID("khuVuc").value;
  let maDoiTuong = domID("doiTuong").value;
  let diemKhuVuc = khuVuc(maKhuVuc);
  let diemDoiTuong = doiTuong(maDoiTuong);
  console.log(diem1,diem2,diem3,maDoiTuong,maKhuVuc)
  let tongDiem = Number(diem1) + Number(diem2) + Number(diem3) + Number(diemKhuVuc) + Number(diemDoiTuong)
  if (diemChuan != "" && diem1 != "" && diem2 != "" && diem3 != "" & maDoiTuong != "" && maKhuVuc != "") {
    document.querySelector(".ketQuaBai1").innerHTML = `Điểm chuẩn là: ${diemChuan}. Tổng điểm là: ${tongDiem}
    ${tongDiem > diemChuan || tongDiem == diemChuan ? diem1 !=0 && diem2 !=0 && diem3 !=0 ? `chúc mừng bạn đã đạt &#129392;`: `bạn đã rớt &#128531;` : `bạn đã rớt &#128531;`}
  `
  }
}


// bài tập 2 tính tiền điện
/**
 * Đầu vào
 * -- giá tiền các mức
 * 
 * 
 * Xử lý
 * -- tạo các biến chứa tên và số kw
 * -- gán các biến cho tên , số kw điện tiêu thụ
 * -- tính tiền dựa trên các mức tiêu thụ
 * -- trả về tên và số tiền điện
 * 
 * Đầu ra
 * -- in ra kết quả : tên và số tiền điện
 * 
 */

domID("tinhTienDien").onclick = function (){
  let tenNguoiDung = domID("name").value;
  let soKwDien = domID("soKw").value;
  let tongTien = 0;
  if(soKwDien >0 && soKwDien <= 50) {
    tongTien = soKwDien * 500
  }else if (soKwDien > 50 && soKwDien <= 100) {
    tongTien = 50*500 +(soKwDien - 50)*650
  } else if (soKwDien > 100 && soKwDien <= 200) {
    tongTien = 50*500 + 50*650 + (soKwDien - 100) * 850
  } else if(soKwDien > 200 && soKwDien <= 350) {
    tongTien = 50*500 + 50*650 + 100*850 + (soKwDien - 200) * 1100
  }else {
    tongTien = 50*500 + 50*650 + 100*850 + 150*1100 +(soKwDien - 350) * 1300
  }
  if(tenNguoiDung && soKwDien !=0) {
    document.querySelector(".ketQuaBai2").innerHTML = `Tên người sử dụng : ${tenNguoiDung} , số tiền điện đã tiêu thụ: ${tongTien.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}`
  }
}


// Bài tập 3 tính thuế thu nhập cá nhân
/**
 * Đầu vào
 * -- mức thu nhập chịu thuế và % thuế phải đóng
 * 
 * Xử lý
 * -- tạo biến họ tên , số thu nhập , người phụ thuộc
 * -- gán giá trị cho biến hoTen , thuNhap , nguoiPhuThuoc
 * -- tính thuế thu nhập = tổng thu nhập - 4tr - số người phụ thuộc * 1.6tr
 * 
 * Đầu ra
 * xuất thuế thu nhập cá nhân phải đóng
 */

let tinhPhanTramThue = (thuNhap)=> {
  if(thuNhap >0 && thuNhap<=60){
    return 5
  }else if (thuNhap > 60 && thuNhap <= 120) {
    return 10
  }else if (thuNhap > 120 && thuNhap <= 210) {
    return 15
  }else if (thuNhap > 210 && thuNhap <= 384) {
    return 20
  }else if (thuNhap > 384 && thuNhap <= 624) {
    return 25
  }else if (thuNhap > 624 && thuNhap <= 960) {
    return 30
  }else {
    return 35
  }
}
domID("tinhThue").onclick = function(){
  let hoTen = domID("hoTen").value
  let tongThuNhap = domID("tongThuNhap").value
  let nguoiPhuThuoc = domID("nguoiPhuThuoc").value
  let phanTramThue = tinhPhanTramThue(tongThuNhap)
  let thuNhapChiuThue = tongThuNhap - 4 - (nguoiPhuThuoc * 1.6)
  let soTien = thuNhapChiuThue * (phanTramThue / 100)
  if(!hoTen=="" && tongThuNhap != 0) {
    document.querySelector(".ketQuaBai3").innerHTML = `
    Ông/Bà : ${hoTen} , có tổng mức thu nhập là: ${tongThuNhap} triệu, số tiền thuế phải đóng là : ${phanTramThue}% ~ ${soTien.toFixed(2)} triệu &#129297;
  `
  }
}


// Bài tập 4
/**
 * Đầu vào
 * -- giá phí xử lý
 * -- giá phí dịch vụ
 * -- giá thuê kênh
 * -- doanh nghiệp 5$ cho mỗi kết nối thêm
 * 
 * Xử lý
 * -- tạo 2 biến nhà dân và doanh nghiệp là object gồm các lọai phí
 * -- xét điều kiên hiển thị cho ô nhập số kết nối
 * 
 * Đầu ra
 * -- trả về số tiền phải trả
 */

let inputND = domID("khachNhaDan")
let inputDN = domID("khachDoanhNghiep")
let ketNoi = document.querySelector(".ket-noi");
let inputs = document.querySelectorAll(".form-check-input")
inputs.forEach((input)=> {
  input.addEventListener("input" , function() {
    if(inputND.checked) {
      ketNoi.classList.remove("show")
    }else if(inputDN.checked) {
      ketNoi.classList.add("show")
    }
  })
})

let customer = (customType)=>{
  switch (customType) {
    case 'nhaDan':
      return {
        name: 'Nhà dân',
        invoice : 4.5,
        services : 20.5,
        premiumFee: 7.5
      }
    case 'doanhNghiep':
      return {
        name: 'Doanh nghiệp',
        invoice : 15,
        services : 75,
        premiumFee: 50
      }
  }
}

domID("tinhTienCap").onclick = function(){
  let customerID = domID("customerID").value
  let connectGate = domID("soKetNoi").value
  let premiumChanel = domID("soKenhCaoCap").value
  let customType = document.querySelector("input[type='radio']:checked").value
  let client = customer(customType)
  let total = 0;
  total = client.invoice + client.services + (connectGate >10 ? (connectGate - 10)*5 : 0) + client.premiumFee*premiumChanel
  document.querySelector(".ketQuaBai4").innerHTML =
  `
  Mã khác hàng là : ${customerID} , là khách hàng : ${client.name} có tổng tiền cáp là : ${total}$
  `
}
