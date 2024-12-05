import Countdown from "../islands/Countdown.tsx"; // Importa o componente da ilha

export default function Page() {
  const date = new Date();
  date.setHours(date.getHours() + 2); // Define o evento para 1 hora no futuro

  return (
    <p>
      The big event is happening <Countdown target={date.toISOString()} />.
    </p>
  );
}
