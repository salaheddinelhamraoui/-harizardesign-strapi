module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ca90b2395f5041bc0494a7b20dbc44d8'),
  },
});
