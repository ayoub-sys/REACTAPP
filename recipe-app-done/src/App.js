import React,{useEffect,useState} from 'react';
import './App.css';
import Recipes from './Recipes';
const App=()=>{
  const APP_ID= 'dd4893e6';
  const APP_KEY= '222de1fcb28f1b5a6bd57010e1a1f82d';


  const [recipes, setRecipes]= useState([]);
  const [search,setSearch]=useState('');
  const [query, setQuery] =useState("chicken");
 
  useEffect(()=>{
    getRecipes();
  },[query]);


  const getRecipes= async()=>{
    const response =await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data= await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  };
  
  const updateSearch=e=>{
    setSearch(e.target.value);
    
  }
  const getSearch= e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');

  }
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit">
            search
          </button>
      </form>  
      <div className="recipes">
      {recipes.map(recipe=>(
        <Recipes
         title={recipe.recipe.label} 
         calories={recipe.recipe.calories}
         image={recipe.recipe.image}
         ingredients={recipe.recipe.ingredients}
         
         />
      )

      )}
      </div>
    </div>
  );
}

export default App;
