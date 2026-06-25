import React from 'react'
 import Card from "./components/card";

const jobs = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    company: "Google",
    posted: "10 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    company: "Amazon",
    posted: "5 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    posted: "8 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Pune, India"
  }
];
const App = () => {
  return(
    <div className='parent'>
      {
        jobs.map(function(elem){

return <Card company={elem.company} post={elem.post}
tag1={elem.tag1} tag2={elem.tag2} posted={elem.posted}
pay={elem.pay} location={elem.location} brandlogo={elem.brandLogo}




/>





        })
      }
      
    </div>
  )
}

export default App
