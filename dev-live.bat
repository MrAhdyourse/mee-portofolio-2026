@echo off
cd /d "%~dp0"

if not exist "package.json" (
  echo [ERROR] package.json tidak ditemukan. Jalankan dari root project.
  exit /b 1
)

echo.
echo ============================================================
echo   Astro dev — live preview ^(localhost + jaringan^)
echo ============================================================
echo.
echo Server mendengarkan di semua interface ^(0.0.0.0^).
echo Port default Astro: 4321
echo.
echo   Browser di PC ini:     http://localhost:4321
echo   HP / laptop lain:      http://^<IP-IPv4-PC-ini^>:4321
echo       ^(ganti ^<...^> dengan salah satu angka di bawah^)
echo.
echo IPv4 yang terdeteksi ^(boleh ada beberapa — pilih yang Wi-Fi/LAN aktif^):
echo ------------------------------------------------------------
ipconfig | findstr /i "IPv4"
echo ------------------------------------------------------------
echo.
echo Tips:
echo  - Scroll/simpan di editor: halaman biasanya auto-reload ^(HMR^).
echo  - Kalau perangkat lain gagal buka: Windows Firewall bisa blokir Node.js.
echo    Boleh tambah aturan masuk untuk port 4321 atau izinkan saat diminta.
echo  - PC dan ponsel harus satu jaringan ^(Wi-Fi yang sama / LAN^).
echo  - Berhenti server: tekan Ctrl+C
echo.
echo Menjalankan: npm run dev -- --host 0.0.0.0 --port 4321
echo ============================================================
echo.

call npm run dev -- --host 0.0.0.0 --port 4321
exit /b %ERRORLEVEL%
