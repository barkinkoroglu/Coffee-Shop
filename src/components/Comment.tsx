import comma from "../assets/images/comma.svg";

const comments = [
  {
    text: "I absolutely love the cozy ambiance of this cafe! The warm lighting, comfortable seating, and charming decor make it the perfect place to unwind. And the coffee? Simply divine! Every sip of their artisanal brews is a treat for the taste buds. Highly recommended!",
    name: "Sarah Anderson",
  },
  {
    text: "A hidden gem in the city! The atmosphere is both relaxed and refined, and the coffee is consistently excellent. The staff is friendly and attentive, making each visit a pleasure. Highly recommend for a great coffee experience!",
    name: "James Smith",
  },
  {
    text: "Fantastic place with an amazing selection of coffee and pastries. The ambiance is perfect for catching up with friends or enjoying some quiet time. The quality of the coffee is top-notch and the service is exceptional.",
    name: "Emily Johnson",
  },
];

const Comment = () => {
  return (
    <div className="w-full lg:px-32 px-5 py-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
      {comments.map((comment, index) => (
        <div
          key={index}
          className="flex flex-col items-center lg:items-start max-w-[750px]"
        >
          <div className="flex items-center justify-center">
            <img
              src={comma}
              alt="comma"
              className="w-10 h-10 lg:w-16 lg:h-16 text-secondary"
            />
          </div>
          <p className="font-Source text-lg lg:text-xl text-secondary font-light italic text-center lg:text-left">
            "{comment.text}"
          </p>
          <span className="font-Source text-md lg:text-lg text-secondary font-semibold mt-4">
            - {comment.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Comment;
