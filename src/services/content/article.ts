import request from '@/utils/request';
export type NewsListSearchType = {
  page?: number;
  limit?: number;
}
/**
 * 分页条件查询 文章列表
 * @param param0 
 */
export async function getNewsListData({page, limit}: NewsListSearchType) {
  return request(`/api/news`, {
    method: 'GET',
  });
}
