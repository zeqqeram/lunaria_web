@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo   VERIFICANDO ENTORNO E INSTALANDO DEPENDENCIAS

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js no está instalado.
    echo Por favor, instala Node.js desde https://nodejs.org/
    echo Después de instalarlo, vuelve a ejecutar este archivo.
    pause
    exit /b
)

echo Node.js ya está instalado.
echo.
echo Instalando dependencias del proyecto...
call npm install

if %errorlevel% neq 0 (
    echo [ERROR] Hubo un problema al instalar las dependencias.
    pause
    exit /b
)

echo.
echo   Listo. Ahora podes usar "iniciar.bat" para abrir el Server
pause