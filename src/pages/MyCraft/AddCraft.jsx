import Swal from 'sweetalert2'
import { ScrollRestoration, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AddCraft = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const targ = e.target;
        const form = new FormData(targ);
        const name = form.get('name');
        const subcategory = form.get('subcategory');
        const rating = form.get('rating');
        const stock = form.get('stock');
        const customization = form.get('customization');
        const price = form.get('price');
        const url = form.get('url');
        const brief = form.get('brief');
        const provider = user.displayName;
        const provider_email = user.email;
        const processing_time = new Date();
        const user_url = user.photoURL;

        // console.log(name, subcategory, rating, stock, customization, brief, price, url, user_url);

        fetch('http://localhost:5000/crafts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ name, subcategory, rating, stock, customization, brief, price, url, provider, provider_email, processing_time, user_url }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Your Craft Updated successfully!!!",
                        icon: "success"
                    });
                    navigate('/mycrafts')
                } else {
                    Swal.fire({
                        title: "ERROR!!",
                        text: "Craft Creation Attempt Failed!!!",
                        icon: "error",
                        footer: "Something went wrong!!!"
                    });
                }
            })
    }
    return (
        <div className='bg-orange-100 text-center space-y-3 my-5 p-10 rounded-3xl flex flex-col justify-center items-center'>
            <ScrollRestoration />
            <h1 className='font-rancho font-bold text-4xl text-[#331a15]'>Add New Craft</h1>
            <p className='text-[#1b1a1aab] w-[60%]'>Immerse yourself in the cultural tapestry of our nations artistic heritage at our esteemed art gallery. Explore the depths of our collective imagination, as we showcase the beauty, passion, and innovation that define our nations artistic identity.</p>
            <form onSubmit={handleSubmit} className="m-6 p-2 grid grid-cols-2 justify-items-center gap-x-6 gap-y-2 w-[70%]">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Item Name</span>
                    </div>
                    <input name="name" type="text" placeholder="Enter Craft Name" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">SubCategory</span>
                    </div>
                    {/* <input name="subcategory" type="text" placeholder="Enter Craft SubCategory" className="input input-bordered w-full" /> */}
                    <select name="subcategory" className="select select-bordered w-full">
                        {/* <option disabled selected></option> */}
                        <option>Embroidery</option>
                        <option>Knitting</option>
                        <option>Quilting</option>
                        <option>Beadwork</option>
                        <option>Tie-Dyeing</option>
                        <option>Macrame</option>
                    </select>
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Rating</span>
                    </div>
                    <input name="rating" type="text" placeholder="Enter Craft Rating" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Price</span>
                    </div>
                    <input name="price" type="text" placeholder="Enter Craft Price" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Stock Status</span>
                    </div>
                    <select name="stock" className="select select-bordered w-full">
                        {/* <option disabled selected></option> */}
                        <option>In Stock</option>
                        <option>Made to Order</option>
                    </select>                
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Customization</span>
                    </div>
                    <select name="customization" className="select select-bordered w-full">
                        {/* <option disabled selected></option> */}
                        <option>Yes</option>
                        <option>No</option>
                    </select>

                </label>
                <label className="col-span-2 form-control w-full">
                    <div className="label">
                        <span className="label-text">Photo</span>
                    </div>
                    <input name="url" type="text" placeholder="Enter Photo URL" className="input input-bordered w-full" />
                </label>
                <label className="col-span-2 w-full">
                    <div className="label">
                        <span className="label-text">Brief Description</span>
                    </div>
                    <textarea name="brief" type="textarea" placeholder="Enter Brief Description" className="p-2 w-full input input-bordered" rows={10}></textarea>
                </label>
                <input value={'Add Craft'} type="submit" className='col-span-2 my-5 min-w-full btn btn-outline border-orange-800 hover:border-orange-600 text-white bg-orange-600 hover:bg-orange-400 border-4' />
            </form>
        </div>
    );
};

export default AddCraft;