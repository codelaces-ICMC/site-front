import React from "react";
import "./Tabela.css";

// Tipo exportado para poder usar fora também
export type Coluna = {
  header: string;   // Nome visível no cabeçalho da tabela
  accessor: string; // Chave usada para acessar o dado em cada linha
};

type Props = {
  dados: Record<string, any>[]; // Lista de objetos com dados (ex: [{ nome: "João" }])
  colunas: Coluna[];            // Lista de colunas com header e accessor
};

const Tabela = ({ dados, colunas }: Props) => {
  return (
    <div className="tabela-container">
      <table className="inscritos-table">
        <thead>
          <tr>
            {colunas.map((coluna, index) => (
              <th key={index}>{coluna.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              {colunas.map((coluna, i) => (
                <td key={i}>{item[coluna.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Tabela;
