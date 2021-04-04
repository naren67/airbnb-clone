import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import HomeIcon from '@material-ui/icons/Home';
import StarBorderIcon from '@material-ui/icons/StarBorder';


export default function Home() {
          return (
                    <div className='home'>
                            <Banner/>

                            <div className='home__cardHeader'>
                                    <h2>What guests are saying about homes in India</h2>
                                    <p>Over 710,000 guest reviews with an average of 4.6 out of 5 stars</p>
                            </div>

                            <div className='home__cardList'>
                                   <Card
                                   image='http://placeimg.com/640/360/any'
                                   description='An 8-min walk from the Lajpat Nagar metro an air purifier, air-con, fridge, microwave, TV & fast Wi-Fi. We prefer long-term guests who wish to stay with us for 1 months or more'
                                   profile=''
                                   userName='Issac'
                                   region='United States'
                                   />    

                                    <Card
                                   image='http://placeimg.com/640/360/any'
                                   description='An 8-min walk from the Lajpat Nagar metro an air purifier, air-con, fridge, microwave, TV & fast Wi-Fi. We prefer long-term guests who wish to stay with us for 1 months or more'
                                   profile=''
                                   userName='Issac'
                                   region='United States'
                                   />  

                                    <Card
                                   image='http://placeimg.com/640/360/any'
                                   description='An 8-min walk from the Lajpat Nagar metro an air purifier, air-con, fridge, microwave, TV & fast Wi-Fi. We prefer long-term guests who wish to stay with us for 1 months or more'
                                   profile=''
                                   userName='Issac'
                                   region='United States'
                                   />     
                            </div>

                            <div className='home__ratings'>
                                    
                                    <div className='home__info'>
                                            <ChatBubbleOutlineIcon/>
                                            <h2>24/7 customer support</h2>
                                            <p>Day or night, we’re here for you. Talk to our support team from anywhere in the world, any hour of day.</p>
                                    </div>

                                    <div className='home__info'>
                                            <HomeIcon/>
                                            <h2>Global hosting requirements</h2>
                                            <p>All hosts must meet hosting requirements and maintain a minimum rating to be on Airbnb.</p>
                                    </div>

                                    <div className='home__info'>
                                            <StarBorderIcon/>
                                            <h2>All-star hosts</h2>
                                            <p>From fresh-pressed sheets to tips on where to get the best brunch, our hosts are full of local hospitality.</p>
                                    </div>

                            </div>

                            <div className='home__cardList'>
                                   <Card
                                   image='http://placeimg.com/640/360/any'
                                   description='An 8-min walk from the Lajpat Nagar metro an air purifier, air-con, fridge, microwave, TV & fast Wi-Fi. We prefer long-term guests who wish to stay with us for 1 months or more'
                                   profile=''
                                   userName='Issac'
                                   region='United States'
                                   />    

                                    <Card
                                   image='http://placeimg.com/640/360/any'
                                   description='An 8-min walk from the Lajpat Nagar metro an air purifier, air-con, fridge, microwave, TV & fast Wi-Fi. We prefer long-term guests who wish to stay with us for 1 months or more'
                                   profile=''
                                   userName='Issac'
                                   region='United States'
                                   />  

                                    <Card
                                   image='http://placeimg.com/640/360/any'
                                   description='An 8-min walk from the Lajpat Nagar metro an air purifier, air-con, fridge, microwave, TV & fast Wi-Fi. We prefer long-term guests who wish to stay with us for 1 months or more'
                                   profile=''
                                   userName='Issac'
                                   region='United States'
                                   />    

                                   <Card
                                   image='http://placeimg.com/640/360/any'
                                   description='An 8-min walk from the Lajpat Nagar metro an air purifier, air-con, fridge, microwave, TV & fast Wi-Fi. We prefer long-term guests who wish to stay with us for 1 months or more'
                                   profile=''
                                   userName='Issac'
                                   region='United States'
                                   />  

<Card
                                   image='http://placeimg.com/640/360/any'
                                   description='An 8-min walk from the Lajpat Nagar metro an air purifier, air-con, fridge, microwave, TV & fast Wi-Fi. We prefer long-term guests who wish to stay with us for 1 months or more'
                                   profile=''
                                   userName='Issac'
                                   region='United States'
                                   /> 
                            </div>

                            


                    </div>
          )
}
