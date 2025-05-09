import "./Myfile.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./components/Header"

export const Myfile = () =>{
    const { type } = useParams();
    const [files, setFiles] = useState<{ name: string; size: number }[]>([]);

    useEffect(() => {
        const fetchFiles = async () => {
        try {
            const res = await fetch(`http://localhost:8000/files/${type}`);
            const data = await res.json();
            setFiles(data.files); 
            console.log(data.files)
            files.forEach((file) => {
                console.log(file.name);
                // sample_image_1.jpg
                console.log(file.size);
                // 2769524
            });
        } catch (err) {
            console.error("ファイル一覧取得エラー", err);
        }
        };

        fetchFiles();
    }, []);

    return(
        <>
            <Header/>
            <ul className="file-list">
            {files.map((file, index) => (
                <li key={index} className="file-item">
                <a
                    href={`http://localhost:8000/download/${type}/${encodeURIComponent(file.name)}`}
                    download
                    className="file-link"
                >
                    {file.name}
                </a>
                <span className="file-size">({file.size} KB)</span>
                </li>
            ))}
            </ul>
        </>

    );
}
