import { useNavigate, useParams } from "react-router-dom"

const Profil=({movies})=>{
    const {id} =useParams()
    const found = movies.find(el=> el.id ==id)
    const navigate=useNavigate()

    return(
        <div className="uu">
           
           <h1>{found.title}</h1>
           <h2>Description :</h2>
           <h4>{found.description}</h4>
           <iframe width="560" height="315" src={found.annonce} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           <button onClick={()=>navigate('/listmovie')}>Retour</button>
          
        </div>
    )
}
export default Profil