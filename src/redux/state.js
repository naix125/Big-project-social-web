
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

       this.newUser = {
        username: userName,
        dialog:'new dialog',
        time :'new time',
        id: '3'
      }  
      this._state.dialogsData.push(this.newUser);
      this.rerenderEntireTree (this._state);
      
    },
    rerenderEntireTree () {
      console.log ('zatichka');
    },
    updateNewUser (newUserName)  {
  
  
      this._state.newUserText = newUserName;
      this.rerenderEntireTree (this._state);
    },
    provodnik (observer) {
      this.rerenderEntireTree=observer
    
}


 
  }
}


  export default store;