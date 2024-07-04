"use client";

import React from "react";

interface UserProps {
  params: { id: number };
}

const User = ({ params: { id } }: UserProps) => {
  console.log("id", id);
  return <div>User {id}</div>;
};

export default User;
