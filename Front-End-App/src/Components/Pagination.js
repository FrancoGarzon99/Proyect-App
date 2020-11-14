import React from "react";

const Pagination = ({ itemsPorPagina, totalItems, paginate }) => {
  const numeroDePagina = [];
  for (let i = 1; i < Math.ceil(totalItems / itemsPorPagina); i++) {
    numeroDePagina.push(i);
  }
  return (
    <div>
      {numeroDePagina.map((num) => (
        <div key={num}>
          <a href="#" onClick={() => paginate(num)}>
            {num}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
