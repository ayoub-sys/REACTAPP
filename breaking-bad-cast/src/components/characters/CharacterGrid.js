import React from 'react'
import CharacterItem from './CharacterItem'
import Spinners from '../ui/Spinners'

const CharacterGrid = ({items,isLoading}) => {

    return isLoading ? (<Spinners/>):
    
    (
    
    
    <section className="cards">
        {items.map(item =>(
            <CharacterItem key ={item.char_id} item={item}></CharacterItem>
        ))}
   

    </section>
    )}

export default CharacterGrid;
