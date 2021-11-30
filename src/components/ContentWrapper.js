import React, {Component} from 'react';
import TopBar from "./TopBar.js";
import ContentRowTop from "./ContentRowTop.js";
import Footer from "./Footer.js";

class ContentWrapper extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar/>
                    <ContentRowTop/>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default ContentWrapper;