import React from 'react'
import Section from './Section';
import styled from 'styled-components';


function Home() {
    return (
        <Container>
           <Section
           title= "Model S"
           description="Order Online for Touches delivery" 
           backgroundImg ="model-s.jpg" 
           leftBtnText="Custom order"
           rightBtnText="Existing inventory"
           />
           <Section
             title= "Model Y"
             description="Order Online for Touches delivery" 
             backgroundImg ="model-y.jpg" 
             leftBtnText="Custom order"
             rightBtnText="Existing inventory"
           />
           <Section 
             title= "Model 3"
             description="Order Online for Touches delivery" 
             backgroundImg ="model-3.jpg" 
             leftBtnText="Custom order"
             rightBtnText="Existing inventory"
           />
           <Section
             title= "Model X"
             description="Order Online for Touches delivery" 
             backgroundImg ="model-x.jpg" 
             leftBtnText="Custom order"
             rightBtnText="Existing inventory"
           />
           <Section
             title= "Lowest Cost Solar Panels in America"
             description="Money-back gaurantee" 
             backgroundImg ="solar-panel.jpg" 
             leftBtnText="Custom order"
             rightBtnText="Learn more"
           />
              
              <Section
             title= "Solar for New roofs"
             description="Solar Roof Costs Less Than a New Roof Plus Solar Panels" 
             backgroundImg ="solar-roof.jpg" 
             leftBtnText="Custom order"
             rightBtnText="Learn more"
           />

             <Section
             title= "Accessories"
             description="" 
             backgroundImg ="accessories.jpg" 
             leftBtnText="Custom order"
             rightBtnText=""
             />
        </Container>
    )
}

export default Home

const Container = styled.div `
 height:100vh;

`
