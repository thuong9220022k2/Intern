import {useState} from 'react';
import database from './firebase';
  
function ChatRealTime() {
  const [name , setName] = useState();
  const [age , setAge] = useState();
      
  // Push Function
  const Push = () => {
    database.ref("Chats").set({
      userId : userId,
      lastMessageSent: messageUID
      
    }).catch(alert);
  }
  return (
    <div className="ChatRealTime" style={{marginTop : 250}}>
      <center>
      <input placeholder="Enter your name" value={userId} 
      onChange={(e) => setName(e.target.value)}/>
      <br/><br/>
      <input placeholder="Enter your age" value={lastMessageSent} 
      onChange={(e) => setAge(e.target.value)}/>
      <br/><br/> 
      <button onClick={Push}>PUSH</button>
      </center>
    </div>
  );
}
  
export default ChatRealTime;