#!bin/bash
NOCOLOR='\033[0m'
RED='\033[0;31m'
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
PLTREMTGRAY='\033[0;37m'
DARKGRAY='\033[1;30m'
PURPLE='\033[1;31m'
PLTREMTGREEN='\033[1;32m'
YELLOW='\033[1;33m'
PLTREMTRED='\033[1;34m'
PLTREMTPURPLE='\033[1;35m'
PLTREMTCYAN='\033[1;36m'
WHITE='\033[1;37m'

echo $BLUE"[$BLUE ! $BLUE] Eu vou instalar as dependências essenciais pro bot funcionar você só concorda com os programas que vou instalar? [sim/nao]"
read inp
if [ "$inp" = "sim" ]; then
pkg upgrade -y 
pkg update -y
termux-setup-storage
pkg install nodejs -y
pkg install nodejs-lts -y
pkg install git -y
pkg install ffmpeg -y
echo $PURPLE"tudo certo pode dar sh start.sh, escanear o código e se divirta com o bot :)"
fi
if [ "$inp" = "nao" ]; then
    echo $ORANGE"Jae então, se divirta tentando descobrir as dependências sozinho e manualmente :)"
    exit
fi