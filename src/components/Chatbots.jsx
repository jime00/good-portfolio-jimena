
import React, { useState } from 'react'
import girlCoding from '../assets/codings.jpg' 

export default function Chatbot() {
  const [q, setQ] = useState('')
  const [history, setHistory] = useState([
    { from: 'bot', text: "Hi! I’m Jimena’s AI Assistant 🤖. You can ask me about her background, skills, or projects!" }
  ])

  function handleSend() {
    if (!q.trim()) return
    const userMsg = { from: 'you', text: q }
    setHistory(h => [...h, userMsg])
    
    const lower = q.toLowerCase()
    let reply = "Hmm, I’m not sure about that. Try asking about Jimena’s major, school, or skills!"

    
    if (lower.includes('name')) {
      reply = "Her name is Jimena Bello!🌸 "
    } else if (lower.includes('school') || lower.includes('university')) {
      reply = "Jimena studies Information Technology at Kean University 🎓"
    } else if (lower.includes('major')) {
      reply = "Jimena’s major is Information Technology 💻"
    } else if (lower.includes('skills')) {
      reply = "She’s skilled in HTML, CSS, JavaScript, Python, and SQL  "
    } else if (lower.includes('project')) {
      reply = "One of her projects includes an AI-powered portfolio website — like this one!"
    } else if (lower.includes('hobby') || lower.includes('fun')) {
      reply = "Jimena enjoys coding, learning new tech, and being creative with web development! 🎨"
    } else if (lower.includes('resume')) {
      reply = "Jimena’s resume highlights her IT knowledge, teamwork, and web development experience."
    } else if (lower.includes('contact')) {
      reply = "You can reach Jimena through the Contact section — it’ll open your email app 📧"
    }

    setTimeout(() => {
      setHistory(h => [...h, { from: 'bot', text: reply }])
    }, 600)

    setQ('')
  }

  return (
    <section 
      id="ai" 
      className="card" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        position: 'relative',
        backgroundImage: `url(${girlCoding})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '12px',
        padding: '20px',
        color: '#fff',
        minHeight: '400px'
      }}
    >
      <div 
        style={{ 
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderRadius: '12px',
          padding: '16px'
        }}
      >
        <div className="section-title" style={{color: 'white'}}>AI Assistant</div>

        <div style={{
          minHeight: 120,
          maxHeight: 260,
          overflowY: 'auto',
          padding: 8,
          border: '1px solid #eef6ff',
          borderRadius: 8,
          background: 'rgba(255, 255, 255, 0.2)',
          color: 'white'
        }}>
          {history.map((m, i) => (
            <div key={i} style={{ marginBottom: 8, textAlign: m.from === 'bot' ? 'left' : 'right' }}>
              <div style={{
                display: 'inline-block',
                padding: '8px 10px',
                borderRadius: 10,
                maxWidth: '80%',
                background: m.from === 'bot' ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.3)'
              }}>
                <div style={{ fontSize: 14 }}>{m.text}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <input 
            value={q} 
            onChange={e => setQ(e.target.value)} 
            placeholder="Ask me something about Jimena..." 
            onKeyDown={e => { if (e.key === 'Enter') handleSend() }} 
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '8px',
              border: 'none'
            }}
          />
          <button 
            className="primary" 
            onClick={handleSend} 
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              background: '#4da3ff',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Send
          </button>
        </div>
      </div>
    </section>
  )
}
