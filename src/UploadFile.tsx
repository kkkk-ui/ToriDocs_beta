import "./UploadFile.css"
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "./components/Header";

const extensionMap: Record<string, string[]> = {
  Excel: [".xlsx", "xls"],
  PDF: [".pdf"],
  Word: [".doc", ".docx"]
};

export const UploadFile = () => {
  const { type } = useParams();
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const allowedExtensions = extensionMap[type ?? ""] || [];

  const title: string = type + "ファイルをここにドラッグ";
  const navigate = useNavigate(); // ← これを使って画面遷移できる！
    
  files.forEach((file) => {
    console.log(file.name);
    // sample_image_1.jpg
    console.log(file.size);
    // 2769524
  });

  const isValidExtension = (filename: string): boolean => {
    const ext = filename.slice(filename.lastIndexOf(".")).toLowerCase();
    return allowedExtensions.includes(ext);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    const valid = droppedFiles.filter(file => isValidExtension(file.name));

    if (valid.length < droppedFiles.length) {
      alert("許可されていないファイルが含まれています。");
    }

    setFiles(valid);
    setIsDragging(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    if (!files || files.length === 0) {
      alert("ファイルを選んでください！");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]); 
    }
    formData.append("folder", type ?? "other");

    try {
      const res = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      const successMessage = "アップロード成功";
      console.log(successMessage, data);
      navigate("/test",{ state: { message: successMessage } });
    } catch (error) {
      const successMessage = "アップロード失敗";
      console.error(successMessage, error);
    }
  };

  return (
    <>
      <Header/>
      <div className="upload-field">
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
              <div onDragOver={handleDragOver} onDrop={handleDrop} className={`drop-zone ${isDragging ? "drag-over" : ""}`} >
                {files.length === 0 && (
                  <p className="drop-message">ここにファイルをドラッグ＆ドロップしてください</p>
                )}
                {files.length > 0 && (
                  <ul className="file-list">
                    {files.map((file, index) => (
                      <li key={index} className="file-item">
                        <span className="file-name">{file.name}</span>
                        <span className="file-size">({(file.size / 1024).toFixed(1)} KB)</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button type="submit">アップロード</button>     
            </form>
      
            
      </div>
    </>
    
  );
}

