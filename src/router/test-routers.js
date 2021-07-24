export const mockRouters = [
  {
    id: 1,
    parentId: 0,
    code: 'desk',
    name: '工作台',
    alias: 'menu',
    path: '/desk',
    source: 'iconfont iconicon_airplay',
    sort: 1,
    category: 1,
    action: 0,
    isOpen: 1,
    remark: '',
    isDeleted: 0,
    children: [
      {
        id: 2,
        parentId: 1,
        code: 'notice',
        name: '通知公告',
        alias: 'menu',
        path: '/desk/notice',
        source: 'iconfont iconicon_sms',
        sort: 1,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
    ],
    parentName: '',
    categoryName: '',
    actionName: '',
    isOpenName: '',
    meta: {},
  },
  {
    id: 76,
    parentId: 0,
    code: 'data',
    name: '采购管理',
    alias: 'menu',
    path: '/oksht-data/buyer',
    source: 'iconfont iconicon_work',
    sort: 2,
    category: 1,
    action: 0,
    isOpen: 1,
    remark: '',
    isDeleted: 0,
    children: [
      {
        id: 71,
        parentId: 76,
        code: 'materialInfo',
        name: '数据合作供应商',
        alias: 'menu',
        path: '/oksht-data/materialInfo',
        source: 'iconfont iconicon_compile',
        sort: 1,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 193,
        parentId: 76,
        code: 'stockSafeRange',
        name: '库存安全范围',
        alias: 'menu',
        path: '/oksht-data/stockSafeRange',
        source: 'iconfont icon-caidan',
        sort: 1,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 107,
        parentId: 76,
        code: 'orders',
        name: '订单管理',
        alias: 'menu',
        path: '/oksht-drp',
        source: 'iconfont iconicon_doc',
        sort: 5,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        children: [
          {
            id: 108,
            parentId: 107,
            code: 'purchaseOrder',
            name: '采购订单',
            alias: 'menu',
            path: '/oksht-drp/purchase-order/index',
            source: 'iconfont iconicon_doc',
            sort: 0,
            category: 1,
            action: 0,
            isOpen: 1,
            remark: '',
            isDeleted: 0,
            parentName: '',
            categoryName: '',
            actionName: '',
            isOpenName: '',
            children: [],
          },
          {
            id: 1081,
            parentId: 107,
            code: 'purchaseOrderDetails',
            name: '采购订单详情',
            alias: 'menu',
            path: '/oksht-drp/purchase-order/details',
            source: 'iconfont iconicon_doc',
            sort: 0,
            category: 1,
            action: 0,
            isOpen: 1,
            remark: '',
            isDeleted: 0,
            parentName: '',
            categoryName: '',
            actionName: '',
            isOpenName: '',
            children: [],
          },
          {
            id: 1082,
            parentId: 107,
            code: 'purchaseOrderDetails',
            name: '新增采购订单',
            alias: 'menu',
            path: '/oksht-drp/purchase-order/add',
            source: 'iconfont iconicon_doc',
            sort: 0,
            category: 1,
            action: 0,
            isOpen: 1,
            remark: '',
            isDeleted: 0,
            parentName: '',
            categoryName: '',
            actionName: '',
            isOpenName: '',
            children: [],
          },
          {
            id: 316,
            parentId: 107,
            code: '0569',
            name: '采购申请',
            alias: 'muen',
            path: '/oksht-drp/purchase-apply-for/index',
            source: 'iconfont iconicon_safety',
            sort: 0,
            category: 1,
            action: 0,
            isOpen: 1,
            remark: '',
            isDeleted: 0,
            parentName: '',
            categoryName: '',
            actionName: '',
            isOpenName: '',
            children: [],
          },
          {
            id: 109,
            parentId: 107,
            code: 'stockInOrder',
            name: '采购入库单',
            alias: 'menu',
            path: '/oksht-drp/purchase-warehousing/index',
            source: 'iconfont icon-rizhi',
            sort: 1,
            category: 1,
            action: 0,
            isOpen: 1,
            remark: '',
            isDeleted: 0,
            parentName: '',
            categoryName: '',
            actionName: '',
            isOpenName: '',
            children: [],
          },
          {
            id: 321,
            parentId: 107,
            code: 'purchase-retreat',
            name: '采购退货',
            alias: 'purchase-retreat',
            path: '/oksht-drp/purchase-return-goods/index',
            source: 'iconfont iconicon_compile',
            sort: 3,
            category: 1,
            action: 0,
            isOpen: 1,
            remark: '',
            isDeleted: 0,
            parentName: '',
            categoryName: '',
            actionName: '',
            isOpenName: '',
            children: [],
          },
          {
            id: 325,
            parentId: 107,
            code: '0599',
            name: '采购退货出库',
            alias: 'muen',
            path: '/oksht-drp/purchase-r-g-out-stock/index',
            source: 'iconfont iconicon_safety',
            sort: 4,
            category: 1,
            action: 0,
            isOpen: 1,
            remark: '',
            isDeleted: 0,
            parentName: '',
            categoryName: '',
            actionName: '',
            isOpenName: '',
            children: [],
          },
          {
            id: 401,
            parentId: 107,
            code: 'purchase-outbound',
            name: '其他入库',
            alias: 'purchase-outbound',
            path: '/oksht-drp/purchase-outbound/index',
            source: 'iconfont iconicon_compile',
            sort: 7,
            category: 1,
            action: 0,
            isOpen: 1,
            remark: '',
            isDeleted: 0,
            parentName: '',
            categoryName: '',
            actionName: '',
            isOpenName: '',
            children: [],
          },
        ],
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        meta: {},
      },
      {
        id: 152,
        parentId: 76,
        code: 'buyerQuoteRecord',
        name: '报价记录',
        alias: 'menu',
        path: '/oksht-data/buyerQuoteRecord',
        source: 'iconfont icon-navicon',
        sort: 5,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 280,
        parentId: 76,
        code: 'reportInventoryAnalysis',
        name: '库存分析',
        alias: 'menu',
        path: '/oksht-data/reportInventoryAnalysis',
        source: 'iconfont iconicon_glass',
        sort: 5,
        category: 1,
        action: 2,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 157,
        parentId: 76,
        code: 'buyerQuoteReply',
        name: '报价回复记录',
        alias: 'menu',
        path: '/oksht-data/buyerQuoteReply',
        source: 'iconfont icon-biaodan',
        sort: 6,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 215,
        parentId: 76,
        code: 'customsReminder',
        name: '报关提醒',
        alias: 'menu',
        path: '/oksht-data/customsReminder',
        source: 'iconfont iconicon_glass',
        sort: 7,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: 'customsReminder',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
    ],
    parentName: '',
    categoryName: '',
    actionName: '',
    isOpenName: '',
    meta: {},
  },
  // {
  //   "id": 94,
  //   "parentId": 0,
  //   "code": "sale",
  //   "name": "销售管理",
  //   "alias": "menu",
  //   "path": "/oksht-data/saler",
  //   "source": "iconfont iconicon_task",
  //   "sort": 3,
  //   "category": 1,
  //   "action": 0,
  //   "isOpen": 1,
  //   "remark": "",
  //   "isDeleted": 0,
  //   "children": [
  //     {
  //       "id": 92,
  //       "parentId": 94,
  //       "code": "stockQuote",
  //       "name": "库存报价",
  //       "alias": "menu",
  //       "path": "/oksht-data/stockQuote",
  //       "source": "iconfont iconicon_coinpurse_line",
  //       "sort": 0,
  //       "category": 1,
  //       "action": 0,
  //       "isOpen": 1,
  //       "remark": "",
  //       "isDeleted": 0,
  //       "parentName": "",
  //       "categoryName": "",
  //       "actionName": "",
  //       "isOpenName": "",
  //       "children": []
  //     },
  //     {
  //       "id": 91,
  //       "parentId": 94,
  //       "code": "customerInquiries",
  //       "name": "客户询价信息",
  //       "alias": "menu",
  //       "path": "/oksht-data/customerInquiries",
  //       "source": "iconfont iconicon_qq",
  //       "sort": 1,
  //       "category": 1,
  //       "action": 0,
  //       "isOpen": 1,
  //       "remark": "",
  //       "isDeleted": 0,
  //       "parentName": "",
  //       "categoryName": "",
  //       "actionName": "",
  //       "isOpenName": "",
  //       "children": []
  //     },
  //     {
  //       "id": 104,
  //       "parentId": 94,
  //       "code": "3",
  //       "name": "线索管理",
  //       "alias": "menu",
  //       "path": "/oksht-data/clue",
  //       "source": "iconfont iconicon_savememo",
  //       "sort": 3,
  //       "category": 1,
  //       "action": 0,
  //       "isOpen": 1,
  //       "remark": "",
  //       "isDeleted": 0,
  //       "parentName": "",
  //       "categoryName": "",
  //       "actionName": "",
  //       "isOpenName": "",
  //       "children": []
  //     },
  //     {
  //       "id": 114,
  //       "parentId": 94,
  //       "code": "orders",
  //       "name": "订单管理1",
  //       "alias": "menu",
  //       "path": "/oksht-drp",
  //       "source": "iconfont iconicon_doc",
  //       "sort": 4,
  //       "category": 1,
  //       "action": 0,
  //       "isOpen": 1,
  //       "remark": "",
  //       "isDeleted": 0,
  //       "children": [
  //         {
  //           "id": 115,
  //           "parentId": 114,
  //           "code": "salesOrder",
  //           "name": "销售订单",
  //           "alias": "menu",
  //           "path": "/oksht-drp/sales-order/index",
  //           "source": "iconfont iconicon_dispose",
  //           "sort": 0,
  //           "category": 1,
  //           "action": 0,
  //           "isOpen": 1,
  //           "remark": "",
  //           "isDeleted": 0,
  //           "parentName": "",
  //           "categoryName": "",
  //           "actionName": "",
  //           "isOpenName": "",
  //           "children": []
  //         },
  //         {
  //           "id": 116,
  //           "parentId": 114,
  //           "code": "outStockOrder",
  //           "name": "销售出库单",
  //           "alias": "menu",
  //           "path": "/oksht-drp/sales-inventory-out/index",
  //           "source": "iconfont iconicon_send",
  //           "sort": 1,
  //           "category": 1,
  //           "action": 0,
  //           "isOpen": 1,
  //           "remark": "",
  //           "isDeleted": 0,
  //           "parentName": "",
  //           "categoryName": "",
  //           "actionName": "",
  //           "isOpenName": "",
  //           "children": []
  //         },
  //         {
  //           "id": 117,
  //           "parentId": 114,
  //           "code": "inqueryOrder",
  //           "name": "报价单",
  //           "alias": "menu",
  //           "path": "/test",
  //           "source": "iconfont iconicon_compile",
  //           "sort": 2,
  //           "category": 1,
  //           "action": 0,
  //           "isOpen": 1,
  //           "remark": "",
  //           "isDeleted": 0,
  //           "parentName": "",
  //           "categoryName": "",
  //           "actionName": "",
  //           "isOpenName": "",
  //           "children": []
  //         },
  //         {
  //           "id": 320,
  //           "parentId": 114,
  //           "code": "retreat",
  //           "name": "销售退货",
  //           "alias": "retreat",
  //           "path": "/oksht-drp/sales-retreat/index",
  //           "source": "iconfont iconicon_compile",
  //           "sort": 5,
  //           "category": 1,
  //           "action": 0,
  //           "isOpen": 1,
  //           "remark": "",
  //           "isDeleted": 0,
  //           "parentName": "",
  //           "categoryName": "",
  //           "actionName": "",
  //           "isOpenName": "",
  //           "children": []
  //         },
  //         {
  //           "id": 324,
  //           "parentId": 114,
  //           "code": "sales-lock",
  //           "name": "货品锁定查询",
  //           "alias": "sales-lock",
  //           "path": "/oksht-drp/sales-lock/index",
  //           "source": "iconfont iconicon_compile",
  //           "sort": 5,
  //           "category": 1,
  //           "action": 0,
  //           "isOpen": 1,
  //           "remark": "",
  //           "isDeleted": 0,
  //           "parentName": "",
  //           "categoryName": "",
  //           "actionName": "",
  //           "isOpenName": "",
  //           "children": []
  //         },
  //         {
  //           "id": 322,
  //           "parentId": 114,
  //           "code": "sales-bePutInStorage",
  //           "name": "销售退货入库",
  //           "alias": "sales-bePutInStorage",
  //           "path": "/oksht-drp/sales-bePutInStorage/index",
  //           "source": "iconfont iconicon_compile",
  //           "sort": 6,
  //           "category": 1,
  //           "action": 0,
  //           "isOpen": 1,
  //           "remark": "",
  //           "isDeleted": 0,
  //           "parentName": "",
  //           "categoryName": "",
  //           "actionName": "",
  //           "isOpenName": "",
  //           "children": []
  //         },
  //         {
  //           "id": 400,
  //           "parentId": 114,
  //           "code": "other-outbound",
  //           "name": "其他出库",
  //           "alias": "other-outbound",
  //           "path": "/oksht-drp/other-outbound/index",
  //           "source": "iconfont iconicon_dispose",
  //           "sort": 7,
  //           "category": 1,
  //           "action": 0,
  //           "isOpen": 1,
  //           "remark": "",
  //           "isDeleted": 0,
  //           "parentName": "",
  //           "categoryName": "",
  //           "actionName": "",
  //           "isOpenName": "",
  //           "children": []
  //         }
  //       ],
  //       "parentName": "",
  //       "categoryName": "",
  //       "actionName": "",
  //       "isOpenName": "",
  //       "meta": {}
  //     },
  //     {
  //       "id": 93,
  //       "parentId": 94,
  //       "code": "messageBoard",
  //       "name": "留言板",
  //       "alias": "menu",
  //       "path": "/oksht-data/messageBoard",
  //       "source": "iconfont iconicon_message",
  //       "sort": 10,
  //       "category": 1,
  //       "action": 0,
  //       "isOpen": 1,
  //       "remark": "",
  //       "isDeleted": 0,
  //       "parentName": "",
  //       "categoryName": "",
  //       "actionName": "",
  //       "isOpenName": "",
  //       "children": []
  //     }
  //   ],
  //   "parentName": "",
  //   "categoryName": "",
  //   "actionName": "",
  //   "isOpenName": "",
  //   "meta": {}
  // },
  {
    id: 126,
    parentId: 0,
    code: 'crm',
    name: '客户关系管理',
    alias: 'menu',
    path: '/KHGL',
    source: 'iconfont iconicon_group',
    sort: 8,
    category: 1,
    action: 0,
    isOpen: 1,
    remark: '',
    isDeleted: 0,
    children: [
      {
        id: 286,
        parentId: 126,
        code: 'developCustomer',
        name: '1.客户引入公海',
        alias: 'developCustomer',
        path: '/oksht-crm/developCustomer',
        source: 'iconfont iconicon_shakehands',
        sort: 0,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 301,
        parentId: 126,
        code: 'followUpRecord',
        name: '2.客户跟进记录查询',
        alias: 'followUpRecord',
        path: '/oksht-crm/followUpRecord',
        source: 'iconfont iconicon_principal',
        sort: 1,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 305,
        parentId: 126,
        code: 'lockCustomer',
        name: '3.客户认领',
        alias: 'lockCustomer',
        path: '/oksht-crm/lockCustomer',
        source: 'iconfont iconicon_affiliations_li',
        sort: 2,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 288,
        parentId: 126,
        code: 'officialCustomer',
        name: '4.正式客户管理',
        alias: 'officialCustomer',
        path: '/oksht-crm/officialCustomer',
        source: 'iconfont iconicon_principal',
        sort: 3,
        category: 1,
        action: 1,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 295,
        parentId: 126,
        code: '230',
        name: '5.客户认领审批',
        alias: 'claimApproval',
        path: '/oksht-crm/claimApproval',
        source: 'iconfont iconicon_principal',
        sort: 4,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 300,
        parentId: 126,
        code: '258',
        name: '6.客户交易条款审批',
        alias: 'dealClause-audit',
        path: '/oksht-crm/dealClause-audit/index',
        source: 'iconfont iconicon_principal',
        sort: 5,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 294,
        parentId: 126,
        code: '259',
        name: '7.客户更名审批',
        alias: 'muen',
        path: '/oksht-crm/company-name-edit/index',
        source: 'iconfont iconicon_safety',
        sort: 6,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 289,
        parentId: 126,
        code: '056',
        name: '8.客户合并管理',
        alias: '066',
        path: '/clint-merge-manage',
        source: 'iconfont iconicon_safety',
        sort: 7,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '测1',
        isDeleted: 0,
        children: [
          {
            id: 293,
            parentId: 289,
            code: '0577',
            name: '客户合并申请',
            alias: 'muen',
            path: '/oksht-crm/clint-merge-manage/apply',
            source: 'iconfont iconicon_safety',
            sort: 0,
            category: 1,
            action: 0,
            isOpen: 1,
            remark: '',
            isDeleted: 0,
            parentName: '',
            categoryName: '',
            actionName: '',
            isOpenName: '',
            children: [],
          },
          {
            id: 457,
            parentId: 289,
            code: '2',
            name: '客户合并审核',
            alias: 'review',
            path: '/oksht-crm/clint-merge-manage/review',
            source: 'iconfont iconicon_safety',
            sort: 0,
            category: 1,
            action: 0,
            isOpen: 1,
            remark: '',
            isDeleted: 0,
            parentName: '',
            categoryName: '',
            actionName: '',
            isOpenName: '',
            children: [],
          },
        ],
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        meta: {},
      },
      {
        id: 297,
        parentId: 126,
        code: '069',
        name: '9.关联客户管理',
        alias: 'muen',
        path: '/related-customer-manage',
        source: 'iconfont iconicon_task_done',
        sort: 8,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        children: [
          {
            id: 298,
            parentId: 297,
            code: '0696',
            name: '关联客户申请',
            alias: 'muen',
            path: '/oksht-crm/related-customer-manage/apply',
            source: 'iconfont iconicon_task_done',
            sort: 0,
            category: 1,
            action: 0,
            isOpen: 1,
            remark: '',
            isDeleted: 0,
            parentName: '',
            categoryName: '',
            actionName: '',
            isOpenName: '',
            children: [],
          },
          {
            id: 299,
            parentId: 297,
            code: '0966',
            name: '关联客户审批',
            alias: 'muen',
            path: '/oksht-crm/related-customer-manage/review',
            source: 'iconfont iconicon_task_done',
            sort: 1,
            category: 1,
            action: 0,
            isOpen: 1,
            remark: '',
            isDeleted: 0,
            parentName: '',
            categoryName: '',
            actionName: '',
            isOpenName: '',
            children: [],
          },
        ],
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        meta: {},
      },
      {
        id: 291,
        parentId: 126,
        code: '058',
        name: '10.业务员客户数限制',
        alias: 'muen',
        path: '/oksht-crm/customer-limit-setting/index',
        source: 'iconfont iconicon_safety',
        sort: 9,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 290,
        parentId: 126,
        code: '057',
        name: '11.客户回收时间配置',
        alias: 'muen',
        path: '/oksht-crm/customer-time-config/index',
        source: 'iconfont iconicon_task_done',
        sort: 10,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 302,
        parentId: 126,
        code: 'customerManagement',
        name: '客戶管理',
        alias: 'customerManagement',
        path: '/oksht-crm/customerManagement',
        source: 'iconfont iconicon_principal',
        sort: 12,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        children: [
          {
            id: 304,
            parentId: 302,
            code: 'EnterpriseuserManagement',
            name: '企业用户管理',
            alias: 'EnterpriseuserManagement',
            path: '/oksht-crm/customerManagement/EnterpriseuserManagement',
            source: 'iconfont iconicon_principal',
            sort: 1,
            category: 1,
            action: 0,
            isOpen: 1,
            remark: '',
            isDeleted: 0,
            parentName: '',
            categoryName: '',
            actionName: '',
            isOpenName: '',
            children: [],
          },
          {
            id: 303,
            parentId: 302,
            code: 'userManagement',
            name: '个人用户管理',
            alias: 'userManagement',
            path: '/oksht-crm/customerManagement/userManagement',
            source: 'iconfont iconicon_principal',
            sort: 2,
            category: 1,
            action: 0,
            isOpen: 1,
            remark: '',
            isDeleted: 0,
            parentName: '',
            categoryName: '',
            actionName: '',
            isOpenName: '',
            children: [],
          },
        ],
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        meta: {},
      },
    ],
    parentName: '',
    categoryName: '',
    actionName: '',
    isOpenName: '',
    meta: {},
  },
  {
    id: 270,
    parentId: 0,
    code: 'menu',
    name: '微信公众号',
    alias: 'wechat',
    path: '/wechat',
    source: 'iconfont icon-weixin1',
    sort: 9,
    category: 1,
    action: 0,
    isOpen: 1,
    remark: '',
    isDeleted: 0,
    children: [
      {
        id: 265,
        parentId: 270,
        code: 'fileuploadrecord',
        name: '文件上传记录',
        alias: 'menu',
        path: '/wechat/fileuploadrecord',
        source: 'iconfont iconicon_compile',
        sort: 9,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
    ],
    parentName: '',
    categoryName: '',
    actionName: '',
    isOpenName: '',
    meta: {},
  },
  {
    id: 3,
    parentId: 0,
    code: 'system',
    name: '系统管理',
    alias: 'menu',
    path: '/system',
    source: 'iconfont iconicon_setting',
    sort: 11,
    category: 1,
    action: 0,
    isOpen: 1,
    remark: '',
    isDeleted: 0,
    children: [
      {
        id: 447,
        parentId: 3,
        code: 'tenant',
        name: '组织管理',
        alias: 'menu',
        path: '/system/tenant',
        source: 'iconfont iconicon_subordinate',
        sort: 0,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 452,
        parentId: 3,
        code: '00',
        name: '审核人管理',
        alias: 'auditor',
        path: '/system/auditor',
        source: 'iconfont iconicon_group',
        sort: 0,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 4,
        parentId: 3,
        code: 'user',
        name: '用户管理',
        alias: 'menu',
        path: '/system/user',
        source: 'iconfont iconicon_principal',
        sort: 1,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 5,
        parentId: 3,
        code: 'dept',
        name: '部门管理',
        alias: 'menu',
        path: '/system/dept',
        source: 'iconfont iconicon_group',
        sort: 2,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 6,
        parentId: 3,
        code: 'dict',
        name: '字典管理',
        alias: 'menu',
        path: '/system/dict',
        source: 'iconfont iconicon_addresslist',
        sort: 3,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 7,
        parentId: 3,
        code: 'menu',
        name: '菜单管理',
        alias: 'menu',
        path: '/system/menu/index',
        source: 'iconfont iconicon_subordinate',
        sort: 4,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 8,
        parentId: 3,
        code: 'role',
        name: '角色管理',
        alias: 'menu',
        path: '/system/role',
        source: 'iconfont iconicon_boss',
        sort: 5,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 9,
        parentId: 3,
        code: 'param',
        name: '参数管理',
        alias: 'menu',
        path: '/system/param',
        source: 'iconfont iconicon_community_line',
        sort: 6,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 61,
        parentId: 3,
        code: 'client',
        name: '应用管理',
        alias: 'menu',
        path: '/system/client',
        source: 'iconfont iconicon_mobilephone',
        sort: 8,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 84,
        parentId: 3,
        code: 'device',
        name: '登录设备列表',
        alias: 'menu',
        path: '/system/device',
        source: 'iconfont iconicon_mobilephone',
        sort: 9,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
    ],
    parentName: '',
    categoryName: '',
    actionName: '',
    isOpenName: '',
    meta: {},
  },
  {
    id: 10,
    parentId: 0,
    code: 'monitor',
    name: '系统监控',
    alias: 'menu',
    path: '/monitor',
    source: 'iconfont icon-yanzhengma',
    sort: 12,
    category: 1,
    action: 0,
    isOpen: 1,
    remark: '',
    isDeleted: 0,
    children: [
      {
        id: 11,
        parentId: 10,
        code: 'doc',
        name: '接口文档',
        alias: 'menu',
        path: 'http://localhost/doc.html',
        source: 'iconfont iconicon_study',
        sort: 1,
        category: 1,
        action: 0,
        isOpen: 2,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 12,
        parentId: 10,
        code: 'admin',
        name: '服务治理',
        alias: 'menu',
        path: 'http://localhost:7002',
        source: 'iconfont icon-canshu',
        sort: 2,
        category: 1,
        action: 0,
        isOpen: 2,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 13,
        parentId: 10,
        code: 'log',
        name: '日志管理',
        alias: 'menu',
        path: '/monitor/log',
        source: 'iconfont iconicon_doc',
        sort: 3,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        children: [
          {
            id: 14,
            parentId: 13,
            code: 'log_usual',
            name: '通用日志',
            alias: 'menu',
            path: '/monitor/log/usual',
            source: 'iconfont icon-caidan',
            sort: 1,
            category: 1,
            action: 0,
            isOpen: 1,
            remark: '',
            isDeleted: 0,
            parentName: '',
            categoryName: '',
            actionName: '',
            isOpenName: '',
            children: [],
          },
          {
            id: 15,
            parentId: 13,
            code: 'log_api',
            name: '接口日志',
            alias: 'menu',
            path: '/monitor/log/api',
            source: 'iconfont icon-caidan',
            sort: 2,
            category: 1,
            action: 0,
            isOpen: 1,
            remark: '',
            isDeleted: 0,
            parentName: '',
            categoryName: '',
            actionName: '',
            isOpenName: '',
            children: [],
          },
          {
            id: 16,
            parentId: 13,
            code: 'log_error',
            name: '错误日志',
            alias: 'menu',
            path: '/monitor/log/error',
            source: 'iconfont icon-caidan',
            sort: 3,
            category: 1,
            action: 0,
            isOpen: 1,
            remark: '',
            isDeleted: 0,
            parentName: '',
            categoryName: '',
            actionName: '',
            isOpenName: '',
            children: [],
          },
        ],
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        meta: {},
      },
    ],
    parentName: '',
    categoryName: '',
    actionName: '',
    isOpenName: '',
    meta: {},
  },
  {
    id: 17,
    parentId: 0,
    code: 'tool',
    name: '研发工具',
    alias: 'menu',
    path: '/tool',
    source: 'iconfont icon-wxbgongju',
    sort: 13,
    category: 1,
    action: 0,
    isOpen: 1,
    remark: '',
    isDeleted: 0,
    children: [
      {
        id: 18,
        parentId: 17,
        code: 'code',
        name: '代码生成',
        alias: 'menu',
        path: '/tool/code',
        source: 'iconfont iconicon_savememo',
        sort: 1,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
      {
        id: 66,
        parentId: 17,
        code: 'datasource',
        name: '数据源管理',
        alias: 'menu',
        path: '/tool/datasource',
        source: 'iconfont icon-caidanguanli',
        sort: 2,
        category: 1,
        action: 0,
        isOpen: 1,
        remark: '',
        isDeleted: 0,
        parentName: '',
        categoryName: '',
        actionName: '',
        isOpenName: '',
        children: [],
      },
    ],
    parentName: '',
    categoryName: '',
    actionName: '',
    isOpenName: '',
    meta: {},
  },
];
