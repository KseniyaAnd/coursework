import {Component} from "react";

import {Header} from "../header/header";
import {Main} from "../main/main";
import {Footer} from "../footer/footer";

import {ReactComponent as InstLogo} from "../../assets/img/media-icons/ico-inst.svg";
import {ReactComponent as LinkedinLogo} from "../../assets/img/media-icons/ico-linkedin.svg";
import {ReactComponent as TiktokLogo} from "../../assets/img/media-icons/ico-tiktok.svg";
import {ReactComponent as TwitterxLogo} from "../../assets/img/media-icons/ico-twitterx.svg";
import {ReactComponent as YoutubeLogo} from "../../assets/img/media-icons/ico-youtube.svg";

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderPics: [
                {src: require('../../assets/img/slider-img-1.jpg'), alt: 'slider-img', id: 1},
                {src: require('../../assets/img/slider-img-2.jpg'), alt: 'slider-img', id: 2},
                {src: require('../../assets/img/slider-img-3.jpg'), alt: 'slider-img', id: 3},
                {src: require('../../assets/img/slider-img-4.jpg'), alt: 'slider-img', id: 4},
                {src: require('../../assets/img/slider-img-5.jpg'), alt: 'slider-img', id: 5},
            ],
            exhibitions: [
                {
                    imgSrc: require('../../assets/img/exhibition-china.png'),
                    title: 'Тур по Китаю | Диснастия Ся',
                    link: '',
                    id: 1
                },
                {
                    imgSrc: require('../../assets/img/exhibition-repin.png'),
                    title: 'Тур по биографии И. Е. Репина',
                    link: '',
                    id: 2
                },
                {
                    imgSrc: require('../../assets/img/exhibition-egypt-early-kingdom.png'),
                    title: 'Тур по Египту | Раннее царство',
                    link: '',
                    id: 3
                }
            ]
            ,
            socialMedias: [
                {
                    imgSrc: <InstLogo/>,
                    alt: 'instagram',
                    link: 'https://www.instagram.com/',
                    id: 1
                },
                {
                    imgSrc: <TwitterxLogo/>,
                    alt: 'twitterx',
                    link: 'https://www.twitterx.com/',
                    id: 2
                },
                {
                    imgSrc: <YoutubeLogo/>,
                    alt: 'youtube',
                    link: 'https://www.youtube.com/',
                    id: 3
                },
                {
                    imgSrc: <LinkedinLogo/>,
                    alt: 'linkedin',
                    link: 'https://www.linkedin.com/',
                    id: 4
                },
                {
                    imgSrc: <TiktokLogo/>,
                    alt: 'tiktok',
                    link: 'https://www.tiktok.com/',
                    id: 5
                }
            ]
        }
    }


    render() {
        return (
            <div className="app">
                <Header/>
                <Main
                    sliderPics={this.state.sliderPics}
                    exhibitions={this.state.exhibitions}
                    socialMedias={this.state.socialMedias}
                />
                <Footer/>
            </div>
        )
    }
}

export default App;
