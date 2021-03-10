import React,{innerRef} from 'react';
import {
    InputGroup,
    Dropdown,
    Input,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
   } from 'reactstrap';

function SearchBox ({searchCallback}){
    var inputEl ='';

    const searchList = () =>{
        searchCallback(inputEl.value)
    }

    return (
        <div className = "searchBox">
            <InputGroup>
        <Input  type= "text" innerRef={element => inputEl = element}/>
        <Button id = "searchBtn" data-testid="searchBtn" onClick = {searchList}>Search</Button>

      </InputGroup>
        </div>
    )
}

export default SearchBox;
