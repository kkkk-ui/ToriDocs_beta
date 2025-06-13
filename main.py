from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel
<<<<<<< HEAD
from jose import jwt, JWTError
=======
>>>>>>> cfdd890ee4dd45a06558d84917b03041c3cb8a0c
import os

app = FastAPI()

<<<<<<< HEAD
SECRET_KEY = "secret"
ALGORITHM = "HS256"

=======
>>>>>>> cfdd890ee4dd45a06558d84917b03041c3cb8a0c
class LoginRequest(BaseModel):
    email: str
    password: str

<<<<<<< HEAD
accountList = {"kota160815@gmail.com":"kota0815"}
=======
emailList = ["kota160815@gmail.com"]
>>>>>>> cfdd890ee4dd45a06558d84917b03041c3cb8a0c

# CORS設定：Reactからのアクセスを許可する
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # ReactのURL
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "./uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

def create_token(email: str):
    return jwt.encode({"email": email}, SECRET_KEY, algorithm=ALGORITHM)

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

@app.get("/download/{folder}/{filename}")
async def download_file(folder: str, filename: str):
    file_path = os.path.join(UPLOAD_DIR, folder, filename)
    if os.path.exists(file_path):
        return FileResponse(file_path, media_type="application/octet-stream", filename=filename)
    else:
        return {"error": "ファイルが存在しません"}

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
<<<<<<< HEAD
    
@app.post("/login")
async def login(data: LoginRequest):
    token = create_token(data.email)
    print("email : ",data.email)
    print("password : ",data.password)
    print("token : ",token)
    if((data.email in accountList) and (data.password == accountList[data.email])):
=======

@app.get("/download/{folder}/{filename}")
async def download_file(folder: str, filename: str):
    file_path = os.path.join(UPLOAD_DIR, folder, filename)
    if os.path.exists(file_path):
        return FileResponse(file_path, media_type="application/octet-stream", filename=filename)
    else:
        return {"error": "ファイルが存在しません"}
    
@app.post("/login")
async def login(data: LoginRequest):
    print("email : ",data.email)
    print("password : ",data.password)
    token = "goishgru"
    if data.email in emailList:
>>>>>>> cfdd890ee4dd45a06558d84917b03041c3cb8a0c
        return {"status": "ok", "email": data.email, "token": token}
