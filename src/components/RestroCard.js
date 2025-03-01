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

export default RestroCard