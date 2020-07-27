import React from "react";

type GroupProps = {
  icon: string;
  name: string;
  concept: string;
  link: string;
}

const Group = ({ icon, name, concept }: GroupProps) => (
  <li className="rounded overflow-hidden shadow-lg box-border p-4 mb-8 grid" style={{ gridTemplateColumns: '30px auto', gap: '1rem' }}>
    <div style={{ gridColumn: '1 / 1' }}>
      <img src={icon} height="30" width="30" alt="logo" />
    </div>
    <div style={{ gridColumn: '2 / 2' }}>
      <strong className="text-left block">{name}</strong>
      <span className="text-left block">{concept}</span>
      <div className="text-right">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Visitar
        </button>
      </div>
    </div>
  </li>
);

export default Group;
