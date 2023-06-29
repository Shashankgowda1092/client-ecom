import './success.scss';
import { FaCcStripe } from "react-icons/fa";


const Success = () => {
    return (
        <div className="success-header">
             <div className='stripe-icon'><FaCcStripe/></div>
                <div className='payment-message'>PAYMENT HAS BEEN SUCCESSFULLY COMPLETED </div>
            <div className="success-details">
                THANK YOU FOR THE PURCHASE
                <div className="footer">YOU'LL RECEIVE AN INVOICE THROUGH MAIL</div>
            </div>
        </div>
    )
};

export default Success;