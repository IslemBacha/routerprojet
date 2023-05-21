
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CardMovie=({el,movies,setMovies})=>{
    const [showMore, setShowMore] = useState(false);
    const handelDelete=(a)=>{
      setMovies(movies.filter(el=> el.id != a))

    }
    return(
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {el.posterURL} style={{width:"286px",height:"406px"}} />
      <Card.Body>
        
        <Card.Title> <Link to={`/profil/ ${el.id}`}>{el.title} </Link></Card.Title>
        <Card.Text>
        
          {

         showMore ? el.description:`${el.description.substring(0, 80)}`
            }
          <button className={showMore?"pacha Sred":"pacha Sgreen"} onClick={()=>setShowMore(!showMore)} >{showMore?"ShowLess":"ShowMore"}</button>
         
          
            </Card.Text>
            <Rating name="read-only" value={el.rating} readOnly />
            <Button className='aa' onClick={()=>handelDelete(el.id)} variant='danger'>Delete</Button>
          
              
            
      </Card.Body>
    </Card>
        </div>
    )
}
export default CardMovie