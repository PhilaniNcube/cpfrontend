import axios from 'axios';
import cookie from 'cookie';
import { API_URL } from '../../config/index';

export default async (req, res) => {
  console.log(req.body.amount);

  const response = await axios.post(
    `https://portal.intellimali.co.za/web/payment`,
    {
      username: 'capegadgets',
      password: '9d059e3fb4efe73760d5ecee6909c2d2',
      cardNumber: req.body.cardNumber,
      terminalId: '94DVA001',
      amount: parseInt(req.body.amount),
      redirectSuccess: `http://localhost:3000/account/orders/${req.body.reference}?payment=success`,
      redirectCancel: `http://localhost:3000`,
      reference: req.body.reference,
    },
    {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    },
  );

  const { data } = await response;
  res.send(data);
};
