import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className="headerLeft">
        <a href="#" className="Head">
          <span>est.1997</span>
          <span className="headLogoChange">
            <svg viewBox="0 0 20 127" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[2rem] h-[12.7rem]">
              <path d="M5.52879 70.6482L5.52879 72.5923L18.9424 72.5923L18.9424 70.6482L5.52879 70.6482ZM5.31932 124.298C3.65997 124.298 2.36074 122.832 2.36074 120.534C2.36074 118.715 2.95622 117.075 4.33313 115.434L2.7491 114.271C1.26863 116.065 0.517812 117.908 0.517812 120.485C0.517812 123.844 2.59376 126.294 5.4982 126.294C8.40264 126.294 9.85956 124.425 10.7657 120.358C11.5707 116.644 12.531 115.761 14.2421 115.761C16.0827 115.761 17.356 117.326 17.356 119.701C17.356 122.076 16.4993 123.919 14.7882 125.762L16.2945 127C18.241 124.879 19.2013 122.58 19.2013 119.777C19.2013 116.267 17.1772 113.742 14.0374 113.742C11.2341 113.742 9.75601 115.561 8.87338 119.499C8.01664 123.389 7.05634 124.298 5.31932 124.298ZM7.2917 108.5L7.2917 104.358L5.52644 104.358L5.52644 108.5L1.47811 108.5L1.47811 110.444L5.52644 110.444L5.52644 112.264L7.2917 112.264L7.2917 110.444L15.386 110.444C18.1116 110.444 19.1754 108.853 19.1754 106.758C19.1754 105.824 18.9683 105.092 18.6058 104.409L16.8924 104.409C17.2289 105.092 17.3584 105.647 17.3584 106.304C17.3584 107.617 16.7629 108.502 15.1271 108.502L7.2917 108.502L7.2917 108.5ZM18.3163 100.415L13.8443 100.415C13.689 100.427 13.529 100.434 13.3642 100.434L5.52879 100.434L5.52879 102.378L13.8585 102.378C15.8167 102.378 17.3913 101.681 18.3187 100.415L18.3163 100.415ZM18.9448 92.9069L18.9448 90.9863L5.53115 90.9863L5.53115 92.9069L13.2112 92.9069C15.7273 92.9069 17.4149 94.5992 17.4149 96.8211C17.4149 97.4495 17.2948 97.998 17.0759 98.4734L19.1331 98.4734C19.1966 98.1274 19.2296 97.7626 19.2296 97.3766C19.2296 95.1288 18.0621 93.7919 16.6099 92.9069L18.9448 92.9069ZM19.2296 82.5343C19.2296 81.9717 19.1519 81.4586 19.0154 80.9856L17.2642 80.9856C17.3772 81.3739 17.4384 81.7764 17.4384 82.1812C17.4384 84.6573 15.4142 86.778 12.2227 86.778C9.03107 86.778 7.0328 84.7067 7.0328 82.1812C7.0328 81.7764 7.09634 81.3739 7.20697 80.9856L5.44642 80.9856C5.31697 81.4586 5.24165 81.9741 5.24165 82.5343C5.24165 85.667 7.83775 88.7739 12.2485 88.7739C16.6593 88.7739 19.2272 85.667 19.2272 82.5343L19.2296 82.5343ZM18.9424 77.5327L18.9424 75.5886L-2.24727e-06 75.5886L-2.16228e-06 77.5327L8.09666 77.5327C7.49177 77.9399 6.91275 78.4365 6.43731 79.0414L8.33439 79.0414C9.24762 78.0905 10.5892 77.4574 12.2227 77.4574C13.8561 77.4574 15.2165 78.0929 16.1321 79.0414L17.9703 79.0414C17.4784 78.4483 16.8782 77.9517 16.2427 77.5327L18.9401 77.5327L18.9424 77.5327ZM2.59611 72.7171L2.59611 70.4952L0.390709 70.4952L0.390709 72.7171L2.59611 72.7171ZM18.893 63.4977L16.8806 63.4977C16.0121 65.0559 14.2586 66.075 12.2227 66.075C10.1867 66.075 8.39087 65.0864 7.5459 63.4977L5.62294 63.4977C6.57618 66.2374 9.23349 68.0709 12.2744 68.0709C15.3154 68.0709 17.9633 66.2374 18.893 63.4977ZM12.2227 54.4549C8.40734 54.4549 5.24165 57.3358 5.24165 61.2499C5.24165 61.3535 5.25341 61.4524 5.25812 61.5536L7.02103 61.5536C7.01632 61.4688 7.00691 61.3865 7.00691 61.3017C7.00691 58.5479 9.34176 56.4508 12.2744 56.4508C15.2071 56.4508 17.4643 58.4232 17.4643 61.2499C17.4643 61.3535 17.4549 61.4524 17.4478 61.5536L19.2413 61.5536C19.246 61.4688 19.2555 61.3865 19.2555 61.3017C19.2555 57.3617 16.038 54.4572 12.225 54.4572L12.2227 54.4549ZM11.8861 45.3202L11.8861 44.0704L10.0455 44.0704L10.0455 45.3202L2.67613 45.3202L2.67613 44.0704L0.78142 44.0704L0.78142 47.3162L18.9448 47.3162L18.9448 45.3202L11.8861 45.3202ZM18.9448 33.2247L11.5236 38.6546C11.0058 35.8773 9.24055 33.8555 6.2043 33.8555C2.93504 33.8555 0.78142 36.3551 0.78142 40.2457L0.78142 42.1263L2.67613 42.1263L2.67613 40.3987C2.67613 37.546 4.02479 35.8773 6.28433 35.8773C8.54386 35.8773 10.0479 37.772 10.0479 40.4246L10.0479 42.1263L11.8884 42.1263L11.8884 40.8012L18.9471 35.6749L18.9471 33.2247L18.9448 33.2247ZM10.7704 28.5267L8.84983 28.5267L0.779063 28.5267L0.779063 30.5227L18.9424 30.5227L18.9424 28.5267L10.7681 28.5267L10.7704 28.5267ZM18.9448 18.3212L18.9448 16.3252L0.781419 16.3252L0.781419 18.3212L8.85218 18.3212L8.85218 26.5826L10.7728 26.5826L10.7728 18.3212L18.9471 18.3212L18.9448 18.3212ZM17.0759 10.9141L10.7187 10.9141L10.7187 1.2664L8.84983 1.2664L8.84983 10.9141L2.64789 10.9141L2.64789 0.127228L0.779062 0.127228L0.779063 12.9077L18.9424 12.9077L18.9424 0.000121242L17.0736 0.000121324L17.0736 10.9118L17.0759 10.9141Z" fill="black"></path>
            </svg>
          </span>
        </a>
        <a href="#" className="HeaderBtn">
          <span className="btnLine Line1"></span>
          <span className="btnLine Line2"></span>
          <span className="btnLine Line3"></span>
        </a>
        <div className="headProgress">0%</div>
        <ul id="gnb">
          <li><a href="about.html">About</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="journal.html">Journal</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <div className="gnbBack"></div>
      </div>
    </header>
  );
};

export default Header;