import React, {useState} from 'react';

const Search = (props) => {

  const [menuShow, setMenuShow] = useState(false)

  const searchOption = () => {
    switch (props.searchParam){
      case 'title':
        return (<input id="search-bar" type="text" placeholder="Title" onChange={e => props.setFilter(e.target.value)}/>)
      case 'body' :
        return (<input id="search-bar" type="text" placeholder="Body" onChange={e => props.setFilter(e.target.value)}/>)
      case 'created_at' :
        return (<input id="search-bar" type="text" placeholder="Date Created (MM-DD-YYYY)" onChange={e => props.setFilter(e.target.value)}/>)
      case 'updated_at' :
        return (<input id="search-bar" type="text" placeholder="Date Edited (MM-DD-YYYY)" onChange={e => props.setFilter(e.target.value)}/>)
      default:
        console.log('something wrong in searchOptions switch')
    }
  }

  const handleMenuClick = () => {
    menuShow ? setMenuShow(false) : setMenuShow(true)
  }

  const handleItemClick = (param) => {
    if (param === 'Title' || param === 'Body'){
      props.setSearchParam(param.toLowerCase())
    } else if (param === 'Date Created') {
      props.setSearchParam('created_at')
    } else if (param === 'Date Edited'){
      props.setSearchParam('updated_at')
    }
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
