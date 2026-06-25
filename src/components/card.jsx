import React from 'react'
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">

        <div className="top">
          <img src="{props.brandlogo}" alt="{props.company}-logo " />
          <button>
            save <Bookmark />
             </button>
        </div>

        <div className="center">
           <h3>{props.company} <span>{props.posted}</span></h3>
           <div className="tag">
             <h4>{props.tag1}</h4>
             <h4>{props.tag2}</h4>
           </div>
        </div>

        <div className="bottom">
           
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply now</button>
          

        </div>


      </div>
  )
}

export default Card