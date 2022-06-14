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
    
    const populateTodos = (todos) => {
        console.log(todos)
        const popOl = document.getElementById("todo-list")
        popOl.innerHTML=''
        todos.forEach (todo => {
            let newListItem = document.createElement('li')
            let text = document.createTextNode(todo.title)
            newListItem.appendChild(text)
            popOl.appendChild(newListItem)

            console.log(todo.title)
        })
    
    }

const popTodos = () => {
    console.log('here')
    populateTodos(arrayOfTodos)
}
let filtered = [];
const byUser = () => {
filterByID()
populateTodos(filtered)
}
  const filterByID = () => {
      let userID=document.getElementById('userID').value;
      filtered = arrayOfTodos.filter(Todo => Todo.userId == userID)
  }  

  const completed = () => {
    filterByID()
    const filter = filtered.filter(Todo => Todo.completed === true)
    populateTodos(filter)
  }

  const incomplete = () => {
    filterByID()
    const filter = filtered.filter(Todo => Todo.completed !== true)
    populateTodos(filter)
  }