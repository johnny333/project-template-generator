const express = require('express');
const axios = require('axios');
const _ = require('lodash');
const router = express.Router();

router.get('/npm/:name', (req, res) => {
  const name = req.params.name;
  axios.get(`http://www.npmjs.com/search/suggestions`, {
    params: {
      q: name,
      rows: 20,
      wt: 'json'
    }
  }).then((response) => {
    res.send(_.map(response.data, ({name, version}) => {
      return {name, version}
    }))
  });
});

router.get('/maven/:name', (req, res) => {
  const name = req.params.name;
  axios.get(`http://search.maven.org/solrsearch/select`, {
    params: {
      q: name,
      rows: 20,
      wt: 'json'
    }
  }).then((response) => {
    res.send(_.map(response.data.response.docs, ({id, latestVersion}) => {
      return {name: id, version: latestVersion}
    }))

  });
});
module.exports = router;