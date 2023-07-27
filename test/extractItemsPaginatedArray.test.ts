import { extractItemsPaginateArray } from '../src/extractItemsPaginateArray';

const data = {
  pages: [
    {
      items: [
        {
          code: 'ABC',
          name: 'CARINHA LOGO ALI',
          createdAt: '2021-09-29T15:16:34.643Z',
          updatedAt: '2021-09-29T15:21:11.547Z',
        },
        {
          code: 'CDE',
          name: 'SUCO DE FRUTA',
          createdAt: '2021-09-29T15:11:11.470Z',
          updatedAt: '2021-09-30T07:31:44.043Z',
        },
      ],
      meta: {
        page: 1,
        limit: 2,
        pages: 81,
        total: 810,
      },
    },
    {
      items: [
        {
          code: '893',
          name: 'GABRIEL BECHELENI',
          createdAt: '2018-05-25T12:33:09.040Z',
          updatedAt: '2018-05-25T12:33:52.483Z',
        },
        {
          code: '134',
          name: 'OUTRO GABRIEL',
          createdAt: '2022-01-05T19:33:00.443Z',
          updatedAt: '2022-06-06T10:44:46.897Z',
        },
      ],
      meta: {
        page: 2,
        limit: 2,
        pages: 81,
        total: 810,
      },
    },
  ],
  pageParams: [null, 2],
};

const allValues = [
  {
    code: 'ABC',
    name: 'CARINHA LOGO ALI',
    createdAt: '2021-09-29T15:16:34.643Z',
    updatedAt: '2021-09-29T15:21:11.547Z',
  },
  {
    code: 'CDE',
    name: 'SUCO DE FRUTA',
    createdAt: '2021-09-29T15:11:11.470Z',
    updatedAt: '2021-09-30T07:31:44.043Z',
  },
  {
    code: '893',
    name: 'GABRIEL BECHELENI',
    createdAt: '2018-05-25T12:33:09.040Z',
    updatedAt: '2018-05-25T12:33:52.483Z',
  },
  {
    code: '134',
    name: 'OUTRO GABRIEL',
    createdAt: '2022-01-05T19:33:00.443Z',
    updatedAt: '2022-06-06T10:44:46.897Z',
  },
];

describe('extractItemsPaginateArray', () => {
  it('should return an array of PageItems', () => {
    expect(extractItemsPaginateArray(data)).toEqual(allValues);
  });
});
