import React, {useState} from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email: "anupamahasurkar@gmail.com",
    password: "admin123"
  }
  
  const [user, setUser]=useState({name: "", email: ""});
  const[error, setError]=useState("");

  const Login = details => {
    console.log(details);

    if (details.email==adminUser.email && details.password==adminUser.password){
      console.log("Logged In");
      setUser({
        name: details.name,
        email:details.email
      });
      
    
    } else{

      console.log("Details do not match");
      setError("Details do not match");

    }
  }

  
  const [num1,setNum1] = useState(10);
  const [num2,setNum2] = useState(10);
  const [num3,setNum3] = useState(10);
  
  const decNum1 = ()=> {
    if (num1 !== 0){
      setNum1(num1-1);
    }
  };

  const decNum2 = ()=> {
    if (num2 !== 0){
      setNum2(num2-1);
    } 
  };

  const decNum3 = ()=> {
    if (num3 !== 0){
      setNum3(num3-1);
    }
  };

  const addNum1 = ()=> {
    if (num1 !== 10){
      setNum1(num1+1);
    }
  };

  const addNum2 = ()=> {
    if (num2 !== 10){
      setNum2(num2+1);
    }
  };

  const addNum3 = ()=> {
    if (num3 !== 10){
      setNum3(num3+1);
    }
  };
  
  const Logout= ()=> {
    setUser({name: "", email: ""});  
  }
  return (
    <div className="App">
      {(user.email!="")? (
        <div className="Welcome">
          <h2 className= "text-center text-danger text-capitalize">{" "} Welcome, <span>{user.name} {" "} in this game!</span></h2>
          
          <div className="container">
            <div className="row">

              <div className="col-sm">
                <div class="card">
                  <img src="https://media.istockphoto.com/vectors/grapes-icon-vector-fruit-illustration-nature-wine-vector-id1146278313?b=1&k=6&m=1146278313&s=612x612&w=0&h=8AOpOkS70uJ7MnaGKcXU9yCmWFVGWPo-N98OyJdcQuM=" class="card-img-top" alt="..." height="200px"/>
                  <div class="card-body">
                    <h5 class="card-title">GRAPES: {num1}</h5>
                    <p class="card-text">Click here to add Grapes</p>
                    <div className="row">
                    <div className="col-sm">
                      <div class="btn btn-outline-primary mr-3">
                        <button type="button" onClick={addNum1}>Add</button>
                      </div>
                      <div class="btn btn-outline-primary">
                        <button onClick={decNum1}>Remove</button>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div class="card" >
                  <img src="https://lh3.googleusercontent.com/proxy/QpoT9cxKwZfpiLefm26pMq6b4StdXH6qC5_OppYldAD2COfcHHR6KQ5kq9gUfv9MYqQGAhYbvXhWAH6kqRNWwJWL1bRswlOjlQQaMCPdBGGjRxhs4P9UtLeh1VOMoWVkPoI" class="card-img-top" alt="..." height="200px"/>
                  <div class="card-body">
                    <h5 class="card-title">APPLES: {num2}</h5>
                    <p class="card-text">click here to add Apples</p>
                    <div className="row">
                    <div className="col-sm">
                      <div class="btn btn-outline-primary mr-3">
                        <button onClick={addNum2}>Add</button>
                      </div>
                      <div class="btn btn-outline-primary">
                        <button onClick={decNum2}>Remove</button>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div class="card" >
                  <img src="https://img.freepik.com/free-photo/orange-crop-isolated_90839-212.jpg?size=338&ext=jpg" class="card-img-top" alt="..." height="200px"/>
                  <div class="card-body">
                    <h5 class="card-title">ORANGE: {num3}</h5>
                    <p class="card-text">Click here to add Oranges</p>
                    <div className="row">
                    <div className="col-sm">
                      <div class="btn btn-outline-primary mr-3">
                        <button onClick={addNum3}>Add</button>
                      </div>
                      <div class="btn btn-outline-primary">
                        <button onClick={decNum3}>Remove</button>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              

            </div>
          </div>
          <br/>
          <div className="btn btn-outline-primary">      
            <button onClick ={Logout}>Logout</button>
          </div>
        </div>

      ):(
        <LoginForm Login ={Login} error={error}/>
      )}
    </div>
  );
  
}

export default App;
