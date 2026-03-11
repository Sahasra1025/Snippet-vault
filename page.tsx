"use client";
import { useState } from "react";

export default function Home() {

const [title, setTitle] = useState("");
const [code, setCode] = useState("");
const [language,setLanguage]= useState("")
const [snippets, setSnippets] = useState<any[]>([]);

const addSnippet = () => {
if (!title || !code) return;

const newSnippet = { title, language, code };
setSnippets([...snippets, newSnippet]);

setTitle("");
setCode("");

};

const copyCode = (text:any) => {
navigator.clipboard.writeText(text);
alert("Code Copied!");
};

return (
<div style={{padding:"40px", fontFamily:"Arial"}}>
<h1>SnippetVault</h1>

  <h3>Add Code Snippet</h3>

  <input
    placeholder="Snippet Title"
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    style={{padding:"10px", width:"300px"}}
  />

  <br/><br/>

  <input
  placeholder="Language (Java, Python, JavaScript)"
  value={language}
  onChange={(e)=>setLanguage(e.target.value)}
  style={{padding:"10px", width:"300px"}}
/>

  <textarea
    placeholder="Paste your code"
    value={code}
    onChange={(e)=>setCode(e.target.value)}
    style={{padding:"10px", width:"400px", height:"120px"}}
  />

  <br/><br/>

  <button onClick={addSnippet} style={{padding:"10px"}}>
    Save Snippet
  </button>

  <hr style={{margin:"40px 0"}}/>

  <h2>Saved Snippets</h2>

  {snippets.map((s,index)=>(
    <div key={index} style={{border:"1px solid gray", padding:"15px", marginBottom:"15px"}}>
      <h3>{s.title}</h3>
      <p>Language:{s.language}</p>
      <pre>{s.code}</pre>

      <button onClick={()=>copyCode(s.code)}>
        Copy Code
      </button>

      <br /><br />

      <button
 onClick={()=>{
   const updated = snippets.filter((_,i)=>i!==index)
   setSnippets(updated)
 }}
>
 Delete
</button>
    </div>
  ))}
</div>

);
}