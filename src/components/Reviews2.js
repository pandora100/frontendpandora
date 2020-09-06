import React, { Fragment } from "react";
import Marquee from "react-smooth-marquee"
import pullup from '../assets/windowsIcons/pullup.PNG';
import viewInfo from '../assets/windowsIcons/view-info.PNG';
import folderSmall from '../assets/windowsIcons/folderSmall.PNG';
import logogit from '../assets/logogit.PNG';
import './Reviews2.css'; 
 const Reviews2=()=>(
<React.Fragment>	
<Marquee>

<div className="reviews__content__inner">
<div className="reviews__content__left_huagsm">
                
<div className="reviews__content__left__card__row__div">
<img
                  src={logogit}
                  alt=""
                 
                />Orq HUAWEI_GSM: 256
 <br/> 
  <img
                  src={logogit}
                  alt=""
                 
                />Pand HUAWEI_GSM: 256 
<br/> 
<img
                  src={logogit}
                  alt=""
                 
                />Dry HUAWEI_GSM: 256
<br/> 
                 
<img
                  src={logogit}
                  alt=""
                 
                />Wash HUAWEI_GSM: 256                                             
</div>
</div>
<div className="reviews__content__left_huaumts">
<div className="reviews__content__left__card__row__div">
<img
                  src={logogit}
                  alt=""
                 
                />Orq HUAWEI_UMTS: 220
<br/> 
                 
<img
                  src={logogit}
                  alt=""
                 
                />Pand HUAWEI_UMTS: 220  
<br/> 
<img
                  src={logogit}
                  alt=""
                 
                />Dry HUAWEI_UMTS: 220
<br/> 
                 
<img
                  src={logogit}
                  alt=""
                 
                />Wash HUAWEI_UMTS: 220                  
</div> 
</div>
<div className="reviews__content__left_flexent">
<div className="reviews__content__left__card__row__div">
<img
                  src={logogit}
                  alt=""
                 
                />Orq FLEXENT: 125
<br/> 
                 
<img
                  src={logogit}
                  alt=""
                 
                />Pand FLEXENT: 125  
<br/> 
<img
                  src={logogit}
                  alt=""
                 
                />Dry FLEXENT: 125
<br/> 
                 
<img
                  src={logogit}
                  alt=""
                 
                />Wash FLEXENT: 125                  
</div> 
</div>   
</div>            
 </Marquee>
 </React.Fragment>
	);

export default Reviews2;