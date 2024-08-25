import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Icons, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useEffect, useState, useRef, useCallback } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import MainScreen from "./screens/MainScreen";
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import PaymentScreen from "./screens/PaymentScreen";
import ProfileScreen from './screens/ProfileScreen';
import ProfiledisplayScreen from './screens/ProfileDisplayScreen'
import Button from 'react-bootstrap/Button';
import { getError } from './utils';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardScreen from './screens/DashboardScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductCreateScreen from './screens/ProductCreateScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import Footer from './components/Footer';
import VerifyEmail from './screens/VerifyEmail';
import Logo from '../src/assets/Fuel-me/pngs/logo.png'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';


function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    // localStorage.removeItem('cartItems');
    window.location.href = '/signin';
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [userDropdown, setUserDropdown] = useState(false)
  const [adminDropdown, setAdminDropdown] = useState(false)
  const [toggleNav, setToggleNav] = useState(false);
  const [searchBarHidden, setSearchBarHidden] = useState('flex')
  const [searchbarVisibility, setSearchbarVisibility] = useState('hidden')

  const mobileMenuRef = useRef();

  const closeOpenMenus = useCallback(
    (e) => {
      if (
        mobileMenuRef.current &&
        toggleNav &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setToggleNav(false);
      }
    },
    [toggleNav]
  );

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
  }, [closeOpenMenus]);

  const userDropdownfunc = () => {
    setUserDropdown(!userDropdown);
    setAdminDropdown(false)
  }
  const adminDropdownfunc = () => {
    setAdminDropdown(!adminDropdown);
    setUserDropdown(false);
  }
  const searchBarfunc = () => {
    setSearchBarHidden('hidden')
    setSearchbarVisibility('flex')
  }
  const cancelSearchbarfunc = () => {
    setSearchBarHidden('flex');
    setSearchbarVisibility('hidden')
  }

  // const mouseEnter = () => {
  //   setUserDropdown(true)
  // }
  // const mouseLeave = () => {
  //   setUserDropdown(false)
  // }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
        console.log(data)
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  return (
    <BrowserRouter>
      <div className="">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <nav className='border py-4 flex justify-between pl-24 pr-12'>
            <div className='nav-logo border'>
              <Link to={"/"}>
                <div className='fuelme-logo text-black'>
                  <img className='fuelme-logo-main' src= {Logo} alt='fuelme-logo'/>
                </div>
              </Link>
            </div>
            <div className='nav-contents border flex justify-between pt-3 gap-20'>
              <div className= {`border nav-menu gap-4 px-4 ${searchBarHidden}`}>
                <Link to = "/" className='text-black font-medium hover:text-[#1a2eeb] hover:font-bold'>Home Page</Link>
                <Link 
                  to = "/search?category=all&query=all&price=all&rating=all&order=newest&page=1" 
                  className='text-[#1a2eeb] font-bold'>Order Fuel</Link>
                <Link to = "/aboutus" className='text-black font-medium hover:text-[#1a2eeb] hover:font-bold'> About Us</Link>
                <Link to = "/contactus" className='text-black font-medium hover:text-[#1a2eeb] hover:font-bold' id = "contact-nav">Contact</Link>
              </div>
              <div className='border nav-functions flex gap-4 pt-1'>
                <div className={`border ${searchbarVisibility}`}>
                    <SearchBox />
                    <div className='search-cancel'>
                      <button onClick={cancelSearchbarfunc} className='btn'>Cancel</button>
                    </div>
                  </div>
                <div onClick={searchBarfunc} className={`${searchBarHidden} search-bar text-black cursor-pointer` }>
                  <i className="fas fa-search"></i>
                  
                </div>
                <Link to="/cart" className= {`nav-link text-black ${searchBarHidden} mt-1`}>
                    <i className="fas fa-shopping-cart"></i>
                    {cart.cartItems.length > 0 && (
                      <div className='bg-red-600 rounded-full h-4 w-4 mt-1 text-center text-white text-xs'>
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </div>
                    )}
                </Link>
                <div className={`profile text-black ${searchBarHidden}`}>
                  {userInfo ?
                   (
                    <div>
                    <button >
                      <span className="sr-only"></span>
                      <i onClick={userDropdownfunc} className="fas fa-user"></i>
                    </button>
                    {userDropdown ? (
                      <div className="z-50 absolute right-5 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        <div className="px-4 py-3">
                          <span className="block text-sm text-gray-900 dark:text-white">{userInfo.name}</span>
                          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{userInfo.email}</span>
                        </div>
                        <ul className="py-2">
                          <li>
                            <LinkContainer className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  " to="/profile">
                              <NavDropdown.Item>Edit Profile</NavDropdown.Item>
                            </LinkContainer>  
                          </li>
                          <li>
                            <LinkContainer className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  " to="/profiledisplay">
                              <NavDropdown.Item>Display Profile</NavDropdown.Item>
                            </LinkContainer>
                          </li>
                          <li>
                            <LinkContainer className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  " to="/orderhistory">
                              <NavDropdown.Item>Order History</NavDropdown.Item>
                            </LinkContainer>
                          </li>
                          <li>
                            <Link
                              className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100  "
                              to="#signout"
                              onClick={signoutHandler}
                            >
                              Sign Out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ): 
                    <div></div>
                    }
                    
                   </div>) : 
                   (
                    <Link className="nav-link text-black" to="/signin">
                      Sign In
                    </Link>
                  )}
                </div>
                <div className={`admin ${searchBarHidden}`}>
                  {userInfo && userInfo.isAdmin && (
                    <div>
                       <button>
                          <span className="sr-only"></span>
                          <i onClick={adminDropdownfunc} className="fas fa-cog admin-icon">
                          </i>
                        </button>
                        {adminDropdown ? (
                          <div className="absolute right-5 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                            <div className="px-4 py-3">
                              <span className="block text-sm  text-black truncate dark:text-gray-400">Admin</span>
                            </div>
                            <ul className="py-2">
                              <li>
                                <LinkContainer className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  " to="/admin/dashboard">
                                  <NavDropdown.Item>Dashboard</NavDropdown.Item>
                                </LinkContainer>  
                              </li>
                              <li>
                                <LinkContainer className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  " to="/admin/products">
                                  <NavDropdown.Item>Products</NavDropdown.Item>
                                </LinkContainer>
                              </li>
                              <li>
                                <LinkContainer className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  " to="/admin/orders">
                                  <NavDropdown.Item>Orders</NavDropdown.Item>
                                </LinkContainer>
                              </li>
                              <li>
                              <LinkContainer className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  " to="/admin/users">
                                  <NavDropdown.Item>Users</NavDropdown.Item>
                                </LinkContainer>
                              </li>
                            </ul>
                          </div>
                          ): 
                          <div></div>
                          }
                    </div>
                        
                      )}
                    </div>
              </div>
            </div>
          </nav>
        </header>
        
        <main>
          <div className='main-zero'>
            <div className="" id = "">
              <Routes>
                <Route path="/product/:id" element={<ProductScreen />} />
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/search" element={<SearchScreen />} />
                <Route path="/signin" element={<SigninScreen />} />
                <Route path="/signup" element={<SignupScreen />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfileScreen />
                    </ProtectedRoute>
                  }
                />
                <Route path = "/profiledisplay"
                      element = {<ProtectedRoute>
                          <ProfiledisplayScreen />
                          </ProtectedRoute>} />           
                <Route path="/placeorder" element={<PlaceOrderScreen />} />
                <Route
                  path="/order/:id"
                  element={
                    <ProtectedRoute>
                      <OrderScreen />
                    </ProtectedRoute>
                  }
                ></Route>              
                <Route path="/payment/:id" element = {<PaymentScreen />}></Route>
                <Route
                  path="/orderhistory"
                  element={
                    <ProtectedRoute>
                      <OrderHistoryScreen />
                    </ProtectedRoute>
                  }
                ></Route>
                <Route
                  path="/shipping"
                  element={<ShippingAddressScreen />}
                ></Route>
                <Route path="/payment" element={<PaymentMethodScreen />}></Route>
                <Route
                  path="/admin/dashboard"
                  element={
                    <AdminRoute>
                      <DashboardScreen />
                    </AdminRoute>
                  }
                ></Route>
                <Route
                  path="/admin/orders"
                  element={
                    <AdminRoute>
                      <OrderListScreen />
                    </AdminRoute>
                  }
                ></Route>
                <Route
                  path="/admin/users"
                  element={
                    <AdminRoute>
                      <UserListScreen />
                    </AdminRoute>
                  }
                ></Route>
                <Route
                  path="/admin/products"
                  element={
                    <AdminRoute>
                      <ProductListScreen />
                    </AdminRoute>
                  }
                ></Route>
                <Route
                  path="/admin/product/:id"
                  element={
                    <AdminRoute>
                      <ProductEditScreen />
                    </AdminRoute>
                  }
                ></Route>
                <Route
                  path="/productcreatescreen"
                  element={
                    <AdminRoute>
                      <ProductCreateScreen />
                    </AdminRoute>
                  }
                ></Route>             
                <Route
                  path="/admin/user/:id"
                  element={
                    <AdminRoute>
                      <UserEditScreen />
                    </AdminRoute>
                  }
                ></Route>
                <Route path = "/aboutus" element = {<AboutScreen />} ></Route> 
                <Route path = "/contactus" element = {<ContactScreen />} ></Route> 
                <Route path="/products" element={<HomeScreen />} />
                <Route path = '/' element = {<MainScreen />} />
                <Route path = '/verify-email' element = {<VerifyEmail />} />
              </Routes>
            </div>
          </div>
        </main>
        <footer>
            {/* <Footer /> */}
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;