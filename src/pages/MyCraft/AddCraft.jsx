import Swal from 'sweetalert2'
import { ScrollRestoration, useNavigate } from 'react-router-dom';

const AddCraft = () => {
    const navigate = useNavigate();

    const navi = ()=>{
        navigate('/');
    }
    const handleSubmit = e => {
        e.preventDefault();
        const targ = e.target;
        const form = new FormData(targ);
        const name = form.get('name');
        const chef = form.get('chef');
        const supplier = form.get('supplier');
        const taste = form.get('taste');
        const category = form.get('category');
        const price = form.get('price');
        const url = form.get('url');

        console.log( name, chef, supplier, taste, category, price, url );

        // fetch('http://localhost:5500/Craft', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify({ name, chef, supplier, taste, category, price, url }),
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data);
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: "Good job!",
        //                 text: "Craft Added successfully!!!",
        //                 icon: "success"
        //             });
        //         }
        //         targ.reset();
        //     })
    }
    return (
        <div className='bg-orange-100 text-center space-y-3 my-5 py-10 rounded-3xl flex flex-col justify-center items-center'>
            <ScrollRestoration/>
            <h1 className='font-rancho font-bold text-4xl text-[#331a15]'>Add New Craft</h1>
            <p className='text-[#1b1a1aab] w-[60%]'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleSubmit} className="p-2 grid grid-cols-2 justify-items-center gap-x-6 gap-y-2 w-[70%]">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Name</span>
                    </div>
                    <input name="name" type="text" placeholder="Enter Craft Name" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Chef</span>
                    </div>
                    <input name="chef" type="text" placeholder="Enter Craft Chef" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Supplier</span>
                    </div>
                    <input name="supplier" type="text" placeholder="Enter Craft Supplier" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Taste</span>
                    </div>
                    <input name="taste" type="text" placeholder="Enter Craft Taste" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Category</span>
                    </div>
                    <input name="category" type="text" placeholder="Enter Craft Category" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Price</span>
                    </div>
                    <input name="price" type="text" placeholder="Enter Craft price" className="input input-bordered w-full" />
                </label>
                <label className="col-span-2 form-control w-full">
                    <div className="label">
                        <span className="label-text">Photo</span>
                    </div>
                    <input name="url" type="text" placeholder="Enter Photo URL" className="input input-bordered w-full" />
                </label>
                <input onClick={navi} value={'Add Craft'} type="submit" className='col-span-2 my-5 min-w-full btn btn-outline border-orange-800 hover:border-orange-600 text-white bg-orange-600 hover:bg-orange-400 border-4' />
            </form>
        </div>
    );
};

export default AddCraft;