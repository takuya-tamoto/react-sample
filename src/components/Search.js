import React, { useState } from "react";

/**
 *入力要素と検索ボタンを含むフォームが含まれ、
 *入力要素を処理してフィールドをリセットする関数が含まれ、
 *小道具として渡される検索関数を呼び出す関数も含む
 *
 */
const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="検索" />
      </form>
    );
}

export default Search;
