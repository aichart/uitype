@echo off

echo ********************* ��ʼ���� *********************
uitype c --root %~dp0../../ --outFile %~dp0../../../../client/cocos_slg/assets/lib/uitype/index.d.ts
@REM uitype c --root %~dp0../../ --outFile %~dp0/output-uitype/index.d.ts
if %errorlevel% == 0 (goto exeEnd) else (goto errorExit)

:errorExit
echo ********************* �������� *********************
pause>nul
exit

:exeEnd
echo ********************* ִ����� *********************
pause>nul
exit