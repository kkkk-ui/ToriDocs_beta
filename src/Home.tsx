import "./Home.css"
import { Header } from "./components/Header";
import { Link } from "react-router-dom";
import ExcelIcon from "./assets/kkrn_icon_excel_5.svg";
import WordIcon from "./assets/kkrn_icon_word_5.svg";
import PdfIcon from "./assets/kkrn_icon_pdf_5.svg";


export const Home = () =>{
    return(
        <>
            <Header/>
            <div className="container">
                <div className="home-layout">
                    <div className="home-message">
                        ドキュメントを運ぶ、小さな羽ばたき。<br />
                        ToriDocsでやさしくつながる。
                    </div>

                    <div className="upload-buttons">
<<<<<<< HEAD
                        <Link to="/upload_file/word" state={{ folder: "word" }}>
=======
                        <Link to="/upload_file/Word" state={{ folder: "word" }}>
>>>>>>> 62a6059 (update)
                        <button className="icon-button">
                            <img src={WordIcon} alt="画像アイコン" width={200} height={200} />
                            <span>Wordファイル</span>
                        </button>
                        </Link>

<<<<<<< HEAD
                        <Link to="/upload_file/excel" state={{ folder: "excel" }}>
=======
                        <Link to="/upload_file/Excel" state={{ folder: "excel" }}>
>>>>>>> 62a6059 (update)
                        <button className="icon-button">
                            <img src={ExcelIcon} alt="画像アイコン" width={200} height={200} />
                            <span>Excelファイル</span>
                        </button>
                        </Link>

<<<<<<< HEAD
                        <Link to="/upload_file/pdf" state={{ folder: "pdf" }}>
=======
                        <Link to="/upload_file/PDF" state={{ folder: "pdf" }}>
>>>>>>> 62a6059 (update)
                        <button className="icon-button">
                            <img src={PdfIcon} alt="画像アイコン" width={200} height={200} />
                            <span>PDFファイル</span>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </>

    );
}