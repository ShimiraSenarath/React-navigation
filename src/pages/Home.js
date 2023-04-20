import React from "react";
import { useNavigate } from 'react-router-dom';
import "./style/page.css";

export default function Home(){

    let example1 = useNavigate();
    let example2 = useNavigate();

    

    return (
        <div className="Home-content">
            <h1>React Navigation with React router dom</h1>
            <div>
                <h3>Create React App doesn't include page routing. React Router is the most popular solution.</h3>
            </div>
            <div>
                <div className="content" onClick={() => {example1("/example1")}}>
                    <h3>Page 1</h3>
                </div>
                <div className="content" onClick={() => {example2("/example2")}}>
                    <h3>Page 2</h3>
                </div>
               
            </div>
        </div>
    )
}