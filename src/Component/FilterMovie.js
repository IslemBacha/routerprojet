import Rating from '@mui/material/Rating';
const FilterMovie=({setSearch,setRate,search,rate})=>{
    const handelReset=()=>{
        setSearch("")
        setRate(0)

    }
    return(
        <div className='zz'>
            <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text"/>
            <Rating
            value={rate} onChange={(e)=> setRate(e.target.value)} name="simple-controlled"  />
            <button onClick={handelReset}>Reset</button>
     
        </div>
    )
}
export default FilterMovie