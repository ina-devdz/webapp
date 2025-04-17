const Card = ({ card }) => {
  return (
    <a href={card?.href} className="border-l w-full">
      <div className="min-w-96 flex justify-center py-3">
        <h3 className="text-2xl">{card?.content}</h3>
        {/* <div className="flex justify-between items-center w-full">
          <img src={card?.avatar} className="h-8 w-8" />
          <p>{card?.name}</p>
        </div> */}
      </div>
    </a>
  );
};

export default Card;
