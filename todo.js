    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

    console.log(arrayOfTodos[0].userId)
    console.log(arrayOfTodos[1].userId)
 
    

    

    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        arrayOfTodos.forEach (todo => {
            let newListItem = document.createElement('li')
            let text = document.createTextNode(arrayOfTodos[0].title)
            newListItem.appendChild(document.createTextNode(arrayOfTodos[0].title))
            toDoList.appendChild(newListItem)

            console.log(arrayofTodos[0].title)
        })
    
    }