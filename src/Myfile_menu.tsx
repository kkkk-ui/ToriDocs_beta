import "./Myfile_menu.css"
import { Header } from "./components/Header";
import { Link } from "react-router-dom";
import ExcelIcon from "./assets/kkrn_icon_excel_5.svg";
import WordIcon from "./assets/kkrn_icon_word_5.svg";
import PdfIcon from "./assets/kkrn_icon_pdf_5.svg";


export const Myfile_menu = () =>{
    return(
        <>
            <Header/>
            <div className="Myfile-menu-message">
                どのフォルダを見ますか？
            </div>

            <div className="upload-buttons">
                <Link to="/my_file/word" state={{ folder: "word" }}>
                <button className="icon-button">
                    <img src={WordIcon} alt="画像アイコン" width={40} height={40} />
                    <span>Wordファイル</span>
                </button>
                </Link>

                <Link to="/my_file/excel" state={{ folder: "excel" }}>
                <button className="icon-button">
                    <img src={ExcelIcon} alt="画像アイコン" width={40} height={40} />
                    <span>Excelファイル</span>
                </button>
                </Link>

                <Link to="/my_file/pdf" state={{ folder: "pdf" }}>
                <button className="icon-button">
                    <img src={PdfIcon} alt="画像アイコン" width={40} height={40} />
                    <span>PDFファイル</span>
                </button>
                </Link>
            </div>
        </>

    );
}