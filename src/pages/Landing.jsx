import React from "react";
import main from "../assets/images/main.svg";
import styled from "styled-components";
import { Logo } from "../components";
import { Link, Navigate } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby beard enamel pin YOLO helvetica, normcore forage
            post-ironic unicorn bodega boys pinterest iceland hammock. Gochujang
            intelligentsia cronut pour-over slow-carb raw denim seitan 3 wolf
            moon williamsburg single-origin coffee chia adaptogen pug.
            Gluten-free green juice tote bag chia tofu trust fund.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="JobSter" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
