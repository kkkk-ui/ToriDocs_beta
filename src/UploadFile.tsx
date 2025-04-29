import "./UploadFile.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./components/Header";

export const UploadFile = () => {
  const title: string = "ファイルをここにドラッグ";
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate(); // ← これを使って画面遷移できる！
    
  files.forEach((file) => {
    console.log(file.name);
    // sample_image_1.jpg
    console.log(file.size);
    // 2769524
  });

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setFiles(Array.from(e.dataTransfer.files));
    }
    setIsDragging(false);
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setFiles(Array.from(e.target.files));
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    if (!files || files.length === 0) {
      alert("ファイルを選んでください！");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]); // ← FastAPIの "files" と一致！
    }

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
      <div className="App">
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

