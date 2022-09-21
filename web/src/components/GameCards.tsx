interface GameCardsProps {
  imgUrl: string;
  title: string;
  adsCounter: number;
}


export function GameCards(props: GameCardsProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.imgUrl} alt="" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">{props.adsCounter} anúncios</span>
      </div>
    </a>
  )
}