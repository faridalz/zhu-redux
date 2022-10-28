import React, {useState } from 'react';
import {Link} from "react-router-dom";
import Rectangle18 from '../images/Rectangle 18.png';
import zhu12 from '../images/83103491_202388367480184_1284322106362841989_n 1.png';
import Vector from '../images/Vector.png';
import Vector2 from '../images/Vector2.png';
import Vector3 from '../images/Vector3.png';
import Vector4 from '../images/Vector4.png';
import { useForm } from "react-hook-form";
import 'alertifyjs/build/css/alertify.css';
import alertify from 'alertifyjs';





const Home = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit1 = async (data) => {
        data.name.length > 0 && alertify.warning(data.name + ' - Thank you for subscription');
    };


        return (
            <div>
                <div className="d-none d-md-block d-xl-block" id="mainImage"><img id="zhu1" src={Rectangle18} alt="zhu1" /></div>
                <div className="d-block d-sm-none d-sm-block d-md-none" id="mainImageMobile"><img id="zhu12" src={zhu12} alt="zhu12" /></div>
                <form onSubmit={handleSubmit(onSubmit1)}>
                    <input
                    {...register("name", { required: true })} 
                    aria-invalid={errors.name ? "true" : "false"} placeholder="Name" id='name' />

                    <input {...register("email", { required: true })} 
                    aria-invalid={errors.email ? "true" : "false"} placeholder="Email" id='email' />

                    <input {...register("country", { required: true })} 
                    aria-invalid={errors.country ? "true" : "false"} placeholder="Country" id='country' />
                    
                    <button type="submit" id='sub'>SUBSCRIBE</button>
                </form>
                
                <p id="subs1" className="d-block d-sm-none d-sm-block d-md-none">SUBSCRIBE TO OUR<br />MAILING LIST</p>


                <button className=" d-block d-sm-none d-sm-block d-md-none" id="subMobile">SUBSCRIBE</button>


                <div className="d-none d-md-block d-xl-block" id="stream"></div>
                <p className="d-none d-md-block d-xl-block" id="stream2" >STREAM ZHU’S MUSIC</p>
                <p className="d-none d-md-block d-xl-block" id="stream3">Stay Connected & Follow Zhu on all digital platforms </p>
                <Link className="logosHome logosHome1 d-none d-md-block d-xl-block" to="#">
                    <img src={Vector} alt="vector" />
                </Link>
                <Link className="logosHome logosHome2 d-none d-md-block d-xl-block" to="#">
                    <img src={Vector2} alt="vector2" />
                </Link>
                <Link className="logosHome logosHome3 d-none d-md-block d-xl-block" to="#">
                    <img src={Vector3} alt="vector3" />
                </Link>
                <Link className="logosHome logosHome4 d-none d-md-block d-xl-block" to="#">
                    <img src={Vector4} alt="vector4" />
                </Link>
            </div>
        )
}


export default Home;
