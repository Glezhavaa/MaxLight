import { useState } from "react";
import * as styles from "./Search.module.css";
const lamp = "ნათურა";

function Search({placeholder, data}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase()) 
      || value.type.toLowerCase().includes(searchWord.toLowerCase());
    });
    if(searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  }
  const clearInput = () => {
    setFilteredData([]);
  }
  return (
    <div className={styles.container}>
        <div className={styles.searchInput}>
            <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
            <div className={styles.searchIcon}>
              {filteredData.length === 0 ? <ion-icon name="search-circle-outline"></ion-icon>
              : <ion-icon name="close-circle-outline" id={styles.close} onClick={clearInput}></ion-icon>}
            </div>
        </div>
        {filteredData.length != 0 && (
          <div className={styles.dataResult}>
            {filteredData.slice(0,5).map((value, key) => {
              return <div key={key.name}>{`${value.name} ${value.type} ${lamp}`}</div>
            })}
          </div>
        )
        }
    </div>
  )
}

export default Search