import React from "react";

interface ProductsPageProps {
  params: { slug: string[] };
}

const ProductsPage = ({ params: { slug } }: ProductsPageProps) => {
  return <div>ProductsPage {slug}</div>;
};

export default ProductsPage;
