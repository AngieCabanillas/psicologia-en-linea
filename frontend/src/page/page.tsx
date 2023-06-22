import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();

  const goEspecialista = () => {
    navigate("/login-user");
  };

  const goPaciente = () => {
    navigate("/login-client");
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: "green",
          borderRadius: "8px",
          padding: "10px",
          marginRight: "10px",
        }}
        onClick={goEspecialista}
      >
        ESPECIALISTA
      </button>
      <button
        style={{
          backgroundColor: "lightblue",
          borderRadius: "8px",
          padding: "10px",
          marginRight: "10px",
        }}
        onClick={goPaciente}
      >
        PACIENTE
      </button>
    </div>
  );
};

export default Page;
