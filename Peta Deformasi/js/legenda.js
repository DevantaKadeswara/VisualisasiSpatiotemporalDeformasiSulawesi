// Ambil elemen checkbox
const corsCheckbox = document.getElementById("CorsCheckbox");
const sesarCheckbox = document.getElementById("SesarCheckbox");
const horizontalCheckbox = document.getElementById("HorizontalCheckbox");
const vertikalCheckbox = document.getElementById("VertikalCheckbox");
const dilatationCheckbox = document.getElementById("DilatationCheckbox");
const maxshrCheckbox = document.getElementById("MaxshrCheckbox");


// Ambil elemen gambar
const CorsLegend1 = document.getElementById("CORSLegend1");
const SesarLegend = document.getElementById("SesarLegend");
const horizontalLegend = document.getElementById("HorizontalLegend");
const vertikalLegend = document.getElementById("VertikalLegend");
const dilatationLegend1 = document.getElementById("DilatationLegend1");
const dilatationLegend2 = document.getElementById("DilatationLegend2");
const dilatationLegend3 = document.getElementById("DilatationLegend3");
const dilatationLegendsContainer = document.getElementById("DilatationLegends");
const maxshrLegend1 = document.getElementById("MaxshrLegend1");
const maxshrLegend2 = document.getElementById("MaxshrLegend2");
const maxshrLegend3 = document.getElementById("MaxshrLegend3");
const maxshrLegendsContainer = document.getElementById("MaxshrLegends");

// Kontainer untuk semua legenda
const legendaContent = document.getElementById("LegendaContent");

// Fungsi untuk menampilkan atau menyembunyikan gambar berdasarkan checkbox
// Fungsi untuk menampilkan atau menyembunyikan gambar berdasarkan checkbox
function updateLegenda() {
    // Tampilkan gambar sesuai dengan checkbox aktif
    CorsLegend1.style.display = corsCheckbox.checked ? "block" : "none";
    SesarLegend.style.display = sesarCheckbox.checked ? "block" : "none";
    horizontalLegend.style.display = horizontalCheckbox.checked ? "block" : "none";
    vertikalLegend.style.display = vertikalCheckbox.checked ? "block" : "none";
    dilatationLegend1.style.display = dilatationCheckbox.checked ? "block" : "none";
    dilatationLegend2.style.display = dilatationCheckbox.checked ? "block" : "none";
    dilatationLegend3.style.display = dilatationCheckbox.checked ? "block" : "none";
    maxshrLegend1.style.display = maxshrCheckbox.checked ? "block" : "none";
    maxshrLegend2.style.display = maxshrCheckbox.checked ? "block" : "none";
    maxshrLegend3.style.display = maxshrCheckbox.checked ? "block" : "none";

    // Cek apakah ada checkbox yang aktif
    const anyChecked =
        corsCheckbox.checked ||
        sesarCheckbox.checked ||
        horizontalCheckbox.checked ||
        vertikalCheckbox.checked ||
        dilatationCheckbox.checked ||
        maxshrCheckbox.checked;

    // Tampilkan kontainer "Legenda" hanya jika ada gambar aktif
    legendaContent.style.display = anyChecked ? "block" : "none";
}

// Tambahkan event listener ke checkbox
corsCheckbox.addEventListener("change", updateLegenda);
sesarCheckbox.addEventListener("change", updateLegenda);
horizontalCheckbox.addEventListener("change", updateLegenda);
vertikalCheckbox.addEventListener("change", updateLegenda);
dilatationCheckbox.addEventListener("change", updateLegenda);
maxshrCheckbox.addEventListener("change", updateLegenda);
