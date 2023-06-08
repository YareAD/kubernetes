'use strict';

const { GraphQLError } = require('graphql');
const { connectDB } = require('./db');
const { ObjectId } = require('mongodb');

const db = connectDB();

const Query = {
  getAlumnos: async () => {
    try {
      const alumnos = (await db).collection('alumnos').find().toArray();
      console.log('Consulta de colección alumnos');
      return alumnos;
    } catch (error) {
      console.error(error);
    }
  },
  findAlumno: async (root, { id }) => {
    try {
      const alumno = await (await db).collection('alumnos').findOne({ _id: ObjectId(id) });
      console.log('Consulta de alumno');
      return alumno;
    } catch (error) {
      console.error(error);
    }
  },
};

const Mutation = {
  createAlumno: async (root, args) => {
    try {
      const { data } = args;
      const alumnodb = await (await db).collection('alumnos').insertOne({ ...data });
      console.log('inserta alumno');
      return { _id: alumnodb.insertedId, ...data };
    } catch (error) {
      console.error(error);
    }
  },
  updateAlumno: async (root, args) => {
    try {
      const { id, data } = args;
      const alumnodb = await (await db)
        .collection('alumnos')
        .findOneAndUpdate({ _id: ObjectId(id) }, { $set: { ...data } }, { returnDocument: 'after' });
      return alumnodb.value;
    } catch (error) {
      console.error(error);
    }
  },
  deleteAlumno: async (root, args) => {
    try {
      const { id } = args;
      await (await db).collection('alumnos').deleteOne({ _id: ObjectId(id) });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};

module.exports = { Query, Mutation };
