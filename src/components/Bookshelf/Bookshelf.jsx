import { useState } from 'react';
function Bookshelf(){

const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);

const [newBook,setNewBook]=useState({
    title:'',
    author:''
})

function handleInputChange(event){

setNewBook({...newBook, [event.target.name]:event.target.value})


}

function handleSubmit(event){
event.preventDefault()

setNewBook({
    title:'',
    author:''
})
setBooks([...books,newBook])
}

return(

<>


<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>

    <label htmlFor="title">title</label>
    <input id='title' name='title' onChange={handleInputChange} type="text" value={newBook.title} />

     <label htmlFor="author">author</label>
    <input id='author' name='author' onChange={handleInputChange} type="text" value={newBook.author} />

    <button>Create Book</button>



    </form>
  </div>
  <div className="bookCardsDiv">{books.map((oneBook)=>
<div key={oneBook.author} className='bookCard'>
   <p> {oneBook.title} - {oneBook.author}</p>
</div>
)}
</div>
</div>




</>



)



}

export default Bookshelf