import React, {useState} from 'react'
import './SearchButton.css';

const SearchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 const services = [

//   { name: "Party Makeup", type: "Makeup" },
//   { name: " Bridal Makeup", type: "Makeup },
//   { name: "Groom Makeover", type: "Makeup" },
//   { name: "Guest Makeup", type: "Makeup" },
//   { name: "Bridesmade Makeover", type: "Makeup" },
//   { name: "Waxing", type: "Lifestyle" },
//   { name: "Threading", type: "Lifestyle" },
//   { name: "Pedicure", type: "Lifestyle" },
//   { name: "Manicure", type: "Lifestyle" },
//   { name: "D-Tan", type: "Lifestyle" },
//   { name: "Facial", type: "Lifestyle" },
//   { name: "Nail Art", type: "Lifestyle" },

];

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    services.filter((service) => {
    return service.name.match(searchInput);
});
}

return <div>

<input className='searchbar'
   type="search"
   placeholder="Search for anything"
   onChange={handleChange}
   value={searchInput} />

<table>
{services.map((service, index) => {

<div>
  <tr>
    <td>{service.name}</td>
    <td>{service.type}</td>
  </tr>
</div>

})}
</table>

</div>


};

export default SearchBar;