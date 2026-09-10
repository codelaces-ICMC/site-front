import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: 70vh;

  /* ===== BOTÃO VOLTAR ===== */
  .btn-voltar {
    background: var(--cor-roxo-escuro);
    color: var(--cor-branco);
    border: none;
    padding: 12px 30px;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 30px;
    transition: all 0.3s ease;
    font-family: var(--font-texts);
    display: inline-flex;
    align-items: center;
    gap: 8px;

    &:hover {
      transform: scale(1.05);
      opacity: 1.5;
      background: var(--cor-roxo-vibrante);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  /* ===== CARD PRINCIPAL ===== */
  .detalhe-card {
    background: var(--cor-branco);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
    }

    /* ===== WRAPPER DA IMAGEM ===== */
    .detalhe-imagem-wrapper {
      position: relative;
      width: 100%;
      max-height: 500px;
      overflow: hidden;
      background: #f0f0f0;

      img {
        width: 100%;
        height: 100%;
        max-height: 500px;
        object-fit: cover;
        transition: transform 0.5s ease;

        &:hover {
          transform: scale(1.02);
        }
      }

      /* ===== BADGE ===== */
      .imagem-badge {
        position: absolute;
        top: 20px;
        right: 20px;
        background: var(--cor-roxo-vibrante);
        color: var(--cor-branco);
        padding: 8px 16px;
        border-radius: 20px;
        font-family: var(--font-texts);
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
        opacity: 0.9;
      }
    }

    /* ===== CONTEÚDO ===== */
    .conteudo {
      padding: 50px;

      /* Título principal */
      h1 {
        text-align: center;
        font-family: var(--font-titles-alt);
        color: var(--cor-roxo-escuro);
        font-size: 2.8rem;
        margin-bottom: 20px;
        letter-spacing: 0px;
        position: relative;

      }

      /* ===== INFO EXTRA (DATA E LOCAL) ===== */
      .info-extra {
        display: flex;
        gap: 30px;
        margin: 30px 0 20px 0;
        padding: 20px 0;
        border-top: 2px solid #f0f0f0;
        border-bottom: 2px solid #f0f0f0;
        flex-wrap: wrap;

        .info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-texts);
          color: #555;
          font-size: 1rem;

          .info-icon {
            font-size: 1.3rem;
          }

          strong {
            color: var(--cor-roxo-escuro);
            font-weight: 600;
          }
        }
      }

      /* Títulos secundários */
      h2 {
        font-family: var(--font-titles);
        color: var(--cor-roxo-escuro);
        font-size: 1.8rem;
        margin-top: 35px;
        margin-bottom: 15px;
      }

      h3 {
        font-family: var(--font-titles);
        color: var(--cor-roxo-escuro);
        font-size: 1.4rem;
        margin-top: 30px;
        margin-bottom: 12px;
      }

      h4 {
        font-family: var(--font-titles);
        color: var(--cor-roxo-escuro);
        font-size: 1.2rem;
        margin-top: 25px;
        margin-bottom: 10px;
      }

      /* Parágrafos */
      p {
        font-family: var(--font-texts);
        font-size: 1.1rem;
        line-height: 1.8;
        color: #333;
        margin-bottom: 15px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      /* Listas com ícones */
      ul {
        font-family: var(--font-texts);
        font-size: 1.1rem;
        line-height: 2;
        padding-left: 25px;
        color: #333;
        margin: 15px 0;

        li {
          margin-bottom: 8px;
          position: relative;

          &::before {
            content: '✦';
            color: var(--cor-roxo-escuro);
            position: absolute;
            left: -20px;
          }
        }
      }

      /* ===== GALERIA DE FOTOS ===== */
      .galeria {
        margin-top: 40px;
        padding-top: 30px;
        border-top: 2px solid #f0f0f0;

        h3 {
          margin-top: 0;
        }

        .galeria-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 20px;

          .galeria-item {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;

            &:hover {
              transform: scale(1.05);
            }

            img {
              width: 100%;
              height: 150px;
              object-fit: cover;
            }
          }
        }
      }
    }
  }

  /* ===== RESPONSIVIDADE ===== */

  /* Tablets */
  @media (max-width: 768px) {
    padding: 20px 15px;

    .btn-voltar {
      padding: 10px 20px;
      font-size: 0.9rem;
      width: 100%;
      justify-content: center;
    }

    .detalhe-card {
      border-radius: 15px;

      .detalhe-imagem-wrapper {
        max-height: 300px;

        img {
          max-height: 300px;
        }

        .imagem-badge {
          top: 15px;
          right: 15px;
          padding: 5px 12px;
          font-size: 0.7rem;
        }
      }

      .conteudo {
        padding: 25px 20px;

        h1 {
          font-size: 2rem;

          &::after {
            width: 40px;
          }
        }

        .info-extra {
          flex-direction: column;
          gap: 10px;
          padding: 15px 0;
        }

        h2 {
          font-size: 1.5rem;
        }

        h3 {
          font-size: 1.2rem;
        }

        p,
        ul {
          font-size: 1rem;
        }
      }
    }
  }

  /* Celulares */
  @media (max-width: 480px) {
    padding: 15px 10px;

    .detalhe-card {
      .detalhe-imagem-wrapper {
        max-height: 220px;

        img {
          max-height: 220px;
        }
      }

      .conteudo {
        padding: 20px 15px;

        h1 {
          font-size: 1.6rem;
        }

        h2 {
          font-size: 1.3rem;
        }

        h3 {
          font-size: 1.1rem;
        }

        p,
        ul {
          font-size: 0.95rem;
        }

        ul li::before {
          left: -16px;
        }

        .galeria .galeria-grid {
          grid-template-columns: 1fr 1fr;
          gap: 10px;

          .galeria-item img {
            height: 120px;
          }
        }
      }
    }
  }
`;