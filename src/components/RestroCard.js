const RestroCard = (prop) => {
    const{resData} = prop;

    const {name, cuisines,avgRating,order} = resData?.info;

    return (

      <div className='res-card'>
      <img src='https://img.freepik.com/free-psd/roasted-chicken-dinner-platter-delicious-feast_632498-25445.jpg'
        alt='res-logo'
        className='res-logo'
      />
        <h3>{name}</h3>
        <h4>
  {cuisines.length > 3 
    ? cuisines.slice(0, 4).join(", ") + "..." 
    : cuisines.join(", ")}
</h4>
        <h4>{avgRating}</h4>
        <h4>{resData?.info?.sla?.deliveryTime} Minutes</h4>
      </div>   
    )
} 

//Here we will use a higher order component name withPromotedLabel
//It will take RestroCard as input and will return RestroCardPromoted which is a enhance functional component   

export const withPromotedLabel = (RestroCard)=>{
 return (props)=>{
   return (
    <div>
      <label className="text-decoration:none absolute bg-black text-white m-4 p-2 rounded-lg">Promoted</label>
      <RestroCard {...props}/>
    </div>
   )
 }
}




export default RestroCard