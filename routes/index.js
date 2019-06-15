var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ANGELHACK VIETNAM HACKATHON 2019', teamName: 'Domo team' });
});

const g_scope_code = {
    insite: '001',
    outsite: '002',
};
router.get('/vnpostfree', function(req, res, next) {
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

module.exports = router;
