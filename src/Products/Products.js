import{AiFillStar} from 'react-icons/ai';
import "./Product.css";
function Products(){
  return(<>
  <section className="card-container">
    <section className="card">
    img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
      <img src="" alt="shoe"/>
      <div className="card-details">
        <h3 className="card-title">shoe</h3>
        <section className="card-reviews">
          <AiFillStar/>
        </section>
      </div>
      </section></section></>
  );
}


export default Products;