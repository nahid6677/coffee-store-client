import React from 'react';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { BiShow } from "react-icons/bi";

const CoffeeCard = ({ coffee }) => {
    const { name, photo, details, catagory, teste, supplier, quantity } = coffee;
    return (
        <div className="card card-side bg-base-300 shadow-xl">
            <figure>
                <img
                    className='w-full h-32'
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="w-full flex justify-between ">
                <div className="flex flex-col ml-2">
                    <h2 className="text-start">Name: {name}</h2>
                    <p className='text-start'>{quantity}</p>
                    <p className='text-start'>{supplier}</p>
                    <p className='text-start'>{teste}</p>
                </div>
                <div className="card-actions justify-end flex flex-col">
                    <button className="btn "><BiShow /></button>
                    <button className="btn "><MdEdit /></button>
                    <button className="btn "><MdDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;