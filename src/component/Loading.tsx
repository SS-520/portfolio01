import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { BsFillSuitDiamondFill } from "react-icons/bs";
import { FaHeartCrack } from "react-icons/fa6";

function Loading() {

  // const [isLoading, setIsLoading] = useState(false);

  return (
    <div id='loading-area'>
      <div id='loading'>
        <div id='loading-mark'>
          <AiFillStar id='loading-st' className='lotate-icon'/>
          <BsFillSuitDiamondFill id='loading-qn' className='lotate-icon'/>
          <FaHeartCrack id='loading-he' className='lotate-icon'/>
        </div>
        <div id='loading-label'>
          <span className='loading-text' id='text-l'>l</span>
          <span className='loading-text' id='text-o'>o</span>
          <span className='loading-text' id='text-a'>a</span>
          <span className='loading-text' id='text-d'>d</span>
          <span className='loading-text' id='text-i'>i</span>
          <span className='loading-text' id='text-n'>n</span>
          <span className='loading-text' id='text-g'>g</span>
        </div>
      </div>
    </div>
  );
}
// MdHeartBroken
export default Loading;