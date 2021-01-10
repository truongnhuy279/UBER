var hoaDon = [];

function layLoaiXe() {
    var ketQua;
    var _uberX = document.getElementById('uberX').checked;
    var _uberSUV = document.getElementById('uberSUV').checked;
    var _uberBlack = document.getElementById('uberBlack').checked;

    if (_uberX) {
        ketQua = "uberX";
    } else if (_uberSUV) {
        ketQua = "uberSUV";
    } else if (_uberBlack) {
        ketQua = "uberBlack";
    } else {
        alert("Vui lòng chọn loại xe");
    }
    return ketQua;
}

// trả về tổng tiền soKM khi người dùng nhập + thời gian chờ
function tinhTien() {
    var _soKM = document.getElementById('soKM').value;
    _soKM = parseFloat(_soKM); // chuỗi -- số


    var _thoiGianCho = document.getElementById('thoiGianCho').value;
    _thoiGianCho = parseFloat(_thoiGianCho);


    var _divThanhTien = document.getElementById('divThanhTien');
    _divThanhTien.style.display = "block";

    var _divThanhTien = document.getElementById('xuatTien');

    var loaiXe = layLoaiXe();


    // tính tiền

    var _thanhTien = 0;
    switch (loaiXe) {
        case 'uberX':
            if (_soKM <= 1) {
                _thanhTien = _soKM * 8000 + _thoiGianCho * 2000;
            } else if (_soKM > 1 && _soKM <= 20) {
                _thanhTien = 1 * 8000 + (_soKM - 1) * 12000 + _thoiGianCho * 2000;
            } else if (_soKM > 20) {
                _thanhTien = 1 * 8000 + 20 * 12000 + (_soKM - 21) * 10000 + _thoiGianCho * 2000;
            }
            break;
        case 'uberSUV':
            if (_soKM <= 1) {
                _thanhTien = _soKM * 9000 + _thoiGianCho * 3000;
            } else if (_soKM > 1 && _soKM <= 20) {
                _thanhTien = 1 * 9000 + (_soKM - 1) * 14000 + _thoiGianCho * 3000;
            } else if (_soKM > 20) {
                _thanhTien = 1 * 9000 + 20 * 14000 + (_soKM - 21) * 12000 + _thoiGianCho * 3000;
            }
            break;
        case 'uberBlack':
            if (_soKM <= 1) {
                _thanhTien = _soKM * 10000 + _thoiGianCho * 4000;
            } else if (_soKM > 1 && _soKM <= 20) {
                _thanhTien = 1 * 10000 + (_soKM - 1) * 16000 + _thoiGianCho * 4000;
            } else if (_soKM > 20) {
                _thanhTien = 1 * 10000 + 20 * 16000 + (_soKM - 21) * 14000 + _thoiGianCho * 4000;
            }
            break;
        default:
            break;
    }

    _divThanhTien.innerHTML = _thanhTien;

    // tạo đối tượng uber
    var uber = new Uber(_chiTiet, _suDung, _donGia, _thoiGianCho, _thanhTien);

    hoaDon.push(uber);
    taoBang(hoaDon);
}


// đăng ký 
function inHoaDon() {
    var _divHoaDon = document.getElementById('divHoaDon');
    _divHoaDon.style.display = "block";
}

// tạo Hoá Đơn
function taoBang(hoaDon) {
    var content = "";
    //forEach
    // thêm dòng thêm cột
    hoaDon.forEach(function (item, i) {
        content += `
        <tr>
            <td>${item.loaiXe}</td>
            <td>${item.soKM}</td>
            <td>${item.soKM}</td>
            <td>${item.donGia}</td>
            <td>${item.thanhTien}</td>
        </tr>
        `
    });
    // Gắn dòng cho tbody
    document.getElementById("tbodyhoaDon").innerHTML = content;
}
