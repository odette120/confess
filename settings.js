const fs = require('fs')

global.fotomenfess = fs.readFileSync("./menfess.jpg")
global.owner = ["62895366943070"]

global.help = {
Menu(pushname){
  return `Halo ${pushname}

Perkenalkan Saya Irma WhatsApp Bot Can anyone Irma Can Help? ketik .confess untuk memulai chat.
`
}
}
