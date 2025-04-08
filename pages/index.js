import { useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [servico, setServico] = useState("");
  const [dia, setDia] = useState("");
  const [horario, setHorario] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async () => {
    if (!nome || !email || !empresa || !servico || !dia || !horario) {
      setMensagem("⚠️ Preencha todos os campos!");
      return;
    }

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbybw6ZBXTHFAeaXJm31GRLSX4UYGGj6qX08hY-hhMQ68nVrYmhcXNmX7oE960CnyqUg/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          empresa,
          servico,
          dia,
          horario,
        }),
      });

      const data = await response.json();
      if (data.status === "sucesso") {
        setMensagem("✅ Reserva confirmada! Verifique seu e-mail.");
        setNome("");
        setEmail("");
        setEmpresa("");
        setServico("");
        setDia("");
        setHorario("");
      } else {
        setMensagem("❌ Erro ao reservar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setMensagem("❌ Erro ao conectar com o servidor.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", padding: 20 }}>
      <div style={{ backgroundColor: "rgba(255,255,255,0.9)", padding: 32, borderRadius: 12, maxWidth: 400, width: "100%" }}>
        <h1 style={{ marginBottom: 20 }}>Agendamento de Manicure 💅</h1>

        <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" style={inputStyle} />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" style={inputStyle} />

        <select value={empresa} onChange={e => setEmpresa(e.target.value)} style={inputStyle}>
          <option value="">Selecione a empresa</option>
          <option>Toy Formaturas</option>
          <option>Neo Formaturas</option>
          <option>T Brands</option>
          <option>T Dreams</option>
          <option>T Venues</option>
          <option>WAS</option>
          <option>Mood</option>
          <option>T Group</option>
        </select>

        <select value={servico} onChange={e => setServico(e.target.value)} style={inputStyle}>
          <option value="">Tipo de serviço</option>
          <option value="Pé e Mão">Pé e Mão</option>
          <option value="Só Pé">Só Pé</option>
          <option value="Só Mão">Só Mão</option>
        </select>

        <select value={dia} onChange={e => setDia(e.target.value)} style={inputStyle}>
          <option value="">Data</option>
          <option value="09/04/2025">09/04/2025</option>
          <option value="10/04/2025">10/04/2025</option>
        </select>

        <select value={horario} onChange={e => setHorario(e.target.value)} style={inputStyle}>
          <option value="">Horário</option>
          {[
            "09:30", "09:50", "10:10", "10:30", "10:50", "11:10", "11:30", "11:50",
            "12:10", "12:30", "12:50", "13:10", "13:30", "13:50", "14:10", "14:30",
            "14:50", "15:10", "15:30", "15:50", "16:10", "16:30", "16:50", "17:10",
            "17:30", "17:50", "18:10", "18:30"
          ].map(h => <option key={h}>{h}</option>)}
        </select>

        <button onClick={handleSubmit} style={buttonStyle}>Confirmar reserva</button>
        {mensagem && <p style={{ marginTop: 20 }}>{mensagem}</p>}

        <p style={{ fontSize: 12, marginTop: 32 }}>
          <strong>T Group</strong><br />
          Qualquer dúvida, entre em contato com a área de Gente e Cultura 💜
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: 10,
  marginBottom: 12,
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  width: "100%",
  backgroundColor: "#6a0dad",
  color: "#fff",
  padding: 10,
  borderRadius: 8,
  border: "none",
  fontWeight: "bold",
  cursor: "pointer"
};
