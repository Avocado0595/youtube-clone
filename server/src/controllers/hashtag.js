const hashtag = (req, res) => {
  const { hashtag } = req.params;

  //case 1: first letter start is number

  const firstLetterIsNumber = Number(hashtag);

  if (firstLetterIsNumber) return res.status(404).json({ msg: "" });
};

export default hashtag;
