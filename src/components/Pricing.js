import React, { Fragment, useContext } from 'react'
import {FcCheckmark} from 'react-icons/fc'
import {Container} from './Head'
import { useState } from 'react'
import '../Styles/Pricing.css'

function Pricing() {
    const {toggle} = useContext(Container)
    const [toggleBasic, setToggleBasic] = useState(true)
    const [toggleStandard, setToggleStandard] = useState(true)
    const [togglePremium, setTogglePremium] = useState(true)

    const [basicCost, setBasicCost] = useState('7.99')
    const [StandardCost, setStandardCost] = useState('12.99')
    const [PremiumCost, setPremimumCost] = useState('18.99')
  return (
    <Fragment>
        <div className={toggle ?'background-Color-Main' : 'background-Color-secondary'}>
            <div className='Pricing-container'>
                <div className={toggle ?'Pricing-option1': 'light-theme1'}>
                    <h2>BASIC</h2>
                    <div className='Price'>
                        <h3>{basicCost}$</h3><h4 id='MonthlyYearly'>{toggleBasic ? '/Monthly' : '/Yearly'}</h4>
                    </div>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>Unlimited films and tv programmes</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>Watch on mobile phones and tablets</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>cancel at anytime</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>first month completely free</span>
                    <button id='button1'>Buy Now</button>
                    <div id='darktheme'>
                    <div classname='Pricing-yearly-darktheme' onClick={() => {
                        setToggleBasic(!toggleBasic)
                        if(toggleBasic){
                            setBasicCost("60")
                        }else{
                            setBasicCost('7.99')
                        }
                    }}>
                        <div classname={toggleBasic ? 'Pricing-yearly-darktheme' : 'Pricing-monthly-light'}></div>

                        
                        </div>
                    </div>
                </div>
                <div className={toggle ?'Pricing-option2': 'light-theme2'}>
                    <h2>Standard</h2>
                    <div className='Price'>
                        <h3>{StandardCost}$</h3><h4 id='MonthlyYearly'>{toggleStandard ? '/Monthly' : '/Yearly'}</h4>
                    </div>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>Unlimited films and tv programmes</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>Watch on mobile phones and tablets</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>cancel at anytime</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>first month completely free</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>HD available</span>
                    <button id='button2'>Buy Now</button>
                    <div id='darktheme'>
                    <div classname='Pricing-yearly-darktheme' onClick={() => {
                        setToggleStandard(!toggleStandard)
                        if(toggleStandard){
                            setStandardCost("120")
                        }else{
                            setStandardCost('12.99')
                        }
                    }}>
                        <div classname={toggleStandard ? 'Pricing-yearly-darktheme' : 'Pricing-monthly-light'}></div>

                        
                        </div>
                    </div>
                </div>
                <div className={toggle ?'Pricing-option3': 'light-theme3'}>
                    <h2>Premium</h2>
                    <div className='Price'>
                        <h3>{PremiumCost}$</h3><h4 id='MonthlyYearly'>{togglePremium ? '/Monthly' : '/Yearly'}</h4>
                    </div>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>Unlimited films and tv programmes</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>Watch on mobile phones and tablets</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>cancel at anytime</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>first month completely free</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>HD available</span>
                    <span><FcCheckmark fontSize={25} id="checkmark"/>ultra HD available</span>
                    <button id='button3'>Buy Now</button>
                    <div id='darktheme'>
                    <div classname='Pricing-yearly-darktheme' onClick={() => {
                        setTogglePremium(!togglePremium)
                        if(togglePremium){
                            setPremimumCost("180")
                        }else{
                            setPremimumCost('18.99')
                        }
                    }}>
                        <div classname={togglePremium ? 'Pricing-yearly-darktheme' : 'Pricing-monthly-light'}></div>

                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </Fragment>
  )
}

export default Pricing
