import "./Header.css"
import { useState, useEffect } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentEmail, setCurrentEmail] =useState("");

  useEffect(() => {
    const userJson = localStorage.getItem("currentUser");
    if (userJson) {
      try {
        const user = JSON.parse(userJson);
        setCurrentEmail(user.email); 
      } catch (e) {
        console.error("currentUserのパースに失敗:", e);
      }
    }
  }, []);

  const logout = () => {
    const confirmLogout = window.confirm("本当にログアウトしますか？");
    if (confirmLogout) {
        localStorage.removeItem("currentUser"); 
        window.location.href = "/"; 
    }
  };


  return ( 
    <header className="site_header">
        <div className="site_title">
            <a href="/">ToriDocs</a>
        </div>
        <nav className="nav_menu">
            <a href="/my_file_menu" className="menu1">マイファイル</a>
            <a href="/" className="menu2">アップロード</a>
            <a href="#takeout" className="menu3">共有</a>
            <a href="#about" className="menu4">お気に入り</a>
            <a href="#contact" className="menu5">お問い合わせ</a>
            <button className="humburger_menu" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
            {menuOpen && (
                <div className="menu_list">
                    <a href="/">ホーム</a>
                    {currentEmail ? (
                    <>
                        <a href="/login">{currentEmail}</a>
                        <button onClick={logout}>ログアウト</button>
                    </>
                    ) : (
                    <a href="/login">ログイン</a>
                    )}
                </div>
            )} 
        </nav>
        
    </header>
  );
};
