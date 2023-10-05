#!/bin/sh

#If user doesnt have installed plocate install it with sudo 
#installation_plocate = `sudo apt install plocate`

path_location=`locate build_info.json`
users_home=$pwd

echo $path_location

echo "Enter the discord version you want to update: "
read discord_version
echo "Getting updated to $discord_version"
cd ~
touch discordversion.txt pwd.txt pathlocation.txt
echo "$discord_version" >> discordversion.txt
echo "$users_home" >> pwd.txt
echo "$path_location" >> pathlocation.txt

cat /usr/share/discord/resources/build_info.json | grep "version"