import { styled } from 'styled-components'

export const CarrosselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;

  .carousel-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .carousel-track-wrapper {
    flex: 1;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  }

  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .carousel-card {
    min-width: 100%;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  .card-image {
    position: relative;
    width: 100%;
    height: 450px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .card-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 30px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
    color: white;
    transform: translateY(20px);
    transition: all 0.4s ease;

    h3 {
      font-family: var(--font-titles);
      font-size: 1.8rem;
      margin-bottom: 8px;
    }

    p {
      font-family: var(--font-texts);
      font-size: 1rem;
      opacity: 0.9;
      margin-bottom: 10px;
    }

    .ver-mais {
      display: inline-block;
      font-weight: 600;
      color: var(--cor-roxo-escuro);
      background: white;
      padding: 5px 20px;
      border-radius: 20px;
      font-size: 0.9rem;
      transition: all 0.3s ease;
      font-family: var(--font-titles);
    }
  }

  .carousel-card:hover .card-overlay {
    transform: translateY(0);

    .ver-mais {
      background: var(--cor-roxo-escuro);
      color: white;
    }
  }

  .carousel-btn {
    background: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.8rem;
    color: var(--cor-roxo-escuro);
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: var(--cor-roxo-escuro);
      color: white;
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }

  .carousel-indicators {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 30px;

    .indicator {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 2px solid var(--cor-roxo-escuro);
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;

      &.active {
        background: var(--cor-roxo-escuro);
        transform: scale(1.2);
      }

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  @media (max-width: 768px) {
    .card-image {
      height: 300px;
    }

    .card-overlay {
      padding: 20px;

      h3 {
        font-size: 1.3rem;
      }

      p {
        font-size: 0.9rem;
      }
    }

    .carousel-btn {
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    .card-image {
      height: 250px;
    }

    .card-overlay {
      padding: 15px;

      h3 {
        font-size: 1rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }
`
