import { useSignal } from "@preact/signals"; // Estado reativo
import { useEffect } from "preact/hooks"; // Efeito colateral

const timeFmt = new Intl.RelativeTimeFormat("en-US"); // Formato amigável para tempo restante

export default function Countdown(props: { target: string }) {
  const target = new Date(props.target); // Converte string para Date
  const now = useSignal(new Date()); // Estado para a data atual

  useEffect(() => {
    const timer = setInterval(() => {
      if (now.value > target) clearInterval(timer); // Para o contador se a data já passou
      now.value = new Date(); // Atualiza a data atual
    }, 1000);

    return () => clearInterval(timer); // Limpa o intervalo ao desmontar o componente
  }, [props.target]);

  const secondsLeft = Math.floor((target.getTime() - now.value.getTime()) / 1000);

  return secondsLeft <= 0 ? (
    <span>🎉</span>
  ) : (
    <span>{timeFmt.format(secondsLeft, "seconds")}</span>
  );
}
