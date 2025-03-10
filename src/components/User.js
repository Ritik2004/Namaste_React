const User = (prop) => {
    return (
        <div className="user-card">
            <h2>Name : {prop.name}</h2>
            <h2>Location: Aligarh</h2>
            <h2>Contact: 123@gmail.com</h2>
        </div>
    )
}

export default User