import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Component/Home';
import ListMovie from './Component/ListMovie';
import NavMovie from './Component/NavMovie';
import Profil from './Component/Profil';

function App() {
  const [movies,setMovies]=useState([
    {title : 'Dachra', description :'Yasmine, étudiante en journalisme, et ses deux amis Walid et Bilel qui cherchent à élucider le mystère d’un vieux crime, commis il y a plus de 25 ans. Au milieu de nulle part, une femme avait été trouvée mutilée et presque morte. Une fois leur investigation terminée, ils vont se trouver dans une forêt où ils allaient découvrir un petit village isolé appelé “Dachra”. Coincé dans ce territoire inconnu, le trio va essayer de fuir l’horreur. Auront-ils réussi à s’échapper ?',posterURL:'https://pictures.artify.tn/media/r9p6ux7liv6q4pxabgwi.jpg?width=200',rating : 5,annonce: "https://www.youtube.com/embed/oUfAx52qf54", id : Math.random()},
    {title : 'Rebelote', description :'C’est l’histoire de trois tunisiens que rien ne les relie dans la vie quotidienne à part le fait qu’ils sont accros à la drague via Facebook. Un jour ils tombent dans le piège d’une femme qui leur donne rendez-vous dans un endroit retiré et les braque avec l’aide d’un gang. Et c’est là qu’un phénomène surnaturel se produit et nos trois personnages se retrouvent sans le savoir projetés dans le passé…',posterURL:'https://pictures.artify.tn/media/ezxhsrwyexyglmoitxlh.jpg?width=200',rating : 3,annonce: "https://www.youtube.com/embed/kxl_bq7xX_U",  id : Math.random()},
    {title : 'Noce d’été', description :'Hamid est journaliste, la trentaine passée et il vit son célibat avec sa famille petite bourgeoise comme un échappatoire pour ne pas ressembler aux siens. Sa famille veut le marier à tout prix avec sa voisine Rym (30 ans) pour mettre fin à ses hésitations, et aux mauvaises langues qui n’épargnent pas les célibataires endurcis. N’osant s’opposer à la décision de mariage de sa famille, Hamid préfère fuir l’atmosphère des préparatifs…',posterURL:'https://pictures.artify.tn/media/zhkfzolegpiij9rzf3ui.jpg?width=200',rating : 5,annonce: "https://www.youtube.com/embed/hLCtiV_SF80", id : Math.random()},
    {title : 'A Peine J’ouvre Les Yeux', description :'Tunis, été 2010, quelques mois avant la Révolution, Farah 18 ans passe son bac et sa famille l’imagine déjà médecin… mais elle ne voit pas les choses de la même manière. Elle chante au sein d¹un groupe de rock engagé. Elle vibre, s’enivre, découvre l’amour et sa ville de nuit contre la volonté d’Hayet, sa mère, qui connaît la Tunisie et ses interdits.',posterURL:'https://pictures.artify.tn/media/r07wsehw43shedjuick2.jpg?width=200',rating : 2,annonce: "https://www.youtube.com/embed/oWX2o9-MZbc", id : Math.random()},
    {title : 'Regarde-moi', description :"Lotfi, la quarantaine, immigré tunisien en France, mène une vie pépère à Marseille. Son quotidien est partagé entre sa boutique d’électroménager et sa copine française Sophie. Son passé le rattrape lorsque son frère l’appelle de Tunisie pour l’informer que sa femme Sarra vient d’être hospitalisée des suites d’un AVC. Lotfi se voit obligé de revenir au pays pour réclamer la garde de son fils autiste Youssef, 9 ans, à sa tante maternelle Khedija. La cohabitation avec cet enfant qu’il n’a pas vu depuis 6 ans et la découverte de ses troubles vont pousser Lotfi à renouer avec son instinct paternel et à créer un lien avec son fils. ",posterURL:'https://pictures.artify.tn/media/fjagsqnc57kslterxbc1.jpg?width=200%27',rating : 4 ,annonce :"https://www.youtube.com/embed/OY-Yy0GWFLE", id: Math.random()},
  ])
  const [search,setSearch]=useState("")
  const [rate,setRate]=useState(0)
  
  return (
    <div>
      <NavMovie  movies={movies} setMovies={setMovies}  setSearch={setSearch} setRate={setRate} search={search} rate={rate}/>/
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        
       
        <Route path='/listMovie' element={<ListMovie movies={movies} search={search} rate={rate} setMovies={setMovies}/>} />
        <Route path='/profil/:id'element={<Profil movies={movies}/>}/>

      </Routes>
      
      
     
      
    </div>
  );
}

export default App;

