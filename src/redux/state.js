
let store = {
  _state: {
    dialogsData: [
        {username:'Marina Vardenberg',dialog:'You are best', time:'22.15',id:'1' },
        {username:'Matveev Sasha',dialog:'Hi my friend', time:'Yesterday' ,id:'1' },
        {username:'Griboedov Grisha',dialog:'Tommorow is working day', time:'12:45',id:'1' },
        {username:'Kuznecov Pavel',dialog:'Bye', time:'1:45' ,id:'1'},
        {username:'Bukia GeiOrgii',dialog:'Go finish react', time:'22.15',id:'1' },
        {username:'Valeria Tereshenko',dialog:'wazzup', time:'22.15' ,id:'1'},
        {username:'Valeria Tereshenko',dialog:'wazzup', time:'12.15' ,id:'1'}
        
      ],
    
   
    

    

      newUserText: "it-camasutra",
 
  },
  getState () {
    return store._state;
  },
 
    addUser (userName) {

       let newUser = {
        username: store._state.dialogsData.userName,
        dialog:'new dialog',
        time :'new time',
        id: '3'
      }  
      store._state.dialogsData.push(newUser);
      store.rerenderEntireTree (store._state);
      
    },
    rerenderEntireTree () {
      console.log ('zatichka');
    },
    updateNewUser (newUserName)  {
  
  
      store._state.newUserText = newUserName;
      store.rerenderEntireTree (store._state);
    },

    provodnik (observer) {
      store.rerenderEntireTree=observer
    
}
}


  export default store;