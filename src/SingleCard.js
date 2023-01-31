import React from "react";
<style>

</style>
const SingleCard = (props) => {
    return(
        <div className='comment four wide column'> 
        <div>
        <a href="/" className=''> 
            <img src={props.profile} alt="picture" style={{width:"200px",height:"100px"}} /> 
        </a>   
        </div>        
<div className='' >  
           <a href="/" className='header'>{props.name}</a> 
        <div className=''> 
            <div className=''> {props.author}  </div>  
             <div class="ui mini star rating" data-rating="3">
            <i class="icon active"></i> 
            <i class="icon active"></i> 
            <i class="icon active"></i> 
            <i class="icon"></i> 
            <i class="icon"></i> 
            </div>
            <div> {props.cost}  </div>   
            

</div>           
<div className='text'>   
          {props.text}
      </div>           
</div>       
</div>  
    )
}
export default SingleCard;