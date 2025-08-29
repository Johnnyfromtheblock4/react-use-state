import React from "react";

const Card = ({language}) => {
  return (
    <div className="card p-3">
      {language === null ? (
        <h2>Nessun linguaggio è selezionato</h2>
      ) : (
        <>
          <h2>{language.title}</h2>
          <p>{language.description}</p>
        </>
      )}
    </div>
  );
};

export default Card;
