
let store = {
  _state  : {
    dialogsData: [
        {username:'Marina Vardenberg',dialog:'You are best', time:'22.15',id:'1' },
        {username:'Matveev Sasha',dialog:'Hi my friend', time:'Yesterday' ,id:'1' },
        {username:'Griboedov Grisha',dialog:'Tommorow is working day', time:'12:45',id:'1' },
        {username:'Kuznecov Pavel',dialog:'Bye', time:'1:45' ,id:'1'},
        {username:'Bukia GeiOrgii',dialog:'Go finish react', time:'22.15',id:'1' },
        {username:'Valeria Tereshenko',dialog:'wazzup', time:'22.15' ,id:'1'},
        {username:'Valeria Tereshenko',dialog:'wazzup', time:'12.15' ,id:'1'}
        
      ]
    ,
    getState () {
      return this._state
    }
    ,
    newUserText: "it-camasutra",
    addUser (userName) {

       newUser = {
        username: userName,
        dialog:'new dialog',
        time :'new time',
        id: '3'
      }  
      state.dialogsData.push(newUser);
      rerenderEntireTree (state);
      
    },
    rerenderEntireTree () {
      console.log ('zatichka')
    },
    updateNewUser (newUserName)  {
  
  
      state.newUserText = newUserName;
      rerenderEntireTree (state);
    },
    provodnik (observer) {
      rerenderEntireTree=observer
    
}


 
  }
}


  export default store;