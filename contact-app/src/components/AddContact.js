import React  from "react";
class AddContact extends React.Component{
    state ={
          name : "",
          email: "",
    };
    add =(e)=>{
     e.preventDefault();
     if (this.state.email==="" && this.state.name ===""){
         alert("All the fields  are mandatory!");
         return;
    
         
     };
     this.props.addContactHandler(this.state);
     console.log(this.state);
    };


render(){
    return (
     <div className="ui main">
      <h1>Add Contact</h1>
      <form className="ui form">
         <div className="field" onSubmit={this.add}>
             <label>Name</label>
             <input type="text" name="name" placeholder="Name" 
             value= {this.state.name}
             onChange={(e) => this.setState({name : e.target.value})}
             
             />
         </div>
         <div className="field">
             <label>Email</label>
             <input type="text" email="email" placeholder="Email" 
             value= {this.state.email}
             onChange={(e) => this.setState({email : e.target.value})}
             
             />
         </div>
         <button className="ui button blue"> Add </button>
      </form>
     </div>

    );
};

}
export default AddContact;