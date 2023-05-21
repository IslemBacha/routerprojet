import CardMovie from "./CardMovie"

const ListMovie=({movies,search,rate, setMovies})=>{
  const x =  movies.filter(el=> el.title.toUpperCase().includes(search .toUpperCase())
  && el.rating>=rate). map(el=> <CardMovie key={el.id} el={el} movies={movies} setMovies={setMovies}/>)
    return(
      
        <div className="islem">
          {
          x.length> 0 ? x :<h1>Not Found </h1>
          }
        </div>
    )
}
export default ListMovie