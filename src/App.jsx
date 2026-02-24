import "./App.css";
import { useState } from "react";

export default function App() {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [imc, setImc] = useState("");

    function alterarPeso(e) {
        setPeso(e.target.value >= 0 ? e.target.value : peso);
    }

    function alterarAltura(e) {
        setAltura(e.target.value);
    }

    function calcularImc() {
        const resultado = peso / (altura * altura)
        setImc(resultado . toFixed(2))
    }

    return (
        <div className= "container">
            <p>Seu peso:</p>
            <input
                value={peso}
                onChange={alterarPeso}
                placeholder="Digite seu peso"
            />

            <p>Sua altura:</p>
            <input
                value={altura}
                onChange={alterarAltura}
                placeholder="Digite sua altura"
            />

            <button onClick={calcularImc}>Calcular</button>

            {imc > 0 && <p> seu IMC é : {imc}</p>}



            {imc >= 0 && imc < 18.5 ? <p className= "mensagem">você esta abaixo do peso</p> : <p></p>}
            {imc >= 18.5 && imc < 24.99 ? <p className= "mensagem">você esta normal </p> : <p></p>}
            {imc >= 25 && imc < 29.99 ? <p className= "mensagem">você esta acima do peso</p> : <p></p>}
            {imc >= 30 ? <p className= "mensagem">você esta obeso</p> : <p></p>}
        </div>
    );
}