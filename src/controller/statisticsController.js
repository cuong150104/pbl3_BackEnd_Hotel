import statisticService from "../service/statisticService";

const getStatistics = async (req, res) => {
  try {
    const type = req.query?.type || "DAY";
    const data = await statisticService.getStatistics(type);

    res.json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    res.status(500).json({
      EM: "Internal server error",
      EC: "-1",
      DT: "",
    });
  }
};

const getTopBookingRooms = async (req, res) => {
  try {
    const data = await statisticService.getTopBookingRooms();

    res.json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    res.status(500).json({
      EM: "Internal server error",
      EC: "-1",
      DT: "",
    });
  }
};

module.exports = { getStatistics, getTopBookingRooms };