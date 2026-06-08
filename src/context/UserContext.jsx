import { createContext, useState } from "react";
import runChat from "../gemini";
export const dataContext = createContext(); 
    function UserContext({children}){
    const [input,setInput]= useState("");
    const [showResult,setShowResult] = useState()
    const [loading,setLoading] = useState(false)
    const [resultData,setResultData] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompt,setPrevPrompt] = useState([])

    function newChat(){
        setShowResult(false)
        setLoading(false)
    }
    async function sent(input){
        setResultData("") //when click sent button response should be empty first 
        setShowResult(true)
        setRecentPrompt(input)
        setLoading(true)
        setPrevPrompt((prev=>[...prev,input]))

        const response = await runChat(input);
       // console.log(response);
       setResultData(response.replaceAll("###","").replaceAll("**","").replaceAll("*",""))
       setLoading(false)
        setInput("")
    
     }
      const data ={
       input,
       setInput,
       sent,
       loading,
       setLoading,
       showResult,
       setResultData,
       resultData,
       setResultData,
       recentPrompt,
       setRecentPrompt,
       prevPrompt,
       setPrevPrompt,
       newChat
      }
    return(
        <>
        <dataContext.Provider value={data}>
        {children}
        </dataContext.Provider>
        </>
    )
}
export default UserContext;