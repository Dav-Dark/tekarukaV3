exports.donasi = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, telegram, youtube, kapanbotaktif, grupch1, grupch2) => {
	return `{ *MENU DONASI ${BotName}* }

_TERIMA KASIH
*${id.split("@s.whatsapp.net")[0]}*
TELAH MEMBUKA MENU DONASI_

*${tampilTanggal}* 
*${tampilWaktu}* 
(Waktu Server)

*KALIAN BISA DONASI MENGGUNAKAN*
   
-❥ *PULSA*: 089524651825
-❥ *OVO*: 
-❥ *DANA* : 
-❥ *GOPAY* : 089524651825

*IKLAN* : _SHOPEE PINK_

*Follow*
_Instagram_ : ${instagram}
_Telegram_ : ${telegram}
_Youtube_ : ${youtube}

`
}
