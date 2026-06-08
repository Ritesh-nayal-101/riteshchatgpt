import { useContext } from "react";
import Darkmode from "../Darkmode/Darkmode";
import "./ChatSection.css"
import { LuSendHorizontal } from "react-icons/lu";
import { dataContext } from "../../context/UserContext";
import user from "../../assets/user.png"
import ai from "../../assets/ai.png"
function ChatSection(){
    let {sent,input,setInput,showResult,resultData,recentPrompt,loading}= useContext(dataContext);
    return(
        <div className="chatsection">
        <div className="topsection">

          {!showResult? <div className="headings">
                <span>HELLO RITESH,</span>
                <span>I'm Your Own Assistant</span>
                <span>What can I help you...?</span>
            </div>:<div className="result">
                <div className="userbox">
                    <img src={user} alt="" width="60px"></img>
                    <p>{recentPrompt}</p>
                </div>
                <div className="aibox">
                    <img src={ai} alt="" width="60px"></img>
                    {loading?<div className="loader">
                     <hr />
                     <hr />
                     <hr />
                    </div>
                    :
                    <p>{resultData}</p>}
                    
                </div>
                </div>}  
           
        </div>
        <div className="bottomsection">
            <input type="text" placeholder="Enter a prompt" onChange={(e)=>{
                setInput(e.target.value)
            }} value={input}/>
            {input?<button id="sentbtn" onClick={()=>{
                sent(input)
            }}><LuSendHorizontal /></button>:null}
            
            <Darkmode/>
        </div>
        </div>
    )
}
export default ChatSection;