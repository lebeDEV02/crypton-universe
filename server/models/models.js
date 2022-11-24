const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	username: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Comic = sequelize.define('comic', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	circulation: { type: DataTypes.INTEGER, allowNull: false },
	season: { type: DataTypes.INTEGER, allowNull: false },
	title: { type: DataTypes.STRING, allowNull: false },
	release_year: { type: DataTypes.INTEGER, allowNull: false },
	img: { type: DataTypes.STRING, allowNull: false },
});

const Genre = sequelize.define('genre', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Publisher = sequelize.define('publisher', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	foundation_year: { type: DataTypes.INTEGER, allowNull: false },
	city: { type: DataTypes.STRING, allowNull: false },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const PublisherCountry = sequelize.define('publisher_country', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	country: { type: DataTypes.STRING, allowNull: false },
});

const ComicCard = sequelize.define('comic_card', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	price: { type: DataTypes.INTEGER, allowNull: false },
	title: { type: DataTypes.STRING, allowNull: false },
	img: { type: DataTypes.STRING, allowNull: false },
});

const TypeOfComicCard = sequelize.define('type_of_comic_card', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	rarity: { type: DataTypes.STRING, unique: true, allowNull: false },
});

Comic.hasOne(Publisher);
Publisher.belongsTo(Comic);

Comic.hasOne(Genre);
Genre.belongsTo(Comic);

Publisher.hasOne(PublisherCountry);
PublisherCountry.belongsTo(Publisher);

Comic.hasMany(ComicCard);
ComicCard.belongsTo(Comic);

ComicCard.hasOne(TypeOfComicCard);
TypeOfComicCard.belongsTo(ComicCard);

module.exports = { User, Comic, Genre, Publisher, PublisherCountry, ComicCard, TypeOfComicCard };
