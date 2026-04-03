@echo off
setlocal EnableExtensions
cd /d "%~dp0"

REM Jendela CMD yang dibuka lewat double-click akan TUTUP otomatis kalau skrip selesai.
REM Skrip ini akan PAUSE di akhir supaya Anda sempat baca log (kecuali NO_PAUSE=1).
REM Otomatisasi / CI: jalankan dengan  set NO_PAUSE=1

set "RC=0"

if not exist "package.json" (
  echo [ERROR] package.json not found. Run this script from the project root.
  set "RC=1"
  goto FINISH
)

REM Optional: set DEPLOY_EMPTY=1 before running to force an empty commit (triggers Actions).
set "ALLOW_EMPTY=0"
if /i "%DEPLOY_EMPTY%"=="1" set "ALLOW_EMPTY=1"

set "COMMIT_MSG="
:argloop
if "%~1"=="" goto argdone
if /i "%~1"=="--empty" (
  set "ALLOW_EMPTY=1"
  shift
  goto argloop
)
set "COMMIT_MSG=%~1"
shift
goto argloop
:argdone
if not defined COMMIT_MSG (
  if "%ALLOW_EMPTY%"=="1" (
    set "COMMIT_MSG=chore: trigger GitHub Pages deploy"
  ) else (
    set "COMMIT_MSG=chore: update site"
  )
)

echo.
echo === 1/4: npm ci (clean install; node_modules stays local, never committed) ===
call npm ci
if errorlevel 1 (set "RC=1" & goto FINISH)

echo.
echo === 2/4: npm run build (output in dist\ — dist is gitignored on main) ===
call npm run build
if errorlevel 1 (set "RC=1" & goto FINISH)

echo.
echo === 3/4: git add -A ^(.gitignore excludes node_modules and dist^) ===
git rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 (
  echo.
  echo [ERROR] Folder ini bukan repository Git ^(.git tidak ada^).
  echo         Init atau clone repo dulu, lalu jalankan skrip lagi dari root project.
  echo         Contoh: git init    lalu: git remote add origin ^<url-repo^>
  set "RC=1"
  goto FINISH
)

call git add -A
if errorlevel 1 (
  echo [ERROR] git add gagal.
  set "RC=1"
  goto FINISH
)

call git diff --cached --name-only | findstr /i "\\node_modules\\" >nul 2>&1
if not errorlevel 1 (
  echo [ERROR] node_modules paths are staged. Aborting. Check .gitignore and run: git reset
  set "RC=1"
  goto FINISH
)
call git diff --cached --name-only | findstr /i "node_modules/" >nul 2>&1
if not errorlevel 1 (
  echo [ERROR] node_modules paths are staged. Aborting.
  set "RC=1"
  goto FINISH
)

git diff --cached --quiet
if errorlevel 1 goto HAVE_STAGED_CHANGES
if "%ALLOW_EMPTY%"=="1" goto DO_EMPTY_COMMIT

echo.
echo ============================================================
echo  SELESAI BUILD — tidak ada file sumber yang berubah untuk di-commit.
echo.
echo  Penjelasan: folder dist\ hasil build di-gitignore, jadi commit tidak
echo  ikut membawa output build. Tanpa commit baru, push / Actions tidak
echo  punya apa yang harus di-deploy dari sisi repo ^(kecuali commit lain^).
echo.
echo  Yang bisa Anda lakukan:
echo   - Ubah file di src lalu jalankan skrip ini lagi, ATAU
echo   - Paksa commit kosong untuk memicu GitHub Actions:
echo       build-and-push.bat --empty
echo     atau sebelum jalan:  set DEPLOY_EMPTY=1
echo ============================================================
set "RC=0"
goto FINISH

:HAVE_STAGED_CHANGES
echo.
echo === 4/4: commit ^& push origin main ===
call git commit -m "%COMMIT_MSG%"
if errorlevel 1 (
  echo [ERROR] git commit failed.
  set "RC=1"
  goto FINISH
)
goto GIT_PUSH

:DO_EMPTY_COMMIT
echo.
echo === 4/4: commit kosong ^(trigger deploy^) ^& push origin main ===
call git commit --allow-empty -m "%COMMIT_MSG%"
if errorlevel 1 (
  echo [ERROR] git commit --allow-empty failed.
  set "RC=1"
  goto FINISH
)

:GIT_PUSH
call git push -u origin main
if errorlevel 1 (
  set "RC=1"
  goto FINISH
)

echo.
echo Done. Setelah push: Actions build dan deploy ke GitHub Pages.
echo Repo: https://github.com/MrAhdyourse/mee-portofolio-2026
echo Set Pages source ke "GitHub Actions" sekali di: Settings ^> Pages ^> Build and deployment.
set "RC=0"
goto FINISH

:FINISH
if /i not "%NO_PAUSE%"=="1" (
  echo.
  if "%RC%"=="0" (
    echo --- Selesai. Tekan tombol apa saja untuk menutup jendela ini ---
  ) else (
    echo --- Ada error ^(kode keluar %RC%^). Baca pesan di atas, lalu tekan tombol apa saja ---
  )
  pause >nul
)
endlocal & exit /b %RC%
