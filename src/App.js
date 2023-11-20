import React from "react";
import "./app.css"
import { Nav, Featured } from "./components";
import { Header, Whyview, Category, InstructorMain, Apply, Testimonial, Footer } from "./views";
const App = () =>{
    return (
        <div className="App">
            <div className="">
                <Nav />
                <Header />
            </div>
            <Featured />
            <Whyview />
            <Category />
            <InstructorMain />
            <Apply />
            <Testimonial />
            <Footer />
            
        </div>
        
      
    )
};

export default App;