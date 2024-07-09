const todosKey = "defaultTodoKey";

//set initial state(data) from local storage
export const getLocatStorageData=()=>{
    let defaultData = localStorage.getItem(todosKey);
    if(!defaultData) return [];
    
    return JSON.parse(defaultData);//convert string into Array
};

//set data(state) in the local storage
export const setLocatStorageData=(tasks)=>{
    let data = JSON.stringify(tasks)
    return localStorage.setItem(todosKey,data)
};
