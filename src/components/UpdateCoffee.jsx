import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { name, photo, details, catagory, teste, supplier, quantity, _id } = coffee;
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const teste = form.teste.value;
        const catagory = form.catagory.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, quantity, supplier, teste, catagory, details, photo }
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data, "console Data")
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfull',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div>
            <h2 className='text-5xl font-bold text-cyan-500 '>Update Coffee {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                <div className="mt-4 mx-auto w-[600px] flex flex-col gap-4">
                    <div className="flex gap-3 justify-center">
                        <input
                            name='name'
                            defaultValue={name}
                            type="text"
                            placeholder="Coffee Name"
                            className="input input-bordered input-primary w-full max-w-xs" />
                        <input
                            type="text"
                            defaultValue={quantity}
                            name='quantity'
                            placeholder="Enter Quantity"
                            className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div className="flex gap-3 justify-center">
                        <input
                            type="text"
                            defaultValue={supplier}
                            name='supplier'
                            placeholder="Enter Coffee Supplier "
                            className="input input-bordered input-primary w-full max-w-xs" />
                        <input
                            type="text"
                            defaultValue={teste}
                            name='teste'
                            placeholder="Enter Coffee Taste"
                            className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div className="flex gap-3 justify-center">
                        <input
                            type="text"
                            defaultValue={catagory}
                            name='catagory'
                            placeholder="Coffee Coffee Catagory"
                            className="input input-bordered input-primary w-full max-w-xs" />
                        <input
                            type="text"
                            defaultValue={details}
                            name='details'
                            placeholder="Enter Coffee Details"
                            className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <input
                        type="text"
                        defaultValue={photo}
                        name='photo'
                        placeholder="Enter Photo URL"
                        className="input input-bordered input-primary w-full " />
                    <input
                        type="submit"
                        value={"Update Coffee"}
                        className="w-full btn" />
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;