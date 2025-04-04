
import { useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [servico, setServico] = useState("");
  const [dia, setDia] = useState("");
  const [horario, setHorario] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = () => {
    if (!nome || !email || !empresa || !servico || !dia || !horario) {
      setMensagem("⚠️ Preencha todos os campos!");
      return;
    }

    setMensagem("✅ Reserva confirmada! Verifique seu e-mail.");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      padding: 20,
    }}>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        padding: 32,
        borderRadius: 20,
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        maxWidth: 400,
        width: "100%",
        textAlign: "center"
      }}>
        <h1 style={{ marginBottom: 24 }}>Agendamento de Manicure 💅</h1>

        {[{
          label: "Nome",
          value: nome,
          setter: setNome,
          placeholder: "Digite seu nome"
        }, {
          label: "E-mail",
          value: email,
          setter: setEmail,
          placeholder: "Digite seu e-mail"
        }].map(({ label, value, setter, placeholder }, idx) => (
          <div key={idx} style={{ textAlign: "left", marginBottom: 12 }}>
            <label>{label}</label>
            <input type="text" value={value} onChange={e => setter(e.target.value)} placeholder={placeholder}
              style={{ width: "100%", padding: 8, borderRadius: 8, marginTop: 4 }} />
          </div>
        ))}

        <div style={{ textAlign: "left", marginBottom: 12 }}>
          <label>Empresa</label>
          <select value={empresa} onChange={e => setEmpresa(e.target.value)} style={{ width: "100%", padding: 8, borderRadius: 8, marginTop: 4 }}>
            <option value="">Selecione</option>
            <option>Toy Formaturas</option>
            <option>Neo Formaturas</option>
            <option>T Brands</option>
            <option>T Dreams</option>
            <option>T Venues</option>
            <option>WAS</option>
            <option>Mood</option>
            <option>T Group</option>
          </select>
        </div>

        <div style={{ textAlign: "left", marginBottom: 12 }}>
          <label>Tipo de serviço</label>
          <select value={servico} onChange={e => setServico(e.target.value)} style={{ width: "100%", padding: 8, borderRadius: 8, marginTop: 4 }}>
            <option value="">Selecione</option>
            <option value="Pé e Mão">Pé e Mão</option>
            <option value="Só Pé">Só Pé</option>
            <option value="Só Mão">Só Mão</option>
          </select>
        </div>

        <div style={{ textAlign: "left", marginBottom: 12 }}>
          <label>Data</label>
          <select value={dia} onChange={e => setDia(e.target.value)} style={{ width: "100%", padding: 8, borderRadius: 8, marginTop: 4 }}>
            <option value="">Selecione</option>
            <option value="09/04/2025">09/04/2025</option>
            <option value="10/04/2025">10/04/2025</option>
          </select>
        </div>

        <div style={{ textAlign: "left", marginBottom: 24 }}>
          <label>Horário</label>
          <select value={horario} onChange={e => setHorario(e.target.value)} style={{ width: "100%", padding: 8, borderRadius: 8, marginTop: 4 }}>
            <option value="">Selecione</option>
            {[
              "09:30", "09:50", "10:10", "10:30", "10:50", "11:10", "11:30", "11:50",
              "12:10", "12:30", "12:50", "13:10", "13:30", "13:50", "14:10", "14:30",
              "14:50", "15:10", "15:30", "15:50", "16:10", "16:30", "16:50", "17:10",
              "17:30", "17:50", "18:10", "18:30"
            ].map(h => <option key={h} value={h}>{h}</option>)}
          </select>
        </div>

        <button onClick={handleSubmit} style={{
          backgroundColor: "#6a0dad",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: 10,
          cursor: "pointer",
          fontWeight: "bold"
        }}>
          Confirmar reserva
        </button>

        {mensagem && <p style={{ marginTop: 16 }}>{mensagem}</p>}

        <p style={{ fontSize: 12, marginTop: 32, color: "#333" }}>
          <strong>T Group</strong><br />
          Qualquer dúvida, entre em contato com a área de Gente e Cultura 💜
        </p>
      </div>
    </div>
  );
}
