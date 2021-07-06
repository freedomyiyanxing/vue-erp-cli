import request from '@/util/http';

export const unlock = dtos => {
    return request({
        url: '/api/oksht-inventory/lockDetail/unlock',
        method: 'post',
        data: dtos
    })
}
