import "./Home.css"
import { Header } from "./components/Header";
import { Link } from "react-router-dom";
import ExcelIcon from "./assets/kkrn_icon_excel_5.svg";
import WordIcon from "./assets/kkrn_icon_word_5.svg";
import PdfIcon from "./assets/kkrn_icon_pdf_5.svg";
import PowerpointIcon from "./assets/kkrn_icon_powerpoint_5.svg";
import MediaIcon from "./assets/kkrn_icon_shashin_1.svg";
import ZipIcon from "./assets/kkrn_icon_zip_1.svg";


export const Home = () =>{
    return(
        <>
            <Header/>
            <div className="home-layout">
                <div className="home-message">
                    ドキュメントを運ぶ、小さな羽ばたき。<br />
                    ToriDocsでやさしくつながる。
                </div>

                <div className="upload-buttons">
                    <Link to="/upload_file/Word">
                        <button className="icon-button">
                            <img src={WordIcon} alt="画像アイコン" width={200} height={200} />
                            <span>Wordファイル</span>
                        </button>
                    </Link>

                    <Link to="/upload_file/Excel" >
                        <button className="icon-button">
                            <img src={ExcelIcon} alt="画像アイコン" width={200} height={200} />
                            <span>Excelファイル</span>
                        </button>
                    </Link>

                    <Link to="/upload_file/PDF">
                        <button className="icon-button">
                            <img src={PdfIcon} alt="画像アイコン" width={200} height={200} />
                            <span>PDFファイル</span>
                        </button>
                    </Link>

                    <Link to="/upload_file/PowerPoint">
                        <button className="icon-button">
                            <img src={PowerpointIcon} alt="画像アイコン" width={200} height={200} />
                            <span>PowerPointファイル</span>
                        </button>
                    </Link>

                    <Link to="/upload_file/Media">
                        <button className="icon-button">
                            <img src={MediaIcon} alt="画像アイコン" width={200} height={200} />
                            <span>画像・動画ファイル</span>
                        </button>
                    </Link>

                    <Link to="/upload_file/Zip">
                        <button className="icon-button">
                            <img src={ZipIcon} alt="画像アイコン" width={200} height={200} />
                            <span>圧縮ファイル</span>
                        </button>
                    </Link>
                </div>
            </div>
            
        </>

    );
}