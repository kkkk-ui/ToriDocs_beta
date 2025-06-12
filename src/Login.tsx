import "./Login.css" ;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () =>{
    const [email, setEmail] = useState<string>("");
    const [password, setPossword] = useState<string>("")
    const navigate = useNavigate(); // 画面遷移


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
        const res = await fetch("http://localhost:8000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        const successMessage = "アップロード成功";
        console.log(successMessage);
        console.log(data)
        if (data.status === "ok"){
            navigate("/");
        }
        } catch (error) {
            const successMessage = "アップロード失敗";
            console.error(successMessage, error);
        }
    };
    return(
        <>
            <div className="login-layout">
                <div className="login-field">
                    <div className="login-message">
                        <div>
                            ログイン
                        </div>
                    </div>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="メールアドレス" required></input>
                        <input type="password" value={password} onChange={e => setPossword(e.target.value)} placeholder="パスワード" required></input>
                        <button type="submit">ログイン</button>
                    </form>
                </div>
                
            </div>
        </>
    );
}