const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:

- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.

📌 *OWNER BOT* : wa.me/62895423946200
📌 *INSTAGRAM* : https://www.instagram.com/vanz_store_

Hope Have Nice Day>_<.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
🔥==[ *BOT VANZ TOD* ]==🔥

Hallo ${pushname} beb:*
Berikut adalah beberapa fitur yang ada pada bot ini!✨

[ Creator 🛠️ ]
🤜 *${prefix}sticker*
🤜 *${prefix}stickergif*
🤜 *${prefix}stickergiphy*
🤜 *${prefix}sticker nobg*
🤜 *${prefix}meme*
🤜 *${prefix}quotemaker*
🤜 *${prefix}nulis*

[ Islam 🧕👳‍♂️ ]
🤜 *${prefix}infosurah*
🤜 *${prefix}surah*
🤜 *${prefix}tafsir*
🤜 *${prefix}alaudio*
🤜 *${prefix}jsolat*
🤜 *${prefix}listsurah*

[ PENYEGAR 🔥 ]
🤜 *${prefix}nekopoi*

[ Download 🎬 ]
🤜 *${prefix}instagram*
🤜 *${prefix}ytmp3*
🤜 *${prefix}ytmp4*

[ GABUT ♻️ ]
🤜 *${prefix}artinama*
🤜 *${prefix}cekjodoh*

[ Search Any 🔍 ]
🤜 *${prefix}images*
🤜 *${prefix}sreddit*
🤜 *${prefix}resep*
🤜 *${prefix}stalkig*
🤜 *${prefix}wiki*
🤜 *${prefix}cuaca*
🤜 *${prefix}chord*
🤜 *${prefix}lirik*
🤜 *${prefix}ss*
🤜 *${prefix}play*
🤜 *${prefix}whatanime*

[ Random Teks 💬 ] 
🤜 *${prefix}fakta*
🤜 *${prefix}pantun*
🤜 *${prefix}katabijak*
🤜 *${prefix}quote*

[ Random Images 📸 ]
🤜 *${prefix}anime*
🤜 *${prefix}kpop*
🤜 *${prefix}memes*

[ Lain-lain 💠 ]
🤜 *${prefix}tts*
🤜 *${prefix}translate*
🤜 *${prefix}resi*
🤜 *${prefix}shortlink*
🤜 *${prefix}ping*
🤜 *${prefix}bapakfont*
🤜 *${prefix}covidindo*

[ Tentang Bot 🤖 ]
🤜 *${prefix}tnc*
🤜 *${prefix}donasi*
🤜 *${prefix}join*
🤜 *${prefix}ownerbot*
🤜 *${prefix}botstatus*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

[ Owner Bot 🤖 ]
🤜 *${prefix}ban* - banned
🤜 *${prefix}bc* - promosi
🤜 *${prefix}leaveall* - keluar semua grup
🤜 *${prefix}clearall* - hapus semua chat

👾 *BOT AKTIF* : 09:00 - 13:00
👾 *GUNAKAN BOT DENGAN BIJAK!*

❤️ *OFC GRUP* : https://chat.whatsapp.com/DWcsjjI6TUq9KfcvZ0qMao

Semoga  Menyenangkan!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠❤️ [ *Owner Group Only* ] ❤️⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
. *${prefix}kickall*
-owner adalah pembuat grup.

⚠❤️ [ *Admin Group Only* ] ❤️⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

. *${prefix}add*
. *${prefix}kick* @tag
. *${prefix}promote* @tag
. *${prefix}demote* @tag
. *${prefix}tagall*
. *${prefix}del*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini ❤️, untuk mendukung bot ini kamu dapat membantu dengan berdonasi *SEIKHLASNYA* dengan cara:
 
📌 *PULSA*         : 0895423946200
📌 *GOPAY*         : 0895423946200
📌 *FOLLOW*        : @vanz_store_

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. ~vanz'
}
