const router = require('express').Router();
let Inquiry = require('../Models/model');

router.route('/add').post((req,res) => {
  const firstName = req.body.firstName;
  const email = req.body.email;
  const type = req.body.type;
  const description = req.body.description;

  const NewInquiry = new Inquiry({
    firstName,
    email,
    type,
    description,
  });

  NewInquiry.save()
    .then(()=> res.json('Inquiry added'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;
