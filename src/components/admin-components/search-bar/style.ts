import { styled } from 'styled-components'

export const Container = styled.div`
  text-align: center;
  margin-top: 3em;

  .search-bar {
    position: relative;
    width: 70vw;
    margin: 0 auto;
  }

  .input-search {
    height: 3em;
    border-radius: 20px;
    width: 100%;
    padding: 0 5.6em 0 1.2em;
    fext-font: var(--font-family);
  }

  .search-btn {
    position: absolute;
    top: 50%;
    right: 0.6em;
    transform: translateY(-50%);
    background: transparent;
  }

  .search-btn:active {
    transform: scale(1.05);
  }

  .clear-btn {
    position: absolute;
    top: 50%;
    right: 3.2em;
    transform: translateY(-50%);
    background: transparent;
    font-size: 1.1em;
    font-weight: 700;
  }

  .card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6vw;
    margin: 5vh 5vw;
    padding-bottom: 0.9vh;
    overflow: auto;
    max-height: 80vh;
  }
`
