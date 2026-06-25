import React from 'react'
import { Bookmark } from "lucide-react";

const App = () => {
  return(
    <div className='parent'>
      <div className="card">

        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUyITgyNP2_U_ogNb9_TknsLJpivZ607gvow&s" alt="amazon-logo " />
          <button>
            save <Bookmark />
             </button>
        </div>

        <div className="centre">

        </div>

        <div className="bottom">

        </div>


      </div>
    </div>
  )
}

export default App
