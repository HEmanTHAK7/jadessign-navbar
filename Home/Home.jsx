// import React, { Component } from 'react'
// import './home.css'
// import logo from './paint.jpg'

// export default class Home extends Component {
//   render() {
//     return (
//       <div className='body'>
//         <div className='content'>
//         <h1 >Home</h1>
//         <p>hello everyone wellcome to jadesign </p>
//         <img className='image' src={logo} />
//         </div>
      
//       </div>
//     )
//   }
// }
import React, { Component } from 'react'
// import React, { Component } from "react";
import Slider from "react-slick";
import './home.css'
import {digitalBestSeller} from './cards'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:2890,
      cssEase:'linear'
    };
    return (
      <div className='Slider'>
        <Slider {...settings}>
          {digitalBestSeller.map((item)=>(
           <div className='=card'>
            <div className='card-top'>
              <img src='{item.linkImg}'/>
              <h1>{item.title}</h1>
            </div>
            <div className='card-bottom'>
              <h3>{item.id}</h3>
              <p>{item.title}</p>
            </div>

          </div>
        ))}
          
        </Slider>
      </div>
    );
  }
}
//       </div>
//     )
//   }
// }
