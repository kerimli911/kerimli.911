import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {
  let res = (
    await axios.get(`https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/Messi.json`)
  ).data
  let url = await res[Math.floor(res.length * Math.random())]
  conn.sendFile(m.chat, url, 'error.jpg', `*Neymarrr*`, m)
}
//conn.sendButton(m.chat, "*Neymarrr*", author, url, [['⚽ NEXT ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['neymar']
handler.tags = ['img']
handler.command = /^(neymar)$/i
export default handler
