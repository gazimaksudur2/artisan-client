import Swal from 'sweetalert2'
import { ScrollRestoration, useLoaderData, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const UpdateCraft = () => {
    const navigate = useNavigate();
    const { _id, name, subcategory, rating, stock, customization, brief, price, url } = useLoaderData();
    const { user } = useContext(AuthContext);

    // console.log(location.state);
    const handleSubmit = e => {
        e.preventDefault();
        const targ = e.target;
        const form = new FormData(targ);
        const name_form = form.get('name');
        const subcategory_form = form.get('subcategory');
        const rating_form = form.get('rating');
        const stock_form = form.get('stock') ? form.get('stock') : stock;
        const customization_form = form.get('customization') ? form.get('customization') : customization;
        const price_form = form.get('price');
        const url_form = form.get('url');
        const brief_form = form.get('brief');

        // console.log(name_form, subcategory_form, rating_form, stock_form, customization_form, brief_form, price_form, url_form);

        fetch(`http://localhost:5000/crafts/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ name: name_form, subcategory: subcategory_form, rating: rating_form, stock: stock_form, customization: customization_form, brief: brief_form, price: price_form, url: url_form, provider: user.displayName, provider_email: user.email, user_url: user.photoURL }),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Your Craft Updated successfully!!!",
                        icon: "success"
                    });
                    navigate('/mycrafts')
                } else {
                    Swal.fire({
                        title: "ERROR!!",
                        text: "Craft update Attempt Failed!!!",
                        icon: "error",
                        footer: "Nothing Changed!!!"
                    });
                }
            })
    }

    // console.log(user.photoURL);
    return (
        <div className='bg-orange-100 text-center space-y-3 my-5 p-10 rounded-3xl flex flex-col justify-center items-center'>
            <ScrollRestoration />
            <h1 className='font-rancho font-bold text-4xl text-[#331a15]'>Update Your Craft</h1>
            <p className='text-[#1b1a1aab] w-[60%]'>Ignite your creativity or seeking one-of-a-kind textile treasures to adorn your home, the beauty and versatility of textile arts. Explore our virtual gallery and embark on a journey of inspiration and discovery through the world of textiles.</p>
            <form onSubmit={handleSubmit} className="m-6 p-2 grid grid-cols-2 justify-items-center gap-x-6 gap-y-2 w-[70%]">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Item Name</span>
                    </div>
                    <input name="name" type="text" defaultValue={name} className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">SubCategory</span>
                    </div>
                    {/* <input name="subcategory" type="text" defaultValue={subcategory} className="input input-bordered w-full" /> */}
                    <select name="subcategory" className="select select-bordered w-full">
                        {/* <option disabled selected></option> */}
                        <option selected disabled>{subcategory}</option>
                        {/* <option>Embroidery</option>
                        <option>Knitting</option>
                        <option>Quilting</option>
                        <option>Beadwork</option>
                        <option>Tie-Dyeing</option>
                        <option>Macrame</option> */}
                    </select>
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Rating</span>
                    </div>
                    <input name="rating" type="text" defaultValue={rating} className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Price</span>
                    </div>
                    <input name="price" type="text" defaultValue={price} className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Stock Status</span>
                    </div>
                    <select name="stock" className="select select-bordered w-full">
                        <option disabled selected>{stock}</option>
                        <option>In Stock</option>
                        <option>Made to Order</option>
                    </select>
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Customization</span>
                    </div>
                    <select name="customization" className="select select-bordered w-full">
                        <option disabled selected>{customization}</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>

                </label>
                <label className="col-span-2 form-control w-full">
                    <div className="label">
                        <span className="label-text">Photo</span>
                    </div>
                    <input name="url" type="text" defaultValue={url} className="input input-bordered w-full" />
                </label>
                <label className="col-span-2 w-full">
                    <div className="label">
                        <span className="label-text">Brief Description</span>
                    </div>
                    <textarea name="brief" type="textarea" defaultValue={brief} className="p-2 w-full input input-bordered" rows={10}></textarea>
                </label>
                <input value={'Update Your Craft'} type="submit" className='col-span-2 my-5 min-w-full btn btn-outline border-orange-800 hover:border-orange-600 text-white bg-orange-600 hover:bg-orange-400 border-4' />
            </form>
        </div>
    );
};

export default UpdateCraft;