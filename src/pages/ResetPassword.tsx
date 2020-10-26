import React, { FormEvent, useContext, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import Logo from "../images/logo-vertical.svg";
import api from "../services/api";

import "../styles/pages/forgot-password.css";

interface ResetPasswordResponse {
  status: number;
  data: {
    message?: string;
    error?: string;
  }
}

function useQuery(): any {
  return new URLSearchParams(useLocation().search);
}

export default function ResetPassword() {
  const params = useQuery();
  const email = params.get("email");
  const token = params.get("token");

  const { signed } = useContext(AuthContext);

  const history = useHistory();


  const [newPassword, setNewPassword] = useState("");
  const [repeatingPassword, setRepeatingPassword] = useState("");

  async function handleResetPassword(event: FormEvent) {
    event.preventDefault();
    if (newPassword !== repeatingPassword) {
      alert('Senhas não são iguais');
      setNewPassword('');
      setRepeatingPassword('');
      return;
    }
    const response: ResetPasswordResponse = await api.post('reset_password', { email: email, token: token, password: newPassword });

    if (response.status === 200) {
      console.log(response.data.message);
      setTimeout(() => {
        alert('Senha redefinida com sucesso!')
      }, 1000);
      history.push('/app');
    } else {
      console.log(response.data.error);
      alert('Ocorreu um erro!');
    }

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
          <button type="button" className="back-button" onClick={history.goBack}>
            <FiArrowLeft size={24} color="#15C3D6" />
          </button>
        </div>
        <fieldset>
          <legend>Redefinir a senha</legend>
          <p className="reset-password-info">Escolha uma nova senha para você
          acessar o dashboard do Happy</p>
          <form>
            <div className="input-block">
              <label htmlFor="new-password">Nova senha</label>
              <input type="password" id="new-password" value={newPassword} onChange={event => setNewPassword(event.target.value)} />
            </div>
            <div className="input-block">
              <label htmlFor="repeating-password">Repetir senha</label>
              <input type="password" id="repeating-password" value={repeatingPassword} onChange={event => setRepeatingPassword(event.target.value)} />
            </div>
            <button className="submit" disabled={!newPassword || !repeatingPassword} onClick={handleResetPassword}>
              Entrar
            </button>
          </form>
        </fieldset>
      </div>
    </div>
  );
}