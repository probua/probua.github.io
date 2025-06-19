---

title: i3 en Ubuntu
author: Alejandro Aguilar
date: June 19, 2025

---

Este post realmente es para mi mismo, para tener en algún lugar los pasos para instalar mi entorno de i3 en un Ubuntu instalado desde cero.

```bash
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install ubuntu-restricted-extras -y
sudo apt install vim rofi dmenu git feh picom arandr i3 i3status i3blocks brightnessctl playerctl keepassxc alacritty thunar fonts-font-awesome blueman pulseaudio-utils -y
sudo snap install aws-cli --classic
sudo snap install code --classic
sudo curl -o- -L https://raw.githubusercontent.com/probua/home/main/config/scripts/auto-install/auto-install.sh | bash
```
