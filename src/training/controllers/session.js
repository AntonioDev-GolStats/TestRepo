'use strict'

const getSession = (request, response) => {
	return response.status(200).send({message: 'working'})
}

const postSession = (request, response) => {
	return response.status(200).send({message: 'working'})
}

const updateSession = (request, response) => {
	return response.status(200).send({message: 'working'})
}

module.exports={
	getSession,
	postSession,
	updateSession,
};