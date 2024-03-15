import React, { Component } from 'react'
import Details from './Details';
import Question from './Question';
import { v4 as uuidv4 } from 'uuid';
//import * as firebase from "firebase/app";
//import { getAuth, GoogleAuthProvider } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyAqfeYm6yQ99LfeaxHgFtoV-t865ki97dE",
//   authDomain: "survey-project-5593b.firebaseapp.com",
//   projectId: "survey-project-5593b",
//   storageBucket: "survey-project-5593b.appspot.com",
//   messagingSenderId: "362692469949",
//   appId: "1:362692469949:web:187117acf9bf891ffbc3d4"
// };
//const app = firebase.initializeApp(firebaseConfig);
//const db = firebase.database();
// //if(firebase.app.length < 0){
// firebase.initializeApp(firebaseConfig);
// //}
class Container extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id:uuidv4(),
         name:null,
         email:null,
         isSubmitted:false,
        
          q1:null,
          q2:null,
          q3:null,
          other:null
         
      }
    }
submitHandler=(event)=>{
       
        const name=event.target.name.value;
        const email=event.target.email.value;
        this.setState({name,email},()=>{
          console.log(this.state);
        });
        event.preventDefault();
    };
// questionSubmitHandler=(event)=>{
 
 
 
//   const q1=event.target.q1.value; 
//   const q2=event.target.q2.value;
//   const q3=event.target.q3.value;
//   const other=event.target.other.value;
//   console.log(q1,q2,q3,other)
//   this.setState({q1,q2,q3,other},()=>{
//     console.log(this.state);
//   });
//   event.preventDefault();
 
// };
onValueChange=(event)=>{
  
    const q1=event.target.value; 
    
    this.setState({q1},()=>{
     // console.log(this.state.q1);
    });

}
onValueChange2=(event)=>{
  
  
  const q2=event.target.value;
  
  this.setState({q2},()=>{
    //console.log(this.state.q2);
  });

}
onValueChange3=(event)=>{
  
  
  const review=event.target.value;
  this.setState({q3:review},()=>{
    console.log(this.state.q3);
  });

}
textChangeOther=(event)=>{
  
  
  const text=event.target.value;
  this.setState({other:text},()=>{
   console.log(this.state.other);
  });

}
QSubmitHandler=(event)=>{
  event.preventDefault();
  console.log(this.state);
  const col=document.getElementById("abc")
  const col2=document.getElementById("abc2")
  const col3=document.getElementById("abc3")
  // col.style.color = "white";
  col.style.backgroundColor="white"
  col.innerHTML="";
  col2.innerHTML="Thanks for participating";
  col2.style.backgroundColor="white";
  col3.style.backgroundColor="white";
  // alert("thanks");

}
  render() {
    return (
    
        <>
        <div class="container-fluid" id="abc2">
            <div class="container card mt-2">
                <h1 class="text-center text-primary">Survey</h1>
            </div>
        </div>
        {this.state.name === null && this.state.email ===null ?  (<Details submit={this.submitHandler}/>) : (<Question onValueChange={this.onValueChange}
        onValueChange2={this.onValueChange2} onValueChange3={this.onValueChange3} textChangeOther={this.textChangeOther} sub={this.QSubmitHandler}/>)}
       
       {/* {this.state.q1 !== null && this.state.q2!=null && this.state.r!= null && this.state.name !=null && this.state.email !=null ?  (<thanks/>) :(<Details submit={this.submitHandler}/> }
      */}
        </>
    
    )
  }
}
// (<Question onValueChange={this.onValueChange}
//       onValueChange2={this.onValueChange2} onValueChange3={this.onValueChange3} textChangeOther={this.textChangeOther} sub={this.QSubmitHandler}/>)
export default Container;
