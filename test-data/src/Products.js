import { Component } from 'react';
import { productList } from './productData';

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
            <table className='table'>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Title</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.ProductList.map((data, index) =>
                        <tr key={index}>
                            <td>{data.id}  </td>
                            {/* <td>{data.id}  </td> */}
                            <td>{data.title}  </td>
                            <td>{data.brand}</td>
                            <td> {data.price} </td>
                            <td> <img src={data.thumbnail} width='100px' height='100px' alt='' /> </td>
                            <td>{data.description}  </td>
                            <td><button className='btn bg-primary'>Edit</button>  </td>
                            <td><button className='btn bg-danger' onClick={()=>this.delete(index)}>Delete</button>  </td>
                        </tr>
                    )}
                </tbody>

            </table>
        </>
    }
}

export default Products;