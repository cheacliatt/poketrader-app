module.exports = function (sequelize, DataTypes) {
  const UserCard = sequelize.define("UserCard", {
    card_id: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    card_img: DataTypes.STRING,
  });
  // update to ES6



  // UserCard.associate = function (models) {
  //   UserCard.belongsTo(models.User);
  // };


  return UserCard;
};