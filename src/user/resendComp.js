import React from 'react'
import axios from 'axios'
import Otp from './otpcomponent'

class Resen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            otp: '',
            min: '',
            sec: ''
        }

        this.handleClick = this.handleClick.bind(this)
    }

   

    handleClick() {


            console.log(" from resend component ",this.props.otp)
            var body = {
                name: "Sumanth K V",
                phone: 9380607653,
                otp: this.props.otp
                
            }

            this.setState({
                otp: this.props.otp
            })

            axios({
                method: "POST",
                url: `http://localhost:8000/api/user/checkforvalidate`,
                body,
                headers: {
                    "contentType":"application/json"
                }

            }).then((resp)=> {
                console.log(resp.data)
            })

    }

    render() {
        return (
            <div>
            
            {/* <Otp></Otp> */}
            <button style={{
                padding: "0px 20px",
                borderRadius: "5px",
                backgroundColor: "#3366ff",
                color: "#fff",
              }} onClick={this.handleClick}>Resend OTP</button>
              

            </div>
            
        )
    }
}

export default Resen