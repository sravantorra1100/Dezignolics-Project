import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import axios from 'axios'
import { Checkbox, Radio } from 'antd'
import { Prices } from '../components/Prices'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/cart'
import toast from 'react-hot-toast'
import { AiOutlineReload } from 'react-icons/ai';
import '../styles/HomePageStyles.css';

const Homepage = () => {

  const navigate = useNavigate()
  const [cart, setCart] = useCart()
  {/*
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [checked, setChecked] = useState([])
  const [radio, setRadio] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  //get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get('/api/v1/category/get-category')
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllCategory();
    getTotal()
  }, [])

  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false)
      setProducts(data.products);
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  //getTotal count
  const getTotal = async () => {
    try {
      const { data } = await axios.get('/api/v1/product/product-count')
      setTotal(data?.total)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page])

  //load more
  const loadMore = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`)
      setLoading(false)
      setProducts([...products, ...data?.products])
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }


  //filter by category
  const handleFilter = (value, id) => {
    let all = [...checked]
    if (value) {
      all.push(id)
    } else {
      all = all.filter((c) => c !== id)
    }
    setChecked(all);
  }

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length])
  useEffect(() => {
    if (checked.length || radio.length) filterProduct()
  }, [checked, radio]);

  //get filtered product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post('/api/v1/product/product-filter', { checked, radio })
      setProducts(data?.products)
    } catch (error) {
      console.log(error)
    }
  }
*/}

  //...............................teacher edited
  //new arrival

  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])

  useEffect(() => {
    getProductsByCat();
  }, [])
  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/product-category/new-arrivals`)
      setProducts(data?.products)
      setCategory(data?.category)
    } catch (error) {
      console.log(error)
    }
  }

  //Best Selling Products
  const [productsa, setProductsa] = useState([])
  const [categorya, setCategorya] = useState([])

  useEffect(() => {
    getProductsByCata();
  }, [])
  const getProductsByCata = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/product-category/best-selling-products`)
      setProductsa(data?.products)
      setCategorya(data?.category)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Layout title={'Best Plants'}>
      <div className='midcont d-flex' >
        {/* <img src="/images/banner.png" className='banner-img' alt="errLoading" width={"100%"} height={"400px"} /> */}
        <div id="carouselExampleIndicators" className="carousel slide carouselcss col-md-8 " data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>

          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/bannerll.jpeg" className="d-block w-100 carouselcss" alt="errorLoading" />
            </div>
            <div className="carousel-item">
              <img src="/images/bannerl.jpeg" className="d-block w-100 carouselcss" alt="errorLoading" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className='col-md-2'>
          <img src="/images/sbanner1.jpg" id="bannerlittle1" onClick={() => navigate(`/category/indoor-plants`)} className='banner-img mb-2' alt="errLoading"  width={"360px"} height={"202px"} />
          <img src="/images/sbanner2.jpg"  id="bannerlittle2" onClick={() => navigate(`/category/bonsai-plants`)} className='banner-img mt-2' alt="errLoading"  width={"360px"} height={"202px"} />
        </div>
      </div>
      <div className='midcont'>
        <div className='divheading'>
          <h6>NEW ARRIVALS</h6>
        </div>
        <div className="d-flex flex-wrap divimg " >
          {products?.map((p) => (
            <div className="card m-1" style={{ width: "181px" }} key={p._id}>
              <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} style={{ width: "100%", height: "180px" }} />
              <div className="card-body">
                <p className="cart-texts" style={{ height: "65px" }}>{p.name}</p>
                {/* <p className="card-text">{p.description.substring(0, 30)}...</p>*/}
                <h6 className="card-text priceborder"> $ {p.price}</h6>
                <div className='btn btn-primary  btnt' onClick={() => navigate(`/product/${p.slug}`)}>More Details</div>
                <div className='btn btn-secondary btnt'
                onClick={() => {
                  setCart([...cart, p]);
                  localStorage.setItem('cart', JSON.stringify([...cart, p]))
                  toast.success('item added to cart')
                }}>Add to Cart</div>
              </div>
            </div>
          ))}
        </div>
        <div className='midbanner'>
          <img src="/images/midbanner1.jpg" onClick={() => navigate(`/category/indoor-plants`)} className='col-md-6 ' alt="errLoading" width={"95%"} height={"300px"} />
          <img src="/images/midbanner2.png" onClick={() => navigate(`/category/bonsai-plants`)}  className='col-md-6 midbannerimp' alt="errLoading" width={"95%"} height={"300px"} />
        </div>
        <div className='divheading'>
          <h6>BEST SELLING PRODUCTS</h6>
        </div>
        <div className="d-flex flex-wrap divimg " >
          {productsa?.map((p) => (
            <div className="card m-1" style={{ width: "181px" }} key={p._id}>
              <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} style={{ width: "100%", height: "180px" }} />
              <div className="card-body">
                <p className="cart-texts" style={{ height: "65px" }}>{p.name}</p>
                {/* <p className="card-text">{p.description.substring(0, 30)}...</p>*/}
                <h6 className="card-text priceborder"> $ {p.price}</h6>
                <div className='btn btn-primary  btnt' onClick={() => navigate(`/product/${p.slug}`)}>More Details</div>
                <div className='btn btn-secondary btnt'
                onClick={() => {
                  setCart([...cart, p]);
                  localStorage.setItem('cart', JSON.stringify([...cart, p]))
                  toast.success('item added to cart')
                }}>Add to Cart</div>
              </div>
            </div>
          ))}
        </div>
        <div className='divheading '>
          <h6>BUY PLANTS BY CATEGORY</h6>
        </div>
        <div className='categ'>
          <div className='cateborder'  onClick={() => navigate(`/category/indoor-plants`)} >
          <img src="/images/cbanner1.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Indoor Plants</p>
          </div>
          <div className='cateborder' onClick={() => navigate(`/category/medicinal-plants`)}>
            <img src="/images/cbanner2.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Medicinal Plants</p>
          </div>
          <div className='cateborder' onClick={() => navigate(`/category/cactus-and-succulents`)}>
            <img src="/images/cbanner3.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Cactus & Succulents</p>
          </div>
          <div className='cateborder' onClick={() => navigate(`/category/vaastu-and-religious`)}>
            <img src="/images/cbanner4.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Vaastu & Religious</p>
          </div>
          <div className='cateborder'  onClick={() => navigate(`/category/fruit-plants`)}>
            <img src="/images/cbanner5.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Fruit Plants</p>
          </div>
          <div className='cateborder'  onClick={() => navigate(`/category/bonsai-plants`)}>
            <img src="/images/cbanner6.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Bonsai Plants</p>
          </div>
        </div>
        <div className='divheading '>
          <h6>SEEDS & BULBS</h6>
        </div>
        <div className='categ'>
          <div className='cateborder'>
          <img src="/images/seedsbanner1.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Vegetable Seeds</p>
          </div>
          <div className='cateborder'>
            <img src="/images/seedsbanner2.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Flower Seeds</p>
          </div>
          <div className='cateborder'>
            <img src="/images/seedsbanner3.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Herbs Seeds</p>
          </div>
          <div className='cateborder'>
            <img src="/images/seedsbanner4.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Flower Bulbs</p>
          </div>
          <div className='cateborder'>
            <img src="/images/seedsbanner5.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Forestry Seeds</p>
          </div>
          <div className='cateborder'>
            <img src="/images/seedsbanner6.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Medicinal Seeds</p>
          </div>
        </div>
        <div className='midbanner' style={{ marginTop: "30px",marginBottom:"20px" }}>
          <img src="/images/lastbanner1.jpg"  onClick={() => navigate(`/category/indoor-plants`)} className='col-md-6 ' alt="errLoading" width={"95%"} height={"300px"} />
          <img src="/images/lastbanner2.jpg"  onClick={() => navigate(`/category/bonsai-plants`)} style={{ paddingRight: "0px" }} className='col-md-6 midbannerimp' alt="errLoading" width={"95%"} height={"300px"} />
        </div>
        <div className='divheading '>
          <h6>POTS & PLANTERS</h6>
        </div>
        <div className='categ'>
          <div className='cateborder'>
          <img src="/images/potbanner1.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Ceramic Pots</p>
          </div>
          <div className='cateborder'>
            <img src="/images/potbanner2.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Self Watering Pots</p>
          </div>
          <div className='cateborder'>
            <img src="/images/potbanner3.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>All Plastic Pots</p>
          </div>
          <div className='cateborder'>
            <img src="/images/potbanner4.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Germination Trays</p>
          </div>
          <div className='cateborder'>
            <img src="/images/potbanner5.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Grill/Railing Pots</p>
          </div>
          <div className='cateborder'>
            <img src="/images/potbanner6.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Round Pots</p>
          </div>
        </div>
        <div className='divheading '>
          <h6>GARDEN DECORS</h6>
        </div>
        <div className='categ'>
          <div className='cateborder'>
          <img src="/images/gardenbanner1.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Bird Houses</p>
          </div>
          <div className='cateborder'>
            <img src="/images/gardenbanner2.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Fairy Garden</p>
          </div>
          <div className='cateborder'>
            <img src="/images/gardenbanner3.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Garden Fountains</p>
          </div>
          <div className='cateborder'>
            <img src="/images/gardenbanner4.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Garden Tools</p>
          </div>
          <div className='cateborder'>
            <img src="/images/gardenbanner5.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Pebbles</p>
          </div>
          <div className='cateborder'>
            <img src="/images/gardenbanner6.jpg" className='' alt="errLoading" width={"180px"} height={"180px"} />
          <p>Pot Stands</p>
          </div>
        </div>
        
       



      </div>



      {/*<div className="container-fluid row mt-3 home-page">
        <div className="col-md-8 ">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" key={p._id}>
                <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                <div className="card-body">
                  <div className='card-name-price'>
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description.substring(0, 30)}...</p>
                    <p className="card-name-price"> $ {p.price}</p>
                    <div className='twobtns'>
                      <button className='btn btn-primary btn-lightblue ms-1' onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                      <button className='btn btn-dark ms-1'
                        onClick={() => {
                          setCart([...cart, p]);
                          localStorage.setItem('cart', JSON.stringify([...cart, p]))
                          toast.success('item added to cart')
                        }}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='m-2 p-3'>
            {products && products.length < total && (
              <button className='btn loadmore' onClick={(e) => {
                e.preventDefault(); setPage(page + 1);
              }}>
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div>
        </div>

        <div className="col-md-4 filters filters-m">
          <h4 className='text-center'>Filter by Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <div key={c._id} className="checkbox">
                <Checkbox onChange={(e) => handleFilter(e.target.checked, c._id)}>
                  {c.name}
                </Checkbox>
              </div>
            ))}
          </div>
          <h4 className='text-center mt-4'>Filter by Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={e => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id} className="radio">
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button className='btn btn-danger' onClick={() => window.location.reload()}>RESET FILTERS</button>
          </div>
        </div>
      </div>*/}

    </Layout>
  )
}

export default Homepage
