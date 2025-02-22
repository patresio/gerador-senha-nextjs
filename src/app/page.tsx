"use client";
import caracteres from "@/data/caracteres";
import opcoes from "@/data/opcoesCaracteres";
import { IconClipboard } from "@tabler/icons-react";
import { ChangeEventHandler, useState } from "react";
import Checkbox from "./components/Checkbox";

export default function Home() {
  const [range, setRange] = useState(8);
  const [tiposDeCaracteres, setTiposDeCaracteres] = useState(opcoes);

  const [senha, setSenha] = useState("");

  function handleChange(indice: number) {
    const aux = [...tiposDeCaracteres];
    aux[indice].valor = !aux[indice].valor;
    setSenha("");
    setTiposDeCaracteres([...aux]);
  }

  function gerarSenha() {
    let caracteresPossiveis = "";
    tiposDeCaracteres.forEach((opcao) => {
      if (opcao.valor) {
        caracteresPossiveis += caracteres[opcao.id as keyof typeof caracteres];
      }
    });
    let senha = "";
    for (let i = 0; i < range; i++) {
      senha += caracteresPossiveis.charAt(
        Math.floor(Math.random() * caracteresPossiveis.length)
      );
    }
    console.log(senha);
    setSenha(senha);
  }

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    setSenha("");
    setRange(Number(value));
  };

  function copiarSenha() {
    navigator.clipboard.writeText(senha);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl text-gray-200 text-center font-bold">
        Gerador de Senhas
      </h1>
      <h3 className="text-gray-500 text-center text-base mb-4">
        Desenvolvido por Ricardo Pereira - 2025
      </h3>
      <div className="w-2/5 bg-slate-700 text-gray-200 rounded-md p-8">
        <div className="flex gap-3 text-3xl flex-col">
          <label className="flex justify-between">
            <span>Tamanho da Senha:</span>
            <span className="text-blue-500">{range}</span>
          </label>
          <input
            type="range"
            min={3}
            max={30}
            value={range}
            onChange={handleOnChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {tiposDeCaracteres.map((opcao, indice) => (
            <Checkbox
              key={opcao.id}
              {...opcao}
              onChange={() => handleChange(indice)}
            />
          ))}
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full"
          onClick={gerarSenha}
          {...(tiposDeCaracteres && {
            disabled: !tiposDeCaracteres.some((opcao) => opcao.valor),
          })}
        >
          Gerar Senha
        </button>
      </div>
      <div className="mt-4 bg-slate-300 border-1 border-slate-700 w-2/5 h-20 rounded-md flex items-center justify-between px-4">
        <span className="text-2xl font-bold flex justify-center items-center text-blue-500">
          {senha}
        </span>
        <IconClipboard
          className="cursor-pointer text-blue-500"
          size={32}
          stroke={1}
          onClick={copiarSenha}
        />
      </div>
    </main>
  );
}
