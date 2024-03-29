import './Donate.css'

export default function Donate(){

    async function makePayment(){
        console.log("=============================")
        const data = await fetch("http://scholarship-app-final-env.eba-kg3q4f2z.us-east-1.elasticbeanstalk.com/payment?amount=500", {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        const order = await data.json();
        // console.log(order.orderId);
        // console.log(process.env.REACT_APP_razorpay_key)
        const options = {
          key: process.env.REACT_APP_razorpay_key,
          name: "Client_name",
          currency: "INR",
          amount: 50*100, 
          order_id: order.orderId,
          handler: async function (response) {
            console.log(response)
            alert(`Payment successful! Reference ID: ${response.razorpay_payment_id}`);
          },
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    
        paymentObject.on("payment.failed", function (response) {
          console.log(response)
          // alert("Payment failed. Please try again. Contact support for help",response);
        });
      };
    
    
    return (<>
            <div>
                <div className='uppper_body'>
                    <div className='center_'>
                        <div className='center_right'>
                            <h1>Fundraise for
                                a great cause
                            </h1>
                            <p>
                                "Support our mission to keep scholarship information free and accessible for all students. Every contribution, big or small, makes a difference!"
                            </p>
                            <div>
                                <button  onClick={()=>makePayment()}>Donate</button>
                            </div>
                            <div className='donate'>
                                Raised so far<br/>
                                ₹ 50
                            </div>
                        </div>
                        <div className='center_left'>
                        </div>
                    </div>
                </div>
            </div>

        </>);
}