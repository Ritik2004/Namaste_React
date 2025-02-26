const RestroCard = (prop) => {
    const{resData} = prop;
    const {name, cuisine,rating,order} = resData?.info;
    return (

      <div className='res-card'>
      <img src='https://img.freepik.com/free-psd/roasted-chicken-dinner-platter-delicious-feast_632498-25445.jpg'
        alt='res-logo'
        className='res-logo'
      />
        <h3>{name}</h3>
        <h4>{cuisine.map((val)=>val.name).join(',')}</h4>
        <h4>{rating.aggregate_rating}</h4>
        <h4>{resData.order.deliveryTime}</h4>
      </div>   
    )
}

export default RestroCard