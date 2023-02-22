const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://img.freepik.com/premium-photo/close-up-face-beautiful-cassowary-bird-have-vivid-blue-color-beak-look-like-smile_43561-10.jpg?w=2000"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://pbs.twimg.com/media/De7_fWFU0AAuI0E.jpg"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://media.licdn.com/dms/image/C5608AQFpHv17JvyYFw/croft-frontend-shrinkToFit1024/0/1520458317143?e=2147483647&v=beta&t=Y9dRr6p0aTCfdRamI0E6mVqFEJulomZm8ttY0EOjZUM"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
