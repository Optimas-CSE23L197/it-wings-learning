import paymentApi from "../api/payment.api";

const paymentService = {
  createOrder: (data) => paymentApi.createOrder(data),
  verifyOrder: (data) => paymentApi.verifyOrder(data),
  getPaymentHistory: () => paymentApi.getPaymentHistory(),
};

export default paymentService;
