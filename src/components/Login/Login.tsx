import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "@/components/ui/InputField";
import * as yup from "yup";
import Checkbox from "@/components/ui/Checkbox";
import { GoogleLogin } from "@react-oauth/google";
import { useLogin } from "@/hooks/useLogin";

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
	const savedLogin = localStorage.getItem("loginData");
	const defaultValues = savedLogin ? JSON.parse(savedLogin) : { username: "", password: "", rememberMe: false };
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>({ resolver: yupResolver(loginSchema), defaultValues });

	const { isLoading, errorMessage, handleLogin } = useLogin();

	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md m-3">
				<header className="text-center mb-6">
					<h1 className="text-4xl font-bold text-gray-800 uppercase">Bem vindo</h1>
					<h2 className="text-lg text-gray-600 mt-2">Que vença o grande campeão</h2>
				</header>
				<form onSubmit={handleSubmit(handleLogin)}>
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
					{errorMessage && <p className="text-red-500 text-sm mt-6 text-center">{errorMessage}</p>}
					<button
						type="submit"
						className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors disabled:opacity-50"
						disabled={isLoading}
					>
						{isLoading ? "Entrando..." : "Entrar"}
					</button>
					<div className="flex justify-center mt-6">
						<GoogleLogin
							onSuccess={() => handleLogin({ username: "google", password: "", rememberMe: false })}
							onError={() => console.error("Erro ao autenticar com o Google")}
						/>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
