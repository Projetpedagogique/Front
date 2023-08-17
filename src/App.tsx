import './App.css';
import { Acceuil } from './screens/Acceuil';
import { DetailProduit } from './screens/Detail_produit';
import { InfoEntreprise } from './screens/Info_entreprise';
import { MaxiShopPro } from './screens/Maxi_shop_pro';
import { MaxiShopProMagasin } from './screens/Maxi_shop_pro_magasin';
import { MaxiShopProVente } from './screens/Maxi_shop_pro_vente';
import { PageWelcome } from './screens/Page_de_bienvenue';
import { Personnalisation } from './screens/Personnalisation';
import { PersonnalisationFemme } from './screens/Personnalisation_femme';
import { ResultatRecherche } from './screens/Resultat_recherche';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
      <nav>
        <NavLink to='/'>Acceuil</NavLink><br/>
        <NavLink to='/Detail_produit'>Detail_produit</NavLink><br/>
        <NavLink to='/Info_entreprise'>Info_entreprise</NavLink><br/>
        <NavLink to='/Maxi_shop_pro'>Maxi_shop_pro</NavLink><br/>
        <NavLink to='/Maxi_shop_pro_magasin'>Maxi_shop_pro_magasin</NavLink><br/>
        <NavLink to='/Maxi_shop_pro_vente'>Maxi_shop_pro_vente</NavLink><br/>
        <NavLink to='/Page_de_bienvenue'>Page_de_bienvenue</NavLink><br/>
        <NavLink to='/Personnalisation'>Personnalisation</NavLink><br/>
        <NavLink to='/Personnalisation_femme'>Personnalisation_femme</NavLink><br/>
        <NavLink to='/Resultat_recherche'>Resultat_recherche</NavLink><br/>
      </nav>
      </header>
      

      <Routes>
        <Route path='/' element={<Acceuil/>}/>
        <Route path='/Detail_produit' element={<DetailProduit/>}/>
        <Route path='/Info_entreprise' element={<InfoEntreprise/>}/>
        <Route path='/Maxi_shop_pro' element={<MaxiShopPro/>}/>
        <Route path='/Maxi_shop_pro_magasin' element={<MaxiShopProMagasin/>}/>
        <Route path='/Maxi_shop_pro_vente' element={<MaxiShopProVente/>}/>
        <Route path='/Page_de_bienvenue' element={<PageWelcome/>}/>
        <Route path='/Personnalisation' element={<Personnalisation/>}/>
        <Route path='/Personnalisation_femme' element={<PersonnalisationFemme/>}/>
        <Route path='/Resultat_recherche' element={<ResultatRecherche/>}/>
      </Routes>
    </div>
  );
}

export default App;
