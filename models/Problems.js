module.exports = (sequelize, DataTypes) => {
    const Problems = sequelize.define("Problems", {
      theme: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      condition: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answer2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      answer3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rate:{
        type: DataTypes.FLOAT,
        allowNull: true
      },
      image1:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      image2:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      image3:{
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    Problems.associate = (models) => {
      Problems.hasMany(models.Comments, {
        onDelete: "cascade",
      })

      Problems.hasMany(models.Rate, {
        onDelete: "cascade",
      })

      Problems.hasMany(models.UsersInfo, {
        onDelete: "cascade",
      })
    }
    return Problems;
  };
  