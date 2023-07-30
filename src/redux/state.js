import { rerenderEntireTree } from "../render";


let state  = {
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
 newUserText: "it-camasutra"
}
export let addUser =(userName) => {

  let newUser = {
    username: userName,
    dialog:'new dialog',
    time :'new time',
    id: '3'
  }  
  state.dialogsData.push(newUser);
  rerenderEntireTree (state);
}
export let updateNewUser =(newUserName) => {
  
  
  state.newUserText = newUserName;
  rerenderEntireTree (state);
}

  export default state;