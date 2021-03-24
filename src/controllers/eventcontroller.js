const { Events } = require("../../models");

exports.getEvents = async (req, res) => {
  try {
    const event = await Events.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      messages: "Success",
      data: {
        event,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
    });
  }
};

exports.postEvents = async (req, res) => {
  try {
    const addevent = await Events.create({
      title: req.body.title,
      location: req.body.location,
      participant: req.body.participant,
      date: req.body.date,
      note: req.body.note,
      image: req.files.image[0].filename,
    });

    console.log(req.files);

    const newevent = await Events.findOne({
      where: { id: addevent.id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      message: "Event successfully added",
      data: {
        newevent,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Server Error",
      
    });
  }
};
