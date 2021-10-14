module.exports = (sequelize, DataTypes) => {
    const Rate = sequelize.define("Rate",{
        rate:  {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    });
  
    return Rate;
  };
  