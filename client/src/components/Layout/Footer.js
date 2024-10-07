import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegCreditCard } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { GiPlantSeed } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
    return (
        <>
            <div className='footertop'>
                <div>
                    <div className='icon'><FaRegCreditCard size={30}/></div>
                    <h4>SECURE PAYMENT</h4>
                    <p>100% Secure Payment</p>
                </div>
                <div>
                    <div className='icon'><MdLocalShipping size={30}/></div>
                    <h4>FREE SHIPPING</h4>
                    <p>For Orders Above Rs. 599</p>
                </div>
                <div>
                    <div className='icon'><GiPlantSeed size={30}/></div>
                    <h4>ONLINE NURSERY</h4>
                    <p>India's 1 Plants Shop</p>
                </div>
                <div>
                    <h5>SHOW US SOME <FaHeart size={20} /> ON SOCIAL MEDIA</h5>
                    <div> <FaFacebookF size={20}/><FaTwitter size={20}/><FaWhatsapp size={20}/><FaInstagramSquare size={20}/>< TfiYoutube size={20}/></div>
                    
                </div>
            </div>
            <div className='footer d-flex text-dark'>
                <div className='col-md-3 p-2'>
                    <h3>POLICY INFO</h3>
                    <hr />
                    <p><Link className='lnk' to="/policy">Privacy Policy</Link></p>
                    <p><Link className='lnk' to="/policy">Terms & Conditions</Link></p>
                    <p><Link className='lnk' to="/policy">Shipping Policy</Link></p>
                    <p><Link className='lnk' to="/policy">Cancel & Refund Policy</Link></p>
                </div>
                <div className='col-md-2 p-2'>
                    <h3>MY ACCOUNT</h3>
                    <hr />
                    <p><Link className='lnk' to="/cart">Order History</Link></p>
                    <p><Link className='lnk' to="/cart">Wish List</Link></p>
                    <p> <Link className='lnk' to="/about">News Letter</Link></p>
                    <p> <Link className='lnk' to="/login">Login</Link></p>
                </div>
                <div className='col-md-2 p-2'>
                    <h3>NEED HELP ?</h3>
                    <hr />
                    <p><Link className='lnk' to="/contact">Contact Us</Link></p>
                    <p><Link className='lnk' to="/about">Gift Vouchers</Link></p>
                    <p> <Link className='lnk' to="/about">Help</Link></p>
                    <p><Link className='lnk' to="/about">FAQs</Link></p>
                </div>
                <div className='col-md-2 p-2'>
                    <h3>COMPANY INFO</h3>
                    <hr />
                    <p><Link className='lnk' to="/about">About Us</Link></p>
                    <p><Link className='lnk' to="/about">Contact Us</Link></p>
                    <p><Link className='lnk' to="/about">Green Valley</Link></p>
                    <p><Link className='lnk' to="/about">Returns</Link></p>
                </div>
                <div className='col-md-3 p-2'>
                    <h3>OFFICE ADDRESS</h3>
                    <hr />
                    <p>Sector 2, Valley No. 6/B Sakura Road, National Highway Road, Near Research Center,</p>
                    <p> Thane, 400-004, India.</p>
                    <p> Phone:+91-9998887777</p>
                </div>
            </div>
            <div className='footer'>
                <hr />
                <h4 className='text-center'>All Rights Reserved by &copy; sravan 2024</h4>
                <p className="text-center mt-3">
                    <Link to="/about">About</Link>
                    |
                    <Link to="/contact">Contact</Link>
                    |
                    <Link to="/policy">Privacy Policy</Link>
                </p>
            </div>
        </>
    )
}

export default Footer