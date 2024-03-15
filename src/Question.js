import React from 'react'

function Question(props) {
  return (
    <>
<div class="container-fluid" id="abc">
<div class="col-md-5 m-auto">
<div class="mt-3">
<div class="card text-left">
<div class="card-body">
    <form onSubmit={props.sub} action="/.thanks">
    <div className="form-group">
        <label for=""> <b>3.</b> What are you currently doing ?</
        label>
        <br/>
        <div style={{marginLeft:"3px"}}>
        <input type="radio" id="teacher" name="q1" value="Teaching"
        autocomplete="off" onChange={props.onValueChange}/>
        <label htmlFor="teacher" style={{marginLeft:"3px"}}>Teaching</label>
        </div>
        <div style={{marginLeft:"3px"}}>
       
         <input type="radio" id="student" name="q1" value="Student"
        autocomplete="off" onChange={props.onValueChange}/>
        <label htmlFor="student" style={{marginLeft:"3px"}}>Student</label>
        </div>

        <div style={{marginLeft:"3px"}}>
        <input type="radio" id="programmer" name="q1" value="Programmer"
        autoComplete="off" onChange={props.onValueChange}/>
        <label htmlFor="programmer" style={{marginLeft:"3px"}}>Programmer</label>
        </div>

        <div style={{marginLeft:"3px"}}>
        <input type="radio" id="other" name="q1" value="other"
        autoComplete="off" onChange={props.onValueChange}/>


        <label htmlFor="other" style={{marginLeft:"3px"}}>Other</label>
        </div>

        <input type="text" class="form-control"
        autoComplete="off" name="other" placeholder="Type here if not listed" onChange={props.textChangeOther}/>
        <br/>
        </div>

    <div className="form-group">
        <label for=""> <b>4.</b> Please rate our course </label>
        <br/>
        <div>
        <input type="radio" id="poor" name="q2" value="Poor" autoComplete="off" onChange={props.onValueChange2}/>
        <label htmlFor="poor" style={{marginLeft:"3px"}}>Poor</label>
        </div>
        <div>
        <input type="radio" id="good" name="q2" value="Good" autoComplete="off" onChange={props.onValueChange2}/>
        <label htmlFor="good" style={{marginLeft:"3px"}}>Good</label>
        </div>
        <div>
        <input type="radio" id="excellent" name="q2" value="Excellent" autoComplete="off" onChange={props.onValueChange2}/>
        <label htmlFor="excellent" style={{marginLeft:"3px"}}>Excellent</label>
        </div>
    </div>


    <div className="form-group">
        <label for=""> <b>5.</b> Write your review here</label>
        <br/>
        <textarea className="form-control" 
        autocomplete="off" name="r" onChange={props.onValueChange3}/>
    </div>

    <button type="submit" className="btn btn-primary">
                save
    </button>
    </form>
    <center>
            <span className="badge badge-pill disabled">1</span>
            <span className="badge badge-pill badge-primary">2</span>
            </center>
</div>
</div>
</div>
</div>
</div>

</>

  )
}

export default Question
