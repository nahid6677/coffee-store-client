import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee,setCoffee,allCoffee }) => {
    const { name, photo, details, catagory, teste, supplier, quantity, _id } = coffee;

    const handleDelete = id => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        
                        if (data.deletedCount > 0) {
                            setCoffee(allCoffee.filter(coff => coff._id !== _id))
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            
                        }
                    })
            }
        });
    }
    return (
        <div className="card card-side bg-base-300 shadow-xl">
            <figure>
                <img
                    className='w-full rounded-md h-32'
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
                    <button className="btn hover:bg-slate-700"><BiShow /></button>
                    <Link to={`updatecoffee/${_id}`}><button className="btn hover:bg-slate-700"><MdEdit /></button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn hover:bg-slate-700"><MdDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;