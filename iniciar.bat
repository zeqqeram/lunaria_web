@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo   INICIANDO SERVIDOR DE DESARROLLO (VITE)
echo.

start "Vite Dev Server" cmd /k "npm run dev"

echo Esperando a que el servidor esté listo...
:check_port
timeout /t 1 >nul
netstat -ano | findstr :5173 >nul
if errorlevel 1 (
    goto check_port
)

echo Servidor listo. Abriendo el navegador...
start "" http://localhost:5173
exit