import React from 'react';
import { Node, Javascript, Python, Reactimage, Git} from './imports'
import { useState } from 'react';
import './category.css';
import { BsStarFill, BsStar, BsStarHalf} from 'react-icons/bs';
import { CatCard } from '../../components';

const Category = () =>{
    const [active, setactive] = useState(1);
    function display(id){
        setactive(id);
    }

    return(
        <div className='category'>
            <h1>Browse categories</h1>
            <h1 className='bighead'>The world's top courses</h1>
            <p>Choose from 20+ online video courses with new additions published every month.</p>
            <div className="category-section">
                <div className="headings">
                    <ul>
                        <li onClick={() => display(1)} className={ active === 1 ? 'active' : 'null'}><p>All Categories</p></li>
                        <li onClick={() => display(2)} className={ active === 2 ? 'active' : 'null'}><p>Storage</p></li>
                        <li onClick={() => display(3)} className={ active === 3 ? 'active' : 'null'}><p>Javascript</p></li>
                        <li onClick={() => display(4)} className={ active === 4 ? 'active' : 'null'}><p>Web Development</p></li>
                    </ul>
                </div>
                <div className='body'>
                    <div className={ active === 1 ? 'display' : 'null'}>
                        <CatCard  image={Node} heading={"Node.js Tutorials - For beginners and"} time={" 3 hours 56 minutes"} level={"Beginner"} laststar={<BsStarHalf />} rating={"4.5"} people={"(4)"}/>
                        <CatCard  image={Python} heading={"The python course: Build web applications"} time={" 2 hours 30 minutes"} level={"intermediate"} laststar={<BsStarHalf />} rating={"4.5"} people={"(4)"}/>
                        <CatCard  image={Reactimage} heading={"How to easily create website with react"} time={" 3 hours 56 minutes"} level={"Beginner"} laststar={<BsStarHalf />} rating={"4.5"} people={"(4)"}/>
                        <CatCard  image={Javascript} heading={"Get started with Javascript for beginners"} time={" 4 hours 28 minutes"} level={"Beginner"} people={"No rating yet"}/>
                        <CatCard  image={Git} heading={"Learn version control with Git and GitHub"} time={" 4 hours 27 minutes"} level={"intermediate"} laststar={<BsStarHalf />} rating={"4.5"} people={"(4)"}/>
                    </div>
                    <div className={ active === 2 ? 'display' : 'null'} >
                        <CatCard  image={Git} heading={"Learn version control with Git and GitHub"} time={" 4 hours 27 minutes"} level={"intermediate"} laststar={<BsStarHalf />} rating={"4.5"} people={"(4)"}/>
                    </div>
                    <div className={ active === 3 ? 'display' : 'null'} >
                        <CatCard  image={Node} heading={"Node.js Tutorials - For beginners and"} time={" 3 hours 56 minutes"} level={"Beginner"} laststar={<BsStarHalf />} rating={"4.5"} people={"(4)"}/>
                        <CatCard  image={Reactimage} heading={"How to easily create website with react"} time={" 3 hours 56 minutes"} level={"Beginner"} laststar={<BsStarHalf />} rating={"4.5"} people={"(4)"}/>
                        <CatCard  image={Javascript} heading={"Get started with Javascript for beginners"} time={" 4 hours 28 minutes"} level={"Beginner"} people={"No rating yet"}/>
                    </div>
                    <div className={ active === 4 ? 'display' : 'null'} >
                        <CatCard  image={Python} heading={"The python course: Build web applications"} time={" 2 hours 30 minutes"} level={"intermediate"} laststar={<BsStarHalf />} rating={"4.5"} people={"(4)"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;