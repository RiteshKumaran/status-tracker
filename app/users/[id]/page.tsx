import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

const User = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>user page {id}</div>;
};

export default User;
