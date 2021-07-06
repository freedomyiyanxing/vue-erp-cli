/**
 * 采购退货
 */
import request from '@/util/http';

// 查询采购退货列表
export const getPurchaseReturnStockPage = async (params) => {
  const { data } = await request({
    url: '/api/oksht-drp/purchasereturnorder/list/outDepot',
    method: 'get',
    params,
  });
  return data.data;
}
