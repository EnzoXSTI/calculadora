export default function input ({
    titulo,
    placeholder,
    valor,
    acao
}){
    return (
        <div>
            <p>{titulo}</p>
            <input placeholder={placeholder}
                    value={valor}
                    onChange={acao} />

        </div>
    )
}