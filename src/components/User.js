const User = (props) => {
    //console.log(props);
    const {name} = props;
    return (
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h3>Location: Prayagraj</h3>
            <h4>Contact: @sachin3059</h4>
        </div>
    )
}

export default User;