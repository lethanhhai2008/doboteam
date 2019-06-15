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
router.get('/vnpostFree', function(req, res, next) {
  var body = req.body,
      scope_code = body.scope_code,
      add_from = body.from,
      add_to = body.to,
      weight = body.weight,
      size = body.size;

    var result = [
        {
            service_name: 'Bưu phẩm thường',
            fee_guess: '14.000 VNĐ'
        },
        {
            service_name: 'Chuyển phát nhanh EMS',
            fee_guess: '43.700  VNĐ',
            time: 'Từ 1.5 đến 2 ngày',
        },
        {
            service_name: 'Bưu phẩm bảo đảm',
            fee_guess: '18.500  VNĐ',
        },
        {
            service_name: 'Logistics Eco',
            fee_guess: '120.000  VNĐ',
        },
        {
            service_name: 'Bưu kiện trong nước',
            fee_guess: '17.000  VNĐ',
        }
    ];
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
