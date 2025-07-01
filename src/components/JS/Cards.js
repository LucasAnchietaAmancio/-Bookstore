import '../CSS/Cards.css';
import { useState, useEffect, useRef } from 'react';

function Cards() {
  const apiKey = 'AIzaSyA0kX4-L4P8D88U9-xxqW6j_NCjPLfno6E';
  const query = 'programming';
  const [dados, setDados] = useState([]);
  const sliderRef = useRef(null);
  const cardWidth = 240; 

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        const processados = [];
        if (data.items) {
          for (let i = 0; i < data.items.length; i++) {
            const livro = data.items[i];
            const imagem = livro.volumeInfo.imageLinks?.thumbnail;

            if (imagem) {
              const precoAleatorio = (Math.random() * 100 + 10).toFixed(2);

              processados.push({
                id: livro.id,
                titulo: livro.volumeInfo.title,
                autores: livro.volumeInfo.authors,
                imagem: imagem,
                descricao: livro.volumeInfo.description,
                infoLink: livro.volumeInfo.infoLink,
                preco: `R$ ${precoAleatorio}`,
              });
            }
          }
        }
        setDados(processados);
      })
      .catch(err => {
        console.error('Erro ao buscar livros:', err);
      });
  }, []);

  const slideLeft = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollLeft -= cardWidth;
  };

  const slideRight = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollLeft += cardWidth;
  };

  return (
    <div className={`slider-container ${dados.length > 0 ? 'show-buttons' : ''}`}>
        <h1>NOVIDADES</h1>
    <div className="slider-wrapper">
    <button className="nav-button left" onClick={slideLeft}></button>

      <div className="slider" ref={sliderRef}>
        {dados.map((livro) => (
          <div key={livro.id} className="card">
            <a href={livro.infoLink} target="_blank" rel="noopener noreferrer">
              <img src={livro.imagem} alt={livro.titulo} />
              <h4>{livro.titulo}</h4>
              <p>{livro.autores?.join(', ')}</p>
            </a>
            <p className="preco">{livro.preco}</p>
            <button className="botao-comprar">Comprar</button>
          </div>
        ))}
      </div>

      <button className="nav-button right" onClick={slideRight}></button>
    </div>
    </div>
    
  );
}

export default Cards;
