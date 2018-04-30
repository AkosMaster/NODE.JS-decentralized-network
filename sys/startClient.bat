@echo off
setlocal enableextensions enabledelayedexpansion
echo MANUAL CLIENT SETUP
echo ----------
set /p a="First connection:"
set /p b="Second connection:"
set /p c="Third connection:"
set /p p="Open Port:"
cls
echo SETUP COMPLETE
PAUSE
cls


rem Define alphabet
    set "alphabet=a b c d f g h i j k l m n p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9"

    rem Create an "array" with the elements of the alphabet
    set "size=0"
    for %%a in (%alphabet%) do (
        set "a.!size!=%%a"
        set /a "size+=1"
    )

    rem Generate the output, selecting 32 randoms elements from the array
    set "k="
    for /l %%a in (1 1 32) do (
        set /a "r=!random! %% size"
        for %%b in (!r!) do set "k=!k!!a.%%b!"
    )
    





node client.js %a% %b% %c% %p% %k%