import styled from "@emotion/styled";

export const StyledNavigationLink = styled.li`
  margin: 1rem;

  .navigation__link:link,
  .navigation__link:visited {
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    padding: 1rem 2rem;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
    background-size: 250%;
    transition: all 0.4s;
    white-space: nowrap;
  }

  .navigation__link:hover,
  .navigation__link:active {
    background-position: 100%;
    color: #55c57a;
    transform: translateX(1.5rem);
  }
`;
