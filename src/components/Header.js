import React from "react";

/**
 *アプリのヘッダーをレンダリングし、
 *タイトルの小道具を受け入れるシンプルなコンポーネント
*/

const Header = (props) => {
  return (
    <header className="App-header">
      <h2>{props.text}</h2>
    </header>
  );
};

export default Header;
