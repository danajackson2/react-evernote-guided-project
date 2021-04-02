import React, {useState} from 'react';

const Search = (props) => {

  const [menuShow, setMenuShow] = useState(false)

  const searchOption = () => {
    switch (props.searchParam){
      case 'title':
        return (<input id="search-bar" type="text" placeholder="Search Notes by Title" onChange={e => props.setFilter(e.target.value)}/>)
      case 'body' :
        return (<input id="search-bar" type="text" placeholder="Search Notes by Body" onChange={e => props.setFilter(e.target.value)}/>)
      case 'date created' :
        return (<input id="search-bar" type="text" placeholder="(MM-DD-YYYY) Date Created" onChange={e => props.setFilter(e.target.value)}/>)
      case 'date edited' :
        return (<input id="search-bar" type="text" placeholder="(MM-DD-YYYY) Date Edited" onChange={e => props.setFilter(e.target.value)}/>)
      default:
        console.log('something wrong in searchOptions switch')
    }
  }

  const handleMenuClick = () => {
    menuShow ? setMenuShow(false) : setMenuShow(true)
  }

  const handleItemClick = (param) => {
    props.setSearchParam(param.toLowerCase())
    setMenuShow(false)
  }

  return (
    <div className="filter">
      <div>
        <button className='search-by-btn' onClick={handleMenuClick}>
          Search by...
        </button>
        {menuShow && 
          <div className='dropdown'>
            <h4 className='menu-item' onClick={e => handleItemClick(e.target.textContent)}>Title</h4>
            <h4 className='menu-item' onClick={e => handleItemClick(e.target.textContent)}>Body</h4>
            <h4 className='menu-item' onClick={e => handleItemClick(e.target.textContent)}>Date Created</h4>
            <h4 className='menu-item' onClick={e => handleItemClick(e.target.textContent)}>Date Edited</h4>
          </div>
        }
      </div>
      {searchOption()}
    </div>
  )
}

export default Search;
