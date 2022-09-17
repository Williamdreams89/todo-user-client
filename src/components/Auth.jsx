function Auth() {
  return (
    <div>
       <h2 className="text-center text-decoration-underline mb-5" >Authentication Page</h2>
        <form className="w-75 m-auto d-flex" style={{flexDirection:"column", height: "200px", margin: "5px" }}>
          <input type="text" placeholder="Username" className="form-control mb-2" />
          <input type="password" placeholder="Password" className="form-control mb-2" />
          <button className="btn btn-primary">Login</button>
          
        </form>
    </div>
  )
}

export default Auth;