window.onload = function () {
    var param = 1; // Change this if you want more or les than 2 hours

    var today = new Date();
    var newDate = today.setHours(today.getHours() + param);

    $('#getting-started').countdown(newDate, function (event) {
        $(this).html(event.strftime('%H:%M:%S Detik'));
    });

    listSoal(2);
    getSoal(1, 2);
}
function getSoal(nomor, total = 1) {
    var next = nomor == total ? 1 : nomor + 1;
    var back = nomor != 1 ? nomor - 1 : 0;
    var btnBack = document.getElementById('btn-back');
    var btnNext = document.getElementById('btn-next');

    if (back == 0) {
        btnBack.classList.add('d-none');
    } else {
        btnBack.setAttribute('onclick', `getSoal(${back}, ${total})`)
        btnBack.classList.remove('d-none');
    }

    if (nomor == total) {
        btnNext.classList.add('d-none');
    } else {
        btnNext.setAttribute('onclick', `getSoal(${next}, ${total})`)
        btnNext.classList.remove('d-none');
    }

    var now = localStorage.getItem('active');
    if (now != null) {
        var btn = document.getElementById(`soal-${now}`);
        btn.classList.remove('border')
        btn.classList.remove('border-2')
        btn.classList.remove('border-dark')
    }

    localStorage.setItem('active', nomor);
    bankSoal(nomor);
    document.getElementById('title-nomor-soal').innerHTML = nomor

    var btn = document.getElementById(`soal-${nomor}`);
    btn.classList.add('border')
    btn.classList.add('border-2')
    btn.classList.add('border-dark')

    // atribut ragu-ragu
    var btnragu = document.getElementById('btn-ragu-ragu');
    btnragu.setAttribute('onclick', `getSoal(${next}, ${total}), raguRagu(${nomor})`)
}

function listSoal(total) {
    var card = document.getElementById('nomor-col');
    card.innerHTML = "";

    for (let i = 1; i <= total; i++) {
        var soal = document.createElement('div');
        soal.id = `soal-${i}`;

        var link = document.createElement('a');
        link.href = "javascript:void(1)";
        link.id = `angka${i}`;
        link.setAttribute('onclick', `getSoal(${i}, ${total})`);
        link.textContent = i;

        soal.appendChild(link);
        card.appendChild(soal);
    }
}

function raguRagu(id) {
    var btn = document.getElementById(`soal-${id}`);
    var angka = document.getElementById(`angka${id}`);
    btn.classList.add('bg-warning');
    angka.classList.add('text-white');
}

function dijawab(nomor) {
    var btn = document.getElementById(`soal-${nomor}`);
    var angka = document.getElementById(`angka${nomor}`);
    btn.classList.add('bg-primary');
    angka.classList.add('text-white');
}

function selesai() {
    swal({
        type: "warning",
        text: "Apakah anda yakin untuk mengakhiri ujian?",
        showCancelButton: true,
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
        confirmButtonColor: "#35a6Fa",
        cancelButtonColor: "#e74a3b",
        reverseButtons: true
    })

        .then((result) => {
            if (result.value) {
                window.location = 'nilai.html';
            }
        });
}

function bankSoal(nomor, text = 'soal') {
    var card = document.getElementById('soal-wrapper');
    switch (text + nomor) {
        case "soal1":
            var soal1 = `<p>Belajar Merupakan sebuah perubahan:</p>
                            <div class="radio-btn">
                            <input type="radio" id="html" name="fav_language" value="HTML" onchange="dijawab(${nomor})"/>
                            <label for="html">Kognitif dan psikomotor</label><br />
                            <input type="radio" id="css" name="fav_language" value="CSS" onchange="dijawab(${nomor})"/>
                            <label for="css">Psikomotor dan afektif</label><br />
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" onchange="dijawab(${nomor})"/>
                            <label for="javascript">Kognitif, psikomotor, dan afektif</label><br />
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" onchange="dijawab(${nomor})"/>
                            <label for="javascript">Psikologis, psikomotor, dan afektif</label><br />
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" onchange="dijawab(${nomor})"/>
                            <label for="javascript">Psikologis, fisiologis, dan afektif</label><br />
                            </div>`;
            card.innerHTML = soal1;
            break;
        case "soal2":
            var soal2 = `  <figure class="zoom" onmousemove="zoom(event)" style="background-image: url(https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg)">
                                <img src="https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg" />
                            </figure>
                            <p>Pada telaah kritis menggunakan GATE framework, hasil A pada ramboman adalah :</p>
                            <div class="radio-btn" style="font-size: 12px;">
                            <input type="radio" id="html" name="fav_language" value="HTML" onchange="dijawab(${nomor})">
                            <label for="html">Karakteristik baseline antara kelompok paparan dan kontrol pada penelitian diatas berbeda</label><br>
                            <input type="radio" id="css" name="fav_language" value="CSS" onchange="dijawab(${nomor})">
                            <label for="css">Karakteristik baseline antara kelompok paparan dan kontrol pada penelitian diatas sama yaitu p>0.05 sehingga hasil penelitian valid</label><br>
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" onchange="dijawab(${nomor})">
                            <label for="javascript">Karakteristik baseline antara kelompok paparan dan kontrol pada penelitian diatas sama yaitu p<0.05 sehingga hasil penelitian valid</label><br>
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" onchange="dijawab(${nomor})">
                            <label for="javascript">Karakteristik baseline antara kelompok paparan dan kontrol penelitian diatas berbeda yaitu p>0.05 sehingga hasil penelitian valid</label><br>
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" onchange="dijawab(${nomor})">
                            <label for="javascript">Karakteristik baseline antara kelompok paparan dan kontrol pada penelitian diatas tidak dapat diketahui karena tidak ada nilai P</label><br>
                            </div>`;
            card.innerHTML = soal2;
    }
}