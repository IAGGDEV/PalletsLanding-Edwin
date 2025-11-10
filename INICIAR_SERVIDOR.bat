@echo off
echo ====================================
echo   PALLETS PREMIUM - SERVIDOR LOCAL
echo ====================================
echo.
echo Iniciando servidor en http://localhost:8080
echo.
echo Presiona Ctrl+C para detener el servidor
echo.
cd /d "%~dp0"
python -m http.server 8080
pause
