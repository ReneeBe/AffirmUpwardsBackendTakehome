import express from 'express';
import { MerchantConfiguration } from '../../db/index.js';

const router = express.Router();

/* GET Set Merchant Config */
router.get('/', (req, res, next) => {
  res.send('Set Merchant Config');
});

/* POST Set Merchant Config */
router.post('/', async (req, res, next) => {
  const { data } = req.body;
  const merchant = await MerchantConfiguration.findByPk(data.merchant_id);
  if (!merchant) {
    res.status(400).send('Merchant not found!');
  } else {
    const updated = await merchant.update(data);
    res.status(200).send(updated);
  }
});

export default router;
