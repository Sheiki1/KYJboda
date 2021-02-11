import React, { Fragment }  from "react"
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from "./kyj1.png";
import img2 from "./kyj2.png";
import img3 from "./kyj3.png";
import img4 from "./kyj4.png";
import img5 from "./kyj5.png";
import img6 from "./kyj6.png";
import img7 from "./kyj7.png";
import img8 from "./kyj8.png";
import img9 from "./kyj9.png";
import img10 from "./kyj10.png";
import img11 from "./kyj11.png";
import img12 from "./kyj12.png";
import img13 from "./kyj13.png";
import img14 from "./kyj14.png";
import img15 from "./kyj15.png";

const  About =() =>{
    const fadeImages = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15
      ];
    return(
        <Fragment>
            <div className="about">
                <div className="slide-container">
                    <Fade>
                        <div className="each-fade">
                            <img src={fadeImages[0] } alt='people' />
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[1]} alt='chat'/>
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[2]} alt='home'/>
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[3]} alt='home'/>
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[4]} alt='home'/>
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[5] } alt='people' />
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[6]} alt='chat'/>
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[7]} alt='home'/>
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[8]} alt='home'/>
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[9]} alt='home'/>
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[10] } alt='people' />
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[11]} alt='chat'/>
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[12]} alt='home'/>
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[13]} alt='home'/>
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[14]} alt='home'/>
                        </div>
                    </Fade>
                </div>
                <div className="sunFlowerAbout">
                    <svg width="100" height="100" viewBox="0 0 186 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M92.8217 24.133C95.2269 19.623 99.421 15.2873 103.787 11.5931C101.389 7.69503 98.9925 4.36619 97.5008 2.47301C96.2435 0.87857 94.6447 0 93.0005 0C91.3555 0 89.7575 0.87857 88.5002 2.47301C86.9748 4.41127 84.5037 7.85381 82.0515 11.8679C86.3424 15.492 90.4412 19.7245 92.8217 24.133Z" fill="#FFC525"/>
                        <path d="M24.133 93.1782C19.6241 90.7738 15.2897 86.5817 11.5967 82.217C7.69856 84.6148 4.36737 87.0098 2.47223 88.5011C0.87857 89.7572 0 91.3552 0 93.0002C0 94.6452 0.878178 96.2432 2.4734 97.5005C4.41167 99.0263 7.8542 101.497 11.8683 103.949C15.492 99.6579 19.7241 95.5591 24.133 93.1782Z" fill="#FFC525"/>
                        <path d="M152.26 42.8222C154.227 42.8222 156.221 42.9237 158.181 43.0907C159.246 38.6289 159.91 34.5685 160.196 32.1692C160.42 30.276 159.977 28.5953 158.95 27.4392C157.967 26.3332 156.528 25.7483 154.788 25.7483C154.477 25.7483 154.155 25.7679 153.831 25.8063C151.382 26.0984 147.2 26.7849 142.628 27.8892C143.1 33.4853 143.006 39.3757 141.572 44.1763C144.529 43.277 148.112 42.8222 152.26 42.8222Z" fill="#FFC525"/>
                        <path d="M183.527 88.5004C181.589 86.9745 178.146 84.5035 174.132 82.0516C170.508 86.3429 166.276 90.4414 161.868 92.8222C166.376 95.227 170.711 99.4196 174.404 103.784C178.302 101.386 181.633 98.9911 183.528 97.4993C185.121 96.2432 186 94.6453 186 93.0006C186 91.3556 185.122 89.7572 183.527 88.5004Z" fill="#FFC525"/>
                        <path d="M158.105 142.602C156.155 142.77 154.174 142.872 152.222 142.872C148.195 142.872 144.715 142.427 141.821 141.561C143.311 146.452 143.411 152.485 142.936 158.187C147.388 159.248 151.437 159.91 153.832 160.195C154.155 160.234 154.477 160.253 154.788 160.253C156.527 160.253 157.966 159.668 158.949 158.562C159.976 157.406 160.419 155.726 160.194 153.831C159.902 151.376 159.213 147.184 158.105 142.602Z" fill="#FFC525"/>
                        <path d="M93.1782 161.868C90.7738 166.376 86.5817 170.711 82.217 174.404C84.6144 178.302 87.0098 181.633 88.5011 183.528C89.7572 185.122 91.3552 186 92.9998 186C94.6448 186 96.2432 185.121 97.5009 183.527C99.0263 181.589 101.497 178.146 103.949 174.132C99.6579 170.509 95.5591 166.276 93.1782 161.868Z" fill="#FFC525"/>
                        <path d="M93.0001 43.0173C65.4395 43.0173 43.0173 65.4395 43.0173 93.0001C43.0173 120.561 65.4395 142.983 93.0001 142.983C120.561 142.983 142.983 120.561 142.983 93.0001C142.983 65.4395 120.561 43.0173 93.0001 43.0173Z" fill="#FFC525"/>
                        <path d="M98.5082 33.5633C98.5937 33.7538 98.7215 33.9388 98.8717 34.1215C110.676 35.2894 121.471 39.943 130.212 47.0335C131 46.9802 132.235 46.556 133.618 43.1903C137.079 34.7743 133.326 17.0904 131.588 10.9867C130.812 8.2596 128.918 6.63184 126.523 6.63184C125.459 6.63184 124.362 6.94547 123.264 7.56412C117.733 10.686 102.619 20.6286 99.1673 29.025C98.58 30.4548 97.988 32.4028 98.5082 33.5633Z" fill="#FFC525"/>
                        <path d="M55.5494 47.226C55.5483 47.2268 55.5479 47.2276 55.5467 47.2284C64.2555 40.0888 75.0297 35.3812 86.8239 34.1521H86.8235C86.9725 33.969 87.0991 33.7832 87.1834 33.5927C87.6974 32.4295 87.0956 30.4846 86.5005 29.0579C82.9972 20.6599 67.8384 10.8087 62.2934 7.72172C61.2019 7.11405 60.1136 6.80591 59.0582 6.80591C56.6491 6.80591 54.7532 8.44387 53.9871 11.1874C52.2837 17.306 48.6275 35.0229 52.1238 43.4012C53.5324 46.7767 54.7689 47.1782 55.5494 47.226Z" fill="#FFC525"/>
                        <path d="M29.0242 86.8322C30.4136 87.4034 31.5764 87.6932 32.4809 87.6932C33.0882 87.6932 33.6237 87.4932 34.1255 87.0875C34.1247 87.0957 34.1243 87.1043 34.1235 87.1125C35.2938 75.3183 39.9434 64.534 47.0265 55.7977C47.0265 55.7981 47.0265 55.7981 47.0265 55.7981C47.0037 55.5464 46.9598 55.3115 46.8803 55.1049C46.4212 53.919 44.6201 52.9691 43.1903 52.381C40.9118 51.444 37.7452 50.9689 33.7785 50.9689C23.2314 50.9689 11.1067 54.3773 10.9855 54.4118C9.03393 54.9673 7.61356 56.1113 6.98825 57.6324C6.36255 59.1536 6.56719 60.966 7.56416 62.7353C10.6852 68.2662 20.6282 83.3799 29.0242 86.8322Z" fill="#FFC525"/>
                        <path d="M153.471 87.3798C154.377 87.3798 155.546 87.0842 156.943 86.5013C165.34 82.9972 175.191 67.8388 178.278 62.2937C179.266 60.5194 179.462 58.7065 178.828 57.1882C178.194 55.6702 176.769 54.5336 174.813 53.9875C174.694 53.9546 162.748 50.6626 152.26 50.6626C148.173 50.6626 144.922 51.1542 142.598 52.1241C141.171 52.7193 139.375 53.6782 138.923 54.8669C138.844 55.0723 138.802 55.3064 138.781 55.5569C145.908 64.2555 150.61 75.0124 151.844 86.7878C152.343 87.185 152.872 87.3798 153.471 87.3798Z" fill="#FFC525"/>
                        <path d="M156.975 99.1678C155.586 98.5966 154.423 98.3069 153.519 98.3069C152.913 98.3069 152.378 98.506 151.877 98.9114C151.878 98.8965 151.879 98.8816 151.88 98.8671C150.713 110.67 146.063 121.461 138.976 130.203C138.998 130.455 139.042 130.689 139.122 130.896C139.581 132.082 141.382 133.032 142.811 133.62C145.09 134.556 148.256 135.032 152.223 135.032C162.801 135.032 174.894 131.624 175.015 131.589C176.968 131.033 178.388 129.889 179.013 128.368C179.639 126.847 179.434 125.034 178.437 123.265C175.315 117.734 165.372 102.62 156.975 99.1678Z" fill="#FFC525"/>
                        <path d="M130.453 138.774C130.454 138.773 130.454 138.772 130.455 138.772C121.746 145.912 110.971 150.62 99.1767 151.848C99.0273 152.032 98.9007 152.217 98.8164 152.408C98.3021 153.572 98.9042 155.517 99.4994 156.943C102.995 165.321 118.16 175.186 123.708 178.28C124.798 178.886 125.886 179.194 126.942 179.194C129.352 179.194 131.247 177.556 132.013 174.813C133.716 168.694 137.372 150.976 133.877 142.598C132.469 139.226 131.233 138.822 130.453 138.774Z" fill="#FFC525"/>
                        <path d="M87.4916 152.437C87.4061 152.247 87.2787 152.062 87.1285 151.879C87.1285 151.879 87.1289 151.879 87.1293 151.879C75.3245 150.711 64.53 146.057 55.7878 138.967C55.0002 139.02 53.7648 139.445 52.3813 142.81C48.9211 151.225 52.6742 168.91 54.4121 175.014C55.1884 177.741 57.0823 179.369 59.4781 179.369C60.5421 179.369 61.6383 179.055 62.7364 178.437C68.2673 175.315 83.3806 165.372 86.8326 156.976C87.4202 155.546 88.0118 153.598 87.4916 152.437Z" fill="#FFC525"/>
                        <path d="M32.5301 98.6205C31.6233 98.6205 30.4546 98.9161 29.0574 99.4991C20.6794 102.995 10.8148 118.16 7.72077 123.708C6.734 125.481 6.53876 127.293 7.17191 128.811C7.80546 130.33 9.23171 131.467 11.188 132.013C11.3056 132.046 23.2528 135.338 33.7411 135.338C37.8274 135.338 41.0778 134.846 43.4018 133.877C44.8281 133.282 46.6237 132.323 47.0769 131.134C47.1557 130.928 47.198 130.693 47.2192 130.442C40.0926 121.744 35.3912 110.988 34.1567 99.2133C33.6584 98.8153 33.1283 98.6205 32.5301 98.6205Z" fill="#FFC525"/>
                        <path d="M27.8951 43.3985C29.8451 43.2303 31.8261 43.1284 33.7777 43.1284C37.8052 43.1284 41.2858 43.5738 44.1802 44.4394C42.6893 39.5479 42.5885 33.5123 43.0637 27.8097C38.6116 26.7492 34.563 26.0894 32.1692 25.8059C31.8446 25.7675 31.5227 25.7479 31.2114 25.7479C29.4723 25.7479 28.0339 26.3325 27.051 27.4384C26.0235 28.5949 25.5813 30.2756 25.8055 32.17C26.0984 34.6242 26.7872 38.8163 27.8951 43.3985Z" fill="#FFC525"/>
                        <path d="M33.7407 143.179C31.7723 143.179 29.7768 143.077 27.8162 142.91C26.7522 147.372 26.0904 151.432 25.8062 153.83C25.5815 155.725 26.0238 157.406 27.0509 158.562C28.0334 159.668 29.4726 160.253 31.2121 160.253C31.5233 160.253 31.8456 160.233 32.1702 160.195C34.6197 159.903 38.8012 159.216 43.3737 158.111C42.9012 152.515 42.9957 146.625 44.429 141.825C41.4718 142.723 37.8886 143.179 33.7407 143.179Z" fill="#FFC525"/>
                    </svg>
                </div>
            </div>
        </Fragment>
    )
}

export default About