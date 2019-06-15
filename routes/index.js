/*
* Author: Dobo team
* Date: 15/6/2019
* */

var express = require('express');
var router = express.Router();
var g_vietnam_locality = require('../data/vietnam_locality.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ANGELHACK VIETNAM HACKATHON 2019', teamName: 'Dobo team' });
});

const g_scope_code = {
    insite: '001',
    outsite: '002',
};
const g_dimension_code = {
    weigh: '001',
    size: '002',
};
router.post('/vnpostFree', function(req, res, next) {
    var result = {
        'price1': '50.000 VNĐ_1.5 - 2 ngày',
        'price2': '110.000 VNĐ',
        'price3': '35.200 VNĐ'
    };

  var body = req.body,
      // scope_code = body.scope_code,
      add_from = body.from,
      add_to = body.to,
      dimension = body.dimension;
      // long = body.long,
      // weight = body.weight,
      // height = body.height;
    console.log('---------VNpost Free---------');
    console.log('Body: ', body);

    if(add_from == add_to) {
        if(dimension == g_dimension_code.weigh) {
            result = {
                'price1': '23.000 VNĐ',
                'price2': '50.000 VNĐ (Phát trong ngày)',
                'price3': '81.400 VNĐ'
            };
        } else {
            result = {
                'price1': '14.000 VNĐ',
                'price2': '33.000 VNĐ (1.5 - 2 ngày)',
                'price3': '18.500 VNĐ',
                'price4': '120.000 VNĐ',
                'price5': '17.000 VNĐ'
            };
        }
    } else {
        if(dimension == g_dimension_code.weigh) {
            result = {
                'price1': '43.000 VNĐ',
                'price2': '90.000 VNĐ (Phát trong ngày)',
                'price3': '81.400 VNĐ'
            };
        } else {
            result = {
                'price1': '78.900 VNĐ (1.5 - 2 ngày)',
                'price2': '120.000 VNĐ',
                'price3': '36.200 VNĐ'
            };
        }
    }
  res.status(200).send(result);
});


router.get('/vnLocality', function(req, res, next) {
    var response_data = {
        type: "006",
        data: []
    };

    try {
        response_data.data = g_vietnam_locality;
        res.json(response_data);
    } catch(e) {
        response_data.error_message = 'No result!';
        res.json(response_data);
    }
});

module.exports = router;
