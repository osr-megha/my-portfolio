import React from 'react'
import { NavLink } from 'react-router-dom'
import './work.css'


const Work = () => {

    const data = [
        {
          id: 1,
          title: "Shopping Cart",
        //   title: "with Google Pay",
          img:
            "https://images.pexels.com/photos/5614119/pexels-photo-5614119.jpeg?cs=srgb&dl=pexels-anna-shvets-5614119.jpg&fm=jpg",
          // icon: 'https://pixabay.com/vectors/icon-round-circular-symbol-web-3154240/',
          text:
            "Shopping cart App with Context API & Google Pay",
          view:'https://guileless-travesseiro-2abd3c.netlify.app/'
        },
        {
          id: 2,
          title: "Crypto Tracker",
        //   title: "using Line chart",
          img:
            "https://images.pexels.com/photos/6780789/pexels-photo-6780789.jpeg?cs=srgb&dl=pexels-alesia-kozik-6780789.jpg&fm=jpg",
          // icon: 'https://pixabay.com/vectors/icon-round-circular-symbol-web-3154240/',
          text:
            "Crypto tracker App using Line chart",
            view:'https://crypto-tracker-using-line-chart.vercel.app/',
            featured: true,
        },
        {
          id: 3,
          title:"Basic React App",
        //   name: "Basic React App",
        //   title: "with Navigation",
          img:
            "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?cs=srgb&dl=pexels-ketut-subiyanto-4126724.jpg&fm=jpg",
          // icon: 'https://pixabay.com/vectors/icon-round-circular-symbol-web-3154240/',
          text:
            "Learning basic concepts of react js",
            view:'https://learning-react-js.vercel.app/'
        },
      ];

  return (
    <div className='work'>
    <h1 className='project-heading'>Projects</h1>
    
    <div className='project-container' >
    {data.map((d) => (
    <div className='project-card' key={d.id}>
    <img src={d.img} alt='' />
    <h2 className='project-title'>{d.title}</h2>
    <div className='pro-details'>
    <p>{d.text}</p>
    <div className='pro-btns'>
    <NavLink to={d.view} className='btn'>View</NavLink>
    <NavLink to='url.com' className='btn'>Source</NavLink>
    </div>
    </div>
    </div>
    ))
    }
    </div>
    
   
    
    </div>
  )
}

export default Work