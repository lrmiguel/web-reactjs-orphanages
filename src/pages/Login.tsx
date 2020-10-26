import React, { FormEvent, useContext, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, Redirect, useHistory } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import Logo from "../images/logo-vertical.svg";

import "../styles/pages/login.css";

export default function Login() {
  const { signed, signIn } = useContext(AuthContext);

  const { goBack } = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();
    await signIn(email, password);
  }

  function handleChangeRememberMe() {
    setRememberMe(!rememberMe);
  }

  return (
    <div className="login-container">
      {signed && <Redirect to="/dashboard" />}

      <div className="login-face">
        <img src={Logo} alt="Logo" />
        <div className="location">
          <strong>Santo André</strong>
          <span>São Paulo</span>
        </div>
      </div>

      <div className="login-form">
        <div className="button-container">
          <button type="button" className="back-button" onClick={goBack}>
            <FiArrowLeft size={24} color="#15C3D6" />
          </button>
        </div>
        <fieldset>
          <legend>Fazer login</legend>
          <form>
            <div className="input-block">
              <label htmlFor="email">Email</label>
              <input id="email" value={email} onChange={event => setEmail(event.target.value)} />
            </div>
            <div className="input-block">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)} />
            </div>
            <div className="options-block">
              <div className="remember-me-container">
                <input type="checkbox" id="remember-me" checked={rememberMe} onChange={event => handleChangeRememberMe()} />
                <label htmlFor="remember-me">Lembrar-me</label>
              </div>
              <Link to="/forgot_password" className="forgot-password">
                Esqueci minha senha
              </Link>
            </div>
            <button className="submit" disabled={!email || !password} onClick={handleSignIn}>
              Entrar
            </button>
          </form>
        </fieldset>
      </div>
    </div>
  );
}