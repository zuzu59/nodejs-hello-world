#!/bin/bash
#Installation de l'application
#zf170711.1133, zf190430.1017

sudo apt-get update

curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential

sudo apt-get install -y gnupg2

npm install
sudo npm install -g nodemon

