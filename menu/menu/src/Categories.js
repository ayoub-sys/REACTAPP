import React from 'react';

const Categories = ({allCategories,filterItems}) => {
  return( <div className='btn-container'>
      {allCategories.map((category,index)=> {return <button type="buton" onClick={()=>filterItems(category)} className='filter-btn' key={index}>{category}</button>})}
      


        </div>
  )
  
};

export default Categories;