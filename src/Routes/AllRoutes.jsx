import {Routes,Route} from 'react-router-dom'
import Apothecary from '../Components/apothecary'
import Apparel from '../Components/apperal'
import BestSeller from '../Components/bestSeller'
import CeramicWare from '../Components/ceramicWare'
import EverydayArrival from '../Components/everyday'
import GlassWare from '../Components/glassWare'
import Homepage from '../Components/Homepage'
import LightWeight from '../Components/lightweight'
import NewArrival from '../Components/newArrival'
import Summer from '../Components/summer'
import TableWare from '../Components/tableWare'
import Cart from '../Components/cart'
import Signup from '../Components/signup'
import Login from '../Components/login'
import FinalSale from '../Components/finalsale'
import SingleProduct from '../Components/singleProduct'
import Payment from '../Components/payment'
export default function AllRoute(){
    return(
        <>
        <Routes>
            <Route  path="/" element={<Homepage/>}/>
            <Route  path="/apothecary" element={<Apothecary/>}/>
            <Route  path="/apparel" element={<Apparel/>}/>
            <Route  path="/bestseller" element={<BestSeller/>}/>
            <Route  path="/ceramicware" element={<CeramicWare/>}/>
            <Route  path="/everyday" element={<EverydayArrival/>}/>
            <Route  path="/glassware" element={<GlassWare/>}/>
            <Route  path="/lightweight" element={<LightWeight/>}/>
            <Route  path="/newarrival" element={<NewArrival/>}/>
            <Route  path="/summer" element={<Summer/>}/>
            <Route  path="/tableware" element={<TableWare/>}/>
            <Route  path="/cart" element={<Cart/>}/>
            <Route  path="/signup" element={<Signup/>}/>
            <Route  path="/login" element={<Login/>}/>
            <Route  path="/finalsale" element={<FinalSale/>}/>
            <Route  path="/collections/:id" element={<SingleProduct/>}/>
            <Route   path="/payment" element={<Payment/>}/>
        </Routes>
        </>
    )
}