from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import os

app = FastAPI()

# CORS設定：Reactからのアクセスを許可する
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # ReactのURL
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "./uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.get("/files/{folder}")
async def list_files(folder: str):
    target_dir = os.path.join(UPLOAD_DIR, folder)
    files_data = []
    for filename in os.listdir(target_dir):
        file_path = os.path.join(target_dir, filename)
        if os.path.isfile(file_path):
            size_kb = round(os.path.getsize(file_path) / 1024, 1)  
            files_data.append({"name": filename, "size": size_kb})
    return {"files": files_data}

@app.post("/upload")
async def upload(files: list[UploadFile] = File(...),
                 folder: str = Form(...)  ): 
    filenames = []
    save_dir = os.path.join(UPLOAD_DIR, folder)
    os.makedirs(save_dir, exist_ok=True)
    for file in files:
        file_path = os.path.join(save_dir, file.filename)
        with open(file_path, "wb") as f:
            f.write(await file.read())
        filenames.append(file.filename)
    return {"filenames": filenames}

@app.get("/download/{folder}/{filename}")
async def download_file(folder: str, filename: str):
    file_path = os.path.join(UPLOAD_DIR, folder, filename)
    if os.path.exists(file_path):
        return FileResponse(file_path, media_type="application/octet-stream", filename=filename)
    else:
        return {"error": "ファイルが存在しません"}