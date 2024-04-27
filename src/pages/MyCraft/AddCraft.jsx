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
        const subcategory = form.get('subcategory');
        const rating = form.get('rating');
        const stock = form.get('stock');
        const customization = form.get('customization');
        const price = form.get('price');
        const url = form.get('url');
        const brief = form.get('brief');

        console.log( name, subcategory, rating, stock, customization, brief, price, url );

        fetch('http://localhost:5500/crafts', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ name, subcategory, rating, stock, customization, brief, price, url }),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Craft Added successfully!!!",
                        icon: "success"
                    });
                }
                // targ.reset(); something changed
            })
    }
    return (
        <div className='bg-orange-100 text-center space-y-3 my-5 p-10 rounded-3xl flex flex-col justify-center items-center'>
            <ScrollRestoration/>
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
                    <input name="subcategory" type="text" placeholder="Enter Craft SubCategory" className="input input-bordered w-full" />
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
                    <input name="stock" type="text" placeholder="Enter Craft Stock Status" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Customization</span>
                    </div>
                    <input name="customization" type="select" placeholder="Enter Craft Customization" className="input input-bordered w-full" />
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
                    <textarea  name="brief" type="textarea" placeholder="Enter Brief Description" className="p-2 w-full input input-bordered" rows={10}></textarea>
                </label>
                <input value={'Add Craft'} type="submit" className='col-span-2 my-5 min-w-full btn btn-outline border-orange-800 hover:border-orange-600 text-white bg-orange-600 hover:bg-orange-400 border-4' />
            </form>
        </div>
    );
};

export default AddCraft;