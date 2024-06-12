import React, {useState} from 'react'

function Searchbar() {

    const [search, setSearch] = useState('');
    const handleSearch = () => {
        console.log(search);
    }
    return (
        <div>
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick = {handleSearch}>Search</button>
        </div>
    );

}

export default Searchbar;
