import React, { useState } from 'react';

function MyForm() {
  const [nombreLista, setNombreLista] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [nombreListaError, setNombreListaError] = useState(false);
  const [cantidadError, setCantidadError] = useState(false);
  const [categoriaError, setCategoriaError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombreLista.trim() === '') {
      setNombreListaError(true);
    } else {
      setNombreListaError(false);
    }

    if (cantidad.trim() === '') {
      setCantidadError(true);
    } else {
      setCantidadError(false);
    }

    if (categoria.trim() === '') {
      setCategoriaError(true);
    } else {
      setCategoriaError(false);
    }

    if (nombreLista.trim() !== '' && cantidad.trim() !== '' && categoria.trim() !== '') {
      console.log('Formulario válido. Enviar datos...');
      // Aquí puedes realizar la lógica adicional para enviar los datos del formulario
    }
  };

  return (
    <form className="max-w mt-32 ml-6 mr-6 shadow-xl p-12" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="block text-gray-500 font-bold mb-1" htmlFor="nombre-lista">
          Nombre de la lista
        </label>
        <input
          className={`bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ${
            nombreListaError ? 'border-red-500' : 'border-gray-200'
          }`}
          id="nombre-lista"
          type="text"
          value={nombreLista}
          onChange={(e) => setNombreLista(e.target.value)}
        />
        {nombreListaError && (
          <p className="text-red-500 text-xs italic">Por favor, ingrese el nombre de la lista.</p>
        )}
        </div>
        <div className="mb-6">
        <label className="block text-gray-500 font-bold mb-1" htmlFor="cantidad">
          Cantidad
        </label>
        <input
          className={`bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ${
            cantidadError ? 'border-red-500' : 'border-gray-200'
          }`}
          id="cantidad"
          type="text"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
        {cantidadError && (
          <p className="text-red-500 text-xs italic">Por favor, ingrese la cantidad.</p>
        )}
        </div>
        <div className="mb-6">
        <label className="block text-gray-500 font-bold mb-1" htmlFor="categoria">
          Categoría
        </label>
        <input
          className={`bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white ${
            categoriaError ? 'border-red-500' : 'border-gray-200'
          }`}
          id="categoria"
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        {categoriaError && (
          <p className="text-red-500 text-xs italic">Por favor, ingrese la categoría.</p>
        )}
        </div>

        <div className="mb-6">
            <label className="block text-gray-500 font-bold mb-1" htmlFor="notas">
        Notas
        </label>
        <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="notas"
        type="text"
        />
        </div>




        <div className="mb-6 flex items-center">
        <input className="mr-2 leading-tight" type="checkbox" id="marcar-importante" />
        <label className="text-sm" htmlFor="marcar-importante">
          Marcar como importante
        </label>
        </div>
        <div className="flex items-center">
        <button
          className="shadow bg-green-600 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit">
          Ingresar
        </button>
      </div>
    </form>
  );
}

export default MyForm;



