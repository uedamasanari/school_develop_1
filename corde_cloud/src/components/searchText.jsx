
 const searchText=({setText,text})=> {
    return (
    <div>
        <input 
            type="text"  
            name="shiritori-input"
            value={text}
            onChange={(e)=>setText(e.target.value)}
        />
    </div>
    )
}
export default searchText