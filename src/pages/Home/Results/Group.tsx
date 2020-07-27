import React, { useState, useEffect } from "react";

type GroupProps = {
  icon: string;
  name: string;
}

const Group = ({ icon, name }: GroupProps) => (
  <li className="rounded overflow-hidden shadow-lg p-4 grid grid-rows-2 grid-flow-col gap-4">
    <div className="row-span-2 col-span-1">
      <img src={icon} height="30" width="30" />
    </div>
    <div className="row-span-1 col-span-2">
      <span>{name}</span>
    </div>
    <div className="row-span-1 col-span-2">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Visitar
      </button>
    </div>
  </li>
);

export default Group;
