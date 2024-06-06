import { EntitySchema } from 'typeorm';

export const Search = new EntitySchema({
  name: 'Search',
  tableName: 'searchs',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    enumerationType: {
      type: String,
    },
    name: {
      type: String,
    },
    number: {
      type: String,
      unique: true,
    },
    countryCode: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    taxonomyDesc: {
      type: String,
    },
    nameData: {
      type: 'json',
    },
  },
});
