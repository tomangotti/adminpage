import React, {useState} from "react"

const GetStats = () => {
    const [usersList, setUsersList] = useState([])
    const [recipeList, setRecipeList] = useState([])

    const getUsers = () => {
        fetch('http://127.0.0.1:8000/recipes')
    }

    return [usersList, recipeList]
}


export default GetStats