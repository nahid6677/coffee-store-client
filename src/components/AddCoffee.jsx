import React from 'react';

const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name =  form.name.value;
        const quantity =  form.quantity.value;
        const supplier =  form.supplier.value;
        const teste =  form.teste.value;
        const catagory =  form.catagory.value;
        const details =  form.details.value;
        const photo =  form.photo.value;
        const newCoffee = {name,quantity, supplier,teste,catagory,details,photo}
        console.log(newCoffee)
    }
    return (
        <div>
            <h2 className='text-5xl font-bold text-cyan-500 '>Add Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                <div className="mt-4 mx-auto w-[600px] flex flex-col gap-4">
                    <div className="flex gap-3 justify-center">
                        <input
                            name='name'
                            type="text"
                            placeholder="Coffee Name"
                            className="input input-bordered input-primary w-full max-w-xs" />
                        <input
                            type="text"
                            name='quantity'
                            placeholder="Enter Quantity"
                            className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div className="flex gap-3 justify-center">
                        <input
                            type="text"
                            
                            name='supplier'
                            placeholder="Enter Coffee Supplier "
                            className="input input-bordered input-primary w-full max-w-xs" />
                        <input
                            type="text"
                            name='teste'
                            placeholder="Enter Coffee Taste"
                            className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div className="flex gap-3 justify-center">
                        <input
                            type="text"
                            name='catagory'
                            placeholder="Coffee Coffee Catagory"
                            className="input input-bordered input-primary w-full max-w-xs" />
                        <input
                            type="text"
                            name='details'
                            placeholder="Enter Coffee Details"
                            className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <input
                        type="text"
                        name='photo'
                        placeholder="Enter Photo URL"
                        className="input input-bordered input-primary w-full " />
                    <input
                        type="submit"
                        value={"Add Coffee"}
                        className="w-full btn" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;