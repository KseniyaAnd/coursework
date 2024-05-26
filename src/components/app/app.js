import {Component} from "react";

import {Header} from "../header/header";
import {Main} from "../main/main";

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
            ]
        }
    }

    render() {
        return (
            <div className="app">
                <Header/>
                <Main
                    sliderPics={this.state.sliderPics}
                />
            </div>
        )
    }
}

export default App;
