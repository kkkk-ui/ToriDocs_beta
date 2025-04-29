import { useLocation } from "react-router-dom";
import { Header } from "./components/Header";


export const Test = () => {
    const title: string = "File Size";
    const location = useLocation();
    const success_message = location.state?.message;



    return (
        <>
            <Header/>
            <div className="Test">
                <h1>{title}</h1>
                <h2>{success_message}</h2>
                <div>
                    <h2>受け取ったファイルサイズ：</h2>
                    {/* <p>{size ? `${size} バイト` : "サイズが渡されていません"}</p> */}
                </div>
            </div>
        </>
        
    );
}