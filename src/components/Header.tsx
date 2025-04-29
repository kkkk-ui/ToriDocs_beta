import "./Header.css"
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return ( 
    <header className="site_header">
        <div className="site_title">
            <a href="/">ToriDocs</a>
        </div>
        <nav className="nav_menu">
            <a href="/my_file" className="menu1">マイファイル</a>
            <a href="/upload_file" className="menu2">アップロード</a>
            <a href="#takeout" className="menu3">共有</a>
            <a href="#about" className="menu4">お気に入り</a>
            <a href="#contact" className="menu5">お問い合わせ</a>
            <button className="humburger_menu" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
            {menuOpen && (
                <div className="menu_list">
                    <a href="/">ホーム</a>
                    <a href="#login">ログイン</a>
                </div>
            )} 
        </nav>
        
    </header>
  );
};
