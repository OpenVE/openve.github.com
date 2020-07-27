import React, { CSSProperties } from "react";

type SearchProps = {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

function Search({ onChange }: SearchProps ): JSX.Element {
  const backgroundImage = `url(https://images.unsplash.com/photo-1514996937319-344454492b37?ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80)`;

  const blockStyle: CSSProperties = {
    alignItems: 'center',
    backgroundImage,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    boxSizing: 'border-box',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    height: '300px',
    justifyContent: 'center',
    marginTop: '67px',
    padding: '1rem',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  }

  return (
    <div style={blockStyle}>
      <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem' }}>Busca entre nuestras comunidades</h2>
      <div className="w-full max-w-xs">
        <form className="">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="search"
              type="search"
              placeholder="Nombre, Lenguaje de Programacion"
              onChange={onChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
