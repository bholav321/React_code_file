import { Component } from 'react';
import { productList } from './productData';
// import {BrowserRouter,Route} from 'react-router-dom'
class Products extends Component {
    constructor(){
        super();
        this.state={
            ProductList:productList
        }
    }
    delete(index) {
        let data = this.state.ProductList.filter((product,ind)=>ind!==index);
        this.setState({ProductList:data})
    }
 
    render() {
        // let ProductList = productList;
        // console.log(ProductList)
        return <>
            <h1 className='text-center'>Product List </h1>
            {/* <div className='main'> */}
            <table className='table' id='parent'>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Title</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Stock</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.ProductList.map((data, index) =>
                        <tr key={index}>
                            <td>{data.id}  </td>
                            <td>{data.title}  </td>
                            <td>{data.brand}</td>
                            <td> {data.price} </td>
                            <td> <img src={data.thumbnail} width='100px' height='100px' alt='' /> </td>
                            <td>{data.description}  </td>
                            <td>{data.stock}</td>
                            <td><button className='btn bg-primary' onClick={()=>edit(index)}>Edit</button>  </td>
                            <td><button className='btn bg-danger' onClick={()=>this.delete(index)}>Delete</button>  </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className='d-none' id='form'>
                
            <form  className='form-group'>
            <h3 className='text-center'>Product Details</h3>
                <label>Name:</label>
                <input className='form-control' type='text' placeholder='Enter the product name'/> 
                <label>Price:</label>
                <input className='form-control' type='text' placeholder='Enter the product price'/> 
                <label>Stock:</label>
                <input className='form-control' type='text' placeholder='Enter the product quantity'/> 
                <label>Description:</label>
                <input className='form-control' type='text' placeholder='Enter the product description'/><br/>
                <button className='form-control btn btn-primary' type='submit'>Submit</button>
            </form>
            </div>
        {/* </div> */}
        </>
    }
}

function  edit(index) {
    let form = document.getElementById("form")
    form.style.display = 'block'
    console.log(index)
    form.style.top = 'index'
    // this.setState({editIndex:index,editedProduct:{...this.state.ProductList[index]}})
    // console.log(this.state.productList)
    return <>
    <div id='login'>
        console.log('form')
        <h1>form</h1>
    </div>
    </>
}

export default Products;