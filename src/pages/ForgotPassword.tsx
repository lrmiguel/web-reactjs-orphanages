import React, { FormEvent, useContext, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Redirect, useHistory } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import Logo from "../images/logo-vertical.svg";
import api from "../services/api";

import "../styles/pages/forgot-password.css";

interface ForgotPasswordResponse {
  status: number;
  data: {
    message?: string;
    error?: string;
  }
}

export default function ForgotPassword() {
  const { signed } = useContext(AuthContext);

  const { goBack } = useHistory();

  const [email, setEmail] = useState("");

  async function handleForgotPassword(event: FormEvent) {
    event.preventDefault();
    const response: ForgotPasswordResponse = await api.post('forgot_password', { email: email });
    console.log(response.data.message);
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

      <div className="forgot-form">
        <div className="button-container">
          <button type="button" className="back-button" onClick={goBack}>
            <FiArrowLeft size={24} color="#15C3D6" />
          </button>
        </div>
        <fieldset>
          <legend>Esqueci a senha</legend>
          <p className="reset-password-info">Sua redefinição de senha será enviada
para o e-mail cadastrado.</p>
          <form>
            <div className="input-block">
              <label htmlFor="email">Email</label>
              <input id="email" value={email} onChange={event => setEmail(event.target.value)} />
            </div>
            <button className="submit" disabled={!email} onClick={handleForgotPassword}>
              Entrar
            </button>
          </form>
        </fieldset>
      </div>
    </div>
  );
}