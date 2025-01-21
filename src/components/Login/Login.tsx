import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "@/components/ui/InputField";
import * as yup from "yup";
import { useEffect } from "react";
import Checkbox from "@/components/ui/Checkbox";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom"; // Importando o useNavigate

interface LoginFormInputs {
	username: string;
	password: string;
	rememberMe?: boolean;
}

const loginSchema = yup.object({
	username: yup.string().required("O usuário é obrigatório"),
	password: yup.string().required("A senha é obrigatória"),
	rememberMe: yup.boolean(),
});

function Login() {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<LoginFormInputs>({ resolver: yupResolver(loginSchema) });

	const navigate = useNavigate();

	useEffect(() => {
		const savedLogin = localStorage.getItem("loginData");
		if (savedLogin) {
			const { username, rememberMe, password } = JSON.parse(savedLogin);
			setValue("username", username);
			setValue("rememberMe", rememberMe);
			setValue("password", password)
		}
	}, [setValue]);

	const onSubmit = (data: LoginFormInputs) => {
		if (data.rememberMe) {
			localStorage.setItem("loginData", JSON.stringify({ username: data.username, password: data.password, rememberMe: true }));
		} else {
			localStorage.removeItem("loginData");
		}

	};

	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md m-3">
				<header className="text-center mb-6">
					<h1 className="text-4xl font-bold text-gray-800 uppercase">Bem vindo</h1>
					<h2 className="text-lg text-gray-600 mt-2">Que vença o grande campeão</h2>
				</header>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col space-y-4">
						<InputField
							id="username"
							label="Usuário"
							type="text"
							register={register("username")}
							error={errors.username}
						/>
						<InputField
							id="password"
							label="Senha"
							type="password"
							toggleVisibility
							register={register("password")}
							error={errors.password}
						/>
						<div className="flex items-center">
							<Checkbox label="Lembrar meus dados" register={register("rememberMe")} />
						</div>
					</div>
					<button
						type="submit"
						className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors"
					>
						Entrar
					</button>
					<div className="flex justify-center mt-6">
						<GoogleLogin onSuccess={() => navigate("/home")}/>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
