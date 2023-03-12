// import { React, useState } from "react";


// const Search = () => {

//     const [q, setQ] = useState("");
//     const [searchParam] = useState(['title']);

//     function search(movies) {
//         return movies.filter((movie)=>{
//             return searchParam.some((newMovie)=>{
//                return (
//                 movie[newMovie]
//                      .toString()
//                      .toLowerCase()
//                      .indexOf(q.toLowerCase()) > -1
//                ) 
//             })
//         })
//     }

//     return (
//         <div>
//             <form>
//                 <input
//                     type="search" 
//                     name="search-form" 
//                     id="search-form" 
//                     placeholder="Search for..." 
//                     value={q}
//                     onChange={(e)=>setQ(e.target.value)}
//                     />
//             </form>
//         </div>
//     )
// }


// export default Search;