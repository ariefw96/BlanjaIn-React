import React, { Component } from 'react'
import { carousel1, carousel2, carousel3, carousel4 } from '../../../assets/new'
import './carousel.css'
import '../../../pages/style.css'
import Carousel from "react-elastic-carousel";
import Item from "./item";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 2, itemsToScroll: 1 }
];

function App() {
    return (
        <div className="App">
            <Carousel breakPoints={breakPoints}>
                <Item>
                    <div class='item-tags'>
                        <img src={carousel1} alt='tags' />
                        <p class='item-text'>Trends in 2020</p>
                    </div>
                </Item>
                <Item>
                    <div class='item-tags'>
                        <img src={carousel2} alt='tags' />
                        <p class='item-text'>Trends in 2020</p>
                    </div>
                </Item>
                <Item>
                    <div class='item-tags'>
                        <img src={carousel3} alt='tags' />
                        <p class='item-text'>Trends in 2020</p>
                    </div>
                </Item>
                <Item>
                    <div class='item-tags'>
                        <img src={carousel4} alt='tags' />
                        <p class='item-text'>Trends in 2020</p>
                    </div>
                </Item>
            </Carousel>
        </div>
    );
}

class Carousell extends Component {
    render() {
        return (
            <App />
            //   const rootElement = document.getElementById("root");
            //   ReactDOM.render(<App />, rootElement);
        )
    }
}

export default Carousell