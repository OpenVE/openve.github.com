import React, { useState, useEffect } from "react";

type GroupProps = {
  icon: string;
  name: string;
}

const Group = ({ icon, name }: GroupProps) => (
  <li>
    <img src={icon} height="30" width="30" />
    <span>{name}</span>
  </li>
);

export default Group;
