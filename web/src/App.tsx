import { useEffect, useState } from "react";

import axios from "axios";

import { GameCards } from "./components/GameCards";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { CreateAdModal } from "./components/CreateAdModal";

import * as Dialog from "@radix-ui/react-dialog";

import "./styles/main.css";

import logoNlw from "./assets/logo.svg";

interface Game {
  id: string;
  bannerUrl: string;
  title: string;
  _count: {
    ads: number;
  }
}

function App() {


  const [game, setGame] = useState<Game[]>([])

  useEffect(() => {
    axios.get('http://localhost:3000/games')
      .then(res => {
        setGame(res.data);
      })
  }, [])

  return (


    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">


      <img src={logoNlw} alt="" />

      <h1 className="text-[64px] font-black text-white mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {game.map(gamesCards => {
          return (
            <GameCards
              key={gamesCards.id}
              imgUrl={gamesCards.bannerUrl}
              title={gamesCards.title}
              adsCounter={gamesCards._count.ads}
            />
          )
        })}
      </div>
      <Dialog.Root>

        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>

    </div>


  )
}

export default App;
