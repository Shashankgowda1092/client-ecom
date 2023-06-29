import React from 'react';
import './About.scss'
import headphoneImage from '../../assets/category/Daco_2699476.png';
import speakerImage from '../../assets/category/Daco_5344729.png';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-text">
          <h2>Welcome to E-Zone</h2>
          <p>
            At E-Zone, we are dedicated to providing you with the best audio products to enhance your listening experience. We believe that music has the power to inspire, energize, and uplift, and our mission is to bring you the highest quality headphones, earphones, and Bluetooth speakers.
          </p>
          <p>
            Our curated collection features a wide range of products to cater to every audio need. Whether you're a music enthusiast, a gamer, or a professional seeking top-notch audio equipment, we have you covered. Our team meticulously selects products from renowned brands, ensuring that each item meets our rigorous standards of performance and durability.
          </p>
          <p>
            At E-Zone, customer satisfaction is our top priority. We strive to offer a seamless and secure shopping experience. Our website is designed to be user-friendly, allowing you to easily browse, compare, and purchase your favorite audio products. We also provide reliable shipping services to ensure that your items reach you in a timely manner.
          </p>
          <p>
            If you have any questions or need assistance, our friendly and knowledgeable customer support team is always ready to help. We are passionate about audio and are here to guide you in finding the perfect headphones, earphones, or Bluetooth speakers that suit your needs and preferences.
          </p>
          <p>
            Join our vibrant community of audio enthusiasts by following us on social media. Stay updated on the latest product releases, industry news, and exclusive offers. Sign up for our newsletter to receive regular updates and gain access to special promotions and discounts.
          </p>
          <p>
            Thank you for choosing E-Zone as your audio destination. Get ready to elevate your audio experience and immerse yourself in superior sound quality. Start exploring our collection today!
          </p>
        </div>
        <div className="about-images">
          <img src={headphoneImage} alt="Headphones" />
          <img src={speakerImage} alt="Speakers" />
        </div>
      </div>
    </div>
  );
};

export default About;
