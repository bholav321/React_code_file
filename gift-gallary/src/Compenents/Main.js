import Category from "./CategoryData";
import Data from "./data"

function Main() {
    let data = Data;
    let category = Category;
    return <>
        <div className="container-fluid bg-danger">
            <li className="nav-item dropdown d-flex">
                <a className="nav-link active text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Category
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {category.map((data,index)=> <a className="dropdown-item text-dark" href="#">{data.id}</a>)}
                </div>
            </li>
        </div>
        <div className='container-fluid border'>
            <div className='container-fluid d-flex flex-wrap' id="data-box">
                {data.map((product, index) =>
                    <div className='p-2'>
                        <img src={product.thumbnail} width='390px' height='300px' alt='url' />
                        <h5 className='font-weight-bold text-center'>{product.title}</h5>
                        <h4 className='text-center'><span className='text-danger'>Brand:</span> {product.brand}</h4>
                        <h4 className='text-center'>Price Rs.<span className='font-weight-bold text-danger'><del>{product.price}</del> </span></h4>
                        <h4 className='text-center'>Final Price: <span className='text-success'> {(product.price - ((product.discountPercentage / 100) * product.price)).toFixed(2)}</span></h4>
                    </div>)}
            </div>
        </div>
    </>
}

export default Main;