import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginFormInputs {
	username: string;
	password: string;
	rememberMe?: boolean;
}

export const useLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

  const mockApiCall = (data: LoginFormInputs) =>
		new Promise<{ status: number; token?: string }>((resolve, reject) => {
			setTimeout(() => {
				if (data.username === "admin" && data.password === "1234") {
					resolve({ status: 200, token: "fake-jwt-token" });
				} else {
					reject({ status: 401, message: "Usuário ou senha inválidos." });
				}
			}, 2000);
	});

  const handleLogin = async (data: LoginFormInputs) => {
		setIsLoading(true);
		setErrorMessage("");

		try {
      console.log(data)
			const response = await mockApiCall(data);

			if (response.status === 200) {
				localStorage.setItem("token", response.token!);

				if (data.rememberMe) {
					localStorage.setItem(
						"loginData",
						JSON.stringify({ username: data.username, password: data.password, rememberMe: true })
					);
				} else {
					localStorage.removeItem("loginData");
				}

				navigate("/home");
			}
		} catch (error: any) {
			setErrorMessage(error.message || "Erro ao realizar login.");
			console.error("Erro ao realizar login:", error);
		} finally {
			setIsLoading(false);
		}
	};

  const getSavedLogin = () => {
		const savedLogin = localStorage.getItem("loginData");
		if (savedLogin) {
			return JSON.parse(savedLogin) as LoginFormInputs;
		}
		return null;
	};

  return {
    isLoading,
    errorMessage,
    handleLogin,
    getSavedLogin
  }
}