import React from "react";
import './Center.css';
//import solid from './images/solid.jpg';
//import Button from '@mui/material/Button';  
//import Stack from '@mui/material/Stack'; 
import { Button } from "rsuite";
  
// Import the default CSS
//import "rsuite/dist/rsuite.min.css";
import { View, Image ,Text} from 'react-native';
//import { color } from "@mui/system";
function Center() {
    return(
        <div>
        <div className="products"  style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>
            <h1> PRODUCTS </h1>
        </div>
        <div className ="fusion-sep-clear" ><hr style={{height:'1px',lineHeight:'0',width:'15%',color:'red'}}></hr></div>
        
        <div className="fusion-text"><p style={{textAlign: 'center',fontSize: '20px',fontWeight:'700'}}>When it comes to Quality and Value, THB affords a balanced equation like no other.</p>
<p style={{textAlign: 'center',fontSize: '20px',fontWeight:'700'}}>Simply because we believe that lasting quality at an affordable price is essential to our customers.</p>
</div>
            

            <View style={{ flexDirection: 'row',paddingLeft:'180px'}}>
            <Image
                style={{ width: 300, height: 300,paddingLeft:'120px'}}
                source={require('./images/solid.png')}
                
            />
            
            <Image
                style={{ width: 250, height:300 ,marginHorizontal:'80px'}}
                source={require('./images/hollow.png') }
            />
            <Image
                style={{ width: 250, height: 300,paddingLeft:'180px' }}
                source={require('./images/pipe1.png')}
            />
            </View>
            <View style={{ flexDirection: 'row',display:'flex' }}>
                    <Button variant="contained" href="www.google.com" color="grey" className="button" appearance="default" style={{marginLeft:"250px"}}>SOLID BLOCKS</Button> 
                        <Button variant="contained"href="www.google.com" color="grey" className="button" appearance="default" style={{marginLeft:"230px"}}>HOLLOW BLOCKS</Button>
                    <Button variant="contained"href="www.google.com" color="grey" className="button" appearance="default" style={{marginLeft:"230px"}}>
                        NP2 NP3 PIPES
                    </Button> 
            </View>

<div>
 <h1> </h1>
</div>
<br>
</br>
<br>
</br>
<div style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }} >
 <h1  className="strength"> OUR PRODUCT'S STRENGTH</h1>
</div>
            <View style={{ flexDirection: 'row',justifyContent:'left'}}>
            <Image   
                style={{width: 250, height: 300,marginLeft:'100px'}}
                source={require('./images/time1.jpg')}/>
            {/* <Text style={{marginLeft:'20px'}}> ZERO MAINTENANCE</Text> */}
            <Image  
                 style={{width:300 ,height: 300 ,marginLeft:'300px'}}
                 source={require('./images/time.jpg')}/>
            {/* <Text style={{marginLeft:'20px'}}> TIMELY DELIVERY</Text> */}
            </View>
            
            <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:'200px',fontWeight:'800',fontSize:'30px'}}>
                    ZERO MAINTENANCE
                </Text>
                
                <Text style={{marginLeft:'300px',fontWeight:'800',fontSize:'30px'}}>
                    TIMELY DELIVERY
                </Text>
                </View>
                <br>
                </br>
            <View style={{ flexDirection: 'row',justifyContent:'left'}}>
            <Image  
                 style={{width:250 ,height: 300 ,marginLeft:'380px'}}
                 source={require('./images/time2.jpg')}/>

            <Image      
                 style={{width:250 ,height: 300 ,marginLeft:'300px'}}
                 source={require('./images/time3.jpg')} />
        
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:'400px',fontWeight:'800',fontSize:'30px'}}>
                    TIMELESS BEAUTY
                </Text>
                
                <Text style={{marginLeft:'350px',fontWeight:'800',fontSize:'30px'}}>
                    ENERGY SAVING
                </Text>
            </View>
            
            
</div>
    );
    
}


export default Center;