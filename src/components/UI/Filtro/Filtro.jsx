import React from 'react'

export const Filtro = ({inputText,setInputText}) => {    
    
    const funtionInput = (event) =>{
        setInputText(event.target.value)
        console.log(event.target.value);
    }    
    
    return (
        <div>
            <div class="inputCharacter">
                <input id = "inputCharacter" type="text"  value={inputText}
                    onChange={funtionInput}  placeholder="What Character do your want to show ?" />
                <hr/>
            </div>
        </div>
    )
}
