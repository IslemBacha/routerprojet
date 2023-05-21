import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AddMovie from './AddMovie';
import FilterMovie from './FilterMovie';

 const NavMovie=({movies,setMovies,setSearch,setRate,search,rate})=>{
    return(
        <div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movie App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/listMovie">movies</Nav.Link>
     
    
      <AddMovie movies={movies} setMovies={setMovies}/>
      <FilterMovie setSearch={setSearch} setRate={setRate} search={search} rate={rate}/> 
   
          </Nav>
        </Container>
      </Navbar>
        </div>
       
    )
}
export default NavMovie